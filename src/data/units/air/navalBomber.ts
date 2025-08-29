import { IUnitType } from '@/types';

export const navalBomberData: IUnitType = {
  genericName: 'Naval Bomber',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Martin BM',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 0.8,
        hitpoints: 20,
        production: {
          costs: {
            food: 1200,
            manpower: 700,
            metal: 0,
            cash: 1100,
            oil: 1300
          },
          minTimeInSeconds: 7200
        },
        specialProperties: [ 'Anti-Stealth', 'Aircraft', 'Anti-Naval', 'Carriable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 0.5 },
          vsLightArmor:     { attack: 1,   defense: 0.5 },
          vsHeavyArmor:     { attack: 1,   defense: 0.5 },
          vsAirplane:       { attack: 1,   defense: 0.5 },
          vsShip:           { attack: 7,   defense: 3.5 },
          vsSubmarine:      { attack: 5,   defense: 2.5 },
          vsBuildings:      { attack: 0.2, defense: 0.1 },
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
        unitName: 'Douglas TBD Devastator',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 1.1,
        hitpoints: 25,
        production: {
          costs: {
            food: 1300,
            manpower: 700,
            metal: 0,
            cash: 1200,
            oil: 1400
          },
          minTimeInSeconds: 9000
        },
        specialProperties: [ 'Anti-Stealth', 'Aircraft', 'Anti-Naval', 'Carriable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 0.7 },
          vsLightArmor:     { attack: 1.5, defense: 0.7 },
          vsHeavyArmor:     { attack: 1.5, defense: 0.7 },
          vsAirplane:       { attack: 1.5, defense: 0.7 },
          vsShip:           { attack: 9.5, defense: 4.8 },
          vsSubmarine:      { attack: 7,   defense: 3.5 },
          vsBuildings:      { attack: 0.4, defense: 0.2 },
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
        unitName: 'Martin PBM Mariner',
        level: 3,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 1.5,
        hitpoints: 35,
        production: {
          costs: {
            food: 1400,
            manpower: 700,
            metal: 0,
            cash: 1200,
            oil: 1500
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Stealth', 'Aircraft', 'Anti-Naval', 'Carriable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,    defense: 1 },
          vsLightArmor:     { attack: 2,    defense: 1 },
          vsHeavyArmor:     { attack: 2,    defense: 1 },
          vsAirplane:       { attack: 2,    defense: 1 },
          vsShip:           { attack: 12.5, defense: 6.3 },
          vsSubmarine:      { attack: 9.5,  defense: 4.8 },
          vsBuildings:      { attack: 0.6,  defense: 0.3 },
          vsProvinceMorale: { attack: 0.1,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
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
        unitName: 'Grumman TBF Avenger',
        level: 4,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 2.3,
        hitpoints: 45,
        production: {
          costs: {
            food: 1600,
            manpower: 750,
            metal: 0,
            cash: 1400,
            oil: 1700
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Anti-Stealth', 'Aircraft', 'Anti-Naval', 'Carriable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,    defense: 1.5 },
          vsLightArmor:     { attack: 3,    defense: 1.5 },
          vsHeavyArmor:     { attack: 3,    defense: 1.5 },
          vsAirplane:       { attack: 3,    defense: 1.5 },
          vsShip:           { attack: 16,   defense: 8 },
          vsSubmarine:      { attack: 12.5, defense: 6.3 },
          vsBuildings:      { attack: 1,    defense: 0.5 },
          vsProvinceMorale: { attack: 0.1,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 45,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 45,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 45,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 45,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 45,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 45,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Brewster SB2A Buccaneer',
        level: 5,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 3,
        hitpoints: 55,
        production: {
          costs: {
            food: 1800,
            manpower: 750,
            metal: 0,
            cash: 1600,
            oil: 1900
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Stealth', 'Aircraft', 'Anti-Naval', 'Carriable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4,   defense: 2 },
          vsLightArmor:     { attack: 4,   defense: 2 },
          vsHeavyArmor:     { attack: 4,   defense: 2 },
          vsAirplane:       { attack: 4,   defense: 2 },
          vsShip:           { attack: 21,  defense: 10.5 },
          vsSubmarine:      { attack: 16,  defense: 8 },
          vsBuildings:      { attack: 1.2, defense: 0.6 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
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
        unitName: 'Douglas BTD Destroyer',
        level: 6,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 4.1,
        hitpoints: 70,
        production: {
          costs: {
            food: 2000,
            manpower: 800,
            metal: 0,
            cash: 1800,
            oil: 2100
          },
          minTimeInSeconds: 18000
        },
        specialProperties: [ 'Anti-Stealth', 'Aircraft', 'Anti-Naval', 'Carriable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5.5, defense: 2.7 },
          vsLightArmor:     { attack: 5.5, defense: 2.7 },
          vsHeavyArmor:     { attack: 5.5, defense: 2.7 },
          vsAirplane:       { attack: 5.5, defense: 2.7 },
          vsShip:           { attack: 27,  defense: 13.5 },
          vsSubmarine:      { attack: 20,  defense: 10 },
          vsBuildings:      { attack: 1.8, defense: 0.9 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 70,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 70,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 70,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 70,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 70,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 70,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Kaiser-Fleetwings XBTK',
        level: 7,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 5.3,
        hitpoints: 85,
        production: {
          costs: {
            food: 2200,
            manpower: 800,
            metal: 0,
            cash: 2000,
            oil: 2300
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Anti-Stealth', 'Aircraft', 'Anti-Naval', 'Carriable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7,   defense: 3.5 },
          vsLightArmor:     { attack: 7,   defense: 3.5 },
          vsHeavyArmor:     { attack: 7,   defense: 3.5 },
          vsAirplane:       { attack: 7,   defense: 3.5 },
          vsShip:           { attack: 34,  defense: 17 },
          vsSubmarine:      { attack: 25,  defense: 12.5 },
          vsBuildings:      { attack: 2.8, defense: 1.4 },
          vsProvinceMorale: { attack: 0.3, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 85,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 85,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 85,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 85,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 85,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 85,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Naval Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 0.9,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 1320,
            "manpower": 770,
            "metal": 0,
            "cash": 1210,
            "oil": 1430
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsLightArmor": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsHeavyArmor": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 8,
            "defense": 4
          },
          "vsSubmarine": {
            "attack": 5.8,
            "defense": 2.9
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
        "unitName": "Axis Naval Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 1.3,
        "hitpoints": 29,
        "production": {
          "costs": {
            "food": 1430,
            "manpower": 770,
            "metal": 0,
            "cash": 1320,
            "oil": 1540
          },
          "minTimeInSeconds": 12857
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
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
            "attack": 1.7,
            "defense": 0.8
          },
          "vsShip": {
            "attack": 10.9,
            "defense": 5.5
          },
          "vsSubmarine": {
            "attack": 8,
            "defense": 4
          },
          "vsBuildings": {
            "attack": 0.5,
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
        "unitName": "Axis Naval Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 1.7,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1540,
            "manpower": 770,
            "metal": 0,
            "cash": 1320,
            "oil": 1650
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsLightArmor": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 14.4,
            "defense": 7.2
          },
          "vsSubmarine": {
            "attack": 10.9,
            "defense": 5.5
          },
          "vsBuildings": {
            "attack": 0.7,
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
        "unitName": "Axis Naval Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 2.6,
        "hitpoints": 52,
        "production": {
          "costs": {
            "food": 1760,
            "manpower": 825,
            "metal": 0,
            "cash": 1540,
            "oil": 1870
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsLightArmor": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsShip": {
            "attack": 18.4,
            "defense": 9.2
          },
          "vsSubmarine": {
            "attack": 14.4,
            "defense": 7.2
          },
          "vsBuildings": {
            "attack": 1.2,
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
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 45,
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
        "unitName": "Axis Naval Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 3.5,
        "hitpoints": 63,
        "production": {
          "costs": {
            "food": 1980,
            "manpower": 825,
            "metal": 0,
            "cash": 1760,
            "oil": 2090
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 4.6,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 24.2,
            "defense": 12.1
          },
          "vsSubmarine": {
            "attack": 18.4,
            "defense": 9.2
          },
          "vsBuildings": {
            "attack": 1.4,
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
        "unitName": "Axis Naval Bomber (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 4.7,
        "hitpoints": 81,
        "production": {
          "costs": {
            "food": 2200,
            "manpower": 880,
            "metal": 0,
            "cash": 1980,
            "oil": 2310
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.3,
            "defense": 3.1
          },
          "vsLightArmor": {
            "attack": 6.3,
            "defense": 3.1
          },
          "vsHeavyArmor": {
            "attack": 6.3,
            "defense": 3.1
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 3.1
          },
          "vsShip": {
            "attack": 31.1,
            "defense": 15.5
          },
          "vsSubmarine": {
            "attack": 23,
            "defense": 11.5
          },
          "vsBuildings": {
            "attack": 2.1,
            "defense": 1
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 70,
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
        "unitName": "Axis Naval Bomber (Estimated Stats)",
        "level": 7,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 6.1,
        "hitpoints": 98,
        "production": {
          "costs": {
            "food": 2420,
            "manpower": 880,
            "metal": 0,
            "cash": 2200,
            "oil": 2530
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
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
            "attack": 8,
            "defense": 4
          },
          "vsShip": {
            "attack": 39.1,
            "defense": 19.5
          },
          "vsSubmarine": {
            "attack": 28.7,
            "defense": 14.4
          },
          "vsBuildings": {
            "attack": 3.2,
            "defense": 1.6
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
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 85,
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
      }
    ],
    "Comintern": [
      {
        "unitName": "Comintern Naval Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 0.7,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 1020,
            "manpower": 595,
            "metal": 0,
            "cash": 935,
            "oil": 1105
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsHeavyArmor": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsSubmarine": {
            "attack": 4.5,
            "defense": 2.3
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
        "unitName": "Comintern Naval Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 1,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 1105,
            "manpower": 595,
            "metal": 0,
            "cash": 1020,
            "oil": 1190
          },
          "minTimeInSeconds": 12857
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.4,
            "defense": 0.6
          },
          "vsLightArmor": {
            "attack": 1.4,
            "defense": 0.6
          },
          "vsHeavyArmor": {
            "attack": 1.4,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 1.4,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 8.6,
            "defense": 4.3
          },
          "vsSubmarine": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsBuildings": {
            "attack": 0.4,
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
        "unitName": "Comintern Naval Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 1.4,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1190,
            "manpower": 595,
            "metal": 0,
            "cash": 1020,
            "oil": 1275
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsLightArmor": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 11.3,
            "defense": 5.7
          },
          "vsSubmarine": {
            "attack": 8.6,
            "defense": 4.3
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
        "unitName": "Comintern Naval Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 2.1,
        "hitpoints": 45,
        "production": {
          "costs": {
            "food": 1360,
            "manpower": 638,
            "metal": 0,
            "cash": 1190,
            "oil": 1445
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsLightArmor": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsHeavyArmor": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsAirplane": {
            "attack": 2.7,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 14.4,
            "defense": 7.2
          },
          "vsSubmarine": {
            "attack": 11.3,
            "defense": 5.7
          },
          "vsBuildings": {
            "attack": 0.9,
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
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 45,
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
        "unitName": "Comintern Naval Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 2.7,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 1530,
            "manpower": 638,
            "metal": 0,
            "cash": 1360,
            "oil": 1615
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsAirplane": {
            "attack": 3.6,
            "defense": 1.8
          },
          "vsShip": {
            "attack": 18.9,
            "defense": 9.5
          },
          "vsSubmarine": {
            "attack": 14.4,
            "defense": 7.2
          },
          "vsBuildings": {
            "attack": 1.1,
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
        "unitName": "Comintern Naval Bomber (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 3.7,
        "hitpoints": 70,
        "production": {
          "costs": {
            "food": 1700,
            "manpower": 680,
            "metal": 0,
            "cash": 1530,
            "oil": 1785
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5,
            "defense": 2.4
          },
          "vsLightArmor": {
            "attack": 5,
            "defense": 2.4
          },
          "vsHeavyArmor": {
            "attack": 5,
            "defense": 2.4
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 2.4
          },
          "vsShip": {
            "attack": 24.3,
            "defense": 12.2
          },
          "vsSubmarine": {
            "attack": 18,
            "defense": 9
          },
          "vsBuildings": {
            "attack": 1.6,
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
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 70,
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
        "unitName": "Comintern Naval Bomber (Estimated Stats)",
        "level": 7,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 4.8,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 1870,
            "manpower": 680,
            "metal": 0,
            "cash": 1700,
            "oil": 1955
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsLightArmor": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsHeavyArmor": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsShip": {
            "attack": 30.6,
            "defense": 15.3
          },
          "vsSubmarine": {
            "attack": 22.5,
            "defense": 11.3
          },
          "vsBuildings": {
            "attack": 2.5,
            "defense": 1.3
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
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 85,
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
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Naval Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 0.8,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 1200,
            "manpower": 700,
            "metal": 0,
            "cash": 1100,
            "oil": 1300
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 1,
            "defense": 0.5
          },
          "vsHeavyArmor": {
            "attack": 1,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 1,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 8,
            "defense": 4
          },
          "vsSubmarine": {
            "attack": 5.8,
            "defense": 2.9
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
        "unitName": "Pan-Asian Naval Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 1.1,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 700,
            "metal": 0,
            "cash": 1200,
            "oil": 1400
          },
          "minTimeInSeconds": 12857
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
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
            "attack": 1.5,
            "defense": 0.7
          },
          "vsShip": {
            "attack": 10.9,
            "defense": 5.5
          },
          "vsSubmarine": {
            "attack": 8,
            "defense": 4
          },
          "vsBuildings": {
            "attack": 0.4,
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
        "unitName": "Pan-Asian Naval Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 1.5,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1400,
            "manpower": 700,
            "metal": 0,
            "cash": 1200,
            "oil": 1500
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 2,
            "defense": 1
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 1
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 1
          },
          "vsShip": {
            "attack": 14.4,
            "defense": 7.2
          },
          "vsSubmarine": {
            "attack": 10.9,
            "defense": 5.5
          },
          "vsBuildings": {
            "attack": 0.6,
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
        "unitName": "Pan-Asian Naval Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 2.3,
        "hitpoints": 45,
        "production": {
          "costs": {
            "food": 1600,
            "manpower": 750,
            "metal": 0,
            "cash": 1400,
            "oil": 1700
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3,
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 3,
            "defense": 1.5
          },
          "vsHeavyArmor": {
            "attack": 3,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 3,
            "defense": 1.5
          },
          "vsShip": {
            "attack": 18.4,
            "defense": 9.2
          },
          "vsSubmarine": {
            "attack": 14.4,
            "defense": 7.2
          },
          "vsBuildings": {
            "attack": 1,
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
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 45,
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
        "unitName": "Pan-Asian Naval Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 3,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 1800,
            "manpower": 750,
            "metal": 0,
            "cash": 1600,
            "oil": 1900
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4,
            "defense": 2
          },
          "vsLightArmor": {
            "attack": 4,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 4,
            "defense": 2
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 2
          },
          "vsShip": {
            "attack": 24.2,
            "defense": 12.1
          },
          "vsSubmarine": {
            "attack": 18.4,
            "defense": 9.2
          },
          "vsBuildings": {
            "attack": 1.2,
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
        "unitName": "Pan-Asian Naval Bomber (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 4.1,
        "hitpoints": 70,
        "production": {
          "costs": {
            "food": 2000,
            "manpower": 800,
            "metal": 0,
            "cash": 1800,
            "oil": 2100
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.5,
            "defense": 2.7
          },
          "vsLightArmor": {
            "attack": 5.5,
            "defense": 2.7
          },
          "vsHeavyArmor": {
            "attack": 5.5,
            "defense": 2.7
          },
          "vsAirplane": {
            "attack": 5.5,
            "defense": 2.7
          },
          "vsShip": {
            "attack": 31.1,
            "defense": 15.5
          },
          "vsSubmarine": {
            "attack": 23,
            "defense": 11.5
          },
          "vsBuildings": {
            "attack": 1.8,
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
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 70,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 70,
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
        "unitName": "Pan-Asian Naval Bomber (Estimated Stats)",
        "level": 7,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 5.3,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 2200,
            "manpower": 800,
            "metal": 0,
            "cash": 2000,
            "oil": 2300
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Aircraft",
          "Anti-Naval",
          "Carriable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 7,
            "defense": 3.5
          },
          "vsHeavyArmor": {
            "attack": 7,
            "defense": 3.5
          },
          "vsAirplane": {
            "attack": 7,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 39.1,
            "defense": 19.5
          },
          "vsSubmarine": {
            "attack": 28.7,
            "defense": 14.4
          },
          "vsBuildings": {
            "attack": 2.8,
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
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 85,
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
      }
    ]
  },
};
