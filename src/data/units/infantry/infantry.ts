import { IUnitType } from '@/types';

export const infantryData: IUnitType = {
  genericName: 'Infantry',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Infantry Type 1932',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 2.3,
        hitpoints: 15,
        production: {
          costs: {
            food: 1100,
            manpower: 950,
            metal: 250,
            cash: 800,
            oil: 0
          },
          minTimeInSeconds: 6300
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,   defense: 4.5 },
          vsLightArmor:     { attack: 1.5, defense: 2.3 },
          vsHeavyArmor:     { attack: 1,   defense: 1.5 },
          vsAirplane:       { attack: 1,   defense: 1.5 },
          vsShip:           { attack: 0.5, defense: 0.8 },
          vsSubmarine:      { attack: 0.5, defense: 0.8 },
          vsBuildings:      { attack: 0.2, defense: 0.3 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 15,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1934',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 3.1,
        hitpoints: 20,
        production: {
          costs: {
            food: 1200,
            manpower: 950,
            metal: 250,
            cash: 800,
            oil: 0
          },
          minTimeInSeconds: 7200
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4,   defense: 6 },
          vsLightArmor:     { attack: 2,   defense: 3 },
          vsHeavyArmor:     { attack: 1.5, defense: 2.3 },
          vsAirplane:       { attack: 1.5, defense: 2.3 },
          vsShip:           { attack: 1,   defense: 1.5 },
          vsSubmarine:      { attack: 1,   defense: 1.5 },
          vsBuildings:      { attack: 0.3, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1938',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 4.3,
        hitpoints: 25,
        production: {
          costs: {
            food: 1200,
            manpower: 950,
            metal: 250,
            cash: 850,
            oil: 0
          },
          minTimeInSeconds: 9000
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5.5, defense: 8.3 },
          vsLightArmor:     { attack: 2.7, defense: 4.1 },
          vsHeavyArmor:     { attack: 2,   defense: 3 },
          vsAirplane:       { attack: 2,   defense: 3 },
          vsShip:           { attack: 1.5, defense: 2.3 },
          vsSubmarine:      { attack: 1.5, defense: 2.3 },
          vsBuildings:      { attack: 0.4, defense: 0.6 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 25,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1942',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 5.8,
        hitpoints: 30,
        production: {
          costs: {
            food: 1300,
            manpower: 1000,
            metal: 250,
            cash: 900,
            oil: 0
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7,   defense: 10.5 },
          vsLightArmor:     { attack: 4,   defense: 6 },
          vsHeavyArmor:     { attack: 3,   defense: 4.5 },
          vsAirplane:       { attack: 3,   defense: 4.5 },
          vsShip:           { attack: 2,   defense: 3 },
          vsSubmarine:      { attack: 2,   defense: 3 },
          vsBuildings:      { attack: 0.6, defense: 0.9 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1946',
        level: 5,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 7.5,
        hitpoints: 40,
        production: {
          costs: {
            food: 1400,
            manpower: 1000,
            metal: 300,
            cash: 1000,
            oil: 0
          },
          minTimeInSeconds: 12600
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 9,   defense: 13.5 },
          vsLightArmor:     { attack: 5,   defense: 7.5 },
          vsHeavyArmor:     { attack: 4,   defense: 6 },
          vsAirplane:       { attack: 4,   defense: 6 },
          vsShip:           { attack: 3,   defense: 4.5 },
          vsSubmarine:      { attack: 3,   defense: 4.5 },
          vsBuildings:      { attack: 0.8, defense: 1.2 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1950',
        level: 6,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 10.1,
        hitpoints: 50,
        production: {
          costs: {
            food: 1600,
            manpower: 1100,
            metal: 350,
            cash: 1200,
            oil: 0
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 12,  defense: 18 },
          vsLightArmor:     { attack: 7,   defense: 10.5 },
          vsHeavyArmor:     { attack: 5.3, defense: 8 },
          vsAirplane:       { attack: 5.3, defense: 8 },
          vsShip:           { attack: 4,   defense: 6 },
          vsSubmarine:      { attack: 4,   defense: 6 },
          vsBuildings:      { attack: 1.2, defense: 1.8 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1952',
        level: 7,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 13.2,
        hitpoints: 65,
        production: {
          costs: {
            food: 1800,
            manpower: 1100,
            metal: 400,
            cash: 1300,
            oil: 0
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 15.3, defense: 22.9 },
          vsLightArmor:     { attack: 9.3,  defense: 13.9 },
          vsHeavyArmor:     { attack: 7,    defense: 10.5 },
          vsAirplane:       { attack: 7,    defense: 10.5 },
          vsShip:           { attack: 5.7,  defense: 8.5 },
          vsSubmarine:      { attack: 5.7,  defense: 8.5 },
          vsBuildings:      { attack: 1.8,  defense: 2.7 },
          vsProvinceMorale: { attack: 0.3,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Infantry (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 2.6,
        "hitpoints": 17,
        "production": {
          "costs": {
            "food": 1210,
            "manpower": 1045,
            "metal": 275,
            "cash": 880,
            "oil": 0
          },
          "minTimeInSeconds": 9000
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.5,
            "defense": 5.2
          },
          "vsLightArmor": {
            "attack": 1.7,
            "defense": 2.6
          },
          "vsHeavyArmor": {
            "attack": 1.2,
            "defense": 1.7
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
            "speedModifier": -0.5,
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Axis Infantry (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 3.6,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 1320,
            "manpower": 1045,
            "metal": 275,
            "cash": 880,
            "oil": 0
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.6,
            "defense": 6.9
          },
          "vsLightArmor": {
            "attack": 2.3,
            "defense": 3.5
          },
          "vsHeavyArmor": {
            "attack": 1.7,
            "defense": 2.6
          },
          "vsAirplane": {
            "attack": 1.7,
            "defense": 2.6
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
            "attack": 0.3,
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
            "speedModifier": -0.5,
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Axis Infantry (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 4.9,
        "hitpoints": 29,
        "production": {
          "costs": {
            "food": 1320,
            "manpower": 1045,
            "metal": 275,
            "cash": 935,
            "oil": 0
          },
          "minTimeInSeconds": 12857
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.3,
            "defense": 9.5
          },
          "vsLightArmor": {
            "attack": 3.1,
            "defense": 4.7
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 3.5
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 1.7,
            "defense": 2.6
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 2.6
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
            "speedModifier": -0.5,
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Axis Infantry (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 6.7,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1430,
            "manpower": 1100,
            "metal": 275,
            "cash": 990,
            "oil": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8,
            "defense": 12.1
          },
          "vsLightArmor": {
            "attack": 4.6,
            "defense": 6.9
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 5.2
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 5.2
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
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Axis Infantry (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 8.6,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 1540,
            "manpower": 1100,
            "metal": 330,
            "cash": 1100,
            "oil": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 10.4,
            "defense": 15.5
          },
          "vsLightArmor": {
            "attack": 5.8,
            "defense": 8.6
          },
          "vsHeavyArmor": {
            "attack": 4.6,
            "defense": 6.9
          },
          "vsAirplane": {
            "attack": 4.6,
            "defense": 6.9
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 5.2
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 5.2
          },
          "vsBuildings": {
            "attack": 0.9,
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
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Axis Infantry (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 11.6,
        "hitpoints": 57,
        "production": {
          "costs": {
            "food": 1760,
            "manpower": 1210,
            "metal": 385,
            "cash": 1320,
            "oil": 0
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 13.8,
            "defense": 20.7
          },
          "vsLightArmor": {
            "attack": 8,
            "defense": 12.1
          },
          "vsHeavyArmor": {
            "attack": 6.1,
            "defense": 9.2
          },
          "vsAirplane": {
            "attack": 6.1,
            "defense": 9.2
          },
          "vsShip": {
            "attack": 4.6,
            "defense": 6.9
          },
          "vsSubmarine": {
            "attack": 4.6,
            "defense": 6.9
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
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Axis Infantry (Estimated Stats)",
        "level": 7,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 15.2,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 1980,
            "manpower": 1210,
            "metal": 440,
            "cash": 1430,
            "oil": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 17.6,
            "defense": 26.3
          },
          "vsLightArmor": {
            "attack": 10.7,
            "defense": 16
          },
          "vsHeavyArmor": {
            "attack": 8,
            "defense": 12.1
          },
          "vsAirplane": {
            "attack": 8,
            "defense": 12.1
          },
          "vsShip": {
            "attack": 6.6,
            "defense": 9.8
          },
          "vsSubmarine": {
            "attack": 6.6,
            "defense": 9.8
          },
          "vsBuildings": {
            "attack": 2.1,
            "defense": 3.1
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
            "speedModifier": -0.5,
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Infantry (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 2.1,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 935,
            "manpower": 808,
            "metal": 213,
            "cash": 680,
            "oil": 0
          },
          "minTimeInSeconds": 6300
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.7,
            "defense": 4.1
          },
          "vsLightArmor": {
            "attack": 1.4,
            "defense": 2.1
          },
          "vsHeavyArmor": {
            "attack": 0.9,
            "defense": 1.4
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
            "speedModifier": -0.5,
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Infantry (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 2.8,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 1020,
            "manpower": 808,
            "metal": 213,
            "cash": 680,
            "oil": 0
          },
          "minTimeInSeconds": 7200
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.6,
            "defense": 5.4
          },
          "vsLightArmor": {
            "attack": 1.8,
            "defense": 2.7
          },
          "vsHeavyArmor": {
            "attack": 1.4,
            "defense": 2.1
          },
          "vsAirplane": {
            "attack": 1.4,
            "defense": 2.1
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
            "attack": 0.3,
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
            "speedModifier": -0.5,
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Infantry (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 3.9,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 1020,
            "manpower": 808,
            "metal": 213,
            "cash": 723,
            "oil": 0
          },
          "minTimeInSeconds": 9000
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5,
            "defense": 7.5
          },
          "vsLightArmor": {
            "attack": 2.4,
            "defense": 3.7
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 2.7
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 2.7
          },
          "vsShip": {
            "attack": 1.4,
            "defense": 2.1
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 2.1
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
            "speedModifier": -0.5,
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Infantry (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 5.2,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1105,
            "manpower": 850,
            "metal": 213,
            "cash": 765,
            "oil": 0
          },
          "minTimeInSeconds": 9900
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.3,
            "defense": 9.5
          },
          "vsLightArmor": {
            "attack": 3.6,
            "defense": 5.4
          },
          "vsHeavyArmor": {
            "attack": 2.7,
            "defense": 4.1
          },
          "vsAirplane": {
            "attack": 2.7,
            "defense": 4.1
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
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Infantry (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 6.8,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1190,
            "manpower": 850,
            "metal": 255,
            "cash": 850,
            "oil": 0
          },
          "minTimeInSeconds": 12600
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8.1,
            "defense": 12.2
          },
          "vsLightArmor": {
            "attack": 4.5,
            "defense": 6.8
          },
          "vsHeavyArmor": {
            "attack": 3.6,
            "defense": 5.4
          },
          "vsAirplane": {
            "attack": 3.6,
            "defense": 5.4
          },
          "vsShip": {
            "attack": 2.7,
            "defense": 4.1
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": 4.1
          },
          "vsBuildings": {
            "attack": 0.7,
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
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Infantry (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 9.1,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1360,
            "manpower": 935,
            "metal": 298,
            "cash": 1020,
            "oil": 0
          },
          "minTimeInSeconds": 13500
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 10.8,
            "defense": 16.2
          },
          "vsLightArmor": {
            "attack": 6.3,
            "defense": 9.5
          },
          "vsHeavyArmor": {
            "attack": 4.8,
            "defense": 7.2
          },
          "vsAirplane": {
            "attack": 4.8,
            "defense": 7.2
          },
          "vsShip": {
            "attack": 3.6,
            "defense": 5.4
          },
          "vsSubmarine": {
            "attack": 3.6,
            "defense": 5.4
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
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Infantry (Estimated Stats)",
        "level": 7,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 11.9,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1530,
            "manpower": 935,
            "metal": 340,
            "cash": 1105,
            "oil": 0
          },
          "minTimeInSeconds": 16200
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 13.8,
            "defense": 20.6
          },
          "vsLightArmor": {
            "attack": 8.4,
            "defense": 12.5
          },
          "vsHeavyArmor": {
            "attack": 6.3,
            "defense": 9.5
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 9.5
          },
          "vsShip": {
            "attack": 5.1,
            "defense": 7.7
          },
          "vsSubmarine": {
            "attack": 5.1,
            "defense": 7.7
          },
          "vsBuildings": {
            "attack": 1.6,
            "defense": 2.4
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
            "speedModifier": -0.5,
            "strengthModifier": 0.2
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
          },
          "urban": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Pan-Asian Infantry (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 2.3,
        "hitpoints": 17,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 950,
            "metal": 250,
            "cash": 800,
            "oil": 0
          },
          "minTimeInSeconds": 9000
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3,
            "defense": 4.5
          },
          "vsLightArmor": {
            "attack": 1.5,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 1,
            "defense": 1.5
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
            "health": 17,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.4
          },
          "forest": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "urban": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Infantry (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 3.1,
        "hitpoints": 22,
        "production": {
          "costs": {
            "food": 1200,
            "manpower": 950,
            "metal": 250,
            "cash": 800,
            "oil": 0
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4,
            "defense": 6
          },
          "vsLightArmor": {
            "attack": 2,
            "defense": 3
          },
          "vsHeavyArmor": {
            "attack": 1.5,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 1.5,
            "defense": 2.3
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
            "attack": 0.3,
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
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.4
          },
          "forest": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "urban": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Infantry (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 4.3,
        "hitpoints": 28,
        "production": {
          "costs": {
            "food": 1200,
            "manpower": 950,
            "metal": 250,
            "cash": 850,
            "oil": 0
          },
          "minTimeInSeconds": 12857
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.5,
            "defense": 8.3
          },
          "vsLightArmor": {
            "attack": 2.7,
            "defense": 4.1
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 3
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 3
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 2.3
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
            "health": 28,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.4
          },
          "forest": {
            "health": 28,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "urban": {
            "health": 28,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Infantry (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 5.8,
        "hitpoints": 33,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 1000,
            "metal": 250,
            "cash": 900,
            "oil": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7,
            "defense": 10.5
          },
          "vsLightArmor": {
            "attack": 4,
            "defense": 6
          },
          "vsHeavyArmor": {
            "attack": 3,
            "defense": 4.5
          },
          "vsAirplane": {
            "attack": 3,
            "defense": 4.5
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
            "health": 33,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.4
          },
          "forest": {
            "health": 33,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "urban": {
            "health": 33,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Infantry (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 7.5,
        "hitpoints": 44,
        "production": {
          "costs": {
            "food": 1400,
            "manpower": 1000,
            "metal": 300,
            "cash": 1000,
            "oil": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9,
            "defense": 13.5
          },
          "vsLightArmor": {
            "attack": 5,
            "defense": 7.5
          },
          "vsHeavyArmor": {
            "attack": 4,
            "defense": 6
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 6
          },
          "vsShip": {
            "attack": 3,
            "defense": 4.5
          },
          "vsSubmarine": {
            "attack": 3,
            "defense": 4.5
          },
          "vsBuildings": {
            "attack": 0.8,
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
            "health": 44,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.4
          },
          "forest": {
            "health": 44,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "urban": {
            "health": 44,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Infantry (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 10.1,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 1600,
            "manpower": 1100,
            "metal": 350,
            "cash": 1200,
            "oil": 0
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12,
            "defense": 18
          },
          "vsLightArmor": {
            "attack": 7,
            "defense": 10.5
          },
          "vsHeavyArmor": {
            "attack": 5.3,
            "defense": 8
          },
          "vsAirplane": {
            "attack": 5.3,
            "defense": 8
          },
          "vsShip": {
            "attack": 4,
            "defense": 6
          },
          "vsSubmarine": {
            "attack": 4,
            "defense": 6
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
            "health": 55,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.4
          },
          "forest": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "urban": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Infantry (Estimated Stats)",
        "level": 7,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 13.2,
        "hitpoints": 72,
        "production": {
          "costs": {
            "food": 1800,
            "manpower": 1100,
            "metal": 400,
            "cash": 1300,
            "oil": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 15.3,
            "defense": 22.9
          },
          "vsLightArmor": {
            "attack": 9.3,
            "defense": 13.9
          },
          "vsHeavyArmor": {
            "attack": 7,
            "defense": 10.5
          },
          "vsAirplane": {
            "attack": 7,
            "defense": 10.5
          },
          "vsShip": {
            "attack": 5.7,
            "defense": 8.5
          },
          "vsSubmarine": {
            "attack": 5.7,
            "defense": 8.5
          },
          "vsBuildings": {
            "attack": 1.8,
            "defense": 2.7
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
            "health": 72,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.4
          },
          "forest": {
            "health": 72,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "urban": {
            "health": 72,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
