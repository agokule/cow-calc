import { unitDataCategorized } from "@/data/units";

export const getUnitData = (genericName: string, mode?: string) => {
  for (const category in unitDataCategorized) {
    const units = unitDataCategorized[category as keyof typeof unitDataCategorized];
    for (const unit of units) {
      if (Array.isArray(unit)) {
        for (const subUnit of unit) {
          if (subUnit.genericName === genericName && subUnit.mode === mode) {
            return subUnit;
          }
        }
      } else {
        const unitName = unit.genericName;
        if (unitName === genericName) {
          return unit;
        }
      }
    }
  }
  return null;
};
