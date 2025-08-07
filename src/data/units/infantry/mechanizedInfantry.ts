import { IUnitType } from '@/types';

export const mechanizedInfantryData: IUnitType = {
  genericName: 'Mechanized Infantry',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Mech. Infantry Type 1940',
        level: 1,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 5.5,
        hitpoints: 39,
        production: {
          costs: {
            food: 1100,
            manpower: 1300,
            metal: 1200,
            cash: 1400,
            oil: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8.5, defense: 8.5 },
          vsLightArmor:     { attack: 4.5, defense: 4.5 },
          vsHeavyArmor:     { attack: 3.5, defense: 3.5 },
          vsAirplane:       { attack: 3.5, defense: 3.5 },
          vsShip:           { attack: 2,   defense: 2 },
          vsSubmarine:      { attack: 2.3, defense: 2.3 },
          vsBuildings:      { attack: 0.6, defense: 0.6 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 39,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 39,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 39,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 39,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 39,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mech. Infantry Type 1944',
        level: 2,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 7.6,
        hitpoints: 50,
        production: {
          costs: {
            food: 1200,
            manpower: 1500,
            metal: 1400,
            cash: 1700,
            oil: 0
          },
          minTimeInSeconds: 18000
        },
        specialProperties: [ 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 11.5, defense: 11.5 },
          vsLightArmor:     { attack: 6.5,  defense: 6.5 },
          vsHeavyArmor:     { attack: 4.8,  defense: 4.8 },
          vsAirplane:       { attack: 4.8,  defense: 4.8 },
          vsShip:           { attack: 3,    defense: 3 },
          vsSubmarine:      { attack: 3,    defense: 3 },
          vsBuildings:      { attack: 0.8,  defense: 0.8 },
          vsProvinceMorale: { attack: 0.1,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 50,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mech. Infantry Type 1947',
        level: 3,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 9.9,
        hitpoints: 61,
        production: {
          costs: {
            food: 1200,
            manpower: 1700,
            metal: 1500,
            cash: 1900,
            oil: 0
          },
          minTimeInSeconds: 20100
        },
        specialProperties: [ 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 14.5, defense: 14.5 },
          vsLightArmor:     { attack: 8.8,  defense: 8.8 },
          vsHeavyArmor:     { attack: 6.5,  defense: 6.5 },
          vsAirplane:       { attack: 6.5,  defense: 6.5 },
          vsShip:           { attack: 4.5,  defense: 4.5 },
          vsSubmarine:      { attack: 4.5,  defense: 4.5 },
          vsBuildings:      { attack: 1.2,  defense: 1.2 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 61,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 61,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 61,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 61,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 61,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mech. Infantry Type 1950',
        level: 4,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 13.1,
        hitpoints: 77,
        production: {
          costs: {
            food: 1200,
            manpower: 1900,
            metal: 1700,
            cash: 2100,
            oil: 0
          },
          minTimeInSeconds: 22500
        },
        specialProperties: [ 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 19,   defense: 19 },
          vsLightArmor:     { attack: 11.5, defense: 11.5 },
          vsHeavyArmor:     { attack: 8.8,  defense: 8.8 },
          vsAirplane:       { attack: 8.8,  defense: 8.8 },
          vsShip:           { attack: 6.8,  defense: 6.8 },
          vsSubmarine:      { attack: 6,    defense: 6 },
          vsBuildings:      { attack: 1.8,  defense: 1.8 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 77,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 77,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 77,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 77,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 77,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mech. Infantry Type 1952',
        level: 5,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 16.5,
        hitpoints: 94,
        production: {
          costs: {
            food: 1300,
            manpower: 2000,
            metal: 1800,
            cash: 2400,
            oil: 0
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 23.5, defense: 23.5 },
          vsLightArmor:     { attack: 14.5, defense: 14.5 },
          vsHeavyArmor:     { attack: 11.5, defense: 11.5 },
          vsAirplane:       { attack: 11.5, defense: 11.5 },
          vsShip:           { attack: 8.5,  defense: 8.5 },
          vsSubmarine:      { attack: 8.5,  defense: 8.5 },
          vsBuildings:      { attack: 2.8,  defense: 2.8 },
          vsProvinceMorale: { attack: 0.3,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 94,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 94,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 94,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 94,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 94,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Mechanized Infantry (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 6.3,
        "hitpoints": 41,
        "production": {
          "costs": {
            "food": 1344,
            "manpower": 1589,
            "metal": 1467,
            "cash": 1711,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9.8,
            "defense": 9.8
          },
          "vsLightArmor": {
            "attack": 5.2,
            "defense": 5.2
          },
          "vsHeavyArmor": {
            "attack": 4,
            "defense": 4
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 4
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 2.6,
            "defense": 2.6
          },
          "vsBuildings": {
            "attack": 0.7,
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
            "health": 39,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 39,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 39,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 39,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 39,
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
        "unitName": "Axis Mechanized Infantry (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 8.7,
        "hitpoints": 52,
        "production": {
          "costs": {
            "food": 1467,
            "manpower": 1833,
            "metal": 1711,
            "cash": 2078,
            "oil": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 13.2,
            "defense": 13.2
          },
          "vsLightArmor": {
            "attack": 7.5,
            "defense": 7.5
          },
          "vsHeavyArmor": {
            "attack": 5.5,
            "defense": 5.5
          },
          "vsAirplane": {
            "attack": 5.5,
            "defense": 5.5
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsBuildings": {
            "attack": 0.9,
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
            "health": 50,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
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
        "unitName": "Axis Mechanized Infantry (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 11.4,
        "hitpoints": 64,
        "production": {
          "costs": {
            "food": 1467,
            "manpower": 2078,
            "metal": 1833,
            "cash": 2322,
            "oil": 0
          },
          "minTimeInSeconds": 28714
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 16.7,
            "defense": 16.7
          },
          "vsLightArmor": {
            "attack": 10.1,
            "defense": 10.1
          },
          "vsHeavyArmor": {
            "attack": 7.5,
            "defense": 7.5
          },
          "vsAirplane": {
            "attack": 7.5,
            "defense": 7.5
          },
          "vsShip": {
            "attack": 5.2,
            "defense": 5.2
          },
          "vsSubmarine": {
            "attack": 5.2,
            "defense": 5.2
          },
          "vsBuildings": {
            "attack": 1.4,
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
            "health": 61,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 61,
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
        "unitName": "Axis Mechanized Infantry (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 15.1,
        "hitpoints": 81,
        "production": {
          "costs": {
            "food": 1467,
            "manpower": 2322,
            "metal": 2078,
            "cash": 2567,
            "oil": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 21.8,
            "defense": 21.8
          },
          "vsLightArmor": {
            "attack": 13.2,
            "defense": 13.2
          },
          "vsHeavyArmor": {
            "attack": 10.1,
            "defense": 10.1
          },
          "vsAirplane": {
            "attack": 10.1,
            "defense": 10.1
          },
          "vsShip": {
            "attack": 7.8,
            "defense": 7.8
          },
          "vsSubmarine": {
            "attack": 6.9,
            "defense": 6.9
          },
          "vsBuildings": {
            "attack": 2.1,
            "defense": 2.1
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
            "health": 77,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 77,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 77,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 77,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 77,
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
        "unitName": "Axis Mechanized Infantry (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 19,
        "hitpoints": 98,
        "production": {
          "costs": {
            "food": 1589,
            "manpower": 2444,
            "metal": 2200,
            "cash": 2933,
            "oil": 0
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 27,
            "defense": 27
          },
          "vsLightArmor": {
            "attack": 16.7,
            "defense": 16.7
          },
          "vsHeavyArmor": {
            "attack": 13.2,
            "defense": 13.2
          },
          "vsAirplane": {
            "attack": 13.2,
            "defense": 13.2
          },
          "vsShip": {
            "attack": 9.8,
            "defense": 9.8
          },
          "vsSubmarine": {
            "attack": 9.8,
            "defense": 9.8
          },
          "vsBuildings": {
            "attack": 3.2,
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
            "health": 94,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 94,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 94,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 94,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 94,
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
        "unitName": "Comintern Mechanized Infantry (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 5,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1039,
            "manpower": 1228,
            "metal": 1133,
            "cash": 1322,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.7,
            "defense": 7.7
          },
          "vsLightArmor": {
            "attack": 4.1,
            "defense": 4.1
          },
          "vsHeavyArmor": {
            "attack": 3.2,
            "defense": 3.2
          },
          "vsAirplane": {
            "attack": 3.2,
            "defense": 3.2
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 2.1,
            "defense": 2.1
          },
          "vsBuildings": {
            "attack": 0.5,
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
            "health": 39,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 39,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 39,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 39,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 39,
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
        "unitName": "Comintern Mechanized Infantry (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 6.8,
        "hitpoints": 45,
        "production": {
          "costs": {
            "food": 1133,
            "manpower": 1417,
            "metal": 1322,
            "cash": 1606,
            "oil": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 10.4,
            "defense": 10.4
          },
          "vsLightArmor": {
            "attack": 5.9,
            "defense": 5.9
          },
          "vsHeavyArmor": {
            "attack": 4.3,
            "defense": 4.3
          },
          "vsAirplane": {
            "attack": 4.3,
            "defense": 4.3
          },
          "vsShip": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsBuildings": {
            "attack": 0.7,
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
            "health": 50,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
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
        "unitName": "Comintern Mechanized Infantry (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 8.9,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 1133,
            "manpower": 1606,
            "metal": 1417,
            "cash": 1794,
            "oil": 0
          },
          "minTimeInSeconds": 28714
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 13.1,
            "defense": 13.1
          },
          "vsLightArmor": {
            "attack": 7.9,
            "defense": 7.9
          },
          "vsHeavyArmor": {
            "attack": 5.9,
            "defense": 5.9
          },
          "vsAirplane": {
            "attack": 5.9,
            "defense": 5.9
          },
          "vsShip": {
            "attack": 4.1,
            "defense": 4.1
          },
          "vsSubmarine": {
            "attack": 4.1,
            "defense": 4.1
          },
          "vsBuildings": {
            "attack": 1.1,
            "defense": 1.1
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
            "health": 61,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 61,
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
        "unitName": "Comintern Mechanized Infantry (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 11.8,
        "hitpoints": 70,
        "production": {
          "costs": {
            "food": 1133,
            "manpower": 1794,
            "metal": 1606,
            "cash": 1983,
            "oil": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 17.1,
            "defense": 17.1
          },
          "vsLightArmor": {
            "attack": 10.4,
            "defense": 10.4
          },
          "vsHeavyArmor": {
            "attack": 7.9,
            "defense": 7.9
          },
          "vsAirplane": {
            "attack": 7.9,
            "defense": 7.9
          },
          "vsShip": {
            "attack": 6.1,
            "defense": 6.1
          },
          "vsSubmarine": {
            "attack": 5.4,
            "defense": 5.4
          },
          "vsBuildings": {
            "attack": 1.6,
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
            "health": 77,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 77,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 77,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 77,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 77,
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
        "unitName": "Comintern Mechanized Infantry (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 14.9,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 1228,
            "manpower": 1889,
            "metal": 1700,
            "cash": 2267,
            "oil": 0
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 21.2,
            "defense": 21.2
          },
          "vsLightArmor": {
            "attack": 13.1,
            "defense": 13.1
          },
          "vsHeavyArmor": {
            "attack": 10.4,
            "defense": 10.4
          },
          "vsAirplane": {
            "attack": 10.4,
            "defense": 10.4
          },
          "vsShip": {
            "attack": 7.7,
            "defense": 7.7
          },
          "vsSubmarine": {
            "attack": 7.7,
            "defense": 7.7
          },
          "vsBuildings": {
            "attack": 2.5,
            "defense": 2.5
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
            "health": 94,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 94,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 94,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 94,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 94,
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
        "unitName": "Pan-Asian Mechanized Infantry (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 5.5,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1222,
            "manpower": 1444,
            "metal": 1333,
            "cash": 1555,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8.5,
            "defense": 8.5
          },
          "vsLightArmor": {
            "attack": 4.5,
            "defense": 4.5
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 2,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 0.6,
            "defense": 0.6
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
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 39,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 39,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 39,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 35,
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
        "unitName": "Pan-Asian Mechanized Infantry (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 7.6,
        "hitpoints": 45,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 1600,
            "metal": 1500,
            "cash": 1800,
            "oil": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 11.5,
            "defense": 11.5
          },
          "vsLightArmor": {
            "attack": 6.5,
            "defense": 6.5
          },
          "vsHeavyArmor": {
            "attack": 4.8,
            "defense": 4.8
          },
          "vsAirplane": {
            "attack": 4.8,
            "defense": 4.8
          },
          "vsShip": {
            "attack": 3,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 3,
            "defense": 3
          },
          "vsBuildings": {
            "attack": 0.8,
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
            "health": 45.45454545454545,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.45
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
            "health": 45.45454545454545,
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
        "unitName": "Pan-Asian Mechanized Infantry (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 9.9,
        "hitpoints": 55.45454545454545,
        "production": {
          "costs": {
            "food": 1333.3333333333333,
            "manpower": 1888.888888888889,
            "metal": 1666.6666666666665,
            "cash": 2111.111111111111,
            "oil": 0
          },
          "minTimeInSeconds": 28714
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 14.5,
            "defense": 14.5
          },
          "vsLightArmor": {
            "attack": 8.8,
            "defense": 8.8
          },
          "vsHeavyArmor": {
            "attack": 6.5,
            "defense": 6.5
          },
          "vsAirplane": {
            "attack": 6.5,
            "defense": 6.5
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 4.5
          },
          "vsSubmarine": {
            "attack": 4.5,
            "defense": 4.5
          },
          "vsBuildings": {
            "attack": 1.2,
            "defense": 1.2
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
            "health": 55.45454545454545,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 55.45454545454545,
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
        "unitName": "Pan-Asian Mechanized Infantry (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 13.1,
        "hitpoints": 70,
        "production": {
          "costs": {
            "food": 1333.3333333333333,
            "manpower": 2111.111111111111,
            "metal": 1888.888888888889,
            "cash": 2333.3333333333335,
            "oil": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 19,
            "defense": 19
          },
          "vsLightArmor": {
            "attack": 11.5,
            "defense": 11.5
          },
          "vsHeavyArmor": {
            "attack": 8.8,
            "defense": 8.8
          },
          "vsAirplane": {
            "attack": 8.8,
            "defense": 8.8
          },
          "vsShip": {
            "attack": 6.8,
            "defense": 6.8
          },
          "vsSubmarine": {
            "attack": 6,
            "defense": 6
          },
          "vsBuildings": {
            "attack": 1.8,
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
            "health": 70,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 77,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 77,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 77,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 70,
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
        "unitName": "Pan-Asian Mechanized Infantry (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 16.5,
        "hitpoints": 85.45454545454545,
        "production": {
          "costs": {
            "food": 1444.4444444444443,
            "manpower": 2222.222222222222,
            "metal": 2000,
            "cash": 2666.6666666666665,
            "oil": 0
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 23.5,
            "defense": 23.5
          },
          "vsLightArmor": {
            "attack": 14.5,
            "defense": 14.5
          },
          "vsHeavyArmor": {
            "attack": 11.5,
            "defense": 11.5
          },
          "vsAirplane": {
            "attack": 11.5,
            "defense": 11.5
          },
          "vsShip": {
            "attack": 8.5,
            "defense": 8.5
          },
          "vsSubmarine": {
            "attack": 8.5,
            "defense": 8.5
          },
          "vsBuildings": {
            "attack": 2.8,
            "defense": 2.8
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
            "health": 85.45454545454545,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 94,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 94,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 94,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 85.45454545454545,
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
