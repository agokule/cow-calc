import { unitDataCategorized } from "@/data/units";

/**
  * Get available modes for a unit
*/
export function getUnitModes(genericName: string): string[] {
  let modes: string[] = []

  for (const category in unitDataCategorized) {
    const units = unitDataCategorized[category as keyof typeof unitDataCategorized];
    for (const unit of units) {

      if (unit.genericName !== genericName)
        continue
      if (!unit.mode)
        continue

      modes.push(unit.mode)
    }
  }

  return modes
}

