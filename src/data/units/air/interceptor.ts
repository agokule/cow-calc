import { IUnitType } from '@/types';

export const interceptorData: IUnitType = {
  genericName: 'Interceptor',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Boeing P-26',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 0.5,
        hitpoints: 15,
        production: {
          costs: {
            food: 950,
            manpower: 800,
            metal: 0,
            cash: 1500,
            oil: 950
          },
          minTimeInSeconds: 6900
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.8, defense: 0.5 },
          vsLightArmor:     { attack: 0.5, defense: 0.3 },
          vsHeavyArmor:     { attack: 0.5, defense: 0.3 },
          vsAirplane:       { attack: 6,   defense: 4 },
          vsShip:           { attack: 0.5, defense: 0.3 },
          vsSubmarine:      { attack: 0.5, defense: 0.3 },
          vsBuildings:      { attack: 0.2, defense: 0.1 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Seversky P-35',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 1,
        hitpoints: 20,
        production: {
          costs: {
            food: 1000,
            manpower: 800,
            metal: 0,
            cash: 1600,
            oil: 1000
          },
          minTimeInSeconds: 9000
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 1 },
          vsLightArmor:     { attack: 1,   defense: 0.7 },
          vsHeavyArmor:     { attack: 1,   defense: 0.7 },
          vsAirplane:       { attack: 8,   defense: 5.3 },
          vsShip:           { attack: 1,   defense: 0.7 },
          vsSubmarine:      { attack: 1,   defense: 0.7 },
          vsBuildings:      { attack: 0.3, defense: 0.2 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Curtiss P-40 Warhawk',
        level: 3,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 1.4,
        hitpoints: 25,
        production: {
          costs: {
            food: 1100,
            manpower: 800,
            metal: 0,
            cash: 1700,
            oil: 1100
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 1.3 },
          vsLightArmor:     { attack: 1.5, defense: 1 },
          vsHeavyArmor:     { attack: 1.5, defense: 1 },
          vsAirplane:       { attack: 10,  defense: 6.7 },
          vsShip:           { attack: 1.5, defense: 1 },
          vsSubmarine:      { attack: 1.5, defense: 1 },
          vsBuildings:      { attack: 0.4, defense: 0.3 },
          vsProvinceMorale: { attack: 0.1, defense: null },
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
        unitName: 'P-51 Mustang',
        level: 4,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 2.2,
        hitpoints: 30,
        production: {
          costs: {
            food: 1300,
            manpower: 850,
            metal: 0,
            cash: 2000,
            oil: 1300
          },
          minTimeInSeconds: 15300
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,   defense: 2 },
          vsLightArmor:     { attack: 2.5, defense: 1.7 },
          vsHeavyArmor:     { attack: 2.5, defense: 1.7 },
          vsAirplane:       { attack: 13,  defense: 8.7 },
          vsShip:           { attack: 2.5, defense: 1.7 },
          vsSubmarine:      { attack: 2.5, defense: 1.7 },
          vsBuildings:      { attack: 0.6, defense: 0.4 },
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
        unitName: 'Grumman F6F Hellcat',
        level: 5,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 3.3,
        hitpoints: 40,
        production: {
          costs: {
            food: 1400,
            manpower: 850,
            metal: 0,
            cash: 2200,
            oil: 1400
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.3, defense: 2.9 },
          vsLightArmor:     { attack: 3.8, defense: 2.5 },
          vsHeavyArmor:     { attack: 3.8, defense: 2.5 },
          vsAirplane:       { attack: 17,  defense: 11.3 },
          vsShip:           { attack: 3.8, defense: 2.5 },
          vsSubmarine:      { attack: 3.8, defense: 2.5 },
          vsBuildings:      { attack: 0.8, defense: 0.5 },
          vsProvinceMorale: { attack: 0.2, defense: null },
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
        unitName: 'Lockheed P-80 Shooting Star',
        level: 6,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 4.4,
        hitpoints: 50,
        production: {
          costs: {
            food: 1600,
            manpower: 900,
            metal: 0,
            cash: 2500,
            oil: 1600
          },
          minTimeInSeconds: 18000
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5.8, defense: 3.9 },
          vsLightArmor:     { attack: 5,   defense: 3.3 },
          vsHeavyArmor:     { attack: 5,   defense: 3.3 },
          vsAirplane:       { attack: 22,  defense: 14.7 },
          vsShip:           { attack: 5,   defense: 3.3 },
          vsSubmarine:      { attack: 5,   defense: 3.3 },
          vsBuildings:      { attack: 1.2, defense: 0.8 },
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
      {
        unitName: 'North American F-86 Sabre',
        level: 7,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 5.7,
        hitpoints: 65,
        production: {
          costs: {
            food: 1800,
            manpower: 900,
            metal: 0,
            cash: 2700,
            oil: 1800
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7.5, defense: 5 },
          vsLightArmor:     { attack: 6.5, defense: 4.3 },
          vsHeavyArmor:     { attack: 6.5, defense: 4.3 },
          vsAirplane:       { attack: 28,  defense: 18.7 },
          vsShip:           { attack: 6.5, defense: 4.3 },
          vsSubmarine:      { attack: 6.5, defense: 4.3 },
          vsBuildings:      { attack: 1.8, defense: 1.2 },
          vsProvinceMorale: { attack: 0.3, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
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
    ],
    "Axis": [
      {
        "unitName": "Axis Interceptor (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 0.6,
        "hitpoints": 17,
        "production": {
          "costs": {
            "food": 1045,
            "manpower": 880,
            "metal": 0,
            "cash": 1650,
            "oil": 1045
          },
          "minTimeInSeconds": 9857
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.9,
            "defense": 0.6
          },
          "vsLightArmor": {
            "attack": 0.6,
            "defense": 0.3
          },
          "vsHeavyArmor": {
            "attack": 0.6,
            "defense": 0.3
          },
          "vsAirplane": {
            "attack": 6.9,
            "defense": 4.6
          },
          "vsShip": {
            "attack": 0.6,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 0.6,
            "defense": 0.3
          },
          "vsBuildings": {
            "attack": 0.2,
            "defense": 0.1
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 15,
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
        "unitName": "Axis Interceptor (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 1.2,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 880,
            "metal": 0,
            "cash": 1760,
            "oil": 1100
          },
          "minTimeInSeconds": 12857
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.7,
            "defense": 1.2
          },
          "vsLightArmor": {
            "attack": 1.2,
            "defense": 0.8
          },
          "vsHeavyArmor": {
            "attack": 1.2,
            "defense": 0.8
          },
          "vsAirplane": {
            "attack": 9.2,
            "defense": 6.1
          },
          "vsShip": {
            "attack": 1.2,
            "defense": 0.8
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 0.8
          },
          "vsBuildings": {
            "attack": 0.3,
            "defense": 0.2
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 20,
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
        "unitName": "Axis Interceptor (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 1.6,
        "hitpoints": 29,
        "production": {
          "costs": {
            "food": 1210,
            "manpower": 880,
            "metal": 0,
            "cash": 1870,
            "oil": 1210
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.3,
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 1.7,
            "defense": 1.2
          },
          "vsHeavyArmor": {
            "attack": 1.7,
            "defense": 1.2
          },
          "vsAirplane": {
            "attack": 11.5,
            "defense": 7.7
          },
          "vsShip": {
            "attack": 1.7,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 0.5,
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
        "unitName": "Axis Interceptor (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 2.5,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1430,
            "manpower": 935,
            "metal": 0,
            "cash": 2200,
            "oil": 1430
          },
          "minTimeInSeconds": 21857
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.5,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 2.9,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 2.9,
            "defense": 2
          },
          "vsAirplane": {
            "attack": 15,
            "defense": 10
          },
          "vsShip": {
            "attack": 2.9,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 2.9,
            "defense": 2
          },
          "vsBuildings": {
            "attack": 0.7,
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
        "unitName": "Axis Interceptor (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 3.8,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 1540,
            "manpower": 935,
            "metal": 0,
            "cash": 2420,
            "oil": 1540
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.9,
            "defense": 3.3
          },
          "vsLightArmor": {
            "attack": 4.4,
            "defense": 2.9
          },
          "vsHeavyArmor": {
            "attack": 4.4,
            "defense": 2.9
          },
          "vsAirplane": {
            "attack": 19.5,
            "defense": 13
          },
          "vsShip": {
            "attack": 4.4,
            "defense": 2.9
          },
          "vsSubmarine": {
            "attack": 4.4,
            "defense": 2.9
          },
          "vsBuildings": {
            "attack": 0.9,
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
        "unitName": "Axis Interceptor (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 5.1,
        "hitpoints": 57,
        "production": {
          "costs": {
            "food": 1760,
            "manpower": 990,
            "metal": 0,
            "cash": 2750,
            "oil": 1760
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.7,
            "defense": 4.5
          },
          "vsLightArmor": {
            "attack": 5.8,
            "defense": 3.8
          },
          "vsHeavyArmor": {
            "attack": 5.8,
            "defense": 3.8
          },
          "vsAirplane": {
            "attack": 25.3,
            "defense": 16.9
          },
          "vsShip": {
            "attack": 5.8,
            "defense": 3.8
          },
          "vsSubmarine": {
            "attack": 5.8,
            "defense": 3.8
          },
          "vsBuildings": {
            "attack": 1.4,
            "defense": 0.9
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
      },
      {
        "unitName": "Axis Interceptor (Estimated Stats)",
        "level": 7,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 6.6,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 1980,
            "manpower": 990,
            "metal": 0,
            "cash": 2970,
            "oil": 1980
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8.6,
            "defense": 5.8
          },
          "vsLightArmor": {
            "attack": 7.5,
            "defense": 4.9
          },
          "vsHeavyArmor": {
            "attack": 7.5,
            "defense": 4.9
          },
          "vsAirplane": {
            "attack": 32.2,
            "defense": 21.5
          },
          "vsShip": {
            "attack": 7.5,
            "defense": 4.9
          },
          "vsSubmarine": {
            "attack": 7.5,
            "defense": 4.9
          },
          "vsBuildings": {
            "attack": 2.1,
            "defense": 1.4
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
      }
    ],
    "Comintern": [
      {
        "unitName": "Comintern Interceptor (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 0.5,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 808,
            "manpower": 680,
            "metal": 0,
            "cash": 1275,
            "oil": 808
          },
          "minTimeInSeconds": 9857
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.7,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 0.5,
            "defense": 0.3
          },
          "vsHeavyArmor": {
            "attack": 0.5,
            "defense": 0.3
          },
          "vsAirplane": {
            "attack": 5.4,
            "defense": 3.6
          },
          "vsShip": {
            "attack": 0.5,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 0.3
          },
          "vsBuildings": {
            "attack": 0.2,
            "defense": 0.1
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 15,
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
        "unitName": "Comintern Interceptor (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 0.9,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 850,
            "manpower": 680,
            "metal": 0,
            "cash": 1360,
            "oil": 850
          },
          "minTimeInSeconds": 12857
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.4,
            "defense": 0.9
          },
          "vsLightArmor": {
            "attack": 0.9,
            "defense": 0.6
          },
          "vsHeavyArmor": {
            "attack": 0.9,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 7.2,
            "defense": 4.8
          },
          "vsShip": {
            "attack": 0.9,
            "defense": 0.6
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 0.3,
            "defense": 0.2
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 20,
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
        "unitName": "Comintern Interceptor (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 1.3,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 935,
            "manpower": 680,
            "metal": 0,
            "cash": 1445,
            "oil": 935
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.8,
            "defense": 1.2
          },
          "vsLightArmor": {
            "attack": 1.4,
            "defense": 0.9
          },
          "vsHeavyArmor": {
            "attack": 1.4,
            "defense": 0.9
          },
          "vsAirplane": {
            "attack": 9,
            "defense": 6
          },
          "vsShip": {
            "attack": 1.4,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 0.4,
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
        "unitName": "Comintern Interceptor (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 2,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1105,
            "manpower": 723,
            "metal": 0,
            "cash": 1700,
            "oil": 1105
          },
          "minTimeInSeconds": 21857
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.7,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 2.3,
            "defense": 1.5
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 11.7,
            "defense": 7.8
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 1.5
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 1.5
          },
          "vsBuildings": {
            "attack": 0.5,
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
        "unitName": "Comintern Interceptor (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 3,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1190,
            "manpower": 723,
            "metal": 0,
            "cash": 1870,
            "oil": 1190
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.9,
            "defense": 2.6
          },
          "vsLightArmor": {
            "attack": 3.4,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 3.4,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 15.3,
            "defense": 10.2
          },
          "vsShip": {
            "attack": 3.4,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 3.4,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 0.7,
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
        "unitName": "Comintern Interceptor (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 4,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1360,
            "manpower": 765,
            "metal": 0,
            "cash": 2125,
            "oil": 1360
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.2,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 4.5,
            "defense": 3
          },
          "vsHeavyArmor": {
            "attack": 4.5,
            "defense": 3
          },
          "vsAirplane": {
            "attack": 19.8,
            "defense": 13.2
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 4.5,
            "defense": 3
          },
          "vsBuildings": {
            "attack": 1.1,
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
      },
      {
        "unitName": "Comintern Interceptor (Estimated Stats)",
        "level": 7,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 5.1,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1530,
            "manpower": 765,
            "metal": 0,
            "cash": 2295,
            "oil": 1530
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.8,
            "defense": 4.5
          },
          "vsLightArmor": {
            "attack": 5.9,
            "defense": 3.9
          },
          "vsHeavyArmor": {
            "attack": 5.9,
            "defense": 3.9
          },
          "vsAirplane": {
            "attack": 25.2,
            "defense": 16.8
          },
          "vsShip": {
            "attack": 5.9,
            "defense": 3.9
          },
          "vsSubmarine": {
            "attack": 5.9,
            "defense": 3.9
          },
          "vsBuildings": {
            "attack": 1.6,
            "defense": 1.1
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
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Interceptor (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 0.5,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 950,
            "manpower": 800,
            "metal": 0,
            "cash": 1500,
            "oil": 950
          },
          "minTimeInSeconds": 9857
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.8,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 0.5,
            "defense": 0.3
          },
          "vsHeavyArmor": {
            "attack": 0.5,
            "defense": 0.3
          },
          "vsAirplane": {
            "attack": 6.9,
            "defense": 4.6
          },
          "vsShip": {
            "attack": 0.5,
            "defense": 0.3
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 0.3
          },
          "vsBuildings": {
            "attack": 0.2,
            "defense": 0.1
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 15,
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
        "unitName": "Pan-Asian Interceptor (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 1,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 1000,
            "manpower": 800,
            "metal": 0,
            "cash": 1600,
            "oil": 1000
          },
          "minTimeInSeconds": 12857
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.5,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 1,
            "defense": 0.7
          },
          "vsHeavyArmor": {
            "attack": 1,
            "defense": 0.7
          },
          "vsAirplane": {
            "attack": 9.2,
            "defense": 6.1
          },
          "vsShip": {
            "attack": 1,
            "defense": 0.7
          },
          "vsSubmarine": {
            "attack": 1,
            "defense": 0.7
          },
          "vsBuildings": {
            "attack": 0.3,
            "defense": 0.2
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 20,
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
        "unitName": "Pan-Asian Interceptor (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 1.4,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 800,
            "metal": 0,
            "cash": 1700,
            "oil": 1100
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2,
            "defense": 1.3
          },
          "vsLightArmor": {
            "attack": 1.5,
            "defense": 1
          },
          "vsHeavyArmor": {
            "attack": 1.5,
            "defense": 1
          },
          "vsAirplane": {
            "attack": 11.5,
            "defense": 7.7
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 0.4,
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
        "unitName": "Pan-Asian Interceptor (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 2.2,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 850,
            "metal": 0,
            "cash": 2000,
            "oil": 1300
          },
          "minTimeInSeconds": 21857
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3,
            "defense": 2
          },
          "vsLightArmor": {
            "attack": 2.5,
            "defense": 1.7
          },
          "vsHeavyArmor": {
            "attack": 2.5,
            "defense": 1.7
          },
          "vsAirplane": {
            "attack": 15,
            "defense": 10
          },
          "vsShip": {
            "attack": 2.5,
            "defense": 1.7
          },
          "vsSubmarine": {
            "attack": 2.5,
            "defense": 1.7
          },
          "vsBuildings": {
            "attack": 0.6,
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
        "unitName": "Pan-Asian Interceptor (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 3.3,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1400,
            "manpower": 850,
            "metal": 0,
            "cash": 2200,
            "oil": 1400
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.3,
            "defense": 2.9
          },
          "vsLightArmor": {
            "attack": 3.8,
            "defense": 2.5
          },
          "vsHeavyArmor": {
            "attack": 3.8,
            "defense": 2.5
          },
          "vsAirplane": {
            "attack": 19.5,
            "defense": 13
          },
          "vsShip": {
            "attack": 3.8,
            "defense": 2.5
          },
          "vsSubmarine": {
            "attack": 3.8,
            "defense": 2.5
          },
          "vsBuildings": {
            "attack": 0.8,
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
        "unitName": "Pan-Asian Interceptor (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 4.4,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1600,
            "manpower": 900,
            "metal": 0,
            "cash": 2500,
            "oil": 1600
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.8,
            "defense": 3.9
          },
          "vsLightArmor": {
            "attack": 5,
            "defense": 3.3
          },
          "vsHeavyArmor": {
            "attack": 5,
            "defense": 3.3
          },
          "vsAirplane": {
            "attack": 25.3,
            "defense": 16.9
          },
          "vsShip": {
            "attack": 5,
            "defense": 3.3
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 3.3
          },
          "vsBuildings": {
            "attack": 1.2,
            "defense": 0.8
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
      },
      {
        "unitName": "Pan-Asian Interceptor (Estimated Stats)",
        "level": 7,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 5.7,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1800,
            "manpower": 900,
            "metal": 0,
            "cash": 2700,
            "oil": 1800
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Air",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.5,
            "defense": 5
          },
          "vsLightArmor": {
            "attack": 6.5,
            "defense": 4.3
          },
          "vsHeavyArmor": {
            "attack": 6.5,
            "defense": 4.3
          },
          "vsAirplane": {
            "attack": 32.2,
            "defense": 21.5
          },
          "vsShip": {
            "attack": 6.5,
            "defense": 4.3
          },
          "vsSubmarine": {
            "attack": 6.5,
            "defense": 4.3
          },
          "vsBuildings": {
            "attack": 1.8,
            "defense": 1.2
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
      }
    ]
  },
};
