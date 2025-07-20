import { IUnitType, Doctrine } from "@/types";

// Helper to get doctrines that actually have unit variants defined
export const getAvailableDoctrines = (unitType: IUnitType): Doctrine[] => {
  return (Object.keys(unitType.doctrineVariants) as Doctrine[]).filter(
    (d) => unitType.doctrineVariants[d].length > 0
  );
};
