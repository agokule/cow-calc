import { IUnitType } from '@/types';

export const marinesData: IUnitType = {
  genericName: "Marines",
  doctrineVariants: {
    Axis: [
      {
        unitName: "Marines Type 1939",
        level: 1,
        doctrine: "Axis",
        type: 'Unarmored',
        averageDamage: 3.8,
        hitpoints: 23,
        production: {
          costs: {
            food: 0,
            manpower: 0,
            metal: 0,
            oil: 0,
            cash: 0
          },
          // using the 3 hours required for each booster card
          // unit to be deployed
          minTimeInSeconds: 3 * 60 * 60
        },
        specialProperties: ["Offensive", "Amphibious"],
        combatStatistics: {
          vsUnarmored: { attack: 6.3, defense: 4.2 },
          vsLightArmor: { attack: 5.8, defense: 3.9 },
          vsHeavyArmor: { attack: 1.7, defense: 1.1 },
          vsAirplane: { attack: 1.7, defense: 1.1 },
          vsShip: { attack: 1.2, defense: 0.8 },
          vsSubmarine: { attack: 0.6, defense: 0.4 },
          vsBuildings: { attack: 0.3, defense: 0.2 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket: { attack: 0, defense: 0 }
        },
        // some very boring terrainEffects
        terrainEffects: {
          plains: {
            health: 23,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          hills: {
            health: 23,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          mountains: {
            health: 23,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.5,
          },
          forest: {
            health: 23,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          urban: {
            health: 23,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          sea: {
            health: 23,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          enemyTerritory: {
            health: 23,
            attackModifier: null,
            speedModifier: -0.5,
            strengthModifier: null
          }
        }
      }
    ],
    Allies: [
      {
        "unitName": "Allies Marines (Estimated Stats)",
        "level": 1,
        "doctrine": "Allies",
        "type": "Unarmored",
        "averageDamage": 3.8,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "oil": 0,
            "cash": 0
          },
          "minTimeInSeconds": 7560
        },
        "specialProperties": [
          "Offensive",
          "Amphibious"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.846153846153846,
            "defense": 3.230769230769231
          },
          "vsLightArmor": {
            "attack": 4.461538461538462,
            "defense": 3
          },
          "vsHeavyArmor": {
            "attack": 1.3076923076923077,
            "defense": 0.8461538461538461
          },
          "vsAirplane": {
            "attack": 1.3076923076923077,
            "defense": 0.8461538461538461
          },
          "vsShip": {
            "attack": 0.923076923076923,
            "defense": 0.6153846153846154
          },
          "vsSubmarine": {
            "attack": 0.4615384615384615,
            "defense": 0.3076923076923077
          },
          "vsBuildings": {
            "attack": 0.23076923076923075,
            "defense": 0.15384615384615385
          },
          "vsProvinceMorale": {
            "attack": 0.07692307692307693,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "hills": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "mountains": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "urban": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "sea": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 23,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Marines (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 3.8,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "oil": 0,
            "cash": 0
          },
          "minTimeInSeconds": 10800
        },
        "specialProperties": [
          "Offensive",
          "Amphibious"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.846153846153846,
            "defense": 3.230769230769231
          },
          "vsLightArmor": {
            "attack": 4.461538461538462,
            "defense": 3
          },
          "vsHeavyArmor": {
            "attack": 1.3076923076923077,
            "defense": 0.8461538461538461
          },
          "vsAirplane": {
            "attack": 1.3076923076923077,
            "defense": 0.8461538461538461
          },
          "vsShip": {
            "attack": 0.923076923076923,
            "defense": 0.6153846153846154
          },
          "vsSubmarine": {
            "attack": 0.4615384615384615,
            "defense": 0.3076923076923077
          },
          "vsBuildings": {
            "attack": 0.23076923076923075,
            "defense": 0.15384615384615385
          },
          "vsProvinceMorale": {
            "attack": 0.07692307692307693,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "hills": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "mountains": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "urban": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "sea": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 23,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      }
    ],
    Comintern: [
      {
        "unitName": "Comintern Marines (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 3.4,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "oil": 0,
            "cash": 0
          },
          "minTimeInSeconds": 10800
        },
        "specialProperties": [
          "Offensive",
          "Amphibious"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.4,
            "defense": 2.9
          },
          "vsLightArmor": {
            "attack": 4,
            "defense": 2.7
          },
          "vsHeavyArmor": {
            "attack": 1.2,
            "defense": 0.8
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 0.8
          },
          "vsShip": {
            "attack": 0.8,
            "defense": 0.6
          },
          "vsSubmarine": {
            "attack": 0.4,
            "defense": 0.3
          },
          "vsBuildings": {
            "attack": 0.2,
            "defense": 0.1
          },
          "vsProvinceMorale": {
            "attack": 0.1,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "hills": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "mountains": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "urban": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "sea": {
            "health": 23,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 23,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      }
    ]
  }
}
