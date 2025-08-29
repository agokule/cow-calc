import { IUnitType } from '@/types';

export const spRocketArtilleryData: IUnitType = {
  genericName: 'SP Rocket Artillery',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Xylophone',
        level: 1,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 2.7,
        hitpoints: 25,
        production: {
          costs: {
            manpower: 1600,
            metal: 1900,
            oil: 1900,
            cash: 1900,
            food: 0
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,   defense: 1.5 },
          vsLightArmor:     { attack: 4.5, defense: 1.1 },
          vsHeavyArmor:     { attack: 2.5, defense: 0.6 },
          vsAirplane:       { attack: 5,   defense: 1.2 },
          vsShip:           { attack: 2.8, defense: 0.7 },
          vsSubmarine:      { attack: 2,   defense: 0.5 },
          vsBuildings:      { attack: 3.3, defense: 0.8 },
          vsProvinceMorale: { attack: 4,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 25,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.2 },
          hills:          { health: 25,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 25,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 25,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 25,   attackModifier: null, speedModifier: null,  strengthModifier: 0.2 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Calliope',
        level: 2,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 4.5,
        hitpoints: 45,
        production: {
          costs: {
            manpower: 1600,
            metal: 2500,
            oil: 2500,
            cash: 2500,
            food: 0
          },
          minTimeInSeconds: 23400
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10.3, defense: 2.6 },
          vsLightArmor:     { attack: 7,    defense: 1.7 },
          vsHeavyArmor:     { attack: 4.5,  defense: 1.1 },
          vsAirplane:       { attack: 8,    defense: 2 },
          vsShip:           { attack: 4.5,  defense: 1.1 },
          vsSubmarine:      { attack: 3.5,  defense: 0.9 },
          vsBuildings:      { attack: 5,    defense: 1.3 },
          vsProvinceMorale: { attack: 6,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 45,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.2 },
          hills:          { health: 45,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 45,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 45,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 45,   attackModifier: null, speedModifier: null,  strengthModifier: 0.2 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis SP Rocket Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 3.1,
        "hitpoints": 29,
        "production": {
          "costs": {
            "manpower": 1760,
            "metal": 2090,
            "oil": 2090,
            "cash": 2090,
            "food": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.9,
            "defense": 1.7
          },
          "vsLightArmor": {
            "attack": 5.2,
            "defense": 1.3
          },
          "vsHeavyArmor": {
            "attack": 2.9,
            "defense": 0.7
          },
          "vsAirplane": {
            "attack": 5.8,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 3.8,
            "defense": 0.9
          },
          "vsProvinceMorale": {
            "attack": 4.6,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 29,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 29,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 29,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": null,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Axis SP Rocket Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 5.2,
        "hitpoints": 52,
        "production": {
          "costs": {
            "manpower": 1760,
            "metal": 2750,
            "oil": 2750,
            "cash": 2750,
            "food": 0
          },
          "minTimeInSeconds": 33429
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 11.8,
            "defense": 3
          },
          "vsLightArmor": {
            "attack": 8,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 5.2,
            "defense": 1.3
          },
          "vsAirplane": {
            "attack": 9.2,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 5.2,
            "defense": 1.3
          },
          "vsSubmarine": {
            "attack": 4,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 5.8,
            "defense": 1.5
          },
          "vsProvinceMorale": {
            "attack": 6.9,
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
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 52,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 52,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": null,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      }
    ],
    "Comintern": [
      {
        "unitName": "Comintern SP Rocket Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 2.7,
        "hitpoints": 25,
        "production": {
          "costs": {
            "manpower": 1360,
            "metal": 1615,
            "oil": 1615,
            "cash": 1615,
            "food": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6,
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsHeavyArmor": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 2.8,
            "defense": 0.7
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 3.3,
            "defense": 0.8
          },
          "vsProvinceMorale": {
            "attack": 4,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": null,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Comintern SP Rocket Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 4.5,
        "hitpoints": 45,
        "production": {
          "costs": {
            "manpower": 1360,
            "metal": 2125,
            "oil": 2125,
            "cash": 2125,
            "food": 0
          },
          "minTimeInSeconds": 33429
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 10.3,
            "defense": 2.6
          },
          "vsLightArmor": {
            "attack": 7,
            "defense": 1.7
          },
          "vsHeavyArmor": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsAirplane": {
            "attack": 8,
            "defense": 2
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 5,
            "defense": 1.3
          },
          "vsProvinceMorale": {
            "attack": 6,
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
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": null,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian SP Rocket Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 2.7,
        "hitpoints": 25,
        "production": {
          "costs": {
            "manpower": 1600,
            "metal": 1900,
            "oil": 1900,
            "cash": 1900,
            "food": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6,
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsHeavyArmor": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 2.8,
            "defense": 0.7
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 3.3,
            "defense": 0.8
          },
          "vsProvinceMorale": {
            "attack": 4,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.4
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.4
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": null,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Pan-Asian SP Rocket Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 4.5,
        "hitpoints": 45,
        "production": {
          "costs": {
            "manpower": 1600,
            "metal": 2500,
            "oil": 2500,
            "cash": 2500,
            "food": 0
          },
          "minTimeInSeconds": 33429
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 10.3,
            "defense": 2.6
          },
          "vsLightArmor": {
            "attack": 7,
            "defense": 1.7
          },
          "vsHeavyArmor": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsAirplane": {
            "attack": 8,
            "defense": 2
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 5,
            "defense": 1.3
          },
          "vsProvinceMorale": {
            "attack": 6,
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
            "speedModifier": 0.25,
            "strengthModifier": 0.4
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.4
          },
          "sea": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": null,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          }
        }
      }
    ]
  },
};
