// This is the master list of all unit classes.
// We use 'as const' to treat these as literal, readonly values.
export const UNIT_CLASSES = [
  "Unarmored",
  "LightArmor",
  "HeavyArmor",
  "Airplane",
  "Ship",
  "Submarine",
  "Buildings",
  "ProvinceMorale",
  "Rocket"
] as const;

/**
 * A type automatically generated from the UNIT_CLASSES array.
 * This creates the union: 'Unarmored' | 'LightArmor' | 'HeavyArmor' | ...
 */
export type UnitClass = typeof UNIT_CLASSES[number];

/**
 * Represents the four playable doctrines in the game.
 */
export type Doctrine = "Allies" | "Axis" | "Comintern" | "Pan-Asian";

/**
 * Represents the damage modifier a unit has when attacking or defending
 * against a specific type of enemy.
 */
export interface IDamageModifier {
  /** The damage value when this unit is on the OFFENSIVE. */
  attack: number;
  /** The damage value when this unit is on the DEFENSIVE. A null value indicates no specific defensive bonus. */
  defense: number | null;
}

/**
 * A comprehensive list of a unit's combat effectiveness against various enemy types.
 */
export type ICombatStatistics = {
  [K in UnitClass as `vs${K}`]: IDamageModifier;
};

/**
 * Defines the types of resources used for production.
 */
export type ResourceType = "food" | "manpower" | "metal" | "cash" | "oil";

/**
 * Whether the unit is land, water, air, or rocket
 */
export enum UnitType {
  land, water, air, rocket
}

/**
 * Defines the structure for a unit's production costs.
 * It's a record mapping each resource type to its required amount.
 */
export type IProductionCosts = Record<ResourceType, number>;

/**
 * Encapsulates all information related to producing a unit.
 */
export interface IProductionInfo {
  costs: IProductionCosts;
  /** The minimum time in seconds required to produce the unit. */
  minTimeInSeconds: number;
}

/**
 * Represents the performance modifiers a unit receives on a specific type of terrain.
 * Percentage values are stored as decimals (e.g., +50% is 0.5, -50% is -0.5).
 * A null value indicates no effect.
 */
export interface ITerrainModifier {
  /** The base hitpoints of the unit in this terrain. */
  health: number | null;
  /** The attack modifier */
  attackModifier: number | null;
  /** The speed modifier. */
  speedModifier: number | null;
  /** The strength modifier (likely a combat effectiveness bonus). */
  strengthModifier: number | null;
}

/**
 * A comprehensive list of a unit's performance across all terrain types.
 */
export interface ITerrainEffects {
  plains: ITerrainModifier;
  hills: ITerrainModifier;
  mountains: ITerrainModifier;
  forest: ITerrainModifier;
  urban: ITerrainModifier;
  sea: ITerrainModifier;
  enemyTerritory: ITerrainModifier;
}

/**
 * The main interface representing all relevant stats for a single game unit.
 */
export interface IUnitStats {
  unitName: string;
  level: number;
  doctrine: Doctrine;
  type: UnitClass;
  averageDamage: number;
  hitpoints: number;
  production: IProductionInfo;
  specialProperties: string[];
  combatStatistics: ICombatStatistics;
  terrainEffects: ITerrainEffects;
}

export const possibleUnitNames = [
  "Militia",
  "Infantry",
  "Motorized Infantry",
  "Mechanized Infantry",
  "Commandos",
  "Paratroopers",
  "Anti Tank",
  "Artillery",
  "SP Artillery",
  "Anti Air",
  "SP Anti Air",
  "Armored Car",
  "Light Tank",
  "Medium Tank",
  "Heavy Tank",
  "Tank Destroyer",
  "Interceptor",
  "Tactical Bomber",
  "Attack Bomber",
  "Strategic Bomber",
  "Naval Bomber",
  "Destroyer",
  "Submarine",
  "Cruiser",
  "Battleship",
  "Aircraft Carrier",
  "Transport Ship",
  "Rocket Artillery",
  "SP Rocket Artillery",
  "Railroad Gun",
  "Flying Bomb",
  "Rocket",
  "Rocket Fighter",
  "Atomic Bomb",
  "Nuclear Bomber",
  "Nuclear Rocket",
] as const;

/**
 * A type-safe list of all possible generic unit names in the game.
 */
export type UnitName = typeof possibleUnitNames[number];

/**
 * Represents a generic unit type, containing its name and an
 * array of stats for each of its upgrade levels.
 */
export interface IUnitType {
  /** The generic name of the unit, e.g., "Infantry" or "Light Tank". */
  genericName: UnitName;
  /**
   * An object where each key is a Doctrine and the value is an
   * array of unit stats for that doctrine's levels.
   *
   * For example `doctrineVariants.Allies[0]` will get the level 1 variant for this division
   * in the Allies doctrine
   */
  doctrineVariants: Record<Doctrine, IUnitStats[]>;
  /** An optional descriptor for multi-mode units (ie: Paratroopers, they can be in the air and on the ground) */
  mode?: string;
}
