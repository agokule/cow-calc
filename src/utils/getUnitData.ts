import { unitDataCategorized } from "@/data/units";

export const getUnitData = (genericName: string, mode?: string) => {
  genericName = genericName.toLowerCase()

  if (mode)
    mode = mode.toLowerCase()

  for (const category in unitDataCategorized) {
    const units = unitDataCategorized[category as keyof typeof unitDataCategorized];
    for (const unit of units) {
      const unitName = unit.genericName.toLowerCase();
      const unitMode = unit.mode

      if (unitName !== genericName)
        continue
      if (unitMode && unitMode.toLowerCase() !== mode)
        continue


      return unit;
    }
  }
  return undefined;
};
