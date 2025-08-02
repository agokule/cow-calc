import { Doctrine } from "@/types";

export interface Unit {
  category: string;
  genericName: string;
  mode?: string;
  doctrine: Doctrine;
  level: number;
  quantity: number;
}
