import { IUnitType } from '@/types';

export const amphibiousTankData: IUnitType = {
  genericName: "Amphibious Tank",
  doctrineVariants: {
    Allies: [
      {
        unitName: "Valentine DD Tank",
        level: 1,
        doctrine: "Allies",
        type: 'LightArmor',
        averageDamage: 3.2,
        hitpoints: 30,
        production: {
          costs: {
            food: 0,
            manpower: 1200,
            metal: 850,
            oil: 2300,
            cash: 1300
          },
          minTimeInSeconds: 3 * 60 * 60
        },
        specialProperties: ["Offensive", "Anti-Unarmored"],
        combatStatistics: {
          vsUnarmored: { attack: 6.0, defense: 4.0 },
          vsLightArmor: { attack: 3.5, defense: 2.3 },
          vsHeavyArmor: { attack: 2.0, defense: 1.3 },
          vsAirplane: { attack: 1.5, defense: 1.0 },
          vsShip: { attack: 1.5, defense: 1.0 },
          vsSubmarine: { attack: 1.5, defense: 1.0 },
          vsBuildings: { attack: 0.6, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket: { attack: 0, defense: 0 }
        },
        terrainEffects: {
          plains: {
            health: 30,
            attackModifier: null,
            speedModifier: 0.25,
            strengthModifier: 0.5
          },
          hills: {
            health: 30,
            attackModifier: null,
            speedModifier: -0.25,
            strengthModifier: null
          },
          mountains: {
            health: 30,
            attackModifier: null,
            speedModifier: -0.5,
            strengthModifier: null
          },
          forest: {
            health: 30,
            attackModifier: null,
            speedModifier: -0.25,
            strengthModifier: null
          },
          urban: {
            health: 30,
            attackModifier: null,
            speedModifier: null,
            strengthModifier: null
          },
          sea: {
            health: 30,
            attackModifier: null,
            speedModifier: null,
            strengthModifier: null
          },
          enemyTerritory: {
            health: 30,
            attackModifier: null,
            strengthModifier: null,
            speedModifier: -0.5
          }
        }
      }
    ],
    Axis: [
      {
        "unitName": "Axis Amphibious Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 3.7,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1320,
            "metal": 935,
            "oil": 2530,
            "cash": 1430
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.9,
            "defense": 4.6
          },
          "vsLightArmor": {
            "attack": 4,
            "defense": 2.6
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 1.7,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 1.7,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 0.7,
            "defense": 0.5
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
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          }
        }
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Amphibious Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 3.2,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1200,
            "metal": 850,
            "oil": 2300,
            "cash": 1300
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6,
            "defense": 4
          },
          "vsLightArmor": {
            "attack": 3.5,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 1.3
          },
          "vsAirplane": {
            "attack": 1.5,
            "defense": 1
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 0.6,
            "defense": 0.4
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
            "speedModifier": 0.25,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          }
        }
      }
    ],
    Comintern: [
      {
        "unitName": "Comintern Amphibious Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 2.9,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1020,
            "metal": 723,
            "oil": 1955,
            "cash": 1105
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.4,
            "defense": 3.6
          },
          "vsLightArmor": {
            "attack": 3.2,
            "defense": 2.1
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 1.2
          },
          "vsAirplane": {
            "attack": 1.4,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 1.4,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 0.5,
            "defense": 0.4
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
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": 30,
            "attackModifier": null,
            "strengthModifier": null,
            "speedModifier": -0.5
          }
        }
      }
    ]
  }
};
