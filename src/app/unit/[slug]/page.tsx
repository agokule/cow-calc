"use client";

import * as React from 'react'

import UnitDisplay from "@/components/UnitDisplay";
import { unitDataCategorized } from "@/data/units";
import { IUnitType } from "@/types";

const getUnitDataBySlug = (slug: string): IUnitType | IUnitType[] | undefined => {
  const formattedSlug = slug.toLowerCase().replace(/ /g, '-');
  for (const category in unitDataCategorized) {
    const units = unitDataCategorized[category as keyof typeof unitDataCategorized];
    for (const unit of units) {
      const unitName = Array.isArray(unit) ? unit[0].genericName : unit.genericName;
      if (unitName.toLowerCase().replace(/ /g, '-') === formattedSlug) {
        return unit;
      }
    }
  }
  return undefined;
};

export default function UnitPage({ params }: any) {
  // @ts-ignore: Property 'slug' does not exist on type 'unknown'. [2339]
  const { slug } = React.use(params);
  const unitData = getUnitDataBySlug(slug);

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
