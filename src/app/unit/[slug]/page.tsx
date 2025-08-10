"use client";

import * as React from 'react'

import UnitDisplay from "@/components/UnitDisplay";
import { IUnitType } from "@/types";
import { getUnitData } from '@/utils/getUnitData';
import { getUnitModes } from '@/utils/getUnitModes';

const getUnitDataBySlug = (slug: string, mode?: string): IUnitType | undefined => {
  const formattedSlug = slug.toLowerCase().replace(/-/g, ' ');
  const formattedMode = mode ? mode.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : undefined;

  return getUnitData(formattedSlug, formattedMode)
};

export default function UnitPage({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams?: Promise<{ [key: string]: string | undefined }> }) {
  const { mode } = searchParams ? React.use(searchParams) : { mode: undefined };
  const { slug } = React.use(params);
  const unitData = getUnitDataBySlug(slug, mode);


  if (!unitData) {
    return (
        <main>
            <div style={{ textAlign: 'center', paddingTop: '5rem', fontSize: '2rem' }}>
                Unit not found
            </div>
        </main>
    );
  }

  const modes = getUnitModes(unitData?.genericName)

  return (
    <main>
      <UnitDisplay unitTypeData={unitData} modes={modes} />
    </main>
  );
}

