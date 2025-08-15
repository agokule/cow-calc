import { UnitType } from "@/types";
import { getUnitData } from "./getUnitData";

export function getUnitType(genericName: string, mode?: string): UnitType | undefined {
  const data = getUnitData(genericName, mode)
  if (!data)
    return

  if (["Unarmored", "LightArmor", "HeavyArmor"].includes(data.doctrineVariants["Allies"][0].type))
    return UnitType.land

  if (data.doctrineVariants["Allies"][0].type == "Airplane")
    return UnitType.air

  if (["Ship", "Submarine"].includes(data.doctrineVariants["Allies"][0].type))
    return UnitType.water

  if (data.doctrineVariants["Allies"][0].type == "Rocket")
    return UnitType.rocket
}

