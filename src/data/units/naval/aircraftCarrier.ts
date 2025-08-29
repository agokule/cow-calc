import { IUnitType } from '@/types';

export const aircraftCarrierData: IUnitType = {
  genericName: 'Aircraft Carrier',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Lexington Class',
        level: 1,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 1.8,
        hitpoints: 50,
        production: {
          costs: {
            food: 1200,
            manpower: 1500,
            metal: 1100,
            cash: 2100,
            oil: 0
          },
          minTimeInSeconds: 10800
        },
        specialProperties: [ 'Carrier' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 1 },
          vsLightArmor:     { attack: 1,   defense: 1 },
          vsHeavyArmor:     { attack: 1,   defense: 1 },
          vsAirplane:       { attack: 2,   defense: 2 },
          vsShip:           { attack: 2,   defense: 2 },
          vsSubmarine:      { attack: 1.5, defense: 1.5 },
          vsBuildings:      { attack: 0,   defense: null },
          vsProvinceMorale: { attack: 0,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Yorktown Class',
        level: 2,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 2.5,
        hitpoints: 65,
        production: {
          costs: {
            food: 1300,
            manpower: 1500,
            metal: 1200,
            cash: 2300,
            oil: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Carrier' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 1.5 },
          vsLightArmor:     { attack: 1.5, defense: 1.5 },
          vsHeavyArmor:     { attack: 1.5, defense: 1.5 },
          vsAirplane:       { attack: 3,   defense: 3 },
          vsShip:           { attack: 3,   defense: 3 },
          vsSubmarine:      { attack: 2,   defense: 2 },
          vsBuildings:      { attack: 0,   defense: null },
          vsProvinceMorale: { attack: 0,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Essex Class',
        level: 3,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 3.8,
        hitpoints: 85,
        production: {
          costs: {
            food: 1500,
            manpower: 1600,
            metal: 1300,
            cash: 2600,
            oil: 0
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Carrier' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 2 },
          vsLightArmor:     { attack: 2,   defense: 2 },
          vsHeavyArmor:     { attack: 2,   defense: 2 },
          vsAirplane:       { attack: 4.5, defense: 4.5 },
          vsShip:           { attack: 4.5, defense: 4.5 },
          vsSubmarine:      { attack: 3,   defense: 3 },
          vsBuildings:      { attack: 0,   defense: null },
          vsProvinceMorale: { attack: 0,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 85,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Independence Class',
        level: 4,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 5.5,
        hitpoints: 115,
        production: {
          costs: {
            food: 1700,
            manpower: 1600,
            metal: 1500,
            cash: 3000,
            oil: 0
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Carrier' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,   defense: 3 },
          vsLightArmor:     { attack: 3,   defense: 3 },
          vsHeavyArmor:     { attack: 3,   defense: 3 },
          vsAirplane:       { attack: 6.5, defense: 6.5 },
          vsShip:           { attack: 6.5, defense: 6.5 },
          vsSubmarine:      { attack: 4.5, defense: 4.5 },
          vsBuildings:      { attack: 0,   defense: null },
          vsProvinceMorale: { attack: 0,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 115,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Midway Class',
        level: 5,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 8.3,
        hitpoints: 155,
        production: {
          costs: {
            food: 2000,
            manpower: 1700,
            metal: 1700,
            cash: 3500,
            oil: 0
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Carrier' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.5, defense: 4.5 },
          vsLightArmor:     { attack: 4.5, defense: 4.5 },
          vsHeavyArmor:     { attack: 4.5, defense: 4.5 },
          vsAirplane:       { attack: 9.5, defense: 9.5 },
          vsShip:           { attack: 9.5, defense: 9.5 },
          vsSubmarine:      { attack: 7,   defense: 7 },
          vsBuildings:      { attack: 0,   defense: null },
          vsProvinceMorale: { attack: 0,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 155,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Forrestal Class',
        level: 6,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 11.5,
        hitpoints: 200,
        production: {
          costs: {
            food: 2200,
            manpower: 1700,
            metal: 1900,
            cash: 4000,
            oil: 0
          },
          minTimeInSeconds: 25200
        },
        specialProperties: [ 'Carrier' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,  defense: 6 },
          vsLightArmor:     { attack: 6,  defense: 6 },
          vsHeavyArmor:     { attack: 6,  defense: 6 },
          vsAirplane:       { attack: 13, defense: 13 },
          vsShip:           { attack: 13, defense: 13 },
          vsSubmarine:      { attack: 10, defense: 10 },
          vsBuildings:      { attack: 0,  defense: null },
          vsProvinceMorale: { attack: 0,  defense: null },
          vsRocket:         { attack: 0,  defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 200,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Aircraft Carrier (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 2.1,
        "hitpoints": 57,
        "production": {
          "costs": {
            "food": 1320,
            "manpower": 1650,
            "metal": 1210,
            "cash": 2310,
            "oil": 0
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.2,
            "defense": 1.2
          },
          "vsLightArmor": {
            "attack": 1.2,
            "defense": 1.2
          },
          "vsHeavyArmor": {
            "attack": 1.2,
            "defense": 1.2
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 1.7
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
      },
      {
        "unitName": "Axis Aircraft Carrier (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 2.9,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 1430,
            "manpower": 1650,
            "metal": 1320,
            "cash": 2530,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.7,
            "defense": 1.7
          },
          "vsLightArmor": {
            "attack": 1.7,
            "defense": 1.7
          },
          "vsHeavyArmor": {
            "attack": 1.7,
            "defense": 1.7
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 65,
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
        "unitName": "Axis Aircraft Carrier (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 4.4,
        "hitpoints": 98,
        "production": {
          "costs": {
            "food": 1650,
            "manpower": 1760,
            "metal": 1430,
            "cash": 2860,
            "oil": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 5.2,
            "defense": 5.2
          },
          "vsShip": {
            "attack": 5.2,
            "defense": 5.2
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 85,
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
        "unitName": "Axis Aircraft Carrier (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 6.3,
        "hitpoints": 132,
        "production": {
          "costs": {
            "food": 1870,
            "manpower": 1760,
            "metal": 1650,
            "cash": 3300,
            "oil": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsAirplane": {
            "attack": 7.5,
            "defense": 7.5
          },
          "vsShip": {
            "attack": 7.5,
            "defense": 7.5
          },
          "vsSubmarine": {
            "attack": 5.2,
            "defense": 5.2
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 115,
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
        "unitName": "Axis Aircraft Carrier (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 9.5,
        "hitpoints": 178,
        "production": {
          "costs": {
            "food": 2200,
            "manpower": 1870,
            "metal": 1870,
            "cash": 3850,
            "oil": 0
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.2,
            "defense": 5.2
          },
          "vsLightArmor": {
            "attack": 5.2,
            "defense": 5.2
          },
          "vsHeavyArmor": {
            "attack": 5.2,
            "defense": 5.2
          },
          "vsAirplane": {
            "attack": 10.9,
            "defense": 10.9
          },
          "vsShip": {
            "attack": 10.9,
            "defense": 10.9
          },
          "vsSubmarine": {
            "attack": 8,
            "defense": 8
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 155,
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
        "unitName": "Axis Aircraft Carrier (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 13.2,
        "hitpoints": 230,
        "production": {
          "costs": {
            "food": 2420,
            "manpower": 1870,
            "metal": 2090,
            "cash": 4400,
            "oil": 0
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.9,
            "defense": 6.9
          },
          "vsLightArmor": {
            "attack": 6.9,
            "defense": 6.9
          },
          "vsHeavyArmor": {
            "attack": 6.9,
            "defense": 6.9
          },
          "vsAirplane": {
            "attack": 15,
            "defense": 15
          },
          "vsShip": {
            "attack": 15,
            "defense": 15
          },
          "vsSubmarine": {
            "attack": 11.5,
            "defense": 11.5
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 200,
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
        "unitName": "Comintern Aircraft Carrier (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 1.6,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1020,
            "manpower": 1275,
            "metal": 935,
            "cash": 1785,
            "oil": 0
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.9,
            "defense": 0.9
          },
          "vsLightArmor": {
            "attack": 0.9,
            "defense": 0.9
          },
          "vsHeavyArmor": {
            "attack": 0.9,
            "defense": 0.9
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 1.4
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
      },
      {
        "unitName": "Comintern Aircraft Carrier (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 2.3,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1105,
            "manpower": 1275,
            "metal": 1020,
            "cash": 1955,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.4,
            "defense": 1.4
          },
          "vsLightArmor": {
            "attack": 1.4,
            "defense": 1.4
          },
          "vsHeavyArmor": {
            "attack": 1.4,
            "defense": 1.4
          },
          "vsAirplane": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsShip": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 65,
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
        "unitName": "Comintern Aircraft Carrier (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 3.4,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 1275,
            "manpower": 1360,
            "metal": 1105,
            "cash": 2210,
            "oil": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsAirplane": {
            "attack": 4.1,
            "defense": 4.1
          },
          "vsShip": {
            "attack": 4.1,
            "defense": 4.1
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 85,
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
        "unitName": "Comintern Aircraft Carrier (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 5,
        "hitpoints": 115,
        "production": {
          "costs": {
            "food": 1445,
            "manpower": 1360,
            "metal": 1275,
            "cash": 2550,
            "oil": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsLightArmor": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsHeavyArmor": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsAirplane": {
            "attack": 5.9,
            "defense": 5.9
          },
          "vsShip": {
            "attack": 5.9,
            "defense": 5.9
          },
          "vsSubmarine": {
            "attack": 4.1,
            "defense": 4.1
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 115,
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
        "unitName": "Comintern Aircraft Carrier (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 7.5,
        "hitpoints": 155,
        "production": {
          "costs": {
            "food": 1700,
            "manpower": 1445,
            "metal": 1445,
            "cash": 2975,
            "oil": 0
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.1,
            "defense": 4.1
          },
          "vsLightArmor": {
            "attack": 4.1,
            "defense": 4.1
          },
          "vsHeavyArmor": {
            "attack": 4.1,
            "defense": 4.1
          },
          "vsAirplane": {
            "attack": 8.6,
            "defense": 8.6
          },
          "vsShip": {
            "attack": 8.6,
            "defense": 8.6
          },
          "vsSubmarine": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 155,
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
        "unitName": "Comintern Aircraft Carrier (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 10.4,
        "hitpoints": 200,
        "production": {
          "costs": {
            "food": 1870,
            "manpower": 1445,
            "metal": 1615,
            "cash": 3400,
            "oil": 0
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.4,
            "defense": 5.4
          },
          "vsLightArmor": {
            "attack": 5.4,
            "defense": 5.4
          },
          "vsHeavyArmor": {
            "attack": 5.4,
            "defense": 5.4
          },
          "vsAirplane": {
            "attack": 11.7,
            "defense": 11.7
          },
          "vsShip": {
            "attack": 11.7,
            "defense": 11.7
          },
          "vsSubmarine": {
            "attack": 9,
            "defense": 9
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 200,
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
        "unitName": "Pan-Asian Aircraft Carrier (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 1.8,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1200,
            "manpower": 1500,
            "metal": 1100,
            "cash": 2100,
            "oil": 0
          },
          "minTimeInSeconds": 12343
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 1,
            "defense": 1
          },
          "vsHeavyArmor": {
            "attack": 1,
            "defense": 1
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 2
          },
          "vsShip": {
            "attack": 2,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 1.5
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
      },
      {
        "unitName": "Pan-Asian Aircraft Carrier (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 2.5,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 1500,
            "metal": 1200,
            "cash": 2300,
            "oil": 0
          },
          "minTimeInSeconds": 16457
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.5,
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 1.5,
            "defense": 1.5
          },
          "vsHeavyArmor": {
            "attack": 1.5,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 3,
            "defense": 3
          },
          "vsShip": {
            "attack": 3,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 2
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 65,
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
        "unitName": "Pan-Asian Aircraft Carrier (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 3.8,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 1500,
            "manpower": 1600,
            "metal": 1300,
            "cash": 2600,
            "oil": 0
          },
          "minTimeInSeconds": 18514
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2,
            "defense": 2
          },
          "vsLightArmor": {
            "attack": 2,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 2
          },
          "vsAirplane": {
            "attack": 4.5,
            "defense": 4.5
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 4.5
          },
          "vsSubmarine": {
            "attack": 3,
            "defense": 3
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 85,
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
        "unitName": "Pan-Asian Aircraft Carrier (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 5.5,
        "hitpoints": 115,
        "production": {
          "costs": {
            "food": 1700,
            "manpower": 1600,
            "metal": 1500,
            "cash": 3000,
            "oil": 0
          },
          "minTimeInSeconds": 22629
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3,
            "defense": 3
          },
          "vsLightArmor": {
            "attack": 3,
            "defense": 3
          },
          "vsHeavyArmor": {
            "attack": 3,
            "defense": 3
          },
          "vsAirplane": {
            "attack": 6.5,
            "defense": 6.5
          },
          "vsShip": {
            "attack": 6.5,
            "defense": 6.5
          },
          "vsSubmarine": {
            "attack": 4.5,
            "defense": 4.5
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 115,
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
        "unitName": "Pan-Asian Aircraft Carrier (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 8.3,
        "hitpoints": 155,
        "production": {
          "costs": {
            "food": 2000,
            "manpower": 1700,
            "metal": 1700,
            "cash": 3500,
            "oil": 0
          },
          "minTimeInSeconds": 27771
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.5,
            "defense": 4.5
          },
          "vsLightArmor": {
            "attack": 4.5,
            "defense": 4.5
          },
          "vsHeavyArmor": {
            "attack": 4.5,
            "defense": 4.5
          },
          "vsAirplane": {
            "attack": 9.5,
            "defense": 9.5
          },
          "vsShip": {
            "attack": 9.5,
            "defense": 9.5
          },
          "vsSubmarine": {
            "attack": 7,
            "defense": 7
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 155,
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
        "unitName": "Pan-Asian Aircraft Carrier (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 11.5,
        "hitpoints": 200,
        "production": {
          "costs": {
            "food": 2200,
            "manpower": 1700,
            "metal": 1900,
            "cash": 4000,
            "oil": 0
          },
          "minTimeInSeconds": 28800
        },
        "specialProperties": [
          "Carrier"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6,
            "defense": 6
          },
          "vsLightArmor": {
            "attack": 6,
            "defense": 6
          },
          "vsHeavyArmor": {
            "attack": 6,
            "defense": 6
          },
          "vsAirplane": {
            "attack": 13,
            "defense": 13
          },
          "vsShip": {
            "attack": 13,
            "defense": 13
          },
          "vsSubmarine": {
            "attack": 10,
            "defense": 10
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 200,
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
