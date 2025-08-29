import { IUnitType } from '@/types';

export const rocketArtilleryData: IUnitType = {
  genericName: 'Rocket Artillery',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'T27',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 1.5,
        hitpoints: 15,
        production: {
          costs: {
            food: 1300,
            manpower: 1000,
            metal: 1800,
            cash: 1400,
            oil: 0
          },
          minTimeInSeconds: 10800
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3.5, defense: 0.9 },
          vsLightArmor:     { attack: 2.2, defense: 0.6 },
          vsHeavyArmor:     { attack: 1.5, defense: 0.4 },
          vsAirplane:       { attack: 2.8, defense: 0.7 },
          vsShip:           { attack: 1.8, defense: 0.4 },
          vsSubmarine:      { attack: 1.5, defense: 0.4 },
          vsBuildings:      { attack: 2,   defense: 0.5 },
          vsProvinceMorale: { attack: 2.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 15,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Land Mattress',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 2.7,
        hitpoints: 25,
        production: {
          costs: {
            food: 1400,
            manpower: 1000,
            metal: 2100,
            cash: 1600,
            oil: 0
          },
          minTimeInSeconds: 12600
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
          plains:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 25,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'T66',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 4.5,
        hitpoints: 35,
        production: {
          costs: {
            food: 1800,
            manpower: 1100,
            metal: 2600,
            cash: 2000,
            oil: 0
          },
          minTimeInSeconds: 21600
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
          plains:         { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 35,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Rocket Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 1.7,
        "hitpoints": 17,
        "production": {
          "costs": {
            "food": 1430,
            "manpower": 1100,
            "metal": 1980,
            "cash": 1540,
            "oil": 0
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 2.5,
            "defense": 0.7
          },
          "vsHeavyArmor": {
            "attack": 1.7,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsShip": {
            "attack": 2.1,
            "defense": 0.5
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 2.3,
            "defense": 0.6
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Axis Rocket Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 3.1,
        "hitpoints": 29,
        "production": {
          "costs": {
            "food": 1540,
            "manpower": 1100,
            "metal": 2310,
            "cash": 1760,
            "oil": 0
          },
          "minTimeInSeconds": 18000
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 29,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 29,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Axis Rocket Artillery (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 5.2,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1980,
            "manpower": 1210,
            "metal": 2860,
            "cash": 2200,
            "oil": 0
          },
          "minTimeInSeconds": 30857
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
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Comintern Rocket Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 1.4,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 1105,
            "manpower": 850,
            "metal": 1530,
            "cash": 1190,
            "oil": 0
          },
          "minTimeInSeconds": 12343
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsLightArmor": {
            "attack": 2,
            "defense": 0.5
          },
          "vsHeavyArmor": {
            "attack": 1.4,
            "defense": 0.4
          },
          "vsAirplane": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 1.6,
            "defense": 0.4
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 0.4
          },
          "vsBuildings": {
            "attack": 1.8,
            "defense": 0.5
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Comintern Rocket Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 2.4,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 1190,
            "manpower": 850,
            "metal": 1785,
            "cash": 1360,
            "oil": 0
          },
          "minTimeInSeconds": 14400
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.4,
            "defense": 1.4
          },
          "vsLightArmor": {
            "attack": 4.1,
            "defense": 1
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsShip": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 3,
            "defense": 0.7
          },
          "vsProvinceMorale": {
            "attack": 3.6,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Comintern Rocket Artillery (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 4.1,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1530,
            "manpower": 935,
            "metal": 2210,
            "cash": 1700,
            "oil": 0
          },
          "minTimeInSeconds": 24686
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9.3,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 6.3,
            "defense": 1.5
          },
          "vsHeavyArmor": {
            "attack": 4.1,
            "defense": 1
          },
          "vsAirplane": {
            "attack": 7.2,
            "defense": 1.8
          },
          "vsShip": {
            "attack": 4.1,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsBuildings": {
            "attack": 4.5,
            "defense": 1.2
          },
          "vsProvinceMorale": {
            "attack": 5.4,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Pan-Asian Rocket Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 1.5,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 1000,
            "metal": 1800,
            "cash": 1400,
            "oil": 0
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.5,
            "defense": 0.9
          },
          "vsLightArmor": {
            "attack": 2.2,
            "defense": 0.6
          },
          "vsHeavyArmor": {
            "attack": 1.5,
            "defense": 0.4
          },
          "vsAirplane": {
            "attack": 2.8,
            "defense": 0.7
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 0.4
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 0.4
          },
          "vsBuildings": {
            "attack": 2,
            "defense": 0.5
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.7
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Pan-Asian Rocket Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 2.7,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 1400,
            "manpower": 1000,
            "metal": 2100,
            "cash": 1600,
            "oil": 0
          },
          "minTimeInSeconds": 18000
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.7
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Pan-Asian Rocket Artillery (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 4.5,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1800,
            "manpower": 1100,
            "metal": 2600,
            "cash": 2000,
            "oil": 0
          },
          "minTimeInSeconds": 30857
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
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.7
          },
          "forest": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
