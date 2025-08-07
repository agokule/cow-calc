import { IUnitType } from '@/types';

export const commandosData: IUnitType = {
  genericName: 'Commandos',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Special Service Brigade',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 5.8,
        hitpoints: 30,
        production: {
          costs: {
            food: 2200,
            manpower: 1100,
            metal: 0,
            cash: 2200,
            oil: 1000
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Stealth', 'Offensive', 'Storm Fortification' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8,   defense: 4 },
          vsLightArmor:     { attack: 9,   defense: 4.5 },
          vsHeavyArmor:     { attack: 6,   defense: 3 },
          vsAirplane:       { attack: 2,   defense: 1 },
          vsShip:           { attack: 2,   defense: 1 },
          vsSubmarine:      { attack: 1,   defense: 0.5 },
          vsBuildings:      { attack: 4,   defense: 2 },
          vsProvinceMorale: { attack: 0.4, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Marine Raiders',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 7.8,
        hitpoints: 40,
        production: {
          costs: {
            food: 2500,
            manpower: 1100,
            metal: 0,
            cash: 2500,
            oil: 1200
          },
          minTimeInSeconds: 18900
        },
        specialProperties: [ 'Stealth', 'Offensive', 'Storm Fortification' ],
        combatStatistics: {
          vsUnarmored:      { attack: 11,  defense: 5.5 },
          vsLightArmor:     { attack: 12,  defense: 6 },
          vsHeavyArmor:     { attack: 8,   defense: 4 },
          vsAirplane:       { attack: 2.5, defense: 1.2 },
          vsShip:           { attack: 2.5, defense: 1.2 },
          vsSubmarine:      { attack: 1.5, defense: 0.8 },
          vsBuildings:      { attack: 6,   defense: 3 },
          vsProvinceMorale: { attack: 0.6, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          urban:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Special Air Service',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 10.5,
        hitpoints: 50,
        production: {
          costs: {
            food: 2800,
            manpower: 1100,
            metal: 0,
            cash: 2800,
            oil: 1300
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Stealth', 'Offensive', 'Storm Fortification' ],
        combatStatistics: {
          vsUnarmored:      { attack: 14.5, defense: 7.3 },
          vsLightArmor:     { attack: 16.5, defense: 8.3 },
          vsHeavyArmor:     { attack: 11,   defense: 5.5 },
          vsAirplane:       { attack: 3.5,  defense: 1.8 },
          vsShip:           { attack: 3.5,  defense: 1.8 },
          vsSubmarine:      { attack: 2.5,  defense: 1.3 },
          vsBuildings:      { attack: 8.5,  defense: 4.2 },
          vsProvinceMorale: { attack: 0.9,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          urban:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Army Rangers',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 14.5,
        hitpoints: 65,
        production: {
          costs: {
            food: 3200,
            manpower: 1200,
            metal: 0,
            cash: 3200,
            oil: 1500
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Stealth', 'Offensive', 'Storm Fortification' ],
        combatStatistics: {
          vsUnarmored:      { attack: 20,  defense: 10 },
          vsLightArmor:     { attack: 23,  defense: 11.5 },
          vsHeavyArmor:     { attack: 15,  defense: 7.5 },
          vsAirplane:       { attack: 5,   defense: 2.5 },
          vsShip:           { attack: 5,   defense: 2.5 },
          vsSubmarine:      { attack: 3.5, defense: 1.7 },
          vsBuildings:      { attack: 12,  defense: 6 },
          vsProvinceMorale: { attack: 1.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          urban:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Commandos (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 6.7,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 2420,
            "manpower": 1210,
            "metal": 0,
            "cash": 2420,
            "oil": 1100
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8,
            "defense": 4
          },
          "vsLightArmor": {
            "attack": 10.4,
            "defense": 5.2
          },
          "vsHeavyArmor": {
            "attack": 6.9,
            "defense": 3.5
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsProvinceMorale": {
            "attack": 0.5,
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
            "health": 35,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Axis Commandos (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 9,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 2750,
            "manpower": 1210,
            "metal": 0,
            "cash": 2750,
            "oil": 1320
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 11,
            "defense": 5.5
          },
          "vsLightArmor": {
            "attack": 13.8,
            "defense": 6.9
          },
          "vsHeavyArmor": {
            "attack": 9.2,
            "defense": 4.6
          },
          "vsAirplane": {
            "attack": 2.9,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 2.9,
            "defense": 1.4
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 6.9,
            "defense": 3.5
          },
          "vsProvinceMorale": {
            "attack": 0.7,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "urban": {
            "health": 40,
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
        "unitName": "Axis Commandos (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 12.1,
        "hitpoints": 57,
        "production": {
          "costs": {
            "food": 3080,
            "manpower": 1210,
            "metal": 0,
            "cash": 3080,
            "oil": 1430
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 14.5,
            "defense": 7.3
          },
          "vsLightArmor": {
            "attack": 19,
            "defense": 9.5
          },
          "vsHeavyArmor": {
            "attack": 12.6,
            "defense": 6.3
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 2.1
          },
          "vsShip": {
            "attack": 4,
            "defense": 2.1
          },
          "vsSubmarine": {
            "attack": 2.9,
            "defense": 1.5
          },
          "vsBuildings": {
            "attack": 9.8,
            "defense": 4.8
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
            "health": 57,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 57,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
      },
      {
        "unitName": "Axis Commandos (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 16.7,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 3520,
            "manpower": 1320,
            "metal": 0,
            "cash": 3520,
            "oil": 1650
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 20,
            "defense": 10
          },
          "vsLightArmor": {
            "attack": 26.5,
            "defense": 13.2
          },
          "vsHeavyArmor": {
            "attack": 17.3,
            "defense": 8.6
          },
          "vsAirplane": {
            "attack": 5.8,
            "defense": 2.9
          },
          "vsShip": {
            "attack": 5.8,
            "defense": 2.9
          },
          "vsSubmarine": {
            "attack": 4,
            "defense": 2
          },
          "vsBuildings": {
            "attack": 13.8,
            "defense": 6.9
          },
          "vsProvinceMorale": {
            "attack": 1.4,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "urban": {
            "health": 65,
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
        "unitName": "Comintern Commandos (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 5.2,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1870,
            "manpower": 935,
            "metal": 0,
            "cash": 1870,
            "oil": 850
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.3,
            "defense": 3.1
          },
          "vsLightArmor": {
            "attack": 8.1,
            "defense": 4.1
          },
          "vsHeavyArmor": {
            "attack": 5.4,
            "defense": 2.7
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsProvinceMorale": {
            "attack": 0.4,
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
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Commandos (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 7,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 2125,
            "manpower": 935,
            "metal": 0,
            "cash": 2125,
            "oil": 1020
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8.6,
            "defense": 4.3
          },
          "vsLightArmor": {
            "attack": 10.8,
            "defense": 5.4
          },
          "vsHeavyArmor": {
            "attack": 7.2,
            "defense": 3.6
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 1.1
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 1.1
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 0.7
          },
          "vsBuildings": {
            "attack": 5.4,
            "defense": 2.7
          },
          "vsProvinceMorale": {
            "attack": 0.5,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "urban": {
            "health": 40,
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
        "unitName": "Comintern Commandos (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 9.5,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 2380,
            "manpower": 935,
            "metal": 0,
            "cash": 2380,
            "oil": 1105
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 11.3,
            "defense": 5.7
          },
          "vsLightArmor": {
            "attack": 14.9,
            "defense": 7.5
          },
          "vsHeavyArmor": {
            "attack": 9.9,
            "defense": 5
          },
          "vsAirplane": {
            "attack": 3.2,
            "defense": 1.6
          },
          "vsShip": {
            "attack": 3.2,
            "defense": 1.6
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 7.7,
            "defense": 3.8
          },
          "vsProvinceMorale": {
            "attack": 0.8,
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
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
      },
      {
        "unitName": "Comintern Commandos (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 13.1,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 2720,
            "manpower": 1020,
            "metal": 0,
            "cash": 2720,
            "oil": 1275
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 15.7,
            "defense": 7.8
          },
          "vsLightArmor": {
            "attack": 20.7,
            "defense": 10.4
          },
          "vsHeavyArmor": {
            "attack": 13.5,
            "defense": 6.8
          },
          "vsAirplane": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 3.2,
            "defense": 1.5
          },
          "vsBuildings": {
            "attack": 10.8,
            "defense": 5.4
          },
          "vsProvinceMorale": {
            "attack": 1.1,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "urban": {
            "health": 65,
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
        "unitName": "Pan-Asian Commandos (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 5.8,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 2200,
            "manpower": 1100,
            "metal": 0,
            "cash": 2200,
            "oil": 1000
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.0,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 9,
            "defense": 4.5
          },
          "vsHeavyArmor": {
            "attack": 6,
            "defense": 3
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 1
          },
          "vsShip": {
            "attack": 2,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 1,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 4,
            "defense": 2
          },
          "vsProvinceMorale": {
            "attack": 0.4,
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
            "speedModifier": -0.5,
            "strengthModifier": 0.7
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Commandos (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 7.8,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 2500,
            "manpower": 1100,
            "metal": 0,
            "cash": 2500,
            "oil": 1200
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9.6,
            "defense": 4.8
          },
          "vsLightArmor": {
            "attack": 12,
            "defense": 6
          },
          "vsHeavyArmor": {
            "attack": 8,
            "defense": 4
          },
          "vsAirplane": {
            "attack": 2.5,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 2.5,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 0.8
          },
          "vsBuildings": {
            "attack": 6,
            "defense": 3
          },
          "vsProvinceMorale": {
            "attack": 0.6,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.7
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "urban": {
            "health": 40,
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
        "unitName": "Pan-Asian Commandos (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 10.5,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 2800,
            "manpower": 1100,
            "metal": 0,
            "cash": 2800,
            "oil": 1300
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12.6,
            "defense": 6.3
          },
          "vsLightArmor": {
            "attack": 16.5,
            "defense": 8.3
          },
          "vsHeavyArmor": {
            "attack": 11,
            "defense": 5.5
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 1.8
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 2.5,
            "defense": 1.3
          },
          "vsBuildings": {
            "attack": 8.5,
            "defense": 4.2
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
            "speedModifier": -0.5,
            "strengthModifier": 0.7
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
      },
      {
        "unitName": "Pan-Asian Commandos (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 14.5,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 3200,
            "manpower": 1200,
            "metal": 0,
            "cash": 3200,
            "oil": 1500
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Stealth",
          "Offensive",
          "Storm Fortification"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 17.4,
            "defense": 8.7
          },
          "vsLightArmor": {
            "attack": 23,
            "defense": 11.5
          },
          "vsHeavyArmor": {
            "attack": 15,
            "defense": 7.5
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 2.5
          },
          "vsShip": {
            "attack": 5,
            "defense": 2.5
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsBuildings": {
            "attack": 12,
            "defense": 6
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
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.7
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "urban": {
            "health": 65,
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
