import { IUnitType } from '@/types';

export const antiAirData: IUnitType = {
  genericName: 'Anti Air',
  doctrineVariants: {
    Allies: [
      {
        unitName: '3-inch Gun M3',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 1.3,
        hitpoints: 12,
        production: {
          costs: {
            food: 1000,
            manpower: 850,
            metal: 600,
            cash: 850,
            oil: 0
          },
          minTimeInSeconds: 5400
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.5, defense: 1 },
          vsLightArmor:     { attack: 0.8, defense: 1.6 },
          vsHeavyArmor:     { attack: 1.3, defense: 2.6 },
          vsAirplane:       { attack: 2.8, defense: 5.6 },
          vsShip:           { attack: 0.5, defense: 1 },
          vsSubmarine:      { attack: 0.5, defense: 1 },
          vsBuildings:      { attack: 0.2, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 12,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 12,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 12,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 12,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 12,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '37 mm Gun M1',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 1.9,
        hitpoints: 17,
        production: {
          costs: {
            food: 1100,
            manpower: 900,
            metal: 650,
            cash: 900,
            oil: 0
          },
          minTimeInSeconds: 7200
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.8, defense: 1.6 },
          vsLightArmor:     { attack: 1,   defense: 2 },
          vsHeavyArmor:     { attack: 2,   defense: 4 },
          vsAirplane:       { attack: 4,   defense: 8 },
          vsShip:           { attack: 0.8, defense: 1.6 },
          vsSubmarine:      { attack: 0.8, defense: 1.6 },
          vsBuildings:      { attack: 0.3, defense: 0.6 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 17,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 17,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 17,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 17,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 17,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '40 mm Automatic Gun M1',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 2.8,
        hitpoints: 22,
        production: {
          costs: {
            food: 1200,
            manpower: 900,
            metal: 700,
            cash: 1000,
            oil: 0
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 2 },
          vsLightArmor:     { attack: 1.5, defense: 3 },
          vsHeavyArmor:     { attack: 3,   defense: 6 },
          vsAirplane:       { attack: 5.5, defense: 11 },
          vsShip:           { attack: 1,   defense: 2 },
          vsSubmarine:      { attack: 1,   defense: 2 },
          vsBuildings:      { attack: 0.4, defense: 0.8 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 22,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 22,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 22,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 22,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 22,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '90 mm Gun M1',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 3.9,
        hitpoints: 27,
        production: {
          costs: {
            food: 1400,
            manpower: 950,
            metal: 800,
            cash: 1200,
            oil: 0
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 3 },
          vsLightArmor:     { attack: 2,   defense: 4 },
          vsHeavyArmor:     { attack: 4.3, defense: 8.6 },
          vsAirplane:       { attack: 7.5, defense: 15 },
          vsShip:           { attack: 1.5, defense: 3 },
          vsSubmarine:      { attack: 1.5, defense: 3 },
          vsBuildings:      { attack: 0.6, defense: 1.2 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 27,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 27,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 27,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 27,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 27,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '90 mm Gun M2',
        level: 5,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 5.5,
        hitpoints: 32,
        production: {
          costs: {
            food: 1600,
            manpower: 950,
            metal: 900,
            cash: 1300,
            oil: 0
          },
          minTimeInSeconds: 12600
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 4 },
          vsLightArmor:     { attack: 3,   defense: 6 },
          vsHeavyArmor:     { attack: 6,   defense: 12 },
          vsAirplane:       { attack: 10,  defense: 20 },
          vsShip:           { attack: 2,   defense: 4 },
          vsSubmarine:      { attack: 2,   defense: 4 },
          vsBuildings:      { attack: 0.8, defense: 1.6 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 32,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 32,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 32,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 32,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 32,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '120 mm Gun M1',
        level: 6,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 7.5,
        hitpoints: 50,
        production: {
          costs: {
            food: 1700,
            manpower: 1000,
            metal: 1000,
            cash: 1500,
            oil: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,    defense: 6 },
          vsLightArmor:     { attack: 4.5,  defense: 9 },
          vsHeavyArmor:     { attack: 7.5,  defense: 15 },
          vsAirplane:       { attack: 12.5, defense: 25 },
          vsShip:           { attack: 3,    defense: 6 },
          vsSubmarine:      { attack: 3,    defense: 6 },
          vsBuildings:      { attack: 1.2,  defense: 2.4 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Anti Air (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 1.5,
        "hitpoints": 14,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 935,
            "metal": 660,
            "cash": 935,
            "oil": 0
          },
          "minTimeInSeconds": 7714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.6,
            "defense": 1.2
          },
          "vsLightArmor": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 1.7,
            "defense": 3.4
          },
          "vsAirplane": {
            "attack": 3.6,
            "defense": 7.3
          },
          "vsShip": {
            "attack": 0.6,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 0.6,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 0.2,
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
            "health": 14,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 14,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 12,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 14,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 14,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Axis Anti Air (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 2.2,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 1210,
            "manpower": 990,
            "metal": 715,
            "cash": 990,
            "oil": 0
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 1.2,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 2.6,
            "defense": 5.2
          },
          "vsAirplane": {
            "attack": 5.2,
            "defense": 10.4
          },
          "vsShip": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsBuildings": {
            "attack": 0.3,
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
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Axis Anti Air (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 3.2,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 1320,
            "manpower": 990,
            "metal": 770,
            "cash": 1100,
            "oil": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.2,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 1.7,
            "defense": 3.5
          },
          "vsHeavyArmor": {
            "attack": 3.9,
            "defense": 7.8
          },
          "vsAirplane": {
            "attack": 7.2,
            "defense": 14.3
          },
          "vsShip": {
            "attack": 1.2,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 0.5,
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Axis Anti Air (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 4.5,
        "hitpoints": 31,
        "production": {
          "costs": {
            "food": 1540,
            "manpower": 1045,
            "metal": 880,
            "cash": 1320,
            "oil": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.7,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 2.3,
            "defense": 4.6
          },
          "vsHeavyArmor": {
            "attack": 5.6,
            "defense": 11.2
          },
          "vsAirplane": {
            "attack": 9.8,
            "defense": 19.5
          },
          "vsShip": {
            "attack": 1.7,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 3.5
          },
          "vsBuildings": {
            "attack": 0.7,
            "defense": 1.4
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
            "health": 31,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 31,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 31,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 31,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Axis Anti Air (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 6.3,
        "hitpoints": 37,
        "production": {
          "costs": {
            "food": 1760,
            "manpower": 1045,
            "metal": 990,
            "cash": 1430,
            "oil": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.3,
            "defense": 4.6
          },
          "vsLightArmor": {
            "attack": 3.5,
            "defense": 6.9
          },
          "vsHeavyArmor": {
            "attack": 7.8,
            "defense": 15.6
          },
          "vsAirplane": {
            "attack": 13,
            "defense": 26
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 4.6
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 4.6
          },
          "vsBuildings": {
            "attack": 0.9,
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
            "health": 37,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 37,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 37,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 37,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Axis Anti Air (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 8.6,
        "hitpoints": 57,
        "production": {
          "costs": {
            "food": 1870,
            "manpower": 1100,
            "metal": 1100,
            "cash": 1650,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.5,
            "defense": 6.9
          },
          "vsLightArmor": {
            "attack": 5.2,
            "defense": 10.4
          },
          "vsHeavyArmor": {
            "attack": 9.8,
            "defense": 19.5
          },
          "vsAirplane": {
            "attack": 16.3,
            "defense": 32.5
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 6.9
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 6.9
          },
          "vsBuildings": {
            "attack": 1.4,
            "defense": 2.8
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
            "health": 57,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 57,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 57,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 57,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern Anti Air (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 1.2,
        "hitpoints": 12,
        "production": {
          "costs": {
            "food": 850,
            "manpower": 723,
            "metal": 510,
            "cash": 723,
            "oil": 0
          },
          "minTimeInSeconds": 7714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.5,
            "defense": 0.9
          },
          "vsLightArmor": {
            "attack": 0.7,
            "defense": 1.4
          },
          "vsHeavyArmor": {
            "attack": 1.2,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 2.5,
            "defense": 5
          },
          "vsShip": {
            "attack": 0.5,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 0.2,
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
            "health": 12,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 12,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 12,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 12,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 12,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern Anti Air (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 1.7,
        "hitpoints": 17,
        "production": {
          "costs": {
            "food": 935,
            "manpower": 765,
            "metal": 553,
            "cash": 765,
            "oil": 0
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.7,
            "defense": 1.4
          },
          "vsLightArmor": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 3.6
          },
          "vsAirplane": {
            "attack": 3.6,
            "defense": 7.2
          },
          "vsShip": {
            "attack": 0.7,
            "defense": 1.4
          },
          "vsSubmarine": {
            "attack": 0.7,
            "defense": 1.4
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
            "health": 17,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern Anti Air (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 2.5,
        "hitpoints": 22,
        "production": {
          "costs": {
            "food": 1020,
            "manpower": 765,
            "metal": 595,
            "cash": 850,
            "oil": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 1.4,
            "defense": 2.7
          },
          "vsHeavyArmor": {
            "attack": 2.7,
            "defense": 5.4
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 9.9
          },
          "vsShip": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsBuildings": {
            "attack": 0.4,
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
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern Anti Air (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 3.5,
        "hitpoints": 27,
        "production": {
          "costs": {
            "food": 1190,
            "manpower": 808,
            "metal": 680,
            "cash": 1020,
            "oil": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.4,
            "defense": 2.7
          },
          "vsLightArmor": {
            "attack": 1.8,
            "defense": 3.6
          },
          "vsHeavyArmor": {
            "attack": 3.9,
            "defense": 7.7
          },
          "vsAirplane": {
            "attack": 6.8,
            "defense": 13.5
          },
          "vsShip": {
            "attack": 1.4,
            "defense": 2.7
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 2.7
          },
          "vsBuildings": {
            "attack": 0.5,
            "defense": 1.1
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
            "health": 27,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern Anti Air (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 5,
        "hitpoints": 32,
        "production": {
          "costs": {
            "food": 1360,
            "manpower": 808,
            "metal": 765,
            "cash": 1105,
            "oil": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.8,
            "defense": 3.6
          },
          "vsLightArmor": {
            "attack": 2.7,
            "defense": 5.4
          },
          "vsHeavyArmor": {
            "attack": 5.4,
            "defense": 10.8
          },
          "vsAirplane": {
            "attack": 9,
            "defense": 18
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 3.6
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 3.6
          },
          "vsBuildings": {
            "attack": 0.7,
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
            "health": 32,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern Anti Air (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 6.8,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1445,
            "manpower": 850,
            "metal": 850,
            "cash": 1275,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.7,
            "defense": 5.4
          },
          "vsLightArmor": {
            "attack": 4.1,
            "defense": 8.1
          },
          "vsHeavyArmor": {
            "attack": 6.8,
            "defense": 13.5
          },
          "vsAirplane": {
            "attack": 11.3,
            "defense": 22.5
          },
          "vsShip": {
            "attack": 2.7,
            "defense": 5.4
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": 5.4
          },
          "vsBuildings": {
            "attack": 1.1,
            "defense": 2.2
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
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Pan-Asian Anti Air (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 1.3,
        "hitpoints": 12,
        "production": {
          "costs": {
            "food": 1000,
            "manpower": 850,
            "metal": 600,
            "cash": 850,
            "oil": 0
          },
          "minTimeInSeconds": 7714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.5,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 0.8,
            "defense": 1.6
          },
          "vsHeavyArmor": {
            "attack": 1.3,
            "defense": 2.6
          },
          "vsAirplane": {
            "attack": 2.8,
            "defense": 5.6
          },
          "vsShip": {
            "attack": 0.5,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 0.2,
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
            "health": 12,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 12,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 12,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 12,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "urban": {
            "health": 12,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian Anti Air (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 1.9,
        "hitpoints": 17,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 900,
            "metal": 650,
            "cash": 900,
            "oil": 0
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.8,
            "defense": 1.6
          },
          "vsLightArmor": {
            "attack": 1,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 4
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 8
          },
          "vsShip": {
            "attack": 0.8,
            "defense": 1.6
          },
          "vsSubmarine": {
            "attack": 0.8,
            "defense": 1.6
          },
          "vsBuildings": {
            "attack": 0.3,
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
            "health": 17,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "urban": {
            "health": 17,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian Anti Air (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 2.8,
        "hitpoints": 22,
        "production": {
          "costs": {
            "food": 1200,
            "manpower": 900,
            "metal": 700,
            "cash": 1000,
            "oil": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1,
            "defense": 2
          },
          "vsLightArmor": {
            "attack": 1.5,
            "defense": 3
          },
          "vsHeavyArmor": {
            "attack": 3,
            "defense": 6
          },
          "vsAirplane": {
            "attack": 5.5,
            "defense": 11
          },
          "vsShip": {
            "attack": 1,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 1,
            "defense": 2
          },
          "vsBuildings": {
            "attack": 0.4,
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
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "urban": {
            "health": 22,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian Anti Air (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 3.9,
        "hitpoints": 27,
        "production": {
          "costs": {
            "food": 1400,
            "manpower": 950,
            "metal": 800,
            "cash": 1200,
            "oil": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.5,
            "defense": 3
          },
          "vsLightArmor": {
            "attack": 2,
            "defense": 4
          },
          "vsHeavyArmor": {
            "attack": 4.3,
            "defense": 8.6
          },
          "vsAirplane": {
            "attack": 7.5,
            "defense": 15
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 3
          },
          "vsBuildings": {
            "attack": 0.6,
            "defense": 1.2
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
            "health": 27,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "urban": {
            "health": 27,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian Anti Air (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 5.5,
        "hitpoints": 32,
        "production": {
          "costs": {
            "food": 1600,
            "manpower": 950,
            "metal": 900,
            "cash": 1300,
            "oil": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2,
            "defense": 4
          },
          "vsLightArmor": {
            "attack": 3,
            "defense": 6
          },
          "vsHeavyArmor": {
            "attack": 6,
            "defense": 12
          },
          "vsAirplane": {
            "attack": 10,
            "defense": 20
          },
          "vsShip": {
            "attack": 2,
            "defense": 4
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 4
          },
          "vsBuildings": {
            "attack": 0.8,
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
            "health": 32,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "urban": {
            "health": 32,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian Anti Air (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 7.5,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1700,
            "manpower": 1000,
            "metal": 1000,
            "cash": 1500,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Air",
          "Defensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3,
            "defense": 6
          },
          "vsLightArmor": {
            "attack": 4.5,
            "defense": 9
          },
          "vsHeavyArmor": {
            "attack": 7.5,
            "defense": 15
          },
          "vsAirplane": {
            "attack": 12.5,
            "defense": 25
          },
          "vsShip": {
            "attack": 3,
            "defense": 6
          },
          "vsSubmarine": {
            "attack": 3,
            "defense": 6
          },
          "vsBuildings": {
            "attack": 1.2,
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
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "urban": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
