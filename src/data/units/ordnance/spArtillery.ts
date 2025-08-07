// src/data/units/ordnance/spArtillery.ts
import { IUnitType } from '@/types';

export const spArtilleryData: IUnitType = {
  genericName: 'SP Artillery',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Bishop',
        level: 1,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 2.5,
        hitpoints: 22,
        production: {
          costs: {
            manpower: 1400,
            metal: 1800,
            oil: 1700,
            cash: 2200,
            food: 0
          },
          minTimeInSeconds: 12600
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Heavy Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2.5, defense: 0.6 },
          vsLightArmor:     { attack: 3.5, defense: 0.9 },
          vsHeavyArmor:     { attack: 5.8, defense: 1.4 },
          vsAirplane:       { attack: 2,   defense: 0.5 },
          vsShip:           { attack: 3.5, defense: 0.9 },
          vsSubmarine:      { attack: 2,   defense: 0.5 },
          vsBuildings:      { attack: 3.5, defense: 0.9 },
          vsProvinceMorale: { attack: 1,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 22,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.2 },
          hills:          { health: 22,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 22,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 22,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 22,   attackModifier: null, speedModifier: null,  strengthModifier: 0.2 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M7 Priest',
        level: 2,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 3.2,
        hitpoints: 28,
        production: {
          costs: {
            manpower: 1500,
            metal: 2100,
            oil: 1900,
            cash: 2500,
            food: 0
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Heavy Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3.3, defense: 0.8 },
          vsLightArmor:     { attack: 4.5, defense: 1.1 },
          vsHeavyArmor:     { attack: 7.5, defense: 1.9 },
          vsAirplane:       { attack: 2.8, defense: 0.7 },
          vsShip:           { attack: 4.5, defense: 1.1 },
          vsSubmarine:      { attack: 2.8, defense: 0.7 },
          vsBuildings:      { attack: 4.5, defense: 1.1 },
          vsProvinceMorale: { attack: 1.4, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 28,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.2 },
          hills:          { health: 28,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 28,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 28,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 28,   attackModifier: null, speedModifier: null,  strengthModifier: 0.2 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Sexton',
        level: 3,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 4.2,
        hitpoints: 33,
        production: {
          costs: {
            manpower: 1500,
            metal: 2400,
            oil: 2200,
            cash: 2900,
            food: 0
          },
          minTimeInSeconds: 22500
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Heavy Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.3, defense: 1.1 },
          vsLightArmor:     { attack: 6,   defense: 1.5 },
          vsHeavyArmor:     { attack: 9.8, defense: 2.5 },
          vsAirplane:       { attack: 3.8, defense: 0.9 },
          vsShip:           { attack: 6,   defense: 1.5 },
          vsSubmarine:      { attack: 3.8, defense: 0.9 },
          vsBuildings:      { attack: 6,   defense: 1.5 },
          vsProvinceMorale: { attack: 2,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 33,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.2 },
          hills:          { health: 33,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 33,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 33,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 33,   attackModifier: null, speedModifier: null,  strengthModifier: 0.2 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M40 Gun Motor Carriage',
        level: 4,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 5.5,
        hitpoints: 44,
        production: {
          costs: {
            manpower: 1500,
            metal: 2700,
            oil: 2400,
            cash: 3200,
            food: 0
          },
          minTimeInSeconds: 25200
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Heavy Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5.5,  defense: 1.4 },
          vsLightArmor:     { attack: 8,    defense: 2 },
          vsHeavyArmor:     { attack: 12.7, defense: 3.2 },
          vsAirplane:       { attack: 5,    defense: 1.2 },
          vsShip:           { attack: 8,    defense: 2 },
          vsSubmarine:      { attack: 5,    defense: 1.2 },
          vsBuildings:      { attack: 8,    defense: 2 },
          vsProvinceMorale: { attack: 2.7,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 44,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.2 },
          hills:          { health: 44,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 44,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 44,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 44,   attackModifier: null, speedModifier: null,  strengthModifier: 0.2 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M43 Howitzer Motor Carriage',
        level: 5,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 7,
        hitpoints: 61,
        production: {
          costs: {
            manpower: 1600,
            metal: 2900,
            oil: 2600,
            cash: 3500,
            food: 0
          },
          minTimeInSeconds: 27000
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Heavy Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7,    defense: 1.7 },
          vsLightArmor:     { attack: 10.5, defense: 2.6 },
          vsHeavyArmor:     { attack: 16.1, defense: 4 },
          vsAirplane:       { attack: 6.5,  defense: 1.6 },
          vsShip:           { attack: 10.5, defense: 2.6 },
          vsSubmarine:      { attack: 6.5,  defense: 1.6 },
          vsBuildings:      { attack: 11,   defense: 2.7 },
          vsProvinceMorale: { attack: 3.5,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 61,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.2 },
          hills:          { health: 61,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 61,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 61,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 61,   attackModifier: null, speedModifier: null,  strengthModifier: 0.2 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis SP Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 2.9,
        "hitpoints": 23,
        "production": {
          "costs": {
            "manpower": 1540,
            "metal": 1980,
            "oil": 1870,
            "cash": 2420,
            "food": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.9,
            "defense": 0.7
          },
          "vsLightArmor": {
            "attack": 4,
            "defense": 1
          },
          "vsHeavyArmor": {
            "attack": 5.8,
            "defense": 1.4
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 4,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 4,
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
            "health": 23,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 23,
            "attackModifier": null,
            "speedModifier": -0.25,
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
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 23,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
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
        "unitName": "Axis SP Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 3.7,
        "hitpoints": 29,
        "production": {
          "costs": {
            "manpower": 1650,
            "metal": 2310,
            "oil": 2090,
            "cash": 2750,
            "food": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.8,
            "defense": 0.9
          },
          "vsLightArmor": {
            "attack": 5.2,
            "defense": 1.3
          },
          "vsHeavyArmor": {
            "attack": 7.5,
            "defense": 1.9
          },
          "vsAirplane": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsShip": {
            "attack": 5.2,
            "defense": 1.3
          },
          "vsSubmarine": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsBuildings": {
            "attack": 5.2,
            "defense": 1.3
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
            "health": 29,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 29,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 28,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 28,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 29,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
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
        "unitName": "Axis SP Artillery (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 4.8,
        "hitpoints": 34,
        "production": {
          "costs": {
            "manpower": 1650,
            "metal": 2640,
            "oil": 2420,
            "cash": 3190,
            "food": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.9,
            "defense": 1.3
          },
          "vsLightArmor": {
            "attack": 6.9,
            "defense": 1.7
          },
          "vsHeavyArmor": {
            "attack": 9.8,
            "defense": 2.5
          },
          "vsAirplane": {
            "attack": 4.4,
            "defense": 1
          },
          "vsShip": {
            "attack": 6.9,
            "defense": 1.7
          },
          "vsSubmarine": {
            "attack": 4.4,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 6.9,
            "defense": 1.7
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
            "health": 34,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 34,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 33,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 33,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 34,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
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
        "unitName": "Axis SP Artillery (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 6.3,
        "hitpoints": 46,
        "production": {
          "costs": {
            "manpower": 1650,
            "metal": 2970,
            "oil": 2640,
            "cash": 3520,
            "food": 0
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.3,
            "defense": 1.6
          },
          "vsLightArmor": {
            "attack": 9.2,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 12.7,
            "defense": 3.2
          },
          "vsAirplane": {
            "attack": 5.8,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 9.2,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 5.8,
            "defense": 1.4
          },
          "vsBuildings": {
            "attack": 9.2,
            "defense": 2.3
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
            "health": 46,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 44,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 44,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
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
        "unitName": "Axis SP Artillery (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 8,
        "hitpoints": 64,
        "production": {
          "costs": {
            "manpower": 1760,
            "metal": 3190,
            "oil": 2860,
            "cash": 3850,
            "food": 0
          },
          "minTimeInSeconds": 38571
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8,
            "defense": 2
          },
          "vsLightArmor": {
            "attack": 12.1,
            "defense": 3
          },
          "vsHeavyArmor": {
            "attack": 16.1,
            "defense": 4
          },
          "vsAirplane": {
            "attack": 7.5,
            "defense": 1.8
          },
          "vsShip": {
            "attack": 12.1,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 7.5,
            "defense": 1.8
          },
          "vsBuildings": {
            "attack": 12.6,
            "defense": 3.1
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
            "health": 64,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 64,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 64,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
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
        "unitName": "Comintern SP Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 2.3,
        "hitpoints": 20,
        "production": {
          "costs": {
            "manpower": 1190,
            "metal": 1530,
            "oil": 1445,
            "cash": 1870,
            "food": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.3,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsHeavyArmor": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 3.2,
            "defense": 0.8
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 3.2,
            "defense": 0.8
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
            "health": 20,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
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
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
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
        "unitName": "Comintern SP Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 2.9,
        "hitpoints": 25,
        "production": {
          "costs": {
            "manpower": 1275,
            "metal": 1785,
            "oil": 1615,
            "cash": 2125,
            "food": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3,
            "defense": 0.7
          },
          "vsLightArmor": {
            "attack": 4.1,
            "defense": 1
          },
          "vsHeavyArmor": {
            "attack": 5.9,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 4.1,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 4.1,
            "defense": 1
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 28,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 28,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
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
        "unitName": "Comintern SP Artillery (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 3.8,
        "hitpoints": 30,
        "production": {
          "costs": {
            "manpower": 1275,
            "metal": 2040,
            "oil": 1870,
            "cash": 2465,
            "food": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.9,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 5.4,
            "defense": 1.4
          },
          "vsHeavyArmor": {
            "attack": 7.7,
            "defense": 2
          },
          "vsAirplane": {
            "attack": 3.4,
            "defense": 0.8
          },
          "vsShip": {
            "attack": 5.4,
            "defense": 1.4
          },
          "vsSubmarine": {
            "attack": 3.4,
            "defense": 0.8
          },
          "vsBuildings": {
            "attack": 5.4,
            "defense": 1.4
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 33,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 33,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
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
        "unitName": "Comintern SP Artillery (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 5,
        "hitpoints": 40,
        "production": {
          "costs": {
            "manpower": 1275,
            "metal": 2295,
            "oil": 2040,
            "cash": 2720,
            "food": 0
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5,
            "defense": 1.3
          },
          "vsLightArmor": {
            "attack": 7.2,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 9.9,
            "defense": 2.5
          },
          "vsAirplane": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsShip": {
            "attack": 7.2,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsBuildings": {
            "attack": 7.2,
            "defense": 1.8
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
            "health": 40,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 44,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 44,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
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
        "unitName": "Comintern SP Artillery (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "LightArmor",
        "averageDamage": 6.3,
        "hitpoints": 55,
        "production": {
          "costs": {
            "manpower": 1360,
            "metal": 2465,
            "oil": 2210,
            "cash": 2975,
            "food": 0
          },
          "minTimeInSeconds": 38571
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.3,
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 9.5,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 12.6,
            "defense": 3.1
          },
          "vsAirplane": {
            "attack": 5.9,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 9.5,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 5.9,
            "defense": 1.4
          },
          "vsBuildings": {
            "attack": 9.9,
            "defense": 2.4
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
            "health": 55,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.2
          },
          "hills": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.5
          },
          "mountains": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.2
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
        "unitName": "Pan-Asian SP Artillery (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 2.5,
        "hitpoints": 20,
        "production": {
          "costs": {
            "manpower": 1400,
            "metal": 1800,
            "oil": 1700,
            "cash": 2200,
            "food": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.5,
            "defense": 0.6
          },
          "vsLightArmor": {
            "attack": 3.5,
            "defense": 0.9
          },
          "vsHeavyArmor": {
            "attack": 5.043478260869565,
            "defense": 1.2173913043478262
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 3.5,
            "defense": 0.9
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
            "health": 20,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.4
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
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
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.4
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
        "unitName": "Pan-Asian SP Artillery (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 3.2,
        "hitpoints": 25,
        "production": {
          "costs": {
            "manpower": 1500,
            "metal": 2100,
            "oil": 1900,
            "cash": 2500,
            "food": 0
          },
          "minTimeInSeconds": 28286
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.3,
            "defense": 0.8
          },
          "vsLightArmor": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsHeavyArmor": {
            "attack": 6.521739130434783,
            "defense": 1.6521739130434783
          },
          "vsAirplane": {
            "attack": 2.8,
            "defense": 0.7
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 1.1
          },
          "vsSubmarine": {
            "attack": 2.8,
            "defense": 0.7
          },
          "vsBuildings": {
            "attack": 4.5,
            "defense": 1.1
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.4
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 28,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 28,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.4
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
        "unitName": "Pan-Asian SP Artillery (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 4.2,
        "hitpoints": 30,
        "production": {
          "costs": {
            "manpower": 1500,
            "metal": 2400,
            "oil": 2200,
            "cash": 2900,
            "food": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.3,
            "defense": 1.1
          },
          "vsLightArmor": {
            "attack": 6,
            "defense": 1.5
          },
          "vsHeavyArmor": {
            "attack": 8.521739130434783,
            "defense": 2.173913043478261
          },
          "vsAirplane": {
            "attack": 3.8,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 6,
            "defense": 1.5
          },
          "vsSubmarine": {
            "attack": 3.8,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 6,
            "defense": 1.5
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.4
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 33,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 33,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.4
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
        "unitName": "Pan-Asian SP Artillery (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 5.5,
        "hitpoints": 40,
        "production": {
          "costs": {
            "manpower": 1500,
            "metal": 2700,
            "oil": 2400,
            "cash": 3200,
            "food": 0
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.5,
            "defense": 1.4
          },
          "vsLightArmor": {
            "attack": 8,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 11.043478260869566,
            "defense": 2.7826086956521743
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 8,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 8,
            "defense": 2
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
            "health": 40,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.4
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 44,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 44,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.4
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
        "unitName": "Pan-Asian SP Artillery (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "LightArmor",
        "averageDamage": 7,
        "hitpoints": 55,
        "production": {
          "costs": {
            "manpower": 1600,
            "metal": 2900,
            "oil": 2600,
            "cash": 3500,
            "food": 0
          },
          "minTimeInSeconds": 38571
        },
        "specialProperties": [
          "Ranged Attack",
          "Offensive",
          "Anti-Heavy Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7,
            "defense": 1.7
          },
          "vsLightArmor": {
            "attack": 10.5,
            "defense": 2.6
          },
          "vsHeavyArmor": {
            "attack": 14,
            "defense": 3
          },
          "vsAirplane": {
            "attack": 6.5,
            "defense": 1.6
          },
          "vsShip": {
            "attack": 10.5,
            "defense": 2.6
          },
          "vsSubmarine": {
            "attack": 6.5,
            "defense": 1.6
          },
          "vsBuildings": {
            "attack": 11,
            "defense": 2.7
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
            "health": 55,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.4
          },
          "hills": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": 0.7
          },
          "mountains": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 61,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 55,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.4
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
