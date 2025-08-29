import { IUnitType } from '@/types';

export const railroadGunData: IUnitType = {
  genericName: 'Railroad Gun',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'BL 12-inch Railway Howitzer',
        level: 1,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 3.1,
        hitpoints: 30,
        production: {
          costs: {
            manpower: 2700,
            metal: 3400,
            oil: 1900,
            cash: 4100,
            food: 0
          },
          minTimeInSeconds: 22500
        },
        specialProperties: [ 'Ranged Attack', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4,   defense: 1 },
          vsLightArmor:     { attack: 5,   defense: 1.3 },
          vsHeavyArmor:     { attack: 6,   defense: 1.5 },
          vsAirplane:       { attack: 1.5, defense: 0.4 },
          vsShip:           { attack: 4,   defense: 1 },
          vsSubmarine:      { attack: 1.5, defense: 0.4 },
          vsBuildings:      { attack: 6.5, defense: 1.6 },
          vsProvinceMorale: { attack: 2,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: '406 mm Gun',
        level: 2,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 5.3,
        hitpoints: 50,
        production: {
          costs: {
            manpower: 2900,
            metal: 4700,
            oil: 2600,
            cash: 5600,
            food: 0
          },
          minTimeInSeconds: 33300
        },
        specialProperties: [ 'Ranged Attack', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7,   defense: 1.7 },
          vsLightArmor:     { attack: 8.5, defense: 2.1 },
          vsHeavyArmor:     { attack: 10,  defense: 2.5 },
          vsAirplane:       { attack: 2.5, defense: 0.6 },
          vsShip:           { attack: 6,   defense: 1.5 },
          vsSubmarine:      { attack: 2.5, defense: 0.6 },
          vsBuildings:      { attack: 11,  defense: 2.8 },
          vsProvinceMorale: { attack: 3.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 50,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Railroad Gun (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 3.6,
        "hitpoints": 35,
        "production": {
          "costs": {
            "manpower": 2970,
            "metal": 3740,
            "oil": 2090,
            "cash": 4510,
            "food": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.6,
            "defense": 1.2
          },
          "vsLightArmor": {
            "attack": 5.8,
            "defense": 1.5
          },
          "vsHeavyArmor": {
            "attack": 6.9,
            "defense": 1.7
          },
          "vsAirplane": {
            "attack": 1.7,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 4.6,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 7.5,
            "defense": 1.8
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
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
        "unitName": "Axis Railroad Gun (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 6.1,
        "hitpoints": 57,
        "production": {
          "costs": {
            "manpower": 3190,
            "metal": 5170,
            "oil": 2860,
            "cash": 6160,
            "food": 0
          },
          "minTimeInSeconds": 47571
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8,
            "defense": 2
          },
          "vsLightArmor": {
            "attack": 9.8,
            "defense": 2.4
          },
          "vsHeavyArmor": {
            "attack": 11.5,
            "defense": 2.9
          },
          "vsAirplane": {
            "attack": 2.9,
            "defense": 0.7
          },
          "vsShip": {
            "attack": 6.9,
            "defense": 1.7
          },
          "vsSubmarine": {
            "attack": 2.9,
            "defense": 0.7
          },
          "vsBuildings": {
            "attack": 12.6,
            "defense": 3.2
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
            "health": 50,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 50,
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
        "unitName": "Comintern Railroad Gun (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 2.8,
        "hitpoints": 30,
        "production": {
          "costs": {
            "manpower": 2295,
            "metal": 2890,
            "oil": 1615,
            "cash": 3485,
            "food": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.6,
            "defense": 0.9
          },
          "vsLightArmor": {
            "attack": 4.5,
            "defense": 1.2
          },
          "vsHeavyArmor": {
            "attack": 5.4,
            "defense": 1.4
          },
          "vsAirplane": {
            "attack": 1.4,
            "defense": 0.4
          },
          "vsShip": {
            "attack": 3.6,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 0.4
          },
          "vsBuildings": {
            "attack": 5.9,
            "defense": 1.4
          },
          "vsProvinceMorale": {
            "attack": 1.8,
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
            "strengthModifier": null
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
        "unitName": "Comintern Railroad Gun (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 4.8,
        "hitpoints": 50,
        "production": {
          "costs": {
            "manpower": 2465,
            "metal": 3995,
            "oil": 2210,
            "cash": 4760,
            "food": 0
          },
          "minTimeInSeconds": 47571
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.3,
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 7.7,
            "defense": 1.9
          },
          "vsHeavyArmor": {
            "attack": 9,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 5.4,
            "defense": 1.4
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 9.9,
            "defense": 2.5
          },
          "vsProvinceMorale": {
            "attack": 3.2,
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
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 50,
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
        "unitName": "Pan-Asian Railroad Gun (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 3.1,
        "hitpoints": 30,
        "production": {
          "costs": {
            "manpower": 2700,
            "metal": 3400,
            "oil": 1900,
            "cash": 4100,
            "food": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 5,
            "defense": 1.3
          },
          "vsHeavyArmor": {
            "attack": 6,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 1.5,
            "defense": 0.4
          },
          "vsShip": {
            "attack": 4,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 0.4
          },
          "vsBuildings": {
            "attack": 6.5,
            "defense": 1.6
          },
          "vsProvinceMorale": {
            "attack": 2,
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
            "strengthModifier": null
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
        "unitName": "Pan-Asian Railroad Gun (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 5.3,
        "hitpoints": 50,
        "production": {
          "costs": {
            "manpower": 2900,
            "metal": 4700,
            "oil": 2600,
            "cash": 5600,
            "food": 0
          },
          "minTimeInSeconds": 47571
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7,
            "defense": 1.7
          },
          "vsLightArmor": {
            "attack": 8.5,
            "defense": 2.1
          },
          "vsHeavyArmor": {
            "attack": 10,
            "defense": 2.5
          },
          "vsAirplane": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 6,
            "defense": 1.5
          },
          "vsSubmarine": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 11,
            "defense": 2.8
          },
          "vsProvinceMorale": {
            "attack": 3.5,
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
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 50,
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
