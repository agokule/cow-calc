import { IUnitType } from '@/types';

export const armoredCarData: IUnitType = {
  genericName: 'Armored Car',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'King Armored Car',
        level: 1,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 2.0,
        hitpoints: 20,
        production: {
          costs: {
            food: 0,
            manpower: 1100,
            metal: 1100,
            cash: 1800,
            oil: 1000
          },
          minTimeInSeconds: 7200
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:       { attack: 3,   defense: 4.5 },
          vsLightArmor:      { attack: 1,   defense: 1.5 },
          vsHeavyArmor:      { attack: 0.7, defense: 1 },
          vsAirplane:        { attack: 1,   defense: 1.5 },
          vsShip:            { attack: 0.5, defense: 0.8 },
          vsSubmarine:       { attack: 0.5, defense: 0.8 },
          vsBuildings:       { attack: 0.2, defense: 0.3 },
          vsProvinceMorale:  { attack: 0.1, defense: null },
          vsRocket:          { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 20,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 20,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 20,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M3 Scout Car',
        level: 2,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 3.3,
        hitpoints: 30,
        production: {
          costs: {
            food: 0,
            manpower: 1100,
            metal: 1200,
            cash: 1900,
            oil: 1100
          },
          minTimeInSeconds: 9000
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.7,  defense: 7 },
          vsLightArmor:     { attack: 2,    defense: 3 },
          vsHeavyArmor:     { attack: 1.3,  defense: 1.9 },
          vsAirplane:       { attack: 1.7,  defense: 2.5 },
          vsShip:           { attack: 1,    defense: 1.5 },
          vsSubmarine:      { attack: 1,    defense: 1.5 },
          vsBuildings:      { attack: 0.4,  defense: 0.6 },
          vsProvinceMorale: { attack: 0.1,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Daimler Dingo',
        level: 3,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 4.9,
        hitpoints: 45,
        production: {
          costs: {
            food: 0,
            manpower: 1100,
            metal: 1400,
            cash: 2100,
            oil: 1200
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6.5, defense: 9.8 },
          vsLightArmor:     { attack: 3.3, defense: 4.9 },
          vsHeavyArmor:     { attack: 2,   defense: 3 },
          vsAirplane:       { attack: 2.7, defense: 4.1 },
          vsShip:           { attack: 2,   defense: 3 },
          vsSubmarine:      { attack: 2,   defense: 3 },
          vsBuildings:      { attack: 0.6, defense: 0.9 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 45,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5  },
          hills:          { health: 45,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 45,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 45,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 45,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M8 Greyhound',
        level: 4,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 8.1,
        hitpoints: 65,
        production: {
          costs: {
            food: 0,
            manpower: 1100,
            metal: 1600,
            cash: 2500,
            oil: 1500
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10.5, defense: 15.8 },
          vsLightArmor:     { attack: 5.3,  defense: 8 },
          vsHeavyArmor:     { attack: 3.7,  defense: 5.6 },
          vsAirplane:       { attack: 5,    defense: 7.5 },
          vsShip:           { attack: 3.5,  defense: 5.3 },
          vsSubmarine:      { attack: 3.5,  defense: 5.3 },
          vsBuildings:      { attack: 1.2,  defense: 1.8 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 65,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M38 Wolfhound',
        level: 5,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 12.3,
        hitpoints: 85,
        production: {
          costs: {
            food: 0,
            manpower: 1200,
            metal: 1900,
            cash: 3000,
            oil: 1700
          },
          minTimeInSeconds: 18900
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 15.5, defense: 23.3 },
          vsLightArmor:     { attack: 8,    defense: 12 },
          vsHeavyArmor:     { attack: 6,    defense: 9 },
          vsAirplane:       { attack: 7,    defense: 10.5 },
          vsShip:           { attack: 5.5,  defense: 8.2 },
          vsSubmarine:      { attack: 5.5,  defense: 8.2 },
          vsBuildings:      { attack: 1.8,  defense: 2.7 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 85,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 85,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 85,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 85,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 85,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Armored Car (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 2.3,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1210,
            "metal": 1210,
            "cash": 1980,
            "oil": 1100
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.5,
            "defense": 5.2
          },
          "vsLightArmor": {
            "attack": 1.2,
            "defense": 1.7
          },
          "vsHeavyArmor": {
            "attack": 0.8,
            "defense": 1.2
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 1.7
          },
          "vsShip": {
            "attack": 0.6,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 0.6,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 0.2,
            "defense": 0.3
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
            "health": 23,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 20,
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
        "unitName": "Axis Armored Car (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 3.8,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1210,
            "metal": 1320,
            "cash": 2090,
            "oil": 1210
          },
          "minTimeInSeconds": 12857
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.4,
            "defense": 8
          },
          "vsLightArmor": {
            "attack": 2.3,
            "defense": 3.5
          },
          "vsHeavyArmor": {
            "attack": 1.5,
            "defense": 2.2
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 2.9
          },
          "vsShip": {
            "attack": 1.2,
            "defense": 1.7
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 1.7
          },
          "vsBuildings": {
            "attack": 0.5,
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
        "unitName": "Axis Armored Car (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 5.6,
        "hitpoints": 52,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1210,
            "metal": 1540,
            "cash": 2310,
            "oil": 1320
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.5,
            "defense": 11.3
          },
          "vsLightArmor": {
            "attack": 3.8,
            "defense": 5.6
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 3.5
          },
          "vsAirplane": {
            "attack": 3.1,
            "defense": 4.7
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 3.5
          },
          "vsBuildings": {
            "attack": 0.7,
            "defense": 1
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
            "health": 52,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Axis Armored Car (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 9.3,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1210,
            "metal": 1760,
            "cash": 2750,
            "oil": 1650
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12.1,
            "defense": 18.2
          },
          "vsLightArmor": {
            "attack": 6.1,
            "defense": 9.2
          },
          "vsHeavyArmor": {
            "attack": 4.3,
            "defense": 6.4
          },
          "vsAirplane": {
            "attack": 5.8,
            "defense": 8.6
          },
          "vsShip": {
            "attack": 4,
            "defense": 6.1
          },
          "vsSubmarine": {
            "attack": 4,
            "defense": 6.1
          },
          "vsBuildings": {
            "attack": 1.4,
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
            "health": 75,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Axis Armored Car (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 14.1,
        "hitpoints": 98,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1320,
            "metal": 2090,
            "cash": 3300,
            "oil": 1870
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 17.8,
            "defense": 26.8
          },
          "vsLightArmor": {
            "attack": 9.2,
            "defense": 13.8
          },
          "vsHeavyArmor": {
            "attack": 6.9,
            "defense": 10.4
          },
          "vsAirplane": {
            "attack": 8,
            "defense": 12.1
          },
          "vsShip": {
            "attack": 6.3,
            "defense": 9.4
          },
          "vsSubmarine": {
            "attack": 6.3,
            "defense": 9.4
          },
          "vsBuildings": {
            "attack": 2.1,
            "defense": 3.1
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
            "health": 98,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 85,
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
        "unitName": "Comintern Armored Car (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 1.8,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 935,
            "metal": 935,
            "cash": 1530,
            "oil": 850
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.7,
            "defense": 4.1
          },
          "vsLightArmor": {
            "attack": 0.9,
            "defense": 1.4
          },
          "vsHeavyArmor": {
            "attack": 0.6,
            "defense": 0.9
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 0.5,
            "defense": 0.7
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 0.7
          },
          "vsBuildings": {
            "attack": 0.2,
            "defense": 0.3
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
            "health": 20,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 20,
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
        "unitName": "Comintern Armored Car (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 3,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 935,
            "metal": 1020,
            "cash": 1615,
            "oil": 935
          },
          "minTimeInSeconds": 12857
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.2,
            "defense": 6.3
          },
          "vsLightArmor": {
            "attack": 1.8,
            "defense": 2.7
          },
          "vsHeavyArmor": {
            "attack": 1.2,
            "defense": 1.7
          },
          "vsAirplane": {
            "attack": 1.5,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 0.9,
            "defense": 1.4
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 1.4
          },
          "vsBuildings": {
            "attack": 0.4,
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
        "unitName": "Comintern Armored Car (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 4.4,
        "hitpoints": 45,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 935,
            "metal": 1190,
            "cash": 1785,
            "oil": 1020
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.9,
            "defense": 8.8
          },
          "vsLightArmor": {
            "attack": 3,
            "defense": 4.4
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 2.7
          },
          "vsAirplane": {
            "attack": 2.4,
            "defense": 3.7
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 2.7
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 2.7
          },
          "vsBuildings": {
            "attack": 0.5,
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
            "health": 45,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Comintern Armored Car (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 7.3,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 935,
            "metal": 1360,
            "cash": 2125,
            "oil": 1275
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9.5,
            "defense": 14.2
          },
          "vsLightArmor": {
            "attack": 4.8,
            "defense": 7.2
          },
          "vsHeavyArmor": {
            "attack": 3.3,
            "defense": 5
          },
          "vsAirplane": {
            "attack": 4.5,
            "defense": 6.8
          },
          "vsShip": {
            "attack": 3.2,
            "defense": 4.8
          },
          "vsSubmarine": {
            "attack": 3.2,
            "defense": 4.8
          },
          "vsBuildings": {
            "attack": 1.1,
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
            "health": 65,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Comintern Armored Car (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 11.1,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1020,
            "metal": 1615,
            "cash": 2550,
            "oil": 1445
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 14,
            "defense": 21
          },
          "vsLightArmor": {
            "attack": 7.2,
            "defense": 10.8
          },
          "vsHeavyArmor": {
            "attack": 5.4,
            "defense": 8.1
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 9.5
          },
          "vsShip": {
            "attack": 5,
            "defense": 7.4
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 7.4
          },
          "vsBuildings": {
            "attack": 1.6,
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
            "health": 85,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 85,
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
        "unitName": "Pan-Asian Armored Car (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 2,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1100,
            "metal": 1100,
            "cash": 1800,
            "oil": 1000
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.6,
            "defense": 5.4
          },
          "vsLightArmor": {
            "attack": 1,
            "defense": 1.5
          },
          "vsHeavyArmor": {
            "attack": 0.7,
            "defense": 1
          },
          "vsAirplane": {
            "attack": 1,
            "defense": 1.5
          },
          "vsShip": {
            "attack": 0.5,
            "defense": 0.8
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 0.8
          },
          "vsBuildings": {
            "attack": 0.2,
            "defense": 0.3
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
            "health": 20,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 20,
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
        "unitName": "Pan-Asian Armored Car (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 3.3,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1100,
            "metal": 1200,
            "cash": 1900,
            "oil": 1100
          },
          "minTimeInSeconds": 12857
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.6,
            "defense": 8.4
          },
          "vsLightArmor": {
            "attack": 2,
            "defense": 3
          },
          "vsHeavyArmor": {
            "attack": 1.3,
            "defense": 1.9
          },
          "vsAirplane": {
            "attack": 1.7,
            "defense": 2.5
          },
          "vsShip": {
            "attack": 1,
            "defense": 1.5
          },
          "vsSubmarine": {
            "attack": 1,
            "defense": 1.5
          },
          "vsBuildings": {
            "attack": 0.4,
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
        "unitName": "Pan-Asian Armored Car (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 4.9,
        "hitpoints": 45,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1100,
            "metal": 1400,
            "cash": 2100,
            "oil": 1200
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.8,
            "defense": 11.8
          },
          "vsLightArmor": {
            "attack": 3.3,
            "defense": 4.9
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 3
          },
          "vsAirplane": {
            "attack": 2.7,
            "defense": 4.1
          },
          "vsShip": {
            "attack": 2,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 3
          },
          "vsBuildings": {
            "attack": 0.6,
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
            "health": 45,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Pan-Asian Armored Car (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 8.1,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1100,
            "metal": 1600,
            "cash": 2500,
            "oil": 1500
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12.6,
            "defense": 19
          },
          "vsLightArmor": {
            "attack": 5.3,
            "defense": 8
          },
          "vsHeavyArmor": {
            "attack": 3.7,
            "defense": 5.6
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 7.5
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 5.3
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 5.3
          },
          "vsBuildings": {
            "attack": 1.2,
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
            "health": 65,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Pan-Asian Armored Car (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 12.3,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 1200,
            "metal": 1900,
            "cash": 3000,
            "oil": 1700
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 18.6,
            "defense": 28
          },
          "vsLightArmor": {
            "attack": 8,
            "defense": 12
          },
          "vsHeavyArmor": {
            "attack": 6,
            "defense": 9
          },
          "vsAirplane": {
            "attack": 7,
            "defense": 10.5
          },
          "vsShip": {
            "attack": 5.5,
            "defense": 8.2
          },
          "vsSubmarine": {
            "attack": 5.5,
            "defense": 8.2
          },
          "vsBuildings": {
            "attack": 1.8,
            "defense": 2.7
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
            "health": 85,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 85,
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
