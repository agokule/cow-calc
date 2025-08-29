// This file was used to estimate the statistics of
// doctrines other than Allies. It uses the specific
// unit and overall bonusses described in the wiki
// page below to do this
//
// https://wiki.callofwar.com/wiki/DOCTRINES
import { UnitClass, Doctrine, UnitName, IUnitType, IUnitStats, IDamageModifier, ICombatStatistics, ITerrainEffects, ITerrainModifier } from "@/types";
import { combineStats } from "@/utils/combineStats";
import { getUnitData } from "@/utils/getUnitData";
import { round } from "@/utils/rounding";

/**
 * A comprehensive list of a unit's performance across all terrain types.
 */
interface ITerrainEffects2 {
  all: number;
  plains: number;
  hills: number;
  mountains: number;
  forest: number;
  urban: number;
  sea: number;
  enemyTerritory: number;
}

type UnitClass2 = UnitClass | "All";

/**
 * A comprehensive list of a unit's combat effectiveness against various enemy types.
 */
type ICombatBuffs = {
  [K in UnitClass2 as `vs${K}`]: number;
};

interface Buffs {
  time: number;
  dmg: Partial<ICombatBuffs>;
  hp: number;
  terrain: Partial<ITerrainEffects2>;
  cost: number
}

interface IDoctrineBuffs {
  overall: Partial<Buffs>;
  units: Partial<Record<UnitName, Partial<Buffs>>>
}

type x = Record<Doctrine, IDoctrineBuffs>;

const unitBuffs: x = {
  Allies: {
    overall: {
      time: -30,
    },
    units: {
      ["Mechanized Infantry"]: {
        cost: -10,
        hp: 10
      },
      Commandos: {
        dmg: {
          vsUnarmored: 15
        },
      },
      Paratroopers: {
        cost: -15,
        hp: 10
      },
      ["SP Artillery"]: {
        dmg: {
          vsHeavyArmor: 15
        },
        hp: 10,
      },
      ["Tank Destroyer"]: {
        cost: -15,
      },
      ["Tactical Bomber"]: {
        dmg: {
          vsLightArmor: 15
        }
      },
      ["Strategic Bomber"]: {
        hp: 15
      },
      Destroyer: {
        dmg: {
          vsSubmarine: 15
        },
      },
      ["Nuclear Bomber"]: {
        hp: 15
      }
    }
  },
  Axis: {
    overall: {
      dmg: {
        vsAll: 15
      },
      hp: 15,
      cost: 10
    },
    units: {
      ["Motorized Infantry"]: {
        dmg: {
          vsUnarmored: 15
        }
      },
      ["Anti Air"]: {
        dmg: {
          vsHeavyArmor: 15,
          vsAirplane: 15
        },
      },
      ["Medium Tank"]: {
        hp: 10
      },
      ["Heavy Tank"]: {
        dmg: {
          vsAll: 10
        }
      },
      ["Attack Bomber"]: {
        dmg: {
          vsUnarmored: 15,
          vsHeavyArmor: 15
        }
      },
      Submarine: {
        dmg: {
          vsShip: 15
        },
      },
      Rocket: {
        dmg: {
          vsAll: 15
        }
      },
      ["Rocket Fighter"]: {
        dmg: {
          vsAirplane: 15
        },
      }
    }
  },
  Comintern: {
    overall: {
      cost: -15,
      dmg: {
        vsAll: -10
      }
    },
    units: {
      Militia: {
        terrain: {
          mountains: 50,
          urban: 25
        }
      },
      Infantry: {
        time: -30
      },
      Artillery: {
        cost: -10,
        time: -20
      },
      ["Anti Tank"]: {
        dmg: {
          vsLightArmor: 15,
          vsHeavyArmor: 15
        }
      },
      ["Medium Tank"]: {
        dmg: {
          vsAll: 10
        },
        time: -20
      },
      ["Heavy Tank"]: {
        dmg: {
          vsHeavyArmor: 15
        },
        hp: 10
      },
      ["Attack Bomber"]: {
        hp: 15,
        time: -15
      },
      Cruiser: {
        hp: 15
      },
      ["Rocket Artillery"]: {
        time: -20
      },
      ["SP Rocket Artillery"]: {
        dmg: {
          vsAll: 10
        }
      },
    }
  },
  ["Pan-Asian"]: {
    overall: {
      terrain: {
        all: 20
      }
    },
    units: {
      Infantry: {
        hp: 10,
        terrain: {
          forest: 30
        }
      },
      Artillery: {
        dmg: {
          vsUnarmored: 15
        },
        cost: -10
      },
      ["Armored Car"]: {
        dmg: {
          vsUnarmored: 20
        }
      },
      ["Light Tank"]: {
        dmg: {
          vsUnarmored: 15,
          vsLightArmor: 15
        }
      },
      Interceptor: {
        dmg: {
          vsAirplane: 15
        }
      },
      ["Naval Bomber"]: {
        dmg: {
          vsShip: 15,
          vsSubmarine: 15
        }
      },
      Battleship: {
        dmg: {
          vsAll: 10
        },
        hp: 10
      },
      ["Aircraft Carrier"]: {
        time: -20
      },
      ["Flying Bomb"]: {
        dmg: {
          vsAll: 20
        },
        time: -30
      }
    }
  }
} as const;

/**
  * Example: reversePercentageAdjustment(70, -30) is equal to 100
  */
function reversePercentageAdjustment(currentNum: number, percentChangedBy: number) {
  return currentNum / ((100 + percentChangedBy) / 100)
}

/**
  * Opposite of reversePercentageAdjustment
  */
function doPercentageAdjustment(total: number, percentChangedBy: number) {
  return total * ((100 + percentChangedBy) / 100)
}

export function diff(doctrine: Doctrine, unitName: UnitName) {
  const overall = unitBuffs[doctrine].overall
  const data = unitBuffs[doctrine].units[unitName]
  let finalBuffs: Partial<Buffs>;

  if (!data) {
    finalBuffs = overall;
  } else {
    finalBuffs = combineStats(overall, data)
  }
  return finalBuffs
}

export function normalize(doctrine: Doctrine, unit: UnitName, mode?: string) {
  let normalized: IUnitStats[] = []

  const overall = unitBuffs[doctrine].overall
  if (unit == "Atomic Bomb")
    return

  const buffs = diff(doctrine, unit)
  const data = structuredClone(getUnitData(unit, mode)) as IUnitType

  for (const unitStats of data.doctrineVariants[doctrine]) {
    let newStats: IUnitStats = unitStats;

    if (buffs.time)
      newStats.production.minTimeInSeconds = round(reversePercentageAdjustment(unitStats.production.minTimeInSeconds, buffs.time))
    if (buffs.hp)
      newStats.hitpoints = reversePercentageAdjustment(unitStats.hitpoints, buffs.hp)
    if (buffs.cost) {
      newStats.production.costs.manpower = reversePercentageAdjustment(unitStats.production.costs.manpower, buffs.cost)
      newStats.production.costs.cash = reversePercentageAdjustment(unitStats.production.costs.cash, buffs.cost)
      newStats.production.costs.metal = reversePercentageAdjustment(unitStats.production.costs.metal, buffs.cost)
      newStats.production.costs.food = reversePercentageAdjustment(unitStats.production.costs.food, buffs.cost)
      newStats.production.costs.oil = reversePercentageAdjustment(unitStats.production.costs.oil, buffs.cost)
    }
    
    if (buffs.dmg || overall.dmg) {
      if (!buffs.dmg)
        buffs.dmg = {}
      if (!overall.dmg)
        overall.dmg = {}

      const extra = (buffs.dmg.vsAll ? buffs.dmg.vsAll : 0) + (overall.dmg.vsAll ? overall.dmg.vsAll : 0)
      type Key = `${keyof ICombatStatistics}`
      for (const [stat, combatStats] of Object.entries(unitStats.combatStatistics) as [Key, IDamageModifier][]) {
        if (!buffs.dmg[stat]) {
          if (!extra)
            continue
          else
            buffs.dmg[stat] = 0
        }

        let currStats = combatStats

        currStats.attack = reversePercentageAdjustment(currStats.attack, buffs.dmg[stat] + extra)
        if (currStats.defense)
          currStats.defense = reversePercentageAdjustment(currStats.defense, buffs.dmg[stat] + extra)
      }
    }

    if (buffs.terrain) {
      let extra: number;
      if (overall.terrain)
        extra = overall.terrain.all ? overall.terrain.all : 0
      else
        extra = 0

      type Key = `${keyof ITerrainEffects}`
      for (const [stat, terrainStats] of Object.entries(unitStats.terrainEffects) as [Key, ITerrainEffects][]) {
        if (!buffs.terrain[stat])
          continue

        newStats.terrainEffects[stat].strengthModifier = (terrainStats[stat].strengthModifier || 0) + buffs.terrain[stat] + extra
      }
    }

    normalized.push(newStats)
  }
  return normalized
} 

export function convert(normalizedStats: IUnitStats[], doctrine: Doctrine, unit: UnitName, mode?: string) {
  const converted: IUnitStats[] = []
  const overall = unitBuffs[doctrine].overall
  const buffs = diff(doctrine, unit)

  for (const unitStats of normalizedStats) {
    const newStats = structuredClone(unitStats)

    if (!buffs.time)
      buffs.time = 0
    newStats.production.minTimeInSeconds = round(doPercentageAdjustment(unitStats.production.minTimeInSeconds, buffs.time))

    if (!buffs.hp)
      buffs.hp = 0
    newStats.hitpoints = round(doPercentageAdjustment(unitStats.hitpoints, buffs.hp))
    if (!buffs.cost)
      buffs.cost = 0

    newStats.production.costs.manpower = round(doPercentageAdjustment(unitStats.production.costs.manpower, buffs.cost))
    newStats.production.costs.cash = round(doPercentageAdjustment(unitStats.production.costs.cash, buffs.cost))
    newStats.production.costs.metal = round(doPercentageAdjustment(unitStats.production.costs.metal, buffs.cost))
    newStats.production.costs.food = round(doPercentageAdjustment(unitStats.production.costs.food, buffs.cost))
    newStats.production.costs.oil = round(doPercentageAdjustment(unitStats.production.costs.oil, buffs.cost))

    if (!buffs.dmg)
      buffs.dmg = {vsAll: 0}
    const combatExtra = (buffs.dmg.vsAll ? buffs.dmg.vsAll : 0)
    type CombatKey = `${keyof ICombatStatistics}`
    for (const [stat, combatStats] of Object.entries(unitStats.combatStatistics) as [CombatKey, IDamageModifier][]) {
      if (!buffs.dmg[stat] && !combatExtra) continue

      const buffValue = (buffs.dmg[stat] || 0) + combatExtra
      newStats.combatStatistics[stat].attack = round(doPercentageAdjustment(combatStats.attack, buffValue), 1)
      if (combatStats.defense)
        newStats.combatStatistics[stat].defense = round(doPercentageAdjustment(combatStats.defense, buffValue), 1)
    }
    newStats.averageDamage = round(doPercentageAdjustment(unitStats.averageDamage, combatExtra), 1);

    if (!buffs.terrain)
      buffs.terrain = { all: 0 }

    const terrainExtra = overall.terrain?.all || 0
    type TerrainKey = `${keyof ITerrainEffects}`
    for (const [stat, terrainStats] of Object.entries(unitStats.terrainEffects) as [TerrainKey, ITerrainModifier][]) {
      if (!terrainStats.strengthModifier) continue

      const buffValue = (buffs.terrain[stat] || 0) + terrainExtra
      newStats.terrainEffects[stat].strengthModifier = (terrainStats.strengthModifier || 0) + buffValue / 100;
      newStats.terrainEffects[stat].health = newStats.hitpoints
    }

    newStats.doctrine = doctrine
    newStats.unitName = `${doctrine} ${unit} (${mode ? `${mode}, ` : ''}Estimated Stats)`;

    converted.push(newStats)
  }
  return converted
}
