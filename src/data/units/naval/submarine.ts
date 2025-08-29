import { IUnitType } from '@/types';

export const submarineData: IUnitType = {
  genericName: 'Submarine',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Porpoise Class',
        level: 1,
        doctrine: 'Allies',
        type: 'Submarine',
        averageDamage: 4.8,
        hitpoints: 20,
        production: {
          costs: {
            food: 950,
            manpower: 700,
            oil: 950,
            cash: 1600,
            metal: 0
          },
          minTimeInSeconds: 7140
        },
        specialProperties: [ 'Stealth', 'Anti-Ship' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 1 },
          vsLightArmor:     { attack: 1,   defense: 1 },
          vsHeavyArmor:     { attack: 1,   defense: 1 },
          vsAirplane:       { attack: 1,   defense: 1 },
          vsShip:           { attack: 6.5, defense: 6.5 },
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
          sea:            { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Sargo Class',
        level: 2,
        doctrine: 'Allies',
        type: 'Submarine',
        averageDamage: 6.5,
        hitpoints: 30,
        production: {
          costs: {
            food: 1100,
            manpower: 700,
            oil: 1100,
            cash: 1700,
            metal: 0
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Stealth', 'Anti-Ship' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 1.5 },
          vsLightArmor:     { attack: 1.5, defense: 1.5 },
          vsHeavyArmor:     { attack: 1.5, defense: 1.5 },
          vsAirplane:       { attack: 1.5, defense: 1.5 },
          vsShip:           { attack: 9,   defense: 9 },
          vsSubmarine:      { attack: 4,   defense: 4 },
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
        unitName: 'Gato Class',
        level: 3,
        doctrine: 'Allies',
        type: 'Submarine',
        averageDamage: 8.8,
        hitpoints: 40,
        production: {
          costs: {
            food: 1200,
            manpower: 700,
            oil: 1200,
            cash: 1900,
            metal: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Stealth', 'Anti-Ship' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 2 },
          vsLightArmor:     { attack: 2,   defense: 2 },
          vsHeavyArmor:     { attack: 2,   defense: 2 },
          vsAirplane:       { attack: 2,   defense: 2 },
          vsShip:           { attack: 12,  defense: 12 },
          vsSubmarine:      { attack: 5.5, defense: 5.5 },
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
          sea:            { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Balao Class',
        level: 4,
        doctrine: 'Allies',
        type: 'Submarine',
        averageDamage: 11.8,
        hitpoints: 55,
        production: {
          costs: {
            food: 1300,
            manpower: 750,
            oil: 1300,
            cash: 2200,
            metal: 0
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Stealth', 'Anti-Ship' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,   defense: 3 },
          vsLightArmor:     { attack: 3,   defense: 3 },
          vsHeavyArmor:     { attack: 3,   defense: 3 },
          vsAirplane:       { attack: 3,   defense: 3 },
          vsShip:           { attack: 16,  defense: 16 },
          vsSubmarine:      { attack: 7.5, defense: 7.5 },
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
          sea:            { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Tench Class',
        level: 5,
        doctrine: 'Allies',
        type: 'Submarine',
        averageDamage: 15.8,
        hitpoints: 70,
        production: {
          costs: {
            food: 1600,
            manpower: 750,
            oil: 1600,
            cash: 2600,
            metal: 0
          },
          minTimeInSeconds: 18000
        },
        specialProperties: [ 'Stealth', 'Anti-Ship' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.5,  defense: 4.5 },
          vsLightArmor:     { attack: 4.5,  defense: 4.5 },
          vsHeavyArmor:     { attack: 4.5,  defense: 4.5 },
          vsAirplane:       { attack: 4.5,  defense: 4.5 },
          vsShip:           { attack: 21.5, defense: 21.5 },
          vsSubmarine:      { attack: 10,   defense: 10 },
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
          sea:            { health: 70,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Barracuda Class',
        level: 6,
        doctrine: 'Allies',
        type: 'Submarine',
        averageDamage: 20.5,
        hitpoints: 90,
        production: {
          costs: {
            food: 1700,
            manpower: 800,
            oil: 1700,
            cash: 2900,
            metal: 0
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Stealth', 'Anti-Ship' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,  defense: 6 },
          vsLightArmor:     { attack: 6,  defense: 6 },
          vsHeavyArmor:     { attack: 6,  defense: 6 },
          vsAirplane:       { attack: 6,  defense: 6 },
          vsShip:           { attack: 28, defense: 28 },
          vsSubmarine:      { attack: 13, defense: 13 },
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
          sea:            { health: 90,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Submarine (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Submarine",
        "averageDamage": 5.5,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 1045,
            "manpower": 770,
            "oil": 1045,
            "cash": 1760,
            "metal": 0
          },
          "minTimeInSeconds": 10200
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 1.2,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 8.5,
            "defense": 8.5
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
        "unitName": "Axis Submarine (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Submarine",
        "averageDamage": 7.5,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1210,
            "manpower": 770,
            "oil": 1210,
            "cash": 1870,
            "metal": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 1.7,
            "defense": 1.7
          },
          "vsShip": {
            "attack": 11.7,
            "defense": 11.7
          },
          "vsSubmarine": {
            "attack": 4.6,
            "defense": 4.6
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
        "unitName": "Axis Submarine (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Submarine",
        "averageDamage": 10.1,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 1320,
            "manpower": 770,
            "oil": 1320,
            "cash": 2090,
            "metal": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 2.3,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 15.6,
            "defense": 15.6
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
        "unitName": "Axis Submarine (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Submarine",
        "averageDamage": 13.6,
        "hitpoints": 63,
        "production": {
          "costs": {
            "food": 1430,
            "manpower": 825,
            "oil": 1430,
            "cash": 2420,
            "metal": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 3.5,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 20.8,
            "defense": 20.8
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
        "unitName": "Axis Submarine (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Submarine",
        "averageDamage": 18.2,
        "hitpoints": 81,
        "production": {
          "costs": {
            "food": 1760,
            "manpower": 825,
            "oil": 1760,
            "cash": 2860,
            "metal": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 5.2,
            "defense": 5.2
          },
          "vsShip": {
            "attack": 28,
            "defense": 28
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
        "unitName": "Axis Submarine (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Submarine",
        "averageDamage": 23.6,
        "hitpoints": 103,
        "production": {
          "costs": {
            "food": 1870,
            "manpower": 880,
            "oil": 1870,
            "cash": 3190,
            "metal": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 6.9,
            "defense": 6.9
          },
          "vsShip": {
            "attack": 36.4,
            "defense": 36.4
          },
          "vsSubmarine": {
            "attack": 15,
            "defense": 15
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
      }
    ],
    "Comintern": [
      {
        "unitName": "Comintern Submarine (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Submarine",
        "averageDamage": 4.3,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 808,
            "manpower": 595,
            "oil": 808,
            "cash": 1360,
            "metal": 0
          },
          "minTimeInSeconds": 10200
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 0.9,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 5.9,
            "defense": 5.9
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
        "unitName": "Comintern Submarine (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Submarine",
        "averageDamage": 5.9,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 935,
            "manpower": 595,
            "oil": 935,
            "cash": 1445,
            "metal": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 1.4,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 8.1,
            "defense": 8.1
          },
          "vsSubmarine": {
            "attack": 3.6,
            "defense": 3.6
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
        "unitName": "Comintern Submarine (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Submarine",
        "averageDamage": 7.9,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1020,
            "manpower": 595,
            "oil": 1020,
            "cash": 1615,
            "metal": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 1.8,
            "defense": 1.8
          },
          "vsShip": {
            "attack": 10.8,
            "defense": 10.8
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 5
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
        "unitName": "Comintern Submarine (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Submarine",
        "averageDamage": 10.6,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 1105,
            "manpower": 638,
            "oil": 1105,
            "cash": 1870,
            "metal": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 2.7,
            "defense": 2.7
          },
          "vsShip": {
            "attack": 14.4,
            "defense": 14.4
          },
          "vsSubmarine": {
            "attack": 6.8,
            "defense": 6.8
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
        "unitName": "Comintern Submarine (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Submarine",
        "averageDamage": 14.2,
        "hitpoints": 70,
        "production": {
          "costs": {
            "food": 1360,
            "manpower": 638,
            "oil": 1360,
            "cash": 2210,
            "metal": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 4.1,
            "defense": 4.1
          },
          "vsShip": {
            "attack": 19.4,
            "defense": 19.4
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
        "unitName": "Comintern Submarine (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Submarine",
        "averageDamage": 18.5,
        "hitpoints": 90,
        "production": {
          "costs": {
            "food": 1445,
            "manpower": 680,
            "oil": 1445,
            "cash": 2465,
            "metal": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 5.4,
            "defense": 5.4
          },
          "vsShip": {
            "attack": 25.2,
            "defense": 25.2
          },
          "vsSubmarine": {
            "attack": 11.7,
            "defense": 11.7
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
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Submarine (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Submarine",
        "averageDamage": 4.8,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 950,
            "manpower": 700,
            "oil": 950,
            "cash": 1600,
            "metal": 0
          },
          "minTimeInSeconds": 10200
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 1,
            "defense": 1
          },
          "vsShip": {
            "attack": 6.5,
            "defense": 6.5
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
        "unitName": "Pan-Asian Submarine (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Submarine",
        "averageDamage": 6.5,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 700,
            "oil": 1100,
            "cash": 1700,
            "metal": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 1.5,
            "defense": 1.5
          },
          "vsShip": {
            "attack": 9,
            "defense": 9
          },
          "vsSubmarine": {
            "attack": 4,
            "defense": 4
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
        "unitName": "Pan-Asian Submarine (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Submarine",
        "averageDamage": 8.8,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1200,
            "manpower": 700,
            "oil": 1200,
            "cash": 1900,
            "metal": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 2,
            "defense": 2
          },
          "vsShip": {
            "attack": 12,
            "defense": 12
          },
          "vsSubmarine": {
            "attack": 5.5,
            "defense": 5.5
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
        "unitName": "Pan-Asian Submarine (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Submarine",
        "averageDamage": 11.8,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 750,
            "oil": 1300,
            "cash": 2200,
            "metal": 0
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 3,
            "defense": 3
          },
          "vsShip": {
            "attack": 16,
            "defense": 16
          },
          "vsSubmarine": {
            "attack": 7.5,
            "defense": 7.5
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
        "unitName": "Pan-Asian Submarine (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Submarine",
        "averageDamage": 15.8,
        "hitpoints": 70,
        "production": {
          "costs": {
            "food": 1600,
            "manpower": 750,
            "oil": 1600,
            "cash": 2600,
            "metal": 0
          },
          "minTimeInSeconds": 25714
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 4.5,
            "defense": 4.5
          },
          "vsShip": {
            "attack": 21.5,
            "defense": 21.5
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
        "unitName": "Pan-Asian Submarine (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Submarine",
        "averageDamage": 20.5,
        "hitpoints": 90,
        "production": {
          "costs": {
            "food": 1700,
            "manpower": 800,
            "oil": 1700,
            "cash": 2900,
            "metal": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Stealth",
          "Anti-Ship"
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
            "attack": 6,
            "defense": 6
          },
          "vsShip": {
            "attack": 28,
            "defense": 28
          },
          "vsSubmarine": {
            "attack": 13,
            "defense": 13
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
      }
    ]
  },
};
