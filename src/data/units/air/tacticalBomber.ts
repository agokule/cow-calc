import { IUnitType } from '@/types';

export const tacticalBomberData: IUnitType = {
  genericName: 'Tactical Bomber',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Martin B-10',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 2.4,
        hitpoints: 25,
        production: {
          costs: {
            food: 2100,
            manpower: 1300,
            metal: 0,
            cash: 1600,
            oil: 1300
          },
          minTimeInSeconds: 10800
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.5, defense: 2.3 },
          vsLightArmor:     { attack: 3.5, defense: 1.8 },
          vsHeavyArmor:     { attack: 1.5, defense: 0.8 },
          vsAirplane:       { attack: 1,   defense: 0.5 },
          vsShip:           { attack: 1.5, defense: 0.8 },
          vsSubmarine:      { attack: 1,   defense: 0.5 },
          vsBuildings:      { attack: 1.5, defense: 0.8 },
          vsProvinceMorale: { attack: 1,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Douglas B-18 Bolo',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 3.2,
        hitpoints: 30,
        production: {
          costs: {
            food: 2300,
            manpower: 1300,
            metal: 0,
            cash: 1800,
            oil: 1400
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,   defense: 3 },
          vsLightArmor:     { attack: 4.6, defense: 2.3 },
          vsHeavyArmor:     { attack: 2,   defense: 1 },
          vsAirplane:       { attack: 1.5, defense: 0.8 },
          vsShip:           { attack: 2,   defense: 1 },
          vsSubmarine:      { attack: 1.5, defense: 0.8 },
          vsBuildings:      { attack: 2,   defense: 1 },
          vsProvinceMorale: { attack: 1.2, defense: null },
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
        unitName: 'Douglas B-23 Dragon',
        level: 3,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 4.3,
        hitpoints: 40,
        production: {
          costs: {
            food: 2400,
            manpower: 1400,
            metal: 0,
            cash: 1900,
            oil: 1500
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8.5, defense: 4.3 },
          vsLightArmor:     { attack: 6.3, defense: 3.2 },
          vsHeavyArmor:     { attack: 2.5, defense: 1.3 },
          vsAirplane:       { attack: 2,   defense: 1 },
          vsShip:           { attack: 2.5, defense: 1.3 },
          vsSubmarine:      { attack: 2,   defense: 1 },
          vsBuildings:      { attack: 2.8, defense: 1.4 },
          vsProvinceMorale: { attack: 1.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Martin B-26 Marauder',
        level: 4,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 5.9,
        hitpoints: 55,
        production: {
          costs: {
            food: 2800,
            manpower: 1400,
            metal: 0,
            cash: 2100,
            oil: 1700
          },
          minTimeInSeconds: 18900
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 11.5, defense: 5.8 },
          vsLightArmor:     { attack: 8.6,  defense: 4.3 },
          vsHeavyArmor:     { attack: 3.5,  defense: 1.7 },
          vsAirplane:       { attack: 3,    defense: 1.5 },
          vsShip:           { attack: 3.5,  defense: 1.7 },
          vsSubmarine:      { attack: 3,    defense: 1.5 },
          vsBuildings:      { attack: 4,    defense: 2 },
          vsProvinceMorale: { attack: 1.9,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'N. American B-25 Mitchell',
        level: 5,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 7.9,
        hitpoints: 65,
        production: {
          costs: {
            food: 3100,
            manpower: 1400,
            metal: 0,
            cash: 2400,
            oil: 1900
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 15,   defense: 7.5 },
          vsLightArmor:     { attack: 11.5, defense: 5.7 },
          vsHeavyArmor:     { attack: 5,    defense: 2.5 },
          vsAirplane:       { attack: 4,    defense: 2 },
          vsShip:           { attack: 5,    defense: 2.5 },
          vsSubmarine:      { attack: 4,    defense: 2 },
          vsBuildings:      { attack: 5.5,  defense: 2.8 },
          vsProvinceMorale: { attack: 2.5,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Douglas A-26 Invader',
        level: 6,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 10.3,
        hitpoints: 80,
        production: {
          costs: {
            food: 3400,
            manpower: 1500,
            metal: 0,
            cash: 2600,
            oil: 2100
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 19,  defense: 9.5 },
          vsLightArmor:     { attack: 15,  defense: 7.5 },
          vsHeavyArmor:     { attack: 7,   defense: 3.5 },
          vsAirplane:       { attack: 5.5, defense: 2.7 },
          vsShip:           { attack: 7,   defense: 3.5 },
          vsSubmarine:      { attack: 5.5, defense: 2.7 },
          vsBuildings:      { attack: 7.5, defense: 3.8 },
          vsProvinceMorale: { attack: 3.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Martin XB-48',
        level: 7,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 13.3,
        hitpoints: 100,
        production: {
          costs: {
            food: 3800,
            manpower: 1500,
            metal: 0,
            cash: 2900,
            oil: 2300
          },
          minTimeInSeconds: 25200
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 23.5, defense: 11.8 },
          vsLightArmor:     { attack: 19.6, defense: 9.8 },
          vsHeavyArmor:     { attack: 10,   defense: 5 },
          vsAirplane:       { attack: 7,    defense: 3.5 },
          vsShip:           { attack: 10,   defense: 5 },
          vsSubmarine:      { attack: 7,    defense: 5 },
          vsBuildings:      { attack: 10,   defense: 5 },
          vsProvinceMorale: { attack: 4,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Tactical Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 2.8,
        "hitpoints": 29,
        "production": {
          "costs": {
            "food": 2310,
            "manpower": 1430,
            "metal": 0,
            "cash": 1760,
            "oil": 1430
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.2,
            "defense": 2.6
          },
          "vsLightArmor": {
            "attack": 3.5,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 1.7,
            "defense": 0.9
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 1.7,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 1.7,
            "defense": 0.9
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 25,
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
        "unitName": "Axis Tactical Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 3.7,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 2530,
            "manpower": 1430,
            "metal": 0,
            "cash": 1980,
            "oil": 1540
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.9,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsAirplane": {
            "attack": 1.7,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 2.3,
            "defense": 1.2
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
        "unitName": "Axis Tactical Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 4.9,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 2640,
            "manpower": 1540,
            "metal": 0,
            "cash": 2090,
            "oil": 1650
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9.8,
            "defense": 4.9
          },
          "vsLightArmor": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsHeavyArmor": {
            "attack": 2.9,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 2.9,
            "defense": 1.5
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 3.2,
            "defense": 1.6
          },
          "vsProvinceMorale": {
            "attack": 1.7,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 40,
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
        "unitName": "Axis Tactical Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 6.8,
        "hitpoints": 63,
        "production": {
          "costs": {
            "food": 3080,
            "manpower": 1540,
            "metal": 0,
            "cash": 2310,
            "oil": 1870
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 13.2,
            "defense": 6.7
          },
          "vsLightArmor": {
            "attack": 8.6,
            "defense": 4.3
          },
          "vsHeavyArmor": {
            "attack": 4,
            "defense": 2
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsShip": {
            "attack": 4,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsBuildings": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsProvinceMorale": {
            "attack": 2.2,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 55,
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
        "unitName": "Axis Tactical Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 9.1,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 3410,
            "manpower": 1540,
            "metal": 0,
            "cash": 2640,
            "oil": 2090
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 17.3,
            "defense": 8.6
          },
          "vsLightArmor": {
            "attack": 11.5,
            "defense": 5.7
          },
          "vsHeavyArmor": {
            "attack": 5.8,
            "defense": 2.9
          },
          "vsAirplane": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 5.8,
            "defense": 2.9
          },
          "vsSubmarine": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 6.3,
            "defense": 3.2
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 65,
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
        "unitName": "Axis Tactical Bomber (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 11.8,
        "hitpoints": 92,
        "production": {
          "costs": {
            "food": 3740,
            "manpower": 1650,
            "metal": 0,
            "cash": 2860,
            "oil": 2310
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 21.8,
            "defense": 10.9
          },
          "vsLightArmor": {
            "attack": 15,
            "defense": 7.5
          },
          "vsHeavyArmor": {
            "attack": 8,
            "defense": 4
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 3.1
          },
          "vsShip": {
            "attack": 8,
            "defense": 4
          },
          "vsSubmarine": {
            "attack": 6.3,
            "defense": 3.1
          },
          "vsBuildings": {
            "attack": 8.6,
            "defense": 4.4
          },
          "vsProvinceMorale": {
            "attack": 3.7,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 80,
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
        "unitName": "Axis Tactical Bomber (Estimated Stats)",
        "level": 7,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 15.3,
        "hitpoints": 115,
        "production": {
          "costs": {
            "food": 4180,
            "manpower": 1650,
            "metal": 0,
            "cash": 3190,
            "oil": 2530
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 27,
            "defense": 13.6
          },
          "vsLightArmor": {
            "attack": 19.6,
            "defense": 9.8
          },
          "vsHeavyArmor": {
            "attack": 11.5,
            "defense": 5.8
          },
          "vsAirplane": {
            "attack": 8,
            "defense": 4
          },
          "vsShip": {
            "attack": 11.5,
            "defense": 5.8
          },
          "vsSubmarine": {
            "attack": 8,
            "defense": 5.8
          },
          "vsBuildings": {
            "attack": 11.5,
            "defense": 5.8
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
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 100,
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
        "unitName": "Comintern Tactical Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 2.2,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 1785,
            "manpower": 1105,
            "metal": 0,
            "cash": 1360,
            "oil": 1105
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.1,
            "defense": 2.1
          },
          "vsLightArmor": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsHeavyArmor": {
            "attack": 1.4,
            "defense": 0.7
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 1.4,
            "defense": 0.7
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 1.4,
            "defense": 0.7
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 25,
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
        "unitName": "Comintern Tactical Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 2.9,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1955,
            "manpower": 1105,
            "metal": 0,
            "cash": 1530,
            "oil": 1190
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.4,
            "defense": 2.7
          },
          "vsLightArmor": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsAirplane": {
            "attack": 1.4,
            "defense": 0.7
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 0.7
          },
          "vsBuildings": {
            "attack": 1.8,
            "defense": 0.9
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
        "unitName": "Comintern Tactical Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 3.9,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 2040,
            "manpower": 1190,
            "metal": 0,
            "cash": 1615,
            "oil": 1275
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.7,
            "defense": 3.9
          },
          "vsLightArmor": {
            "attack": 4.9,
            "defense": 2.5
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 2.5,
            "defense": 1.3
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 40,
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
        "unitName": "Comintern Tactical Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 5.3,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 2380,
            "manpower": 1190,
            "metal": 0,
            "cash": 1785,
            "oil": 1445
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 10.4,
            "defense": 5.2
          },
          "vsLightArmor": {
            "attack": 6.7,
            "defense": 3.4
          },
          "vsHeavyArmor": {
            "attack": 3.2,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 3.2,
            "defense": 1.5
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsBuildings": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsProvinceMorale": {
            "attack": 1.7,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 55,
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
        "unitName": "Comintern Tactical Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 7.1,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 2635,
            "manpower": 1190,
            "metal": 0,
            "cash": 2040,
            "oil": 1615
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 13.5,
            "defense": 6.8
          },
          "vsLightArmor": {
            "attack": 9,
            "defense": 4.5
          },
          "vsHeavyArmor": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsBuildings": {
            "attack": 5,
            "defense": 2.5
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 65,
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
        "unitName": "Comintern Tactical Bomber (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 9.3,
        "hitpoints": 80,
        "production": {
          "costs": {
            "food": 2890,
            "manpower": 1275,
            "metal": 0,
            "cash": 2210,
            "oil": 1785
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 17.1,
            "defense": 8.6
          },
          "vsLightArmor": {
            "attack": 11.7,
            "defense": 5.9
          },
          "vsHeavyArmor": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 2.4
          },
          "vsShip": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 2.4
          },
          "vsBuildings": {
            "attack": 6.8,
            "defense": 3.4
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
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 80,
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
        "unitName": "Comintern Tactical Bomber (Estimated Stats)",
        "level": 7,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 12,
        "hitpoints": 100,
        "production": {
          "costs": {
            "food": 3230,
            "manpower": 1275,
            "metal": 0,
            "cash": 2465,
            "oil": 1955
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 21.2,
            "defense": 10.6
          },
          "vsLightArmor": {
            "attack": 15.3,
            "defense": 7.7
          },
          "vsHeavyArmor": {
            "attack": 9,
            "defense": 4.5
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsShip": {
            "attack": 9,
            "defense": 4.5
          },
          "vsSubmarine": {
            "attack": 6.3,
            "defense": 4.5
          },
          "vsBuildings": {
            "attack": 9,
            "defense": 4.5
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
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 100,
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
        "unitName": "Pan-Asian Tactical Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 2.4,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 2100,
            "manpower": 1300,
            "metal": 0,
            "cash": 1600,
            "oil": 1300
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 3.0434782608695654,
            "defense": 1.565217391304348
          },
          "vsHeavyArmor": {
            "attack": 1.5,
            "defense": 0.8
          },
          "vsAirplane": {
            "attack": 1,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 0.8
          },
          "vsSubmarine": {
            "attack": 1,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 1.5,
            "defense": 0.8
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 25,
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
        "unitName": "Pan-Asian Tactical Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 3.2,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 2300,
            "manpower": 1300,
            "metal": 0,
            "cash": 1800,
            "oil": 1400
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6,
            "defense": 3
          },
          "vsLightArmor": {
            "attack": 4,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 1
          },
          "vsAirplane": {
            "attack": 1.5,
            "defense": 0.8
          },
          "vsShip": {
            "attack": 2,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 0.8
          },
          "vsBuildings": {
            "attack": 2,
            "defense": 1
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
        "unitName": "Pan-Asian Tactical Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 4.3,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 2400,
            "manpower": 1400,
            "metal": 0,
            "cash": 1900,
            "oil": 1500
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8.5,
            "defense": 4.3
          },
          "vsLightArmor": {
            "attack": 5.478260869565218,
            "defense": 2.7826086956521743
          },
          "vsHeavyArmor": {
            "attack": 2.5,
            "defense": 1.3
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 1
          },
          "vsShip": {
            "attack": 2.5,
            "defense": 1.3
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 2.8,
            "defense": 1.4
          },
          "vsProvinceMorale": {
            "attack": 1.5,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 40,
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
        "unitName": "Pan-Asian Tactical Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 5.9,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 2800,
            "manpower": 1400,
            "metal": 0,
            "cash": 2100,
            "oil": 1700
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 11.5,
            "defense": 5.8
          },
          "vsLightArmor": {
            "attack": 7.478260869565218,
            "defense": 3.739130434782609
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsAirplane": {
            "attack": 3,
            "defense": 1.5
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsSubmarine": {
            "attack": 3,
            "defense": 1.5
          },
          "vsBuildings": {
            "attack": 4,
            "defense": 2
          },
          "vsProvinceMorale": {
            "attack": 1.9,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 55,
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
        "unitName": "Pan-Asian Tactical Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 7.9,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 3100,
            "manpower": 1400,
            "metal": 0,
            "cash": 2400,
            "oil": 1900
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 15,
            "defense": 7.5
          },
          "vsLightArmor": {
            "attack": 10,
            "defense": 4.9565217391304355
          },
          "vsHeavyArmor": {
            "attack": 5,
            "defense": 2.5
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 2
          },
          "vsShip": {
            "attack": 5,
            "defense": 2.5
          },
          "vsSubmarine": {
            "attack": 4,
            "defense": 2
          },
          "vsBuildings": {
            "attack": 5.5,
            "defense": 2.8
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 65,
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
        "unitName": "Pan-Asian Tactical Bomber (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 10.3,
        "hitpoints": 80,
        "production": {
          "costs": {
            "food": 3400,
            "manpower": 1500,
            "metal": 0,
            "cash": 2600,
            "oil": 2100
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 19,
            "defense": 9.5
          },
          "vsLightArmor": {
            "attack": 13.043478260869566,
            "defense": 6.521739130434783
          },
          "vsHeavyArmor": {
            "attack": 7,
            "defense": 3.5
          },
          "vsAirplane": {
            "attack": 5.5,
            "defense": 2.7
          },
          "vsShip": {
            "attack": 7,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 5.5,
            "defense": 2.7
          },
          "vsBuildings": {
            "attack": 7.5,
            "defense": 3.8
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
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 80,
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
        "unitName": "Pan-Asian Tactical Bomber (Estimated Stats)",
        "level": 7,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 13.3,
        "hitpoints": 100,
        "production": {
          "costs": {
            "food": 3800,
            "manpower": 1500,
            "metal": 0,
            "cash": 2900,
            "oil": 2300
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Anti-Unarmored",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 23.5,
            "defense": 11.8
          },
          "vsLightArmor": {
            "attack": 17.043478260869566,
            "defense": 8.521739130434783
          },
          "vsHeavyArmor": {
            "attack": 10,
            "defense": 5
          },
          "vsAirplane": {
            "attack": 7,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 10,
            "defense": 5
          },
          "vsSubmarine": {
            "attack": 7,
            "defense": 5
          },
          "vsBuildings": {
            "attack": 10,
            "defense": 5
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
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 100,
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
