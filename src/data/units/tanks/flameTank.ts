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
      }
    ]
  }
};
