import { IUnitType } from '@/types';

export const rocketFighterData: IUnitType = {
  genericName: 'Rocket Fighter',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Northrop XP-79',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 2.5,
        hitpoints: 30,
        production: {
          costs: {
            food: 1100,
            manpower: 750,
            metal: 0,
            cash: 1400,
            oil: 2000
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Anti-Air', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,   defense: 3 },
          vsLightArmor:     { attack: 2,   defense: 1 },
          vsHeavyArmor:     { attack: 2,   defense: 1 },
          vsAirplane:       { attack: 22,  defense: 11 },
          vsShip:           { attack: 2,   defense: 1 },
          vsSubmarine:      { attack: 2,   defense: 1 },
          vsBuildings:      { attack: 0.8, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Bell X-1',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 3.5,
        hitpoints: 50,
        production: {
          costs: {
            food: 1400,
            manpower: 800,
            metal: 0,
            cash: 1700,
            oil: 2600
          },
          minTimeInSeconds: 17100
        },
        specialProperties: [ 'Anti-Air', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8,   defense: 4 },
          vsLightArmor:     { attack: 3,   defense: 1.5 },
          vsHeavyArmor:     { attack: 3,   defense: 1.5 },
          vsAirplane:       { attack: 36,  defense: 18 },
          vsShip:           { attack: 3,   defense: 1.5 },
          vsSubmarine:      { attack: 3,   defense: 1.5 },
          vsBuildings:      { attack: 1.2, defense: 0.6 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Rocket Fighter (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 2.9,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1210,
            "manpower": 825,
            "metal": 0,
            "cash": 1540,
            "oil": 2200
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Air",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.9,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsAirplane": {
            "attack": 28.6,
            "defense": 14.3
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 0.9,
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
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
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Axis Rocket Fighter (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 4,
        "hitpoints": 57,
        "production": {
          "costs": {
            "food": 1540,
            "manpower": 880,
            "metal": 0,
            "cash": 1870,
            "oil": 2860
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Anti-Air",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9.2,
            "defense": 4.6
          },
          "vsLightArmor": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsAirplane": {
            "attack": 46.8,
            "defense": 23.4
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsBuildings": {
            "attack": 1.4,
            "defense": 0.7
          },
          "vsProvinceMorale": {
            "attack": 0.2,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          }
        }
      }
    ],
    "Comintern": [
      {
        "unitName": "Comintern Rocket Fighter (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 2.3,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 935,
            "manpower": 638,
            "metal": 0,
            "cash": 1190,
            "oil": 1700
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Air",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.4,
            "defense": 2.7
          },
          "vsLightArmor": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsAirplane": {
            "attack": 19.8,
            "defense": 9.9
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 0.7,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
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
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Comintern Rocket Fighter (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 3.2,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1190,
            "manpower": 680,
            "metal": 0,
            "cash": 1445,
            "oil": 2210
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Anti-Air",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.2,
            "defense": 3.6
          },
          "vsLightArmor": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsHeavyArmor": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsAirplane": {
            "attack": 32.4,
            "defense": 16.2
          },
          "vsShip": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsBuildings": {
            "attack": 1.1,
            "defense": 0.5
          },
          "vsProvinceMorale": {
            "attack": 0.2,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          }
        }
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Rocket Fighter (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 2.5,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 750,
            "metal": 0,
            "cash": 1400,
            "oil": 2000
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Air",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6,
            "defense": 3
          },
          "vsLightArmor": {
            "attack": 2,
            "defense": 1
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 1
          },
          "vsAirplane": {
            "attack": 22,
            "defense": 11
          },
          "vsShip": {
            "attack": 2,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 0.8,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
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
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Pan-Asian Rocket Fighter (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 3.5,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1400,
            "manpower": 800,
            "metal": 0,
            "cash": 1700,
            "oil": 2600
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Anti-Air",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8,
            "defense": 4
          },
          "vsLightArmor": {
            "attack": 3,
            "defense": 1.5
          },
          "vsHeavyArmor": {
            "attack": 3,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 36,
            "defense": 18
          },
          "vsShip": {
            "attack": 3,
            "defense": 1.5
          },
          "vsSubmarine": {
            "attack": 3,
            "defense": 1.5
          },
          "vsBuildings": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsProvinceMorale": {
            "attack": 0.2,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "enemyTerritory": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          }
        }
      }
    ]
  },
};
