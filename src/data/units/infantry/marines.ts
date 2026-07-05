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
      },
      {
        "unitName": "Axis Marines (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 8.2,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1430,
            "manpower": 1045,
            "metal": 0,
            "oil": 1320,
            "cash": 2640
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Offensive",
          "Amphibious"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 11.5,
            "defense": 9.2
          },
          "vsLightArmor": {
            "attack": 10.4,
            "defense": 8.3
          },
          "vsHeavyArmor": {
            "attack": 5.2,
            "defense": 4.1
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 2.8
          },
          "vsShip": {
            "attack": 2.9,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 1.4
          },
          "vsBuildings": {
            "attack": 2.3,
            "defense": 1.8
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
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "hills": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "mountains": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "urban": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "sea": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Axis Marines (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 15,
        "hitpoints": 63,
        "production": {
          "costs": {
            "food": 1650,
            "manpower": 1045,
            "metal": 0,
            "oil": 1540,
            "cash": 2970
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Offensive",
          "Amphibious"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 19.5,
            "defense": 19.5
          },
          "vsLightArmor": {
            "attack": 17.3,
            "defense": 17.3
          },
          "vsHeavyArmor": {
            "attack": 8,
            "defense": 8
          },
          "vsAirplane": {
            "attack": 4.6,
            "defense": 4.6
          },
          "vsShip": {
            "attack": 4.6,
            "defense": 4.6
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 4.6,
            "defense": 4.6
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
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "hills": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "mountains": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "urban": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "sea": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
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
      },
      {
        unitName: "Marines Type 1941",
        level: 2,
        doctrine: "Allies",
        type: 'Unarmored',
        averageDamage: 7.1,
        hitpoints: 35,
        production: {
          costs: {
            food: 1300,
            manpower: 950,
            metal: 0,
            oil: 1200,
            cash: 2400
          },
          // using the 3 hours required for each booster card
          // unit to be deployed
          minTimeInSeconds: 3 * 60 * 60
        },
        specialProperties: ["Offensive", "Amphibious"],
        combatStatistics: {
          vsUnarmored: { attack: 10.0, defense: 8.0 },
          vsLightArmor: { attack: 9.0, defense: 7.2 },
          vsHeavyArmor: { attack: 4.5, defense: 3.6 },
          vsAirplane: { attack: 3.0, defense: 2.4 },
          vsShip: { attack: 2.5, defense: 2.0 },
          vsSubmarine: { attack: 1.5, defense: 1.2 },
          vsBuildings: { attack: 2.0, defense: 1.6 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket: { attack: 0, defense: 0 }
        },
        // some very boring terrainEffects
        terrainEffects: {
          plains: {
            health: 35,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          hills: {
            health: 35,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          mountains: {
            health: 35,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.5,
          },
          forest: {
            health: 35,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          urban: {
            health: 35,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          sea: {
            health: 35,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          enemyTerritory: {
            health: 35,
            attackModifier: null,
            speedModifier: -0.5,
            strengthModifier: null
          }
        }
      },
      {
        unitName: "Marines Type 1945",
        level: 3,
        doctrine: "Allies",
        type: 'Unarmored',
        averageDamage: 13.0,
        hitpoints: 55,
        production: {
          costs: {
            food: 1500,
            manpower: 950,
            metal: 0,
            oil: 1400,
            cash: 2700
          },
          // using the 3 hours required for each booster card
          // unit to be deployed
          minTimeInSeconds: 3 * 60 * 60
        },
        specialProperties: ["Offensive", "Amphibious"],
        combatStatistics: {
          vsUnarmored: { attack: 17.0, defense: 17.0 },
          vsLightArmor: { attack: 15.0, defense: 15.0 },
          vsHeavyArmor: { attack: 7.0, defense: 7.0 },
          vsAirplane: { attack: 4.0, defense: 4.0 },
          vsShip: { attack: 4.0, defense: 4.0 },
          vsSubmarine: { attack: 2.0, defense: 2.0 },
          vsBuildings: { attack: 4.0, defense: 4.0 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket: { attack: 0, defense: 0 }
        },
        // some very boring terrainEffects
        terrainEffects: {
          plains: {
            health: 55,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          hills: {
            health: 55,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          mountains: {
            health: 55,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.5,
          },
          forest: {
            health: 55,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          urban: {
            health: 55,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          sea: {
            health: 55,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          enemyTerritory: {
            health: 55,
            attackModifier: null,
            speedModifier: -0.5,
            strengthModifier: null
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
      },
      {
        "unitName": "Pan-Asian Marines (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 7.1,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 950,
            "metal": 0,
            "oil": 1200,
            "cash": 2400
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Offensive",
          "Amphibious"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 10,
            "defense": 8
          },
          "vsLightArmor": {
            "attack": 9,
            "defense": 7.2
          },
          "vsHeavyArmor": {
            "attack": 4.5,
            "defense": 3.6
          },
          "vsAirplane": {
            "attack": 3,
            "defense": 2.4
          },
          "vsShip": {
            "attack": 2.5,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 2,
            "defense": 1.6
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
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "hills": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "mountains": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "urban": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "sea": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Pan-Asian Marines (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 13,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 1500,
            "manpower": 950,
            "metal": 0,
            "oil": 1400,
            "cash": 2700
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Offensive",
          "Amphibious"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 17,
            "defense": 17
          },
          "vsLightArmor": {
            "attack": 15,
            "defense": 15
          },
          "vsHeavyArmor": {
            "attack": 7,
            "defense": 7
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 4
          },
          "vsShip": {
            "attack": 4,
            "defense": 4
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 2
          },
          "vsBuildings": {
            "attack": 4,
            "defense": 4
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
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "hills": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "mountains": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "urban": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "sea": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 55,
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
      },
      {
        "unitName": "Comintern Marines (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 6.4,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1105,
            "manpower": 808,
            "metal": 0,
            "oil": 1020,
            "cash": 2040
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Offensive",
          "Amphibious"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9,
            "defense": 7.2
          },
          "vsLightArmor": {
            "attack": 8.1,
            "defense": 6.5
          },
          "vsHeavyArmor": {
            "attack": 4.1,
            "defense": 3.2
          },
          "vsAirplane": {
            "attack": 2.7,
            "defense": 2.2
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 1.1
          },
          "vsBuildings": {
            "attack": 1.8,
            "defense": 1.4
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
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "hills": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "mountains": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "urban": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "sea": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Comintern Marines (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 11.7,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 1275,
            "manpower": 808,
            "metal": 0,
            "oil": 1190,
            "cash": 2295
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Offensive",
          "Amphibious"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 15.3,
            "defense": 15.3
          },
          "vsLightArmor": {
            "attack": 13.5,
            "defense": 13.5
          },
          "vsHeavyArmor": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsAirplane": {
            "attack": 3.6,
            "defense": 3.6
          },
          "vsShip": {
            "attack": 3.6,
            "defense": 3.6
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsBuildings": {
            "attack": 3.6,
            "defense": 3.6
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
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "hills": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "mountains": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "urban": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "sea": {
            "health": 55,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      }
    ]
  }
}
