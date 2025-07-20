"use client";

import * as React from 'react'

import UnitDisplay from "@/components/UnitDisplay";
import { unitDataCategorized } from "@/data/units";
import { IUnitType } from "@/types";

const getUnitDataBySlug = (slug: string, mode?: string): IUnitType | undefined => {
  const formattedSlug = slug.toLowerCase().replace(/ /g, '-');
  const formattedMode = mode ? mode.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : undefined;

  for (const category in unitDataCategorized) {
    const units = unitDataCategorized[category as keyof typeof unitDataCategorized];
    for (const unit of units) {
      const unitName = unit.genericName;
      const mode = unit.mode

      if (unitName.toLowerCase().replace(/ /g, '-') !== formattedSlug)
        continue
      if (mode !== formattedMode)
        continue

      return unit;
    }
  }
  return undefined;
};

export default function UnitPage({ params, searchParams }: { params: React.Usable<{ slug: string }>, searchParams?: React.Usable<{ [key: string]: string | undefined }> }) {
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

  return (
    <main>
      <UnitDisplay unitTypeData={unitData} />
    </main>
  );
}

