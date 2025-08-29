import { IUnitType } from '@/types';

export const battleshipData: IUnitType = {
  genericName: 'Battleship',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Tennessee Class',
        level: 1,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 4.5,
        hitpoints: 50,
        production: {
          costs: {
            food: 900,
            manpower: 1700,
            metal: 2700,
            cash: 1800,
            oil: 0
          },
          minTimeInSeconds: 10800
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,   defense: 3 },
          vsLightArmor:     { attack: 3,   defense: 3 },
          vsHeavyArmor:     { attack: 3,   defense: 3 },
          vsAirplane:       { attack: 1.5, defense: 1.5 },
          vsShip:           { attack: 7.5, defense: 7.5 },
          vsSubmarine:      { attack: 1.5, defense: 1.5 },
          vsBuildings:      { attack: 3,   defense: 3 },
          vsProvinceMorale: { attack: 1,   defense: null },
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
        unitName: 'Colorado Class',
        level: 2,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 6.3,
        hitpoints: 65,
        production: {
          costs: {
            food: 950,
            manpower: 1700,
            metal: 2900,
            cash: 2000,
            oil: 0
          },
          minTimeInSeconds: 12600
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.5,  defense: 4.5 },
          vsLightArmor:     { attack: 4.5,  defense: 4.5 },
          vsHeavyArmor:     { attack: 4.5,  defense: 4.5 },
          vsAirplane:       { attack: 2,    defense: 2 },
          vsShip:           { attack: 10.5, defense: 10.5 },
          vsSubmarine:      { attack: 2,    defense: 2 },
          vsBuildings:      { attack: 4.3,  defense: 4.3 },
          vsProvinceMorale: { attack: 1.4,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'North Carolina Class',
        level: 3,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 8.8,
        hitpoints: 85,
        production: {
          costs: {
            food: 1100,
            manpower: 1700,
            metal: 3400,
            cash: 2300,
            oil: 0
          },
          minTimeInSeconds: 18900
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,    defense: 6 },
          vsLightArmor:     { attack: 6,    defense: 6 },
          vsHeavyArmor:     { attack: 6,    defense: 6 },
          vsAirplane:       { attack: 3,    defense: 3 },
          vsShip:           { attack: 14.5, defense: 14.5 },
          vsSubmarine:      { attack: 3,    defense: 3 },
          vsBuildings:      { attack: 6,    defense: 6 },
          vsProvinceMorale: { attack: 2,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 85,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'South Dakota class',
        level: 4,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 11.8,
        hitpoints: 115,
        production: {
          costs: {
            food: 1300,
            manpower: 1800,
            metal: 3800,
            cash: 2500,
            oil: 0
          },
          minTimeInSeconds: 20700
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8,    defense: 8 },
          vsLightArmor:     { attack: 8,    defense: 8 },
          vsHeavyArmor:     { attack: 8,    defense: 8 },
          vsAirplane:       { attack: 4,    defense: 4 },
          vsShip:           { attack: 19.5, defense: 19.5 },
          vsSubmarine:      { attack: 4,    defense: 4 },
          vsBuildings:      { attack: 8,    defense: 8 },
          vsProvinceMorale: { attack: 2.7,  defense: null },
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
        unitName: 'Iowa Class',
        level: 5,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 15.8,
        hitpoints: 155,
        production: {
          costs: {
            food: 1500,
            manpower: 1800,
            metal: 4500,
            cash: 3000,
            oil: 0
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10.5, defense: 10.5 },
          vsLightArmor:     { attack: 10.5, defense: 10.5 },
          vsHeavyArmor:     { attack: 10.5, defense: 10.5 },
          vsAirplane:       { attack: 5.5,  defense: 5.5 },
          vsShip:           { attack: 26,   defense: 26 },
          vsSubmarine:      { attack: 5.5,  defense: 5.5 },
          vsBuildings:      { attack: 10.5, defense: 10.5 },
          vsProvinceMorale: { attack: 3.5,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 155,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Montana Class',
        level: 6,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 20.5,
        hitpoints: 200,
        production: {
          costs: {
            food: 1600,
            manpower: 1900,
            metal: 4900,
            cash: 3300,
            oil: 0
          },
          minTimeInSeconds: 25200
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 14,  defense: 14 },
          vsLightArmor:     { attack: 14,  defense: 14 },
          vsHeavyArmor:     { attack: 14,  defense: 14 },
          vsAirplane:       { attack: 7,   defense: 7 },
          vsShip:           { attack: 34,  defense: 34 },
          vsSubmarine:      { attack: 7,   defense: 7 },
          vsBuildings:      { attack: 14,  defense: 14 },
          vsProvinceMorale: { attack: 4.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 200,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Battleship (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 5.2,
        "hitpoints": 57,
        "production": {
          "costs": {
            "food": 990,
            "manpower": 1870,
            "metal": 2970,
            "cash": 1980,
            "oil": 0
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
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
            "attack": 1.7,
            "defense": 1.7
          },
          "vsShip": {
            "attack": 8.6,
            "defense": 8.6
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 1.7
          },
          "vsBuildings": {
            "attack": 3.5,
            "defense": 3.5
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
        "unitName": "Axis Battleship (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 7.2,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 1045,
            "manpower": 1870,
            "metal": 3190,
            "cash": 2200,
            "oil": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
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
            "attack": 2.3,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 12.1,
            "defense": 12.1
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 4.9,
            "defense": 4.9
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
      },
      {
        "unitName": "Axis Battleship (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 10.1,
        "hitpoints": 98,
        "production": {
          "costs": {
            "food": 1210,
            "manpower": 1870,
            "metal": 3740,
            "cash": 2530,
            "oil": 0
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
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
            "attack": 3.5,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 16.7,
            "defense": 16.7
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsBuildings": {
            "attack": 6.9,
            "defense": 6.9
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
      },
      {
        "unitName": "Axis Battleship (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 13.6,
        "hitpoints": 132,
        "production": {
          "costs": {
            "food": 1430,
            "manpower": 1980,
            "metal": 4180,
            "cash": 2750,
            "oil": 0
          },
          "minTimeInSeconds": 29571
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
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
            "attack": 4.6,
            "defense": 4.6
          },
          "vsShip": {
            "attack": 22.4,
            "defense": 22.4
          },
          "vsSubmarine": {
            "attack": 4.6,
            "defense": 4.6
          },
          "vsBuildings": {
            "attack": 9.2,
            "defense": 9.2
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
        "unitName": "Axis Battleship (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 18.2,
        "hitpoints": 178,
        "production": {
          "costs": {
            "food": 1650,
            "manpower": 1980,
            "metal": 4950,
            "cash": 3300,
            "oil": 0
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12.1,
            "defense": 12.1
          },
          "vsLightArmor": {
            "attack": 12.1,
            "defense": 12.1
          },
          "vsHeavyArmor": {
            "attack": 12.1,
            "defense": 12.1
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsShip": {
            "attack": 29.9,
            "defense": 29.9
          },
          "vsSubmarine": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsBuildings": {
            "attack": 12.1,
            "defense": 12.1
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
            "health": 155,
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
        "unitName": "Axis Battleship (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 23.6,
        "hitpoints": 230,
        "production": {
          "costs": {
            "food": 1760,
            "manpower": 2090,
            "metal": 5390,
            "cash": 3630,
            "oil": 0
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 16.1,
            "defense": 16.1
          },
          "vsLightArmor": {
            "attack": 16.1,
            "defense": 16.1
          },
          "vsHeavyArmor": {
            "attack": 16.1,
            "defense": 16.1
          },
          "vsAirplane": {
            "attack": 8,
            "defense": 8
          },
          "vsShip": {
            "attack": 39.1,
            "defense": 39.1
          },
          "vsSubmarine": {
            "attack": 8,
            "defense": 8
          },
          "vsBuildings": {
            "attack": 16.1,
            "defense": 16.1
          },
          "vsProvinceMorale": {
            "attack": 5.2,
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
            "health": 200,
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
        "unitName": "Comintern Battleship (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 4.1,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 765,
            "manpower": 1445,
            "metal": 2295,
            "cash": 1530,
            "oil": 0
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
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
            "attack": 1.4,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 6.8,
            "defense": 6.8
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 1.4
          },
          "vsBuildings": {
            "attack": 2.7,
            "defense": 2.7
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
        "unitName": "Comintern Battleship (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 5.7,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 808,
            "manpower": 1445,
            "metal": 2465,
            "cash": 1700,
            "oil": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
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
            "attack": 1.8,
            "defense": 1.8
          },
          "vsShip": {
            "attack": 9.5,
            "defense": 9.5
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsBuildings": {
            "attack": 3.9,
            "defense": 3.9
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
      },
      {
        "unitName": "Comintern Battleship (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 7.9,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 935,
            "manpower": 1445,
            "metal": 2890,
            "cash": 1955,
            "oil": 0
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
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
            "attack": 2.7,
            "defense": 2.7
          },
          "vsShip": {
            "attack": 13.1,
            "defense": 13.1
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsBuildings": {
            "attack": 5.4,
            "defense": 5.4
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
      },
      {
        "unitName": "Comintern Battleship (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 10.6,
        "hitpoints": 115,
        "production": {
          "costs": {
            "food": 1105,
            "manpower": 1530,
            "metal": 3230,
            "cash": 2125,
            "oil": 0
          },
          "minTimeInSeconds": 29571
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
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
            "attack": 3.6,
            "defense": 3.6
          },
          "vsShip": {
            "attack": 17.6,
            "defense": 17.6
          },
          "vsSubmarine": {
            "attack": 3.6,
            "defense": 3.6
          },
          "vsBuildings": {
            "attack": 7.2,
            "defense": 7.2
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
        "unitName": "Comintern Battleship (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 14.2,
        "hitpoints": 155,
        "production": {
          "costs": {
            "food": 1275,
            "manpower": 1530,
            "metal": 3825,
            "cash": 2550,
            "oil": 0
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9.5,
            "defense": 9.5
          },
          "vsLightArmor": {
            "attack": 9.5,
            "defense": 9.5
          },
          "vsHeavyArmor": {
            "attack": 9.5,
            "defense": 9.5
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 5
          },
          "vsShip": {
            "attack": 23.4,
            "defense": 23.4
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 5
          },
          "vsBuildings": {
            "attack": 9.5,
            "defense": 9.5
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
            "health": 155,
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
        "unitName": "Comintern Battleship (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 18.5,
        "hitpoints": 200,
        "production": {
          "costs": {
            "food": 1360,
            "manpower": 1615,
            "metal": 4165,
            "cash": 2805,
            "oil": 0
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12.6,
            "defense": 12.6
          },
          "vsLightArmor": {
            "attack": 12.6,
            "defense": 12.6
          },
          "vsHeavyArmor": {
            "attack": 12.6,
            "defense": 12.6
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsShip": {
            "attack": 30.6,
            "defense": 30.6
          },
          "vsSubmarine": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsBuildings": {
            "attack": 12.6,
            "defense": 12.6
          },
          "vsProvinceMorale": {
            "attack": 4.1,
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
            "health": 200,
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
        "unitName": "Pan-Asian Battleship (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 5,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 900,
            "manpower": 1700,
            "metal": 2700,
            "cash": 1800,
            "oil": 0
          },
          "minTimeInSeconds": 15429
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.3,
            "defense": 3.3
          },
          "vsLightArmor": {
            "attack": 3.3,
            "defense": 3.3
          },
          "vsHeavyArmor": {
            "attack": 3.3,
            "defense": 3.3
          },
          "vsAirplane": {
            "attack": 1.7,
            "defense": 1.7
          },
          "vsShip": {
            "attack": 8.3,
            "defense": 8.3
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 1.7
          },
          "vsBuildings": {
            "attack": 3.3,
            "defense": 3.3
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
        "unitName": "Pan-Asian Battleship (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 6.9,
        "hitpoints": 72,
        "production": {
          "costs": {
            "food": 950,
            "manpower": 1700,
            "metal": 2900,
            "cash": 2000,
            "oil": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
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
            "attack": 2.2,
            "defense": 2.2
          },
          "vsShip": {
            "attack": 11.6,
            "defense": 11.6
          },
          "vsSubmarine": {
            "attack": 2.2,
            "defense": 2.2
          },
          "vsBuildings": {
            "attack": 4.7,
            "defense": 4.7
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
      },
      {
        "unitName": "Pan-Asian Battleship (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 9.7,
        "hitpoints": 94,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 1700,
            "metal": 3400,
            "cash": 2300,
            "oil": 0
          },
          "minTimeInSeconds": 27000
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.6,
            "defense": 6.6
          },
          "vsLightArmor": {
            "attack": 6.6,
            "defense": 6.6
          },
          "vsHeavyArmor": {
            "attack": 6.6,
            "defense": 6.6
          },
          "vsAirplane": {
            "attack": 3.3,
            "defense": 3.3
          },
          "vsShip": {
            "attack": 16,
            "defense": 16
          },
          "vsSubmarine": {
            "attack": 3.3,
            "defense": 3.3
          },
          "vsBuildings": {
            "attack": 6.6,
            "defense": 6.6
          },
          "vsProvinceMorale": {
            "attack": 2.2,
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
      },
      {
        "unitName": "Pan-Asian Battleship (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 13,
        "hitpoints": 127,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 1800,
            "metal": 3800,
            "cash": 2500,
            "oil": 0
          },
          "minTimeInSeconds": 29571
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8.8,
            "defense": 8.8
          },
          "vsLightArmor": {
            "attack": 8.8,
            "defense": 8.8
          },
          "vsHeavyArmor": {
            "attack": 8.8,
            "defense": 8.8
          },
          "vsAirplane": {
            "attack": 4.4,
            "defense": 4.4
          },
          "vsShip": {
            "attack": 21.5,
            "defense": 21.5
          },
          "vsSubmarine": {
            "attack": 4.4,
            "defense": 4.4
          },
          "vsBuildings": {
            "attack": 8.8,
            "defense": 8.8
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
        "unitName": "Pan-Asian Battleship (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 17.4,
        "hitpoints": 171,
        "production": {
          "costs": {
            "food": 1500,
            "manpower": 1800,
            "metal": 4500,
            "cash": 3000,
            "oil": 0
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 11.6,
            "defense": 11.6
          },
          "vsLightArmor": {
            "attack": 11.6,
            "defense": 11.6
          },
          "vsHeavyArmor": {
            "attack": 11.6,
            "defense": 11.6
          },
          "vsAirplane": {
            "attack": 6.1,
            "defense": 6.1
          },
          "vsShip": {
            "attack": 28.6,
            "defense": 28.6
          },
          "vsSubmarine": {
            "attack": 6.1,
            "defense": 6.1
          },
          "vsBuildings": {
            "attack": 11.6,
            "defense": 11.6
          },
          "vsProvinceMorale": {
            "attack": 3.9,
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
            "health": 155,
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
        "unitName": "Pan-Asian Battleship (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 22.6,
        "hitpoints": 220,
        "production": {
          "costs": {
            "food": 1600,
            "manpower": 1900,
            "metal": 4900,
            "cash": 3300,
            "oil": 0
          },
          "minTimeInSeconds": 36000
        },
        "specialProperties": [
          "Ranged Attack",
          "Anti-Naval",
          "Anti-Land"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 15.4,
            "defense": 15.4
          },
          "vsLightArmor": {
            "attack": 15.4,
            "defense": 15.4
          },
          "vsHeavyArmor": {
            "attack": 15.4,
            "defense": 15.4
          },
          "vsAirplane": {
            "attack": 7.7,
            "defense": 7.7
          },
          "vsShip": {
            "attack": 37.4,
            "defense": 37.4
          },
          "vsSubmarine": {
            "attack": 7.7,
            "defense": 7.7
          },
          "vsBuildings": {
            "attack": 15.4,
            "defense": 15.4
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
            "health": 200,
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
