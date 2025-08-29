import { IUnitType } from '@/types';

export const cruiserData: IUnitType = {
  genericName: 'Cruiser',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Omaha Class',
        level: 1,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 3.2,
        hitpoints: 35,
        production: {
          costs: {
            food: 1900,
            manpower: 1000,
            metal: 1100,
            cash: 1400,
            oil: 0
          },
          minTimeInSeconds: 6900
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Ship', 'Anti-Air' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 1.5 },
          vsLightArmor:     { attack: 1.5, defense: 1.5 },
          vsHeavyArmor:     { attack: 1.5, defense: 1.5 },
          vsAirplane:       { attack: 6,   defense: 6 },
          vsShip:           { attack: 4,   defense: 4 },
          vsSubmarine:      { attack: 2.3, defense: 2.3 },
          vsBuildings:      { attack: 1.5, defense: 1.5 },
          vsProvinceMorale: { attack: 0.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Brooklyn Class',
        level: 2,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 4.3,
        hitpoints: 50,
        production: {
          costs: {
            food: 2100,
            manpower: 1000,
            metal: 1200,
            cash: 1500,
            oil: 0
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Ship', 'Anti-Air' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 2 },
          vsLightArmor:     { attack: 2,   defense: 2 },
          vsHeavyArmor:     { attack: 2,   defense: 2 },
          vsAirplane:       { attack: 8,   defense: 8 },
          vsShip:           { attack: 5.5, defense: 5.5 },
          vsSubmarine:      { attack: 3,   defense: 3 },
          vsBuildings:      { attack: 2,   defense: 2 },
          vsProvinceMorale: { attack: 0.8, defense: null },
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
        unitName: 'St. Louis Class',
        level: 3,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 5.8,
        hitpoints: 70,
        production: {
          costs: {
            food: 2300,
            manpower: 1100,
            metal: 1300,
            cash: 1700,
            oil: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Ship', 'Anti-Air' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3.5, defense: 3.5 },
          vsLightArmor:     { attack: 3,   defense: 3 },
          vsHeavyArmor:     { attack: 3,   defense: 3 },
          vsAirplane:       { attack: 11,  defense: 11 },
          vsShip:           { attack: 7.5, defense: 7.5 },
          vsSubmarine:      { attack: 4,   defense: 4 },
          vsBuildings:      { attack: 2.6, defense: 2.6 },
          vsProvinceMorale: { attack: 1.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 70,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Atlanta Class',
        level: 4,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 7.8,
        hitpoints: 90,
        production: {
          costs: {
            food: 2600,
            manpower: 1100,
            metal: 1500,
            cash: 1900,
            oil: 0
          },
          minTimeInSeconds: 17100
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Ship', 'Anti-Air' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.5, defense: 4.5 },
          vsLightArmor:     { attack: 4.5, defense: 4.5 },
          vsHeavyArmor:     { attack: 4.5, defense: 4.5 },
          vsAirplane:       { attack: 15,  defense: 15 },
          vsShip:           { attack: 10,  defense: 10 },
          vsSubmarine:      { attack: 5.5, defense: 5.5 },
          vsBuildings:      { attack: 3.4, defense: 3.4 },
          vsProvinceMorale: { attack: 1.7, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 90,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Baltimore Class',
        level: 5,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 10.3,
        hitpoints: 115,
        production: {
          costs: {
            food: 3100,
            manpower: 1100,
            metal: 1800,
            cash: 2200,
            oil: 0
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Ship', 'Anti-Air' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,    defense: 6 },
          vsLightArmor:     { attack: 6,    defense: 6 },
          vsHeavyArmor:     { attack: 6,    defense: 6 },
          vsAirplane:       { attack: 20,   defense: 20 },
          vsShip:           { attack: 13.5, defense: 13.5 },
          vsSubmarine:      { attack: 7,    defense: 7 },
          vsBuildings:      { attack: 4.5,  defense: 4.5 },
          vsProvinceMorale: { attack: 2.3,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
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
        unitName: 'Oregon City Class',
        level: 6,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 13.8,
        hitpoints: 140,
        production: {
          costs: {
            food: 3400,
            manpower: 1200,
            metal: 2000,
            cash: 2400,
            oil: 0
          },
          minTimeInSeconds: 22500
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Ship', 'Anti-Air' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8,   defense: 8 },
          vsLightArmor:     { attack: 8,   defense: 8 },
          vsHeavyArmor:     { attack: 8,   defense: 8 },
          vsAirplane:       { attack: 26,  defense: 26 },
          vsShip:           { attack: 18,  defense: 18 },
          vsSubmarine:      { attack: 9.5, defense: 9.5 },
          vsBuildings:      { attack: 6,   defense: 6 },
          vsProvinceMorale: { attack: 3,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 140,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Cruiser (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 3.7,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 2090,
            "manpower": 1100,
            "metal": 1210,
            "cash": 1540,
            "oil": 0
          },
          "minTimeInSeconds": 9857
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 6.9,
            "defense": 6.9
          },
          "vsShip": {
            "attack": 4.6,
            "defense": 4.6
          },
          "vsSubmarine": {
            "attack": 2.6,
            "defense": 2.6
          },
          "vsBuildings": {
            "attack": 1.7,
            "defense": 1.7
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
        "unitName": "Axis Cruiser (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 4.9,
        "hitpoints": 57,
        "production": {
          "costs": {
            "food": 2310,
            "manpower": 1100,
            "metal": 1320,
            "cash": 1650,
            "oil": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 9.2,
            "defense": 9.2
          },
          "vsShip": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsBuildings": {
            "attack": 2.3,
            "defense": 2.3
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
        "unitName": "Axis Cruiser (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 6.7,
        "hitpoints": 81,
        "production": {
          "costs": {
            "food": 2530,
            "manpower": 1210,
            "metal": 1430,
            "cash": 1870,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4,
            "defense": 4
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
            "attack": 12.6,
            "defense": 12.6
          },
          "vsShip": {
            "attack": 8.6,
            "defense": 8.6
          },
          "vsSubmarine": {
            "attack": 4.6,
            "defense": 4.6
          },
          "vsBuildings": {
            "attack": 3,
            "defense": 3
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
        "unitName": "Axis Cruiser (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 9,
        "hitpoints": 103,
        "production": {
          "costs": {
            "food": 2860,
            "manpower": 1210,
            "metal": 1650,
            "cash": 2090,
            "oil": 0
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 17.3,
            "defense": 17.3
          },
          "vsShip": {
            "attack": 11.5,
            "defense": 11.5
          },
          "vsSubmarine": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsBuildings": {
            "attack": 3.9,
            "defense": 3.9
          },
          "vsProvinceMorale": {
            "attack": 2,
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
            "health": 90,
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
        "unitName": "Axis Cruiser (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 11.8,
        "hitpoints": 132,
        "production": {
          "costs": {
            "food": 3410,
            "manpower": 1210,
            "metal": 1980,
            "cash": 2420,
            "oil": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 23,
            "defense": 23
          },
          "vsShip": {
            "attack": 15.5,
            "defense": 15.5
          },
          "vsSubmarine": {
            "attack": 8,
            "defense": 8
          },
          "vsBuildings": {
            "attack": 5.2,
            "defense": 5.2
          },
          "vsProvinceMorale": {
            "attack": 2.6,
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
        "unitName": "Axis Cruiser (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 15.9,
        "hitpoints": 161,
        "production": {
          "costs": {
            "food": 3740,
            "manpower": 1320,
            "metal": 2200,
            "cash": 2640,
            "oil": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9.2,
            "defense": 9.2
          },
          "vsLightArmor": {
            "attack": 9.2,
            "defense": 9.2
          },
          "vsHeavyArmor": {
            "attack": 9.2,
            "defense": 9.2
          },
          "vsAirplane": {
            "attack": 29.9,
            "defense": 29.9
          },
          "vsShip": {
            "attack": 20.7,
            "defense": 20.7
          },
          "vsSubmarine": {
            "attack": 10.9,
            "defense": 10.9
          },
          "vsBuildings": {
            "attack": 6.9,
            "defense": 6.9
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
            "health": 140,
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
        "unitName": "Comintern Cruiser (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 2.9,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1615,
            "manpower": 850,
            "metal": 935,
            "cash": 1190,
            "oil": 0
          },
          "minTimeInSeconds": 9857
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 5.4,
            "defense": 5.4
          },
          "vsShip": {
            "attack": 3.6,
            "defense": 3.6
          },
          "vsSubmarine": {
            "attack": 2.1,
            "defense": 2.1
          },
          "vsBuildings": {
            "attack": 1.4,
            "defense": 1.4
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
        "unitName": "Comintern Cruiser (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 3.9,
        "hitpoints": 57,
        "production": {
          "costs": {
            "food": 1785,
            "manpower": 850,
            "metal": 1020,
            "cash": 1275,
            "oil": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 7.2,
            "defense": 7.2
          },
          "vsShip": {
            "attack": 5,
            "defense": 5
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsBuildings": {
            "attack": 1.8,
            "defense": 1.8
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
        "unitName": "Comintern Cruiser (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 5.2,
        "hitpoints": 81,
        "production": {
          "costs": {
            "food": 1955,
            "manpower": 935,
            "metal": 1105,
            "cash": 1445,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.2,
            "defense": 3.2
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
            "attack": 9.9,
            "defense": 9.9
          },
          "vsShip": {
            "attack": 6.8,
            "defense": 6.8
          },
          "vsSubmarine": {
            "attack": 3.6,
            "defense": 3.6
          },
          "vsBuildings": {
            "attack": 2.3,
            "defense": 2.3
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
        "unitName": "Comintern Cruiser (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 7,
        "hitpoints": 103,
        "production": {
          "costs": {
            "food": 2210,
            "manpower": 935,
            "metal": 1275,
            "cash": 1615,
            "oil": 0
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 13.5,
            "defense": 13.5
          },
          "vsShip": {
            "attack": 9,
            "defense": 9
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 5
          },
          "vsBuildings": {
            "attack": 3.1,
            "defense": 3.1
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
            "health": 90,
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
        "unitName": "Comintern Cruiser (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 9.3,
        "hitpoints": 132,
        "production": {
          "costs": {
            "food": 2635,
            "manpower": 935,
            "metal": 1530,
            "cash": 1870,
            "oil": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 18,
            "defense": 18
          },
          "vsShip": {
            "attack": 12.2,
            "defense": 12.2
          },
          "vsSubmarine": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsBuildings": {
            "attack": 4.1,
            "defense": 4.1
          },
          "vsProvinceMorale": {
            "attack": 2.1,
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
        "unitName": "Comintern Cruiser (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 12.4,
        "hitpoints": 161,
        "production": {
          "costs": {
            "food": 2890,
            "manpower": 1020,
            "metal": 1700,
            "cash": 2040,
            "oil": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.2,
            "defense": 7.2
          },
          "vsLightArmor": {
            "attack": 7.2,
            "defense": 7.2
          },
          "vsHeavyArmor": {
            "attack": 7.2,
            "defense": 7.2
          },
          "vsAirplane": {
            "attack": 23.4,
            "defense": 23.4
          },
          "vsShip": {
            "attack": 16.2,
            "defense": 16.2
          },
          "vsSubmarine": {
            "attack": 8.6,
            "defense": 8.6
          },
          "vsBuildings": {
            "attack": 5.4,
            "defense": 5.4
          },
          "vsProvinceMorale": {
            "attack": 2.7,
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
            "health": 140,
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
        "unitName": "Pan-Asian Cruiser (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 3.2,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1900,
            "manpower": 1000,
            "metal": 1100,
            "cash": 1400,
            "oil": 0
          },
          "minTimeInSeconds": 9857
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 6,
            "defense": 6
          },
          "vsShip": {
            "attack": 4,
            "defense": 4
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 1.5,
            "defense": 1.5
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
        "unitName": "Pan-Asian Cruiser (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 4.3,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 2100,
            "manpower": 1000,
            "metal": 1200,
            "cash": 1500,
            "oil": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 8,
            "defense": 8
          },
          "vsShip": {
            "attack": 5.5,
            "defense": 5.5
          },
          "vsSubmarine": {
            "attack": 3,
            "defense": 3
          },
          "vsBuildings": {
            "attack": 2,
            "defense": 2
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
        "unitName": "Pan-Asian Cruiser (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 5.8,
        "hitpoints": 70,
        "production": {
          "costs": {
            "food": 2300,
            "manpower": 1100,
            "metal": 1300,
            "cash": 1700,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.5,
            "defense": 3.5
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
            "attack": 11,
            "defense": 11
          },
          "vsShip": {
            "attack": 7.5,
            "defense": 7.5
          },
          "vsSubmarine": {
            "attack": 4,
            "defense": 4
          },
          "vsBuildings": {
            "attack": 2.6,
            "defense": 2.6
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
        "unitName": "Pan-Asian Cruiser (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 7.8,
        "hitpoints": 90,
        "production": {
          "costs": {
            "food": 2600,
            "manpower": 1100,
            "metal": 1500,
            "cash": 1900,
            "oil": 0
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 15,
            "defense": 15
          },
          "vsShip": {
            "attack": 10,
            "defense": 10
          },
          "vsSubmarine": {
            "attack": 5.5,
            "defense": 5.5
          },
          "vsBuildings": {
            "attack": 3.4,
            "defense": 3.4
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
            "health": 90,
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
        "unitName": "Pan-Asian Cruiser (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 10.3,
        "hitpoints": 115,
        "production": {
          "costs": {
            "food": 3100,
            "manpower": 1100,
            "metal": 1800,
            "cash": 2200,
            "oil": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
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
            "attack": 20,
            "defense": 20
          },
          "vsShip": {
            "attack": 13.5,
            "defense": 13.5
          },
          "vsSubmarine": {
            "attack": 7,
            "defense": 7
          },
          "vsBuildings": {
            "attack": 4.5,
            "defense": 4.5
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
        "unitName": "Pan-Asian Cruiser (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 13.8,
        "hitpoints": 140,
        "production": {
          "costs": {
            "food": 3400,
            "manpower": 1200,
            "metal": 2000,
            "cash": 2400,
            "oil": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Ship",
          "Anti-Air"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8,
            "defense": 8
          },
          "vsLightArmor": {
            "attack": 8,
            "defense": 8
          },
          "vsHeavyArmor": {
            "attack": 8,
            "defense": 8
          },
          "vsAirplane": {
            "attack": 26,
            "defense": 26
          },
          "vsShip": {
            "attack": 18,
            "defense": 18
          },
          "vsSubmarine": {
            "attack": 9.5,
            "defense": 9.5
          },
          "vsBuildings": {
            "attack": 6,
            "defense": 6
          },
          "vsProvinceMorale": {
            "attack": 3,
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
            "health": 140,
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
