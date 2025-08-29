import { IUnitType } from '@/types';

export const spAntiAirData: IUnitType = {
  genericName: 'SP Anti Air',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'M13 Multiple Gun Motor Carriage',
        level: 1,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 2.3,
        hitpoints: 22,
        production: {
          costs: {
            food: 900,
            manpower: 1000,
            cash: 1400,
            oil: 1700,
            metal: 0
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 2 },
          vsLightArmor:     { attack: 2.3, defense: 4.6 },
          vsHeavyArmor:     { attack: 1.3, defense: 2.6 },
          vsAirplane:       { attack: 4.8, defense: 9.6 },
          vsShip:           { attack: 1,   defense: 2 },
          vsSubmarine:      { attack: 1,   defense: 2 },
          vsBuildings:      { attack: 0.4, defense: 0.8 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 22,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 22,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 22,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 22,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 22,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M15 Multiple Gun Motor Carriage',
        level: 2,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 3.3,
        hitpoints: 27,
        production: {
          costs: {
            food: 1100,
            manpower: 1000,
            cash: 1600,
            oil: 1900,
            metal: 0
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 3 },
          vsLightArmor:     { attack: 3,   defense: 6 },
          vsHeavyArmor:     { attack: 2,   defense: 4 },
          vsAirplane:       { attack: 6.5, defense: 13 },
          vsShip:           { attack: 1.5, defense: 3 },
          vsSubmarine:      { attack: 1.5, defense: 3 },
          vsBuildings:      { attack: 0.6, defense: 1.2 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 27,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 27,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 27,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 27,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 27,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M16 Multiple Gun Motor Carriage',
        level: 3,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 4.4,
        hitpoints: 32,
        production: {
          costs: {
            food: 1200,
            manpower: 1100,
            cash: 1900,
            oil: 2200,
            metal: 0
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 4 },
          vsLightArmor:     { attack: 4,   defense: 8 },
          vsHeavyArmor:     { attack: 2.8, defense: 5.6 },
          vsAirplane:       { attack: 8.8, defense: 17.6 },
          vsShip:           { attack: 2,   defense: 4 },
          vsSubmarine:      { attack: 2,   defense: 4 },
          vsBuildings:      { attack: 0.8, defense: 1.6 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 32,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 32,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 32,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 32,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 32,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M19 Gun Motor Carriage',
        level: 4,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 6.2,
        hitpoints: 42,
        production: {
          costs: {
            food: 1300,
            manpower: 1100,
            cash: 2100,
            oil: 2400,
            metal: 0
          },
          minTimeInSeconds: 18000
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,    defense: 6 },
          vsLightArmor:     { attack: 5.5,  defense: 11 },
          vsHeavyArmor:     { attack: 3.8,  defense: 7.6 },
          vsAirplane:       { attack: 11.3, defense: 22.6 },
          vsShip:           { attack: 3,    defense: 6 },
          vsSubmarine:      { attack: 3,    defense: 6 },
          vsBuildings:      { attack: 1.2,  defense: 2.4 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 42,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 42,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 42,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 42,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 42,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M42 Duster',
        level: 5,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 8.4,
        hitpoints: 65,
        production: {
          costs: {
            food: 1500,
            manpower: 1100,
            cash: 2300,
            oil: 2700,
            metal: 0
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4,   defense: 8 },
          vsLightArmor:     { attack: 7.5, defense: 15 },
          vsHeavyArmor:     { attack: 5.3, defense: 10.6 },
          vsAirplane:       { attack: 14,  defense: 28 },
          vsShip:           { attack: 4,   defense: 8 },
          vsSubmarine:      { attack: 4,   defense: 8 },
          vsBuildings:      { attack: 1.8, defense: 3.6 },
          vsProvinceMorale: { attack: 0.3, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 65,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis SP Anti Air (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 2.6,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 990,
            "manpower": 1100,
            "cash": 1540,
            "oil": 1870,
            "metal": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.2,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 2.6,
            "defense": 5.3
          },
          "vsHeavyArmor": {
            "attack": 1.5,
            "defense": 3
          },
          "vsAirplane": {
            "attack": 5.5,
            "defense": 11
          },
          "vsShip": {
            "attack": 1.2,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 0.5,
            "defense": 0.9
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
            "health": 22,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Axis SP Anti Air (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 3.8,
        "hitpoints": 31,
        "production": {
          "costs": {
            "food": 1210,
            "manpower": 1100,
            "cash": 1760,
            "oil": 2090,
            "metal": 0
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.7,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 3.5,
            "defense": 6.9
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 4.6
          },
          "vsAirplane": {
            "attack": 7.5,
            "defense": 15
          },
          "vsShip": {
            "attack": 1.7,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 3.5
          },
          "vsBuildings": {
            "attack": 0.7,
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
            "health": 27,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 31,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 31,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Axis SP Anti Air (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 5.1,
        "hitpoints": 37,
        "production": {
          "costs": {
            "food": 1320,
            "manpower": 1210,
            "cash": 2090,
            "oil": 2420,
            "metal": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.3,
            "defense": 4.6
          },
          "vsLightArmor": {
            "attack": 4.6,
            "defense": 9.2
          },
          "vsHeavyArmor": {
            "attack": 3.2,
            "defense": 6.4
          },
          "vsAirplane": {
            "attack": 10.1,
            "defense": 20.2
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 4.6
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 4.6
          },
          "vsBuildings": {
            "attack": 0.9,
            "defense": 1.8
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
            "health": 32,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 37,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 37,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Axis SP Anti Air (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 7.1,
        "hitpoints": 48,
        "production": {
          "costs": {
            "food": 1430,
            "manpower": 1210,
            "cash": 2310,
            "oil": 2640,
            "metal": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.5,
            "defense": 6.9
          },
          "vsLightArmor": {
            "attack": 6.3,
            "defense": 12.6
          },
          "vsHeavyArmor": {
            "attack": 4.4,
            "defense": 8.7
          },
          "vsAirplane": {
            "attack": 13,
            "defense": 26
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 6.9
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 6.9
          },
          "vsBuildings": {
            "attack": 1.4,
            "defense": 2.8
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
            "health": 42,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 48,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 42,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 42,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 48,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Axis SP Anti Air (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 9.7,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 1650,
            "manpower": 1210,
            "cash": 2530,
            "oil": 2970,
            "metal": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.6,
            "defense": 9.2
          },
          "vsLightArmor": {
            "attack": 8.6,
            "defense": 17.3
          },
          "vsHeavyArmor": {
            "attack": 6.1,
            "defense": 12.2
          },
          "vsAirplane": {
            "attack": 16.1,
            "defense": 32.2
          },
          "vsShip": {
            "attack": 4.6,
            "defense": 9.2
          },
          "vsSubmarine": {
            "attack": 4.6,
            "defense": 9.2
          },
          "vsBuildings": {
            "attack": 2.1,
            "defense": 4.1
          },
          "vsProvinceMorale": {
            "attack": 0.3,
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
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern SP Anti Air (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 2.1,
        "hitpoints": 22,
        "production": {
          "costs": {
            "food": 765,
            "manpower": 850,
            "cash": 1190,
            "oil": 1445,
            "metal": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 2.1,
            "defense": 4.1
          },
          "vsHeavyArmor": {
            "attack": 1.2,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 4.3,
            "defense": 8.6
          },
          "vsShip": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsBuildings": {
            "attack": 0.4,
            "defense": 0.7
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
            "health": 22,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern SP Anti Air (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 3,
        "hitpoints": 27,
        "production": {
          "costs": {
            "food": 935,
            "manpower": 850,
            "cash": 1360,
            "oil": 1615,
            "metal": 0
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.4,
            "defense": 2.7
          },
          "vsLightArmor": {
            "attack": 2.7,
            "defense": 5.4
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 3.6
          },
          "vsAirplane": {
            "attack": 5.9,
            "defense": 11.7
          },
          "vsShip": {
            "attack": 1.4,
            "defense": 2.7
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 2.7
          },
          "vsBuildings": {
            "attack": 0.5,
            "defense": 1.1
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
            "health": 27,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern SP Anti Air (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 4,
        "hitpoints": 32,
        "production": {
          "costs": {
            "food": 1020,
            "manpower": 935,
            "cash": 1615,
            "oil": 1870,
            "metal": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.8,
            "defense": 3.6
          },
          "vsLightArmor": {
            "attack": 3.6,
            "defense": 7.2
          },
          "vsHeavyArmor": {
            "attack": 2.5,
            "defense": 5
          },
          "vsAirplane": {
            "attack": 7.9,
            "defense": 15.8
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 3.6
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 3.6
          },
          "vsBuildings": {
            "attack": 0.7,
            "defense": 1.4
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
            "health": 32,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern SP Anti Air (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 5.6,
        "hitpoints": 42,
        "production": {
          "costs": {
            "food": 1105,
            "manpower": 935,
            "cash": 1785,
            "oil": 2040,
            "metal": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.7,
            "defense": 5.4
          },
          "vsLightArmor": {
            "attack": 5,
            "defense": 9.9
          },
          "vsHeavyArmor": {
            "attack": 3.4,
            "defense": 6.8
          },
          "vsAirplane": {
            "attack": 10.2,
            "defense": 20.3
          },
          "vsShip": {
            "attack": 2.7,
            "defense": 5.4
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": 5.4
          },
          "vsBuildings": {
            "attack": 1.1,
            "defense": 2.2
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
            "health": 42,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 42,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 42,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 42,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 42,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern SP Anti Air (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 7.6,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1275,
            "manpower": 935,
            "cash": 1955,
            "oil": 2295,
            "metal": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.6,
            "defense": 7.2
          },
          "vsLightArmor": {
            "attack": 6.8,
            "defense": 13.5
          },
          "vsHeavyArmor": {
            "attack": 4.8,
            "defense": 9.5
          },
          "vsAirplane": {
            "attack": 12.6,
            "defense": 25.2
          },
          "vsShip": {
            "attack": 3.6,
            "defense": 7.2
          },
          "vsSubmarine": {
            "attack": 3.6,
            "defense": 7.2
          },
          "vsBuildings": {
            "attack": 1.6,
            "defense": 3.2
          },
          "vsProvinceMorale": {
            "attack": 0.3,
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
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Pan-Asian SP Anti Air (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 2.3,
        "hitpoints": 22,
        "production": {
          "costs": {
            "food": 900,
            "manpower": 1000,
            "cash": 1400,
            "oil": 1700,
            "metal": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1,
            "defense": 2
          },
          "vsLightArmor": {
            "attack": 2.3,
            "defense": 4.6
          },
          "vsHeavyArmor": {
            "attack": 1.3,
            "defense": 2.6
          },
          "vsAirplane": {
            "attack": 4.8,
            "defense": 9.6
          },
          "vsShip": {
            "attack": 1,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 1,
            "defense": 2
          },
          "vsBuildings": {
            "attack": 0.4,
            "defense": 0.8
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
            "health": 22,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian SP Anti Air (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 3.3,
        "hitpoints": 27,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 1000,
            "cash": 1600,
            "oil": 1900,
            "metal": 0
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.5,
            "defense": 3
          },
          "vsLightArmor": {
            "attack": 3,
            "defense": 6
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 4
          },
          "vsAirplane": {
            "attack": 6.5,
            "defense": 13
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 3
          },
          "vsBuildings": {
            "attack": 0.6,
            "defense": 1.2
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
            "health": 27,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian SP Anti Air (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 4.4,
        "hitpoints": 32,
        "production": {
          "costs": {
            "food": 1200,
            "manpower": 1100,
            "cash": 1900,
            "oil": 2200,
            "metal": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2,
            "defense": 4
          },
          "vsLightArmor": {
            "attack": 4,
            "defense": 8
          },
          "vsHeavyArmor": {
            "attack": 2.8,
            "defense": 5.6
          },
          "vsAirplane": {
            "attack": 8.8,
            "defense": 17.6
          },
          "vsShip": {
            "attack": 2,
            "defense": 4
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 4
          },
          "vsBuildings": {
            "attack": 0.8,
            "defense": 1.6
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
            "health": 32,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian SP Anti Air (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 6.2,
        "hitpoints": 42,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 1100,
            "cash": 2100,
            "oil": 2400,
            "metal": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3,
            "defense": 6
          },
          "vsLightArmor": {
            "attack": 5.5,
            "defense": 11
          },
          "vsHeavyArmor": {
            "attack": 3.8,
            "defense": 7.6
          },
          "vsAirplane": {
            "attack": 11.3,
            "defense": 22.6
          },
          "vsShip": {
            "attack": 3,
            "defense": 6
          },
          "vsSubmarine": {
            "attack": 3,
            "defense": 6
          },
          "vsBuildings": {
            "attack": 1.2,
            "defense": 2.4
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
            "health": 42,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 42,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 42,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 42,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 42,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian SP Anti Air (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 8.4,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1500,
            "manpower": 1100,
            "cash": 2300,
            "oil": 2700,
            "metal": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4,
            "defense": 8
          },
          "vsLightArmor": {
            "attack": 7.5,
            "defense": 15
          },
          "vsHeavyArmor": {
            "attack": 5.3,
            "defense": 10.6
          },
          "vsAirplane": {
            "attack": 14,
            "defense": 28
          },
          "vsShip": {
            "attack": 4,
            "defense": 8
          },
          "vsSubmarine": {
            "attack": 4,
            "defense": 8
          },
          "vsBuildings": {
            "attack": 1.8,
            "defense": 3.6
          },
          "vsProvinceMorale": {
            "attack": 0.3,
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
            "speedModifier": 0.25,
            "strengthModifier": null
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
