import { IUnitType } from '@/types';

export const flameTankData: IUnitType = {
  genericName: "Flame Tank",
  doctrineVariants: {
    Allies: [
      {
        unitName: "Churchill Crocodile",
        level: 1,
        doctrine: "Allies",
        type: 'HeavyArmor',
        averageDamage: 6.3,
        hitpoints: 60,
        production: {
          costs: {
            food: 0,
            manpower: 1600,
            metal: 2100,
            oil: 2100,
            cash: 2300
          },
          minTimeInSeconds: 3 * 60 * 60
        },
        specialProperties: ["Storm Fortification", "Offensive", "Anti-Unarmored"],
        combatStatistics: {
          vsUnarmored: { attack: 16.0, defense: 8.0 },
          vsLightArmor: { attack: 6.0, defense: 3.0 },
          vsHeavyArmor: { attack: 3.0, defense: 1.5 },
          vsAirplane: { attack: 1.0, defense: 0.5 },
          vsShip: { attack: 4.0, defense: 2.0 },
          vsSubmarine: { attack: 0, defense: 0 },
          vsBuildings: { attack: 4.0, defense: 2.0 },
          vsProvinceMorale: { attack: 1.0, defense: null },
          vsRocket: { attack: 0, defense: 0 }
        },
        terrainEffects: {
          plains: {
            health: 60,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: 0.25
          },
          hills: {
            health: 60,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.25
          },
          mountains: {
            health: 60,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.5,
          },
          forest: {
            health: 60,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.25,
          },
          urban: {
            health: 60,
            attackModifier: null,
            strengthModifier: 0.5,
            speedModifier: null
          },
          sea: {
            health: 10,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          enemyTerritory: {
            health: 60,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.5
          }
        }
      },
      {
        unitName: "Churchill Crocodile",
        level: 2,
        doctrine: "Allies",
        type: 'HeavyArmor',
        averageDamage: 8.8,
        hitpoints: 85,
        production: {
          costs: {
            food: 0,
            manpower: 1600,
            metal: 2400,
            oil: 2400,
            cash: 2600
          },
          minTimeInSeconds: 3 * 60 * 60
        },
        specialProperties: ["Storm Fortification", "Offensive", "Anti-Unarmored"],
        combatStatistics: {
          vsUnarmored: { attack: 22.0, defense: 11.0 },
          vsLightArmor: { attack: 9.0, defense: 4.5 },
          vsHeavyArmor: { attack: 4.0, defense: 2.0 },
          vsAirplane: { attack: 2.0, defense: 1.0 },
          vsShip: { attack: 6.0, defense: 3.0 },
          vsSubmarine: { attack: 0, defense: 0 },
          vsBuildings: { attack: 8.0, defense: 4.0 },
          vsProvinceMorale: { attack: 2.5, defense: null },
          vsRocket: { attack: 0, defense: 0 }
        },
        terrainEffects: {
          plains: {
            health: 85,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: 0.25
          },
          hills: {
            health: 85,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.25
          },
          mountains: {
            health: 85,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.5,
          },
          forest: {
            health: 85,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.25,
          },
          urban: {
            health: 85,
            attackModifier: null,
            strengthModifier: 0.5,
            speedModifier: null
          },
          sea: {
            health: 10,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: null
          },
          enemyTerritory: {
            health: 85,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.5
          }
        }
      }
    ],
    Axis: [
      {
        "unitName": "Axis Flame Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 7.2,
        "hitpoints": 69,
        "production": {
          "costs": {
            "food": 0,
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
            "attack": 18.4,
            "defense": 9.2
          },
          "vsLightArmor": {
            "attack": 6.9,
            "defense": 3.5
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 0,
            "defense": 0
          },
          "vsBuildings": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsProvinceMorale": {
            "attack": 1.2,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 69,
            "attackModifier": null,
            "strengthModifier": 0.5,
            "speedModifier": null
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          }
        }
      },
      {
        "unitName": "Axis Flame Tank (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 10.1,
        "hitpoints": 98,
        "production": {
          "costs": {
            "food": 0,
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
            "attack": 25.3,
            "defense": 12.6
          },
          "vsLightArmor": {
            "attack": 10.4,
            "defense": 5.2
          },
          "vsHeavyArmor": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 6.9,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 0,
            "defense": 0
          },
          "vsBuildings": {
            "attack": 9.2,
            "defense": 4.6
          },
          "vsProvinceMorale": {
            "attack": 2.9,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 98,
            "attackModifier": null,
            "strengthModifier": 0.5,
            "speedModifier": null
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          }
        }
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Flame Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 6.3,
        "hitpoints": 60,
        "production": {
          "costs": {
            "food": 0,
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
            "attack": 16,
            "defense": 8
          },
          "vsLightArmor": {
            "attack": 6,
            "defense": 3
          },
          "vsHeavyArmor": {
            "attack": 3,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 1,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 4,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 0,
            "defense": 0
          },
          "vsBuildings": {
            "attack": 4,
            "defense": 2
          },
          "vsProvinceMorale": {
            "attack": 1,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": 0.7,
            "speedModifier": null
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          }
        }
      },
      {
        "unitName": "Pan-Asian Flame Tank (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 8.8,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 0,
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
            "attack": 22,
            "defense": 11
          },
          "vsLightArmor": {
            "attack": 9,
            "defense": 4.5
          },
          "vsHeavyArmor": {
            "attack": 4,
            "defense": 2
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 1
          },
          "vsShip": {
            "attack": 6,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 0,
            "defense": 0
          },
          "vsBuildings": {
            "attack": 8,
            "defense": 4
          },
          "vsProvinceMorale": {
            "attack": 2.5,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": 0.7,
            "speedModifier": null
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          }
        }
      }
    ],
    Comintern: [
      {
        "unitName": "Comintern Flame Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 5.7,
        "hitpoints": 60,
        "production": {
          "costs": {
            "food": 0,
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
            "attack": 14.4,
            "defense": 7.2
          },
          "vsLightArmor": {
            "attack": 5.4,
            "defense": 2.7
          },
          "vsHeavyArmor": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 0,
            "defense": 0
          },
          "vsBuildings": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsProvinceMorale": {
            "attack": 0.9,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": 0.5,
            "speedModifier": null
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 60,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          }
        }
      },
      {
        "unitName": "Comintern Flame Tank (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 7.9,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 0,
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
            "attack": 19.8,
            "defense": 9.9
          },
          "vsLightArmor": {
            "attack": 8.1,
            "defense": 4.1
          },
          "vsHeavyArmor": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 5.4,
            "defense": 2.7
          },
          "vsSubmarine": {
            "attack": 0,
            "defense": 0
          },
          "vsBuildings": {
            "attack": 7.2,
            "defense": 3.6
          },
          "vsProvinceMorale": {
            "attack": 2.3,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": 0.25
          },
          "hills": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "mountains": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          },
          "forest": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.25
          },
          "urban": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": 0.5,
            "speedModifier": null
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": null
          },
          "enemyTerritory": {
            "health": 85,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          }
        }
      }
    ]
  }
};
