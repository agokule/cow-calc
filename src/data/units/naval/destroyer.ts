import { IUnitType } from '@/types';

export const destroyerData: IUnitType = {
  genericName: 'Destroyer',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Clemson Class',
        level: 1,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 5.6,
        hitpoints: 30,
        production: {
          costs: {
            food: 1000,
            manpower: 800,
            metal: 1200,
            cash: 1300,
            oil: 0
          },
          minTimeInSeconds: 7200
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Submarine' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.5, defense: 0.5 },
          vsLightArmor:     { attack: 0.5, defense: 0.5 },
          vsHeavyArmor:     { attack: 0.5, defense: 0.5 },
          vsAirplane:       { attack: 2,   defense: 2 },
          vsShip:           { attack: 2.5, defense: 2.5 },
          vsSubmarine:      { attack: 8.6, defense: 8.6 },
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
          sea:            { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Mahan Class',
        level: 2,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 7.8,
        hitpoints: 40,
        production: {
          costs: {
            food: 1100,
            manpower: 850,
            metal: 1300,
            cash: 1500,
            oil: 0
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Submarine' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,    defense: 1 },
          vsLightArmor:     { attack: 1,    defense: 1 },
          vsHeavyArmor:     { attack: 1,    defense: 1 },
          vsAirplane:       { attack: 2.5,  defense: 2.5 },
          vsShip:           { attack: 3.5,  defense: 3.5 },
          vsSubmarine:      { attack: 12.1, defense: 12.1 },
          vsBuildings:      { attack: 0,    defense: null },
          vsProvinceMorale: { attack: 0,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Benham Class',
        level: 3,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 10.9,
        hitpoints: 55,
        production: {
          costs: {
            food: 1200,
            manpower: 850,
            metal: 1500,
            cash: 1600,
            oil: 0
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Submarine' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,    defense: 2 },
          vsLightArmor:     { attack: 2,    defense: 2 },
          vsHeavyArmor:     { attack: 2,    defense: 2 },
          vsAirplane:       { attack: 3.5,  defense: 3.5 },
          vsShip:           { attack: 5,    defense: 5 },
          vsSubmarine:      { attack: 16.7, defense: 16.7 },
          vsBuildings:      { attack: 0,    defense: null },
          vsProvinceMorale: { attack: 0,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Gleaves Class',
        level: 4,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 14.5,
        hitpoints: 75,
        production: {
          costs: {
            food: 1400,
            manpower: 850,
            metal: 1700,
            cash: 1800,
            oil: 0
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Submarine' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,    defense: 3 },
          vsLightArmor:     { attack: 3,    defense: 3 },
          vsHeavyArmor:     { attack: 3,    defense: 3 },
          vsAirplane:       { attack: 5,    defense: 5 },
          vsShip:           { attack: 6.5,  defense: 6.5 },
          vsSubmarine:      { attack: 22.4, defense: 22.4 },
          vsBuildings:      { attack: 0,    defense: null },
          vsProvinceMorale: { attack: 0,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Fletcher Class',
        level: 5,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 19.2,
        hitpoints: 95,
        production: {
          costs: {
            food: 1600,
            manpower: 900,
            metal: 2000,
            cash: 2200,
            oil: 0
          },
          minTimeInSeconds: 18000
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Submarine' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4,    defense: 4 },
          vsLightArmor:     { attack: 4,    defense: 4 },
          vsHeavyArmor:     { attack: 4,    defense: 4 },
          vsAirplane:       { attack: 7,    defense: 7 },
          vsShip:           { attack: 8.5,  defense: 8.5 },
          vsSubmarine:      { attack: 29.9, defense: 29.9 },
          vsBuildings:      { attack: 0,    defense: null },
          vsProvinceMorale: { attack: 0,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 95,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Allen M. Sumner Class',
        level: 6,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 25.1,
        hitpoints: 120,
        production: {
          costs: {
            food: 1800,
            manpower: 950,
            metal: 2200,
            cash: 2400,
            oil: 0
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Submarine' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5,    defense: 5 },
          vsLightArmor:     { attack: 5,    defense: 5 },
          vsHeavyArmor:     { attack: 5,    defense: 5 },
          vsAirplane:       { attack: 9.5,  defense: 9.5 },
          vsShip:           { attack: 11,   defense: 11 },
          vsSubmarine:      { attack: 39.1, defense: 39.1 },
          vsBuildings:      { attack: 0,    defense: null },
          vsProvinceMorale: { attack: 0,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 120,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Destroyer (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 6.4,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 880,
            "metal": 1320,
            "cash": 1430,
            "oil": 0
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.6,
            "defense": 0.6
          },
          "vsLightArmor": {
            "attack": 0.6,
            "defense": 0.6
          },
          "vsHeavyArmor": {
            "attack": 0.6,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 2.9,
            "defense": 2.9
          },
          "vsSubmarine": {
            "attack": 8.6,
            "defense": 8.6
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
        "unitName": "Axis Destroyer (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 9,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 1210,
            "manpower": 935,
            "metal": 1430,
            "cash": 1650,
            "oil": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
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
            "attack": 2.9,
            "defense": 2.9
          },
          "vsShip": {
            "attack": 4,
            "defense": 4
          },
          "vsSubmarine": {
            "attack": 12.1,
            "defense": 12.1
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
        "unitName": "Axis Destroyer (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 12.5,
        "hitpoints": 63,
        "production": {
          "costs": {
            "food": 1320,
            "manpower": 935,
            "metal": 1650,
            "cash": 1760,
            "oil": 0
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
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
            "attack": 4,
            "defense": 4
          },
          "vsShip": {
            "attack": 5.8,
            "defense": 5.8
          },
          "vsSubmarine": {
            "attack": 16.7,
            "defense": 16.7
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
        "unitName": "Axis Destroyer (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 16.7,
        "hitpoints": 86,
        "production": {
          "costs": {
            "food": 1540,
            "manpower": 935,
            "metal": 1870,
            "cash": 1980,
            "oil": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
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
            "attack": 5.8,
            "defense": 5.8
          },
          "vsShip": {
            "attack": 7.5,
            "defense": 7.5
          },
          "vsSubmarine": {
            "attack": 22.4,
            "defense": 22.4
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
        "unitName": "Axis Destroyer (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 22.1,
        "hitpoints": 109,
        "production": {
          "costs": {
            "food": 1760,
            "manpower": 990,
            "metal": 2200,
            "cash": 2420,
            "oil": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.6,
            "defense": 4.6
          },
          "vsLightArmor": {
            "attack": 4.6,
            "defense": 4.6
          },
          "vsHeavyArmor": {
            "attack": 4.6,
            "defense": 4.6
          },
          "vsAirplane": {
            "attack": 8,
            "defense": 8
          },
          "vsShip": {
            "attack": 9.8,
            "defense": 9.8
          },
          "vsSubmarine": {
            "attack": 29.9,
            "defense": 29.9
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
            "health": 95,
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
        "unitName": "Axis Destroyer (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 28.9,
        "hitpoints": 138,
        "production": {
          "costs": {
            "food": 1980,
            "manpower": 1045,
            "metal": 2420,
            "cash": 2640,
            "oil": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.8,
            "defense": 5.8
          },
          "vsLightArmor": {
            "attack": 5.8,
            "defense": 5.8
          },
          "vsHeavyArmor": {
            "attack": 5.8,
            "defense": 5.8
          },
          "vsAirplane": {
            "attack": 10.9,
            "defense": 10.9
          },
          "vsShip": {
            "attack": 12.6,
            "defense": 12.6
          },
          "vsSubmarine": {
            "attack": 39.1,
            "defense": 39.1
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
            "health": 120,
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
        "unitName": "Comintern Destroyer (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 5,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 850,
            "manpower": 680,
            "metal": 1020,
            "cash": 1105,
            "oil": 0
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsHeavyArmor": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 6.7,
            "defense": 6.7
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
        "unitName": "Comintern Destroyer (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 7,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 935,
            "manpower": 723,
            "metal": 1105,
            "cash": 1275,
            "oil": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
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
            "attack": 2.3,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 3.2,
            "defense": 3.2
          },
          "vsSubmarine": {
            "attack": 9.5,
            "defense": 9.5
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
        "unitName": "Comintern Destroyer (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 9.8,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 1020,
            "manpower": 723,
            "metal": 1275,
            "cash": 1360,
            "oil": 0
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
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
            "attack": 3.2,
            "defense": 3.2
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 4.5
          },
          "vsSubmarine": {
            "attack": 13.1,
            "defense": 13.1
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
        "unitName": "Comintern Destroyer (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 13.1,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 1190,
            "manpower": 723,
            "metal": 1445,
            "cash": 1530,
            "oil": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
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
            "attack": 4.5,
            "defense": 4.5
          },
          "vsShip": {
            "attack": 5.9,
            "defense": 5.9
          },
          "vsSubmarine": {
            "attack": 17.5,
            "defense": 17.5
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
        "unitName": "Comintern Destroyer (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 17.3,
        "hitpoints": 95,
        "production": {
          "costs": {
            "food": 1360,
            "manpower": 765,
            "metal": 1700,
            "cash": 1870,
            "oil": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.6,
            "defense": 3.6
          },
          "vsLightArmor": {
            "attack": 3.6,
            "defense": 3.6
          },
          "vsHeavyArmor": {
            "attack": 3.6,
            "defense": 3.6
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsShip": {
            "attack": 7.7,
            "defense": 7.7
          },
          "vsSubmarine": {
            "attack": 23.4,
            "defense": 23.4
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
            "health": 95,
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
        "unitName": "Comintern Destroyer (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 22.6,
        "hitpoints": 120,
        "production": {
          "costs": {
            "food": 1530,
            "manpower": 808,
            "metal": 1870,
            "cash": 2040,
            "oil": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
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
            "attack": 8.6,
            "defense": 8.6
          },
          "vsShip": {
            "attack": 9.9,
            "defense": 9.9
          },
          "vsSubmarine": {
            "attack": 30.6,
            "defense": 30.6
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
            "health": 120,
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
        "unitName": "Pan-Asian Destroyer (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 5.6,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1000,
            "manpower": 800,
            "metal": 1200,
            "cash": 1300,
            "oil": 0
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsHeavyArmor": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 2
          },
          "vsShip": {
            "attack": 2.5,
            "defense": 2.5
          },
          "vsSubmarine": {
            "attack": 7.478260869565218,
            "defense": 7.478260869565218
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
        "unitName": "Pan-Asian Destroyer (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 7.8,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 850,
            "metal": 1300,
            "cash": 1500,
            "oil": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
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
            "attack": 2.5,
            "defense": 2.5
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 10.521739130434783,
            "defense": 10.521739130434783
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
        "unitName": "Pan-Asian Destroyer (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 10.9,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 1200,
            "manpower": 850,
            "metal": 1500,
            "cash": 1600,
            "oil": 0
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
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
            "attack": 3.5,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 5,
            "defense": 5
          },
          "vsSubmarine": {
            "attack": 14.521739130434783,
            "defense": 14.521739130434783
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
        "unitName": "Pan-Asian Destroyer (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 14.5,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 1400,
            "manpower": 850,
            "metal": 1700,
            "cash": 1800,
            "oil": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
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
            "attack": 5,
            "defense": 5
          },
          "vsShip": {
            "attack": 6.5,
            "defense": 6.5
          },
          "vsSubmarine": {
            "attack": 19.47826086956522,
            "defense": 19.47826086956522
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
        "unitName": "Pan-Asian Destroyer (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 19.2,
        "hitpoints": 95,
        "production": {
          "costs": {
            "food": 1600,
            "manpower": 900,
            "metal": 2000,
            "cash": 2200,
            "oil": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4,
            "defense": 4
          },
          "vsLightArmor": {
            "attack": 4,
            "defense": 4
          },
          "vsHeavyArmor": {
            "attack": 4,
            "defense": 4
          },
          "vsAirplane": {
            "attack": 7,
            "defense": 7
          },
          "vsShip": {
            "attack": 8.5,
            "defense": 8.5
          },
          "vsSubmarine": {
            "attack": 26,
            "defense": 26
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
            "health": 95,
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
        "unitName": "Pan-Asian Destroyer (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 25.1,
        "hitpoints": 120,
        "production": {
          "costs": {
            "food": 1800,
            "manpower": 950,
            "metal": 2200,
            "cash": 2400,
            "oil": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Submarine"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5,
            "defense": 5
          },
          "vsLightArmor": {
            "attack": 5,
            "defense": 5
          },
          "vsHeavyArmor": {
            "attack": 5,
            "defense": 5
          },
          "vsAirplane": {
            "attack": 9.5,
            "defense": 9.5
          },
          "vsShip": {
            "attack": 11,
            "defense": 11
          },
          "vsSubmarine": {
            "attack": 34.00000000000001,
            "defense": 34.00000000000001
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
            "health": 120,
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
