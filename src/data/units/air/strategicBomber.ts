import { IUnitType } from '@/types';

export const strategicBomberData: IUnitType = {
  genericName: 'Strategic Bomber',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Boeing B-17 Flying Fortress',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 1,
        hitpoints: 35,
        production: {
          costs: {
            food: 1600,
            manpower: 2000,
            metal: 0,
            cash: 1800,
            oil: 1600
          },
          minTimeInSeconds: 10800
        },
        specialProperties: [ 'Anti-Structure', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.3, defense: 0.6 },
          vsLightArmor:     { attack: 1.3, defense: 0.6 },
          vsHeavyArmor:     { attack: 1.3, defense: 0.6 },
          vsAirplane:       { attack: 2,   defense: 1 },
          vsShip:           { attack: 1,   defense: 0.5 },
          vsSubmarine:      { attack: 0.8, defense: 0.4 },
          vsBuildings:      { attack: 12,  defense: 6 },
          vsProvinceMorale: { attack: 2.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Consolidated B-24 Liberator',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 1.3,
        hitpoints: 46,
        production: {
          costs: {
            food: 1800,
            manpower: 2000,
            metal: 0,
            cash: 2000,
            oil: 1800
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Structure', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.7, defense: 0.8 },
          vsLightArmor:     { attack: 1.7, defense: 0.8 },
          vsHeavyArmor:     { attack: 1.7, defense: 0.8 },
          vsAirplane:       { attack: 2.5, defense: 1.3 },
          vsShip:           { attack: 1.3, defense: 0.7 },
          vsSubmarine:      { attack: 1,   defense: 0.5 },
          vsBuildings:      { attack: 16,  defense: 8 },
          vsProvinceMorale: { attack: 3.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 46,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 46,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 46,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 46,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 46,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 46,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Boeing YB-40 Flying Fortress',
        level: 3,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 1.7,
        hitpoints: 58,
        production: {
          costs: {
            food: 1900,
            manpower: 2000,
            metal: 0,
            cash: 2100,
            oil: 1900
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Structure', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2.3, defense: 1.1 },
          vsLightArmor:     { attack: 2.3, defense: 1.1 },
          vsHeavyArmor:     { attack: 2.3, defense: 1.1 },
          vsAirplane:       { attack: 3.5, defense: 1.7 },
          vsShip:           { attack: 1.7, defense: 0.9 },
          vsSubmarine:      { attack: 1.3, defense: 0.7 },
          vsBuildings:      { attack: 22,  defense: 11 },
          vsProvinceMorale: { attack: 5,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 58,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 58,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 58,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 58,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 58,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 58,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'B-32 Dominator',
        level: 4,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 2.4,
        hitpoints: 75,
        production: {
          costs: {
            food: 2200,
            manpower: 2100,
            metal: 0,
            cash: 2400,
            oil: 2200
          },
          minTimeInSeconds: 18900
        },
        specialProperties: [ 'Anti-Structure', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3.2, defense: 1.6 },
          vsLightArmor:     { attack: 3.2, defense: 1.6 },
          vsHeavyArmor:     { attack: 3.2, defense: 1.6 },
          vsAirplane:       { attack: 5,   defense: 2.5 },
          vsShip:           { attack: 2.3, defense: 1.2 },
          vsSubmarine:      { attack: 1.7, defense: 0.9 },
          vsBuildings:      { attack: 30,  defense: 15 },
          vsProvinceMorale: { attack: 6.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Boeing B-29 Superfortress',
        level: 5,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 3.4,
        hitpoints: 98,
        production: {
          costs: {
            food: 2400,
            manpower: 2200,
            metal: 0,
            cash: 2700,
            oil: 2400
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Anti-Structure', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.5, defense: 2.3 },
          vsLightArmor:     { attack: 4.5, defense: 2.3 },
          vsHeavyArmor:     { attack: 4.5, defense: 2.3 },
          vsAirplane:       { attack: 7,   defense: 3.5 },
          vsShip:           { attack: 3.2, defense: 1.6 },
          vsSubmarine:      { attack: 2.3, defense: 1.1 },
          vsBuildings:      { attack: 40,  defense: 20 },
          vsProvinceMorale: { attack: 9,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'N. American B-45 Tornado',
        level: 6,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 4.5,
        hitpoints: 121,
        production: {
          costs: {
            food: 2700,
            manpower: 2200,
            metal: 0,
            cash: 3000,
            oil: 2700
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Anti-Structure', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,   defense: 3 },
          vsLightArmor:     { attack: 6,   defense: 3 },
          vsHeavyArmor:     { attack: 6,   defense: 3 },
          vsAirplane:       { attack: 9.5, defense: 4.7 },
          vsShip:           { attack: 4.5, defense: 2.3 },
          vsSubmarine:      { attack: 3.2, defense: 1.6 },
          vsBuildings:      { attack: 52,  defense: 26 },
          vsProvinceMorale: { attack: 12,  defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Boeing B-47 Stratojet',
        level: 7,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 6,
        hitpoints: 150,
        production: {
          costs: {
            food: 2900,
            manpower: 2300,
            metal: 0,
            cash: 3300,
            oil: 2900
          },
          minTimeInSeconds: 25200
        },
        specialProperties: [ 'Anti-Structure', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8,    defense: 4 },
          vsLightArmor:     { attack: 8,    defense: 4 },
          vsHeavyArmor:     { attack: 8,    defense: 4 },
          vsAirplane:       { attack: 12.5, defense: 6.3 },
          vsShip:           { attack: 6,    defense: 3 },
          vsSubmarine:      { attack: 4.5,  defense: 2.3 },
          vsBuildings:      { attack: 66,   defense: 33 },
          vsProvinceMorale: { attack: 16,   defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 150,  attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 150,  attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 150,  attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 150,  attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 150,  attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 150,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Strategic Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 1.2,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1760,
            "manpower": 2200,
            "metal": 0,
            "cash": 1980,
            "oil": 1760
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.5,
            "defense": 0.7
          },
          "vsLightArmor": {
            "attack": 1.5,
            "defense": 0.7
          },
          "vsHeavyArmor": {
            "attack": 1.5,
            "defense": 0.7
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 13.8,
            "defense": 6.9
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
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 35,
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
        "unitName": "Axis Strategic Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 1.5,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 1980,
            "manpower": 2200,
            "metal": 0,
            "cash": 2200,
            "oil": 1980
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2,
            "defense": 0.9
          },
          "vsLightArmor": {
            "attack": 2,
            "defense": 0.9
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 0.9
          },
          "vsAirplane": {
            "attack": 2.9,
            "defense": 1.5
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 0.8
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 18.4,
            "defense": 9.2
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
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 46,
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
        "unitName": "Axis Strategic Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 2,
        "hitpoints": 58,
        "production": {
          "costs": {
            "food": 2090,
            "manpower": 2200,
            "metal": 0,
            "cash": 2310,
            "oil": 2090
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.6,
            "defense": 1.3
          },
          "vsLightArmor": {
            "attack": 2.6,
            "defense": 1.3
          },
          "vsHeavyArmor": {
            "attack": 2.6,
            "defense": 1.3
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 2
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
            "attack": 25.3,
            "defense": 12.6
          },
          "vsProvinceMorale": {
            "attack": 5.8,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 58,
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
        "unitName": "Axis Strategic Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 2.8,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 2420,
            "manpower": 2310,
            "metal": 0,
            "cash": 2640,
            "oil": 2420
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.7,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 3.7,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 3.7,
            "defense": 1.8
          },
          "vsAirplane": {
            "attack": 5.8,
            "defense": 2.9
          },
          "vsShip": {
            "attack": 2.6,
            "defense": 1.4
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 34.5,
            "defense": 17.3
          },
          "vsProvinceMorale": {
            "attack": 7.5,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 75,
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
        "unitName": "Axis Strategic Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 3.9,
        "hitpoints": 98,
        "production": {
          "costs": {
            "food": 2640,
            "manpower": 2420,
            "metal": 0,
            "cash": 2970,
            "oil": 2640
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.2,
            "defense": 2.6
          },
          "vsLightArmor": {
            "attack": 5.2,
            "defense": 2.6
          },
          "vsHeavyArmor": {
            "attack": 5.2,
            "defense": 2.6
          },
          "vsAirplane": {
            "attack": 8,
            "defense": 4
          },
          "vsShip": {
            "attack": 3.7,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 2.6,
            "defense": 1.3
          },
          "vsBuildings": {
            "attack": 46,
            "defense": 23
          },
          "vsProvinceMorale": {
            "attack": 10.4,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 98,
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
        "unitName": "Axis Strategic Bomber (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 5.2,
        "hitpoints": 121,
        "production": {
          "costs": {
            "food": 2970,
            "manpower": 2420,
            "metal": 0,
            "cash": 3300,
            "oil": 2970
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.9,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 6.9,
            "defense": 3.5
          },
          "vsHeavyArmor": {
            "attack": 6.9,
            "defense": 3.5
          },
          "vsAirplane": {
            "attack": 10.9,
            "defense": 5.4
          },
          "vsShip": {
            "attack": 5.2,
            "defense": 2.6
          },
          "vsSubmarine": {
            "attack": 3.7,
            "defense": 1.8
          },
          "vsBuildings": {
            "attack": 59.8,
            "defense": 29.9
          },
          "vsProvinceMorale": {
            "attack": 13.8,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 121,
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
        "unitName": "Axis Strategic Bomber (Estimated Stats)",
        "level": 7,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 6.9,
        "hitpoints": 150,
        "production": {
          "costs": {
            "food": 3190,
            "manpower": 2530,
            "metal": 0,
            "cash": 3630,
            "oil": 3190
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9.2,
            "defense": 4.6
          },
          "vsLightArmor": {
            "attack": 9.2,
            "defense": 4.6
          },
          "vsHeavyArmor": {
            "attack": 9.2,
            "defense": 4.6
          },
          "vsAirplane": {
            "attack": 14.4,
            "defense": 7.2
          },
          "vsShip": {
            "attack": 6.9,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 5.2,
            "defense": 2.6
          },
          "vsBuildings": {
            "attack": 75.9,
            "defense": 37.9
          },
          "vsProvinceMorale": {
            "attack": 18.4,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 150,
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
        "unitName": "Comintern Strategic Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 0.9,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1360,
            "manpower": 1700,
            "metal": 0,
            "cash": 1530,
            "oil": 1360
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.2,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 1.2,
            "defense": 0.5
          },
          "vsHeavyArmor": {
            "attack": 1.2,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsSubmarine": {
            "attack": 0.7,
            "defense": 0.4
          },
          "vsBuildings": {
            "attack": 10.8,
            "defense": 5.4
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
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 35,
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
        "unitName": "Comintern Strategic Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 1.2,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1530,
            "manpower": 1700,
            "metal": 0,
            "cash": 1700,
            "oil": 1530
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.5,
            "defense": 0.7
          },
          "vsLightArmor": {
            "attack": 1.5,
            "defense": 0.7
          },
          "vsHeavyArmor": {
            "attack": 1.5,
            "defense": 0.7
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 14.4,
            "defense": 7.2
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
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 46,
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
        "unitName": "Comintern Strategic Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 1.5,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1615,
            "manpower": 1700,
            "metal": 0,
            "cash": 1785,
            "oil": 1615
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.1,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 2.1,
            "defense": 1
          },
          "vsHeavyArmor": {
            "attack": 2.1,
            "defense": 1
          },
          "vsAirplane": {
            "attack": 3.2,
            "defense": 1.5
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 0.8
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 19.8,
            "defense": 9.9
          },
          "vsProvinceMorale": {
            "attack": 4.5,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 58,
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
        "unitName": "Comintern Strategic Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 2.2,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1870,
            "manpower": 1785,
            "metal": 0,
            "cash": 2040,
            "oil": 1870
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.9,
            "defense": 1.4
          },
          "vsLightArmor": {
            "attack": 2.9,
            "defense": 1.4
          },
          "vsHeavyArmor": {
            "attack": 2.9,
            "defense": 1.4
          },
          "vsAirplane": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 2.1,
            "defense": 1.1
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 0.8
          },
          "vsBuildings": {
            "attack": 27,
            "defense": 13.5
          },
          "vsProvinceMorale": {
            "attack": 5.9,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 75,
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
        "unitName": "Comintern Strategic Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 3.1,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 2040,
            "manpower": 1870,
            "metal": 0,
            "cash": 2295,
            "oil": 2040
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.1,
            "defense": 2.1
          },
          "vsLightArmor": {
            "attack": 4.1,
            "defense": 2.1
          },
          "vsHeavyArmor": {
            "attack": 4.1,
            "defense": 2.1
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsShip": {
            "attack": 2.9,
            "defense": 1.4
          },
          "vsSubmarine": {
            "attack": 2.1,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 36,
            "defense": 18
          },
          "vsProvinceMorale": {
            "attack": 8.1,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 98,
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
        "unitName": "Comintern Strategic Bomber (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 4.1,
        "hitpoints": 105,
        "production": {
          "costs": {
            "food": 2295,
            "manpower": 1870,
            "metal": 0,
            "cash": 2550,
            "oil": 2295
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.4,
            "defense": 2.7
          },
          "vsLightArmor": {
            "attack": 5.4,
            "defense": 2.7
          },
          "vsHeavyArmor": {
            "attack": 5.4,
            "defense": 2.7
          },
          "vsAirplane": {
            "attack": 8.6,
            "defense": 4.2
          },
          "vsShip": {
            "attack": 4.1,
            "defense": 2.1
          },
          "vsSubmarine": {
            "attack": 2.9,
            "defense": 1.4
          },
          "vsBuildings": {
            "attack": 46.8,
            "defense": 23.4
          },
          "vsProvinceMorale": {
            "attack": 10.8,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 121,
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
        "unitName": "Comintern Strategic Bomber (Estimated Stats)",
        "level": 7,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 5.4,
        "hitpoints": 130,
        "production": {
          "costs": {
            "food": 2465,
            "manpower": 1955,
            "metal": 0,
            "cash": 2805,
            "oil": 2465
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.2,
            "defense": 3.6
          },
          "vsLightArmor": {
            "attack": 7.2,
            "defense": 3.6
          },
          "vsHeavyArmor": {
            "attack": 7.2,
            "defense": 3.6
          },
          "vsAirplane": {
            "attack": 11.3,
            "defense": 5.7
          },
          "vsShip": {
            "attack": 5.4,
            "defense": 2.7
          },
          "vsSubmarine": {
            "attack": 4.1,
            "defense": 2.1
          },
          "vsBuildings": {
            "attack": 59.4,
            "defense": 29.7
          },
          "vsProvinceMorale": {
            "attack": 14.4,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 150,
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
        "unitName": "Pan-Asian Strategic Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 1,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1600,
            "manpower": 2000,
            "metal": 0,
            "cash": 1800,
            "oil": 1600
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.3,
            "defense": 0.6
          },
          "vsLightArmor": {
            "attack": 1.3,
            "defense": 0.6
          },
          "vsHeavyArmor": {
            "attack": 1.3,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 1
          },
          "vsShip": {
            "attack": 1,
            "defense": 0.5
          },
          "vsSubmarine": {
            "attack": 0.8,
            "defense": 0.4
          },
          "vsBuildings": {
            "attack": 12,
            "defense": 6
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
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 35,
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
        "unitName": "Pan-Asian Strategic Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 1.3,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1800,
            "manpower": 2000,
            "metal": 0,
            "cash": 2000,
            "oil": 1800
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.7,
            "defense": 0.8
          },
          "vsLightArmor": {
            "attack": 1.7,
            "defense": 0.8
          },
          "vsHeavyArmor": {
            "attack": 1.7,
            "defense": 0.8
          },
          "vsAirplane": {
            "attack": 2.5,
            "defense": 1.3
          },
          "vsShip": {
            "attack": 1.3,
            "defense": 0.7
          },
          "vsSubmarine": {
            "attack": 1,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 16,
            "defense": 8
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
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 46,
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
        "unitName": "Pan-Asian Strategic Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 1.7,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1900,
            "manpower": 2000,
            "metal": 0,
            "cash": 2100,
            "oil": 1900
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.3,
            "defense": 1.1
          },
          "vsLightArmor": {
            "attack": 2.3,
            "defense": 1.1
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 1.1
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsShip": {
            "attack": 1.7,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 1.3,
            "defense": 0.7
          },
          "vsBuildings": {
            "attack": 22,
            "defense": 11
          },
          "vsProvinceMorale": {
            "attack": 5,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 58,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 58,
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
        "unitName": "Pan-Asian Strategic Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 2.4,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 2200,
            "manpower": 2100,
            "metal": 0,
            "cash": 2400,
            "oil": 2200
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.2,
            "defense": 1.6
          },
          "vsLightArmor": {
            "attack": 3.2,
            "defense": 1.6
          },
          "vsHeavyArmor": {
            "attack": 3.2,
            "defense": 1.6
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 2.5
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
            "attack": 30,
            "defense": 15
          },
          "vsProvinceMorale": {
            "attack": 6.5,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 75,
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
        "unitName": "Pan-Asian Strategic Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 3.4,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 2400,
            "manpower": 2200,
            "metal": 0,
            "cash": 2700,
            "oil": 2400
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 7,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 3.2,
            "defense": 1.6
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 1.1
          },
          "vsBuildings": {
            "attack": 40,
            "defense": 20
          },
          "vsProvinceMorale": {
            "attack": 9,
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 98,
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
        "unitName": "Pan-Asian Strategic Bomber (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 4.5,
        "hitpoints": 105,
        "production": {
          "costs": {
            "food": 2700,
            "manpower": 2200,
            "metal": 0,
            "cash": 3000,
            "oil": 2700
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6,
            "defense": 3
          },
          "vsLightArmor": {
            "attack": 6,
            "defense": 3
          },
          "vsHeavyArmor": {
            "attack": 6,
            "defense": 3
          },
          "vsAirplane": {
            "attack": 9.5,
            "defense": 4.7
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 3.2,
            "defense": 1.6
          },
          "vsBuildings": {
            "attack": 52,
            "defense": 26
          },
          "vsProvinceMorale": {
            "attack": 12,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 121,
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
        "unitName": "Pan-Asian Strategic Bomber (Estimated Stats)",
        "level": 7,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 6,
        "hitpoints": 130,
        "production": {
          "costs": {
            "food": 2900,
            "manpower": 2300,
            "metal": 0,
            "cash": 3300,
            "oil": 2900
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Anti-Structure",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8,
            "defense": 4
          },
          "vsLightArmor": {
            "attack": 8,
            "defense": 4
          },
          "vsHeavyArmor": {
            "attack": 8,
            "defense": 4
          },
          "vsAirplane": {
            "attack": 12.5,
            "defense": 6.3
          },
          "vsShip": {
            "attack": 6,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 66,
            "defense": 33
          },
          "vsProvinceMorale": {
            "attack": 16,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 150,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 150,
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
