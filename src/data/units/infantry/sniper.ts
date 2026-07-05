import { IUnitType } from '@/types';

export const sniperData: IUnitType = {
  genericName: "Sniper",
  doctrineVariants: {
    Allies: [
      {
        unitName: "Sniper",
        level: 1,
        doctrine: "Allies",
        type: 'Unarmored',
        averageDamage: 6.3,
        hitpoints: 15,
        // technically it is a booster only unit, but for some
        // reason, there are production costs listed in game...
        production: {
          costs: {
            food: 1600,
            manpower: 1600,
            metal: 2100,
            oil: 2100,
            cash: 2300
          },
          // using the 3 hours required for each booster card
          // unit to be deployed
          minTimeInSeconds: 3 * 60 * 60
        },
        specialProperties: ["Storm Fortification", "Offensive", "Anti-Unarmored"],
        combatStatistics: {
          vsUnarmored: { attack: 12.0, defense: 3.0 },
          vsLightArmor: { attack: 8.0, defense: 2.0 },
          vsHeavyArmor: { attack: 2.0, defense: 0.5 },
          vsAirplane: { attack: 1.0, defense: 0.3 },
          vsShip: { attack: 1.0, defense: 0.3 },
          vsSubmarine: { attack: 0.5, defense: 0.1 },
          vsBuildings: { attack: 0.5, defense: 0.1 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket: { attack: 0, defense: 0 }
        },
        terrainEffects: {
          plains: {
            health: 15,
            attackModifier: null,
            strengthModifier: -0.2,
            speedModifier: 0.25
          },
          hills: {
            health: 15,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.25
          },
          mountains: {
            health: 15,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.5,
          },
          forest: {
            health: 15,
            attackModifier: null,
            strengthModifier: 0.2,
            speedModifier: -0.25
          },
          urban: {
            health: 15,
            attackModifier: null,
            strengthModifier: 0.2,
            speedModifier: null
          },
          sea: {
            health: 15,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          enemyTerritory: {
            health: 15,
            attackModifier: null,
            speedModifier: -0.5,
            strengthModifier: null
          }
        }
      },
      {
        unitName: "Sniper",
        level: 2,
        doctrine: "Allies",
        type: 'Unarmored',
        averageDamage: 8.8,
        hitpoints: 30,
        // technically it is a booster only unit, but for some
        // reason, there are production costs listed in game...
        production: {
          costs: {
            food: 1800,
            manpower: 1600,
            metal: 2400,
            oil: 2400,
            cash: 2600
          },
          // using the 3 hours required for each booster card
          // unit to be deployed
          minTimeInSeconds: 3 * 60 * 60
        },
        specialProperties: ["Storm Fortification", "Offensive", "Anti-Unarmored"],
        combatStatistics: {
          vsUnarmored: { attack: 18.0, defense: 3.0 },
          vsLightArmor: { attack: 12.0, defense: 2.0 },
          vsHeavyArmor: { attack: 3.0, defense: 0.5 },
          vsAirplane: { attack: 1.5, defense: 0.3 },
          vsShip: { attack: 1.5, defense: 0.3 },
          vsSubmarine: { attack: 0.8, defense: 0.1 },
          vsBuildings: { attack: 0.8, defense: 0.1 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket: { attack: 0, defense: 0 }
        },
        terrainEffects: {
          plains: {
            health: 30,
            attackModifier: null,
            strengthModifier: -0.2,
            speedModifier: 0.25
          },
          hills: {
            health: 30,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.25
          },
          mountains: {
            health: 30,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.5,
          },
          forest: {
            health: 30,
            attackModifier: null,
            strengthModifier: 0.2,
            speedModifier: -0.25
          },
          urban: {
            health: 30,
            attackModifier: null,
            strengthModifier: 0.2,
            speedModifier: null
          },
          sea: {
            health: 30,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          enemyTerritory: {
            health: 30,
            attackModifier: null,
            speedModifier: -0.5,
            strengthModifier: null
          }
        }
      },
      {
        unitName: "Sniper",
        level: 3,
        doctrine: "Allies",
        type: 'Unarmored',
        averageDamage: 12.5,
        hitpoints: 45,
        // technically it is a booster only unit, but for some
        // reason, there are production costs listed in game...
        production: {
          costs: {
            food: 2000,
            manpower: 1700,
            metal: 2700,
            oil: 2700,
            cash: 3000
          },
          // using the 3 hours required for each booster card
          // unit to be deployed
          minTimeInSeconds: 3 * 60 * 60
        },
        specialProperties: ["Storm Fortification", "Offensive", "Anti-Unarmored"],
        combatStatistics: {
          vsUnarmored: { attack: 27.0, defense: 3.0 },
          vsLightArmor: { attack: 18.0, defense: 2.0 },
          vsHeavyArmor: { attack: 4.5, defense: 0.5 },
          vsAirplane: { attack: 2.3, defense: 0.3 },
          vsShip: { attack: 2.3, defense: 0.3 },
          vsSubmarine: { attack: 1.1, defense: 0.1 },
          vsBuildings: { attack: 1.1, defense: 0.1 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket: { attack: 0, defense: 0 }
        },
        terrainEffects: {
          plains: {
            health: 45,
            attackModifier: null,
            strengthModifier: -0.2,
            speedModifier: 0.25
          },
          hills: {
            health: 45,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.25
          },
          mountains: {
            health: 45,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.5,
          },
          forest: {
            health: 45,
            attackModifier: null,
            strengthModifier: 0.2,
            speedModifier: -0.25
          },
          urban: {
            health: 45,
            attackModifier: null,
            strengthModifier: 0.2,
            speedModifier: null
          },
          sea: {
            health: 45,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          enemyTerritory: {
            health: 45,
            attackModifier: null,
            speedModifier: -0.5,
            strengthModifier: null
          }
        }
      }
    ],
    Axis: [
      {
        "unitName": "Axis Sniper (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 7.2,
        "hitpoints": 17,
        "production": {
          "costs": {
            "food": 1760,
            "manpower": 1760,
            "metal": 2310,
            "oil": 2310,
            "cash": 2530
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Storm Fortification",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 13.8,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 9.2,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 0.3
          },
          "vsShip": {
            "attack": 1.2,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 0.6,
            "defense": 0.1
          },
          "vsBuildings": {
            "attack": 0.6,
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
            "health": 17,
            "attackModifier": null,
            "strengthModifier": -0.2,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 17,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 17,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": null
          },
          "sea": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Axis Sniper (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 10.1,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1980,
            "manpower": 1760,
            "metal": 2640,
            "oil": 2640,
            "cash": 2860
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Storm Fortification",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 20.7,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 13.8,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 1.7,
            "defense": 0.3
          },
          "vsShip": {
            "attack": 1.7,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 0.1
          },
          "vsBuildings": {
            "attack": 0.9,
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
            "health": 35,
            "attackModifier": null,
            "strengthModifier": -0.2,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 35,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": null
          },
          "sea": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Axis Sniper (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 14.4,
        "hitpoints": 52,
        "production": {
          "costs": {
            "food": 2200,
            "manpower": 1870,
            "metal": 2970,
            "oil": 2970,
            "cash": 3300
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Storm Fortification",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 31.1,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 20.7,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 5.2,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 2.6,
            "defense": 0.3
          },
          "vsShip": {
            "attack": 2.6,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 1.3,
            "defense": 0.1
          },
          "vsBuildings": {
            "attack": 1.3,
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
            "health": 52,
            "attackModifier": null,
            "strengthModifier": -0.2,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 52,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 52,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": null
          },
          "sea": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Sniper (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 6.3,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 1600,
            "manpower": 1600,
            "metal": 2100,
            "oil": 2100,
            "cash": 2300
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Storm Fortification",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12,
            "defense": 3
          },
          "vsLightArmor": {
            "attack": 8,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 1,
            "defense": 0.3
          },
          "vsShip": {
            "attack": 1,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 0.1
          },
          "vsBuildings": {
            "attack": 0.5,
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
            "health": 15,
            "attackModifier": null,
            "strengthModifier": 0,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": 0.4,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": 0.4,
            "speedModifier": null
          },
          "sea": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Pan-Asian Sniper (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 8.8,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1800,
            "manpower": 1600,
            "metal": 2400,
            "oil": 2400,
            "cash": 2600
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Storm Fortification",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 18,
            "defense": 3
          },
          "vsLightArmor": {
            "attack": 12,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 3,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 1.5,
            "defense": 0.3
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 0.8,
            "defense": 0.1
          },
          "vsBuildings": {
            "attack": 0.8,
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
            "health": 30,
            "attackModifier": null,
            "strengthModifier": 0,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": 0.4,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": 0.4,
            "speedModifier": null
          },
          "sea": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Pan-Asian Sniper (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 12.5,
        "hitpoints": 45,
        "production": {
          "costs": {
            "food": 2000,
            "manpower": 1700,
            "metal": 2700,
            "oil": 2700,
            "cash": 3000
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Storm Fortification",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 27,
            "defense": 3
          },
          "vsLightArmor": {
            "attack": 18,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 4.5,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 0.3
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 1.1,
            "defense": 0.1
          },
          "vsBuildings": {
            "attack": 1.1,
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
            "health": 45,
            "attackModifier": null,
            "strengthModifier": 0,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": 0.4,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": 0.4,
            "speedModifier": null
          },
          "sea": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      }
    ],
    Comintern: [
      {
        "unitName": "Comintern Sniper (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 5.7,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 1360,
            "manpower": 1360,
            "metal": 1785,
            "oil": 1785,
            "cash": 1955
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Storm Fortification",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 10.8,
            "defense": 2.7
          },
          "vsLightArmor": {
            "attack": 7.2,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 0.3
          },
          "vsShip": {
            "attack": 0.9,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 0.1
          },
          "vsBuildings": {
            "attack": 0.5,
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
            "health": 15,
            "attackModifier": null,
            "strengthModifier": -0.2,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": null
          },
          "sea": {
            "health": 15,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Comintern Sniper (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 7.9,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1530,
            "manpower": 1360,
            "metal": 2040,
            "oil": 2040,
            "cash": 2210
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Storm Fortification",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 16.2,
            "defense": 2.7
          },
          "vsLightArmor": {
            "attack": 10.8,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 2.7,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 1.4,
            "defense": 0.3
          },
          "vsShip": {
            "attack": 1.4,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 0.7,
            "defense": 0.1
          },
          "vsBuildings": {
            "attack": 0.7,
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
            "health": 30,
            "attackModifier": null,
            "strengthModifier": -0.2,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": null
          },
          "sea": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Comintern Sniper (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 11.3,
        "hitpoints": 45,
        "production": {
          "costs": {
            "food": 1700,
            "manpower": 1445,
            "metal": 2295,
            "oil": 2295,
            "cash": 2550
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Storm Fortification",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 24.3,
            "defense": 2.7
          },
          "vsLightArmor": {
            "attack": 16.2,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 4.1,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 2.1,
            "defense": 0.3
          },
          "vsShip": {
            "attack": 2.1,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 1,
            "defense": 0.1
          },
          "vsBuildings": {
            "attack": 1,
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
            "health": 45,
            "attackModifier": null,
            "strengthModifier": -0.2,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": 0.2,
            "speedModifier": null
          },
          "sea": {
            "health": 45,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      }
    ]
  }
}
