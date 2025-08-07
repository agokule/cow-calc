import { IUnitType } from '@/types';

export const artilleryData: IUnitType = {
  genericName: 'Artillery',
  doctrineVariants: {
    Allies: [
      {
        unitName: '75 mm Pack Howitzer M1',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 1.3,
        hitpoints: 10,
        production: {
          costs: {
            food: 1800,
            manpower: 1100,
            metal: 750,
            cash: 1400,
            oil: 0
          },
          minTimeInSeconds: 7140
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 0.4 },
          vsLightArmor:     { attack: 2.7, defense: 0.7 },
          vsHeavyArmor:     { attack: 2,   defense: 0.5 },
          vsAirplane:       { attack: 1,   defense: 0.2 },
          vsShip:           { attack: 2,   defense: 0.5 },
          vsSubmarine:      { attack: 1,   defense: 0.2 },
          vsBuildings:      { attack: 2.5, defense: 0.6 },
          vsProvinceMorale: { attack: 0.7, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 10,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '105 mm Howitzer M2A1',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 1.9,
        hitpoints: 15,
        production: {
          costs: {
            food: 2000,
            manpower: 1100,
            metal: 850,
            cash: 1600,
            oil: 0
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 0.5 },
          vsLightArmor:     { attack: 4,   defense: 1 },
          vsHeavyArmor:     { attack: 3,   defense: 0.8 },
          vsAirplane:       { attack: 1.5, defense: 0.4 },
          vsShip:           { attack: 3,   defense: 0.8 },
          vsSubmarine:      { attack: 1.5, defense: 0.4 },
          vsBuildings:      { attack: 3,   defense: 0.8 },
          vsProvinceMorale: { attack: 1,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 15,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '105 mm Howitzer M3',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 2.6,
        hitpoints: 20,
        production: {
          costs: {
            food: 2200,
            manpower: 1100,
            metal: 950,
            cash: 1700,
            oil: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2.8, defense: 0.7 },
          vsLightArmor:     { attack: 5.5, defense: 1.4 },
          vsHeavyArmor:     { attack: 4,   defense: 1 },
          vsAirplane:       { attack: 2,   defense: 0.5 },
          vsShip:           { attack: 4,   defense: 1 },
          vsSubmarine:      { attack: 2,   defense: 0.5 },
          vsBuildings:      { attack: 4,   defense: 1 },
          vsProvinceMorale: { attack: 1.4, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '155 mm Howitzer M1',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 3.5,
        hitpoints: 25,
        production: {
          costs: {
            food: 2500,
            manpower: 1200,
            metal: 1000,
            cash: 1900,
            oil: 0
          },
          minTimeInSeconds: 17100
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3.8, defense: 0.9 },
          vsLightArmor:     { attack: 7.5, defense: 1.9 },
          vsHeavyArmor:     { attack: 5.5, defense: 1.4 },
          vsAirplane:       { attack: 2.8, defense: 0.7 },
          vsShip:           { attack: 5.5, defense: 1.4 },
          vsSubmarine:      { attack: 2.8, defense: 0.7 },
          vsBuildings:      { attack: 5.5, defense: 1.4 },
          vsProvinceMorale: { attack: 2,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 25,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '240 mm Howitzer M1',
        level: 5,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 4.8,
        hitpoints: 30,
        production: {
          costs: {
            food: 2800,
            manpower: 1200,
            metal: 1200,
            cash: 2200,
            oil: 0
          },
          minTimeInSeconds: 20100
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5,    defense: 1.3 },
          vsLightArmor:     { attack: 10.3, defense: 2.6 },
          vsHeavyArmor:     { attack: 7.5,  defense: 1.9 },
          vsAirplane:       { attack: 3.8,  defense: 1 },
          vsShip:           { attack: 7.5,  defense: 1.9 },
          vsSubmarine:      { attack: 3.8,  defense: 1 },
          vsBuildings:      { attack: 7.5,  defense: 1.9 },
          vsProvinceMorale: { attack: 2.7,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'BL 7.2-inch Howitzer Mk. 6',
        level: 6,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 6.2,
        hitpoints: 40,
        production: {
          costs: {
            food: 3100,
            manpower: 1200,
            metal: 1300,
            cash: 2400,
            oil: 0
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6.5,  defense: 1.6 },
          vsLightArmor:     { attack: 13.5, defense: 3.4 },
          vsHeavyArmor:     { attack: 9.8,  defense: 2.4 },
          vsAirplane:       { attack: 5,    defense: 1.2 },
          vsShip:           { attack: 9.8,  defense: 2.4 },
          vsSubmarine:      { attack: 5,    defense: 1.2 },
          vsBuildings:      { attack: 10,   defense: 2.5 },
          vsProvinceMorale: { attack: 3.5,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 40,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 1.5,
        "hitpoints": 12,
        "production": {
          "costs": {
            "food": 1980,
            "manpower": 1210,
            "metal": 825,
            "cash": 1540,
            "oil": 0
          },
          "minTimeInSeconds": 10200
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.7,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 3.1,
            "defense": 0.8
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 0.2
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 0.6
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 0.2
          },
          "vsBuildings": {
            "attack": 2.9,
            "defense": 0.7
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
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 10,
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
        "unitName": "Axis Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 2.2,
        "hitpoints": 17,
        "production": {
          "costs": {
            "food": 2200,
            "manpower": 1210,
            "metal": 935,
            "cash": 1760,
            "oil": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.3,
            "defense": 0.6
          },
          "vsLightArmor": {
            "attack": 4.6,
            "defense": 1.2
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 0.9
          },
          "vsAirplane": {
            "attack": 1.7,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 3.5,
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "strengthModifier": 0.5
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
        "unitName": "Axis Artillery (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 3,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 2420,
            "manpower": 1210,
            "metal": 1045,
            "cash": 1870,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsLightArmor": {
            "attack": 6.3,
            "defense": 1.6
          },
          "vsHeavyArmor": {
            "attack": 4.6,
            "defense": 1.2
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 4.6,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 4.6,
            "defense": 1.2
          },
          "vsProvinceMorale": {
            "attack": 1.6,
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
            "health": 23,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 23,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
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
        "unitName": "Axis Artillery (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 4,
        "hitpoints": 29,
        "production": {
          "costs": {
            "food": 2750,
            "manpower": 1320,
            "metal": 1100,
            "cash": 2090,
            "oil": 0
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.4,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 8.6,
            "defense": 2.2
          },
          "vsHeavyArmor": {
            "attack": 6.3,
            "defense": 1.6
          },
          "vsAirplane": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsShip": {
            "attack": 6.3,
            "defense": 1.6
          },
          "vsSubmarine": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsBuildings": {
            "attack": 6.3,
            "defense": 1.6
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 29,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 29,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
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
        "unitName": "Axis Artillery (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 5.5,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 3080,
            "manpower": 1320,
            "metal": 1320,
            "cash": 2420,
            "oil": 0
          },
          "minTimeInSeconds": 28714
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.8,
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 11.8,
            "defense": 3
          },
          "vsHeavyArmor": {
            "attack": 8.6,
            "defense": 2.2
          },
          "vsAirplane": {
            "attack": 4.4,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 8.6,
            "defense": 2.2
          },
          "vsSubmarine": {
            "attack": 4.4,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 8.6,
            "defense": 2.2
          },
          "vsProvinceMorale": {
            "attack": 3.1,
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
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
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
        "unitName": "Axis Artillery (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 7.1,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 3410,
            "manpower": 1320,
            "metal": 1430,
            "cash": 2640,
            "oil": 0
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.5,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 15.5,
            "defense": 3.9
          },
          "vsHeavyArmor": {
            "attack": 11.3,
            "defense": 2.8
          },
          "vsAirplane": {
            "attack": 5.8,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 11.3,
            "defense": 2.8
          },
          "vsSubmarine": {
            "attack": 5.8,
            "defense": 1.4
          },
          "vsBuildings": {
            "attack": 11.5,
            "defense": 2.9
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
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 1.2,
        "hitpoints": 10,
        "production": {
          "costs": {
            "food": 1350,
            "manpower": 825,
            "metal": 563,
            "cash": 1050,
            "oil": 0
          },
          "minTimeInSeconds": 8160
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.4,
            "defense": 0.4
          },
          "vsLightArmor": {
            "attack": 2.4,
            "defense": 0.6
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 0.2
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 0.5
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 0.2
          },
          "vsBuildings": {
            "attack": 2.3,
            "defense": 0.5
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
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
          },
          "forest": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 10,
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
        "unitName": "Comintern Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 1.7,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 1500,
            "manpower": 825,
            "metal": 638,
            "cash": 1200,
            "oil": 0
          },
          "minTimeInSeconds": 13371
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.8,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 3.6,
            "defense": 0.9
          },
          "vsHeavyArmor": {
            "attack": 2.7,
            "defense": 0.7
          },
          "vsAirplane": {
            "attack": 1.4,
            "defense": 0.4
          },
          "vsShip": {
            "attack": 2.7,
            "defense": 0.7
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 0.4
          },
          "vsBuildings": {
            "attack": 2.7,
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Artillery (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 2.3,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 1650,
            "manpower": 825,
            "metal": 713,
            "cash": 1275,
            "oil": 0
          },
          "minTimeInSeconds": 16457
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsLightArmor": {
            "attack": 5,
            "defense": 1.3
          },
          "vsHeavyArmor": {
            "attack": 3.6,
            "defense": 0.9
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 3.6,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 3.6,
            "defense": 0.9
          },
          "vsProvinceMorale": {
            "attack": 1.3,
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
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Artillery (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 3.2,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 1875,
            "manpower": 900,
            "metal": 750,
            "cash": 1425,
            "oil": 0
          },
          "minTimeInSeconds": 19543
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.4,
            "defense": 0.8
          },
          "vsLightArmor": {
            "attack": 6.8,
            "defense": 1.7
          },
          "vsHeavyArmor": {
            "attack": 5,
            "defense": 1.3
          },
          "vsAirplane": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 5,
            "defense": 1.3
          },
          "vsSubmarine": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 5,
            "defense": 1.3
          },
          "vsProvinceMorale": {
            "attack": 1.8,
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
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Artillery (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 4.3,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 2100,
            "manpower": 900,
            "metal": 900,
            "cash": 1650,
            "oil": 0
          },
          "minTimeInSeconds": 22971
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.5,
            "defense": 1.2
          },
          "vsLightArmor": {
            "attack": 9.3,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 6.8,
            "defense": 1.7
          },
          "vsAirplane": {
            "attack": 3.4,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 6.8,
            "defense": 1.7
          },
          "vsSubmarine": {
            "attack": 3.4,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 6.8,
            "defense": 1.7
          },
          "vsProvinceMorale": {
            "attack": 2.4,
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
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Artillery (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 5.6,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 2325,
            "manpower": 900,
            "metal": 975,
            "cash": 1800,
            "oil": 0
          },
          "minTimeInSeconds": 24686
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.9,
            "defense": 1.4
          },
          "vsLightArmor": {
            "attack": 12.2,
            "defense": 3.1
          },
          "vsHeavyArmor": {
            "attack": 8.8,
            "defense": 2.2
          },
          "vsAirplane": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsShip": {
            "attack": 8.8,
            "defense": 2.2
          },
          "vsSubmarine": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsBuildings": {
            "attack": 9,
            "defense": 2.3
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
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.5
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
        "unitName": "Pan-Asian Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 1.3,
        "hitpoints": 10,
        "production": {
          "costs": {
            "food": 1620,
            "manpower": 990,
            "metal": 675,
            "cash": 1260,
            "oil": 0
          },
          "minTimeInSeconds": 10200
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.7,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 2.7,
            "defense": 0.7
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 1,
            "defense": 0.2
          },
          "vsShip": {
            "attack": 2,
            "defense": 0.5
          },
          "vsSubmarine": {
            "attack": 1,
            "defense": 0.2
          },
          "vsBuildings": {
            "attack": 2.5,
            "defense": 0.6
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
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.7
          },
          "forest": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 10,
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
        "unitName": "Pan-Asian Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 1.9,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 1800,
            "manpower": 990,
            "metal": 765,
            "cash": 1440,
            "oil": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.3,
            "defense": 0.6
          },
          "vsLightArmor": {
            "attack": 4,
            "defense": 1
          },
          "vsHeavyArmor": {
            "attack": 3,
            "defense": 0.8
          },
          "vsAirplane": {
            "attack": 1.5,
            "defense": 0.4
          },
          "vsShip": {
            "attack": 3,
            "defense": 0.8
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 0.4
          },
          "vsBuildings": {
            "attack": 3,
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Artillery (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 2.6,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 1980,
            "manpower": 990,
            "metal": 855,
            "cash": 1530,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsLightArmor": {
            "attack": 5.5,
            "defense": 1.4
          },
          "vsHeavyArmor": {
            "attack": 4,
            "defense": 1
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 4,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 4,
            "defense": 1
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
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Artillery (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 3.5,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 2250,
            "manpower": 1080,
            "metal": 900,
            "cash": 1710,
            "oil": 0
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.4,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 7.5,
            "defense": 1.9
          },
          "vsHeavyArmor": {
            "attack": 5.5,
            "defense": 1.4
          },
          "vsAirplane": {
            "attack": 2.8,
            "defense": 0.7
          },
          "vsShip": {
            "attack": 5.5,
            "defense": 1.4
          },
          "vsSubmarine": {
            "attack": 2.8,
            "defense": 0.7
          },
          "vsBuildings": {
            "attack": 5.5,
            "defense": 1.4
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Artillery (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 4.8,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 2520,
            "manpower": 1080,
            "metal": 1080,
            "cash": 1980,
            "oil": 0
          },
          "minTimeInSeconds": 28714
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.8,
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 10.3,
            "defense": 2.6
          },
          "vsHeavyArmor": {
            "attack": 7.5,
            "defense": 1.9
          },
          "vsAirplane": {
            "attack": 3.8,
            "defense": 1
          },
          "vsShip": {
            "attack": 7.5,
            "defense": 1.9
          },
          "vsSubmarine": {
            "attack": 3.8,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 7.5,
            "defense": 1.9
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Artillery (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 6.2,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 2790,
            "manpower": 1080,
            "metal": 1170,
            "cash": 2160,
            "oil": 0
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.5,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 13.5,
            "defense": 3.4
          },
          "vsHeavyArmor": {
            "attack": 9.8,
            "defense": 2.4
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 9.8,
            "defense": 2.4
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 10,
            "defense": 2.5
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
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.7
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
