import { IUnitType } from '@/types';

export const heavyTankData: IUnitType = {
  genericName: 'Heavy Tank',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'M6 Heavy Tank',
        level: 1,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 7.8,
        hitpoints: 100,
        production: {
          costs: {
            manpower: 1300,
            metal: 2100,
            oil: 3100,
            cash: 2600,
            food: 0
          },
          minTimeInSeconds: 22500
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5.5, defense: 5.5 },
          vsLightArmor:     { attack: 10,  defense: 10 },
          vsHeavyArmor:     { attack: 8,   defense: 8 },
          vsAirplane:       { attack: 2,   defense: 2 },
          vsShip:           { attack: 2.5, defense: 2.5 },
          vsSubmarine:      { attack: 2.5, defense: 2.5 },
          vsBuildings:      { attack: 3,   defense: 3 },
          vsProvinceMorale: { attack: 1,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 100,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 100,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 100,  attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 100,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 100,  attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'T29 Heavy Tank',
        level: 2,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 10.7,
        hitpoints: 130,
        production: {
          costs: {
            manpower: 1400,
            metal: 2400,
            oil: 3500,
            cash: 3000,
            food: 0
          },
          minTimeInSeconds: 26100
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7,   defense: 7 },
          vsLightArmor:     { attack: 14,  defense: 14 },
          vsHeavyArmor:     { attack: 11,  defense: 11 },
          vsAirplane:       { attack: 3,   defense: 3 },
          vsShip:           { attack: 4,   defense: 4 },
          vsSubmarine:      { attack: 4,   defense: 4 },
          vsBuildings:      { attack: 4,   defense: 4 },
          vsProvinceMorale: { attack: 1.3, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 130,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 130,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 130,  attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 130,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 130,  attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'T26 Super Pershing',
        level: 3,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 14.7,
        hitpoints: 170,
        production: {
          costs: {
            manpower: 1400,
            metal: 2900,
            oil: 4100,
            cash: 3500,
            food: 0
          },
          minTimeInSeconds: 30600
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10,  defense: 10 },
          vsLightArmor:     { attack: 19,  defense: 19 },
          vsHeavyArmor:     { attack: 15,  defense: 15 },
          vsAirplane:       { attack: 4,   defense: 4 },
          vsShip:           { attack: 5.5, defense: 5.5 },
          vsSubmarine:      { attack: 5.5, defense: 5.5 },
          vsBuildings:      { attack: 6,   defense: 6 },
          vsProvinceMorale: { attack: 1.8, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 170,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 170,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 170,  attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 170,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 170,  attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M103 Heavy Tank',
        level: 4,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 19.7,
        hitpoints: 220,
        production: {
          costs: {
            manpower: 1500,
            metal: 3300,
            oil: 4800,
            cash: 4000,
            food: 0
          },
          minTimeInSeconds: 34200
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 14,  defense: 14 },
          vsLightArmor:     { attack: 25,  defense: 25 },
          vsHeavyArmor:     { attack: 20,  defense: 20 },
          vsAirplane:       { attack: 5,   defense: 5 },
          vsShip:           { attack: 7,   defense: 7 },
          vsSubmarine:      { attack: 7,   defense: 7 },
          vsBuildings:      { attack: 9,   defense: 9 },
          vsProvinceMorale: { attack: 2.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 220,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 220,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 220,  attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 220,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 220,  attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Heavy Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 9.8,
        "hitpoints": 115,
        "production": {
          "costs": {
            "manpower": 1430,
            "metal": 2310,
            "oil": 3410,
            "cash": 2860,
            "food": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.9,
            "defense": 6.9
          },
          "vsLightArmor": {
            "attack": 12.5,
            "defense": 12.5
          },
          "vsHeavyArmor": {
            "attack": 10,
            "defense": 10
          },
          "vsAirplane": {
            "attack": 2.5,
            "defense": 2.5
          },
          "vsShip": {
            "attack": 3.1,
            "defense": 3.1
          },
          "vsSubmarine": {
            "attack": 3.1,
            "defense": 3.1
          },
          "vsBuildings": {
            "attack": 3.8,
            "defense": 3.8
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
            "health": 115,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 100,
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
        "unitName": "Axis Heavy Tank (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 13.4,
        "hitpoints": 150,
        "production": {
          "costs": {
            "manpower": 1540,
            "metal": 2640,
            "oil": 3850,
            "cash": 3300,
            "food": 0
          },
          "minTimeInSeconds": 37286
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8.8,
            "defense": 8.8
          },
          "vsLightArmor": {
            "attack": 17.5,
            "defense": 17.5
          },
          "vsHeavyArmor": {
            "attack": 13.8,
            "defense": 13.8
          },
          "vsAirplane": {
            "attack": 3.8,
            "defense": 3.8
          },
          "vsShip": {
            "attack": 5,
            "defense": 5
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 5
          },
          "vsBuildings": {
            "attack": 5,
            "defense": 5
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
            "health": 150,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 130,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 130,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 130,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 130,
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
        "unitName": "Axis Heavy Tank (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 18.4,
        "hitpoints": 195,
        "production": {
          "costs": {
            "manpower": 1540,
            "metal": 3190,
            "oil": 4510,
            "cash": 3850,
            "food": 0
          },
          "minTimeInSeconds": 43714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12.5,
            "defense": 12.5
          },
          "vsLightArmor": {
            "attack": 23.8,
            "defense": 23.8
          },
          "vsHeavyArmor": {
            "attack": 18.8,
            "defense": 18.8
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 5
          },
          "vsShip": {
            "attack": 6.9,
            "defense": 6.9
          },
          "vsSubmarine": {
            "attack": 6.9,
            "defense": 6.9
          },
          "vsBuildings": {
            "attack": 7.5,
            "defense": 7.5
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
            "health": 195,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 170,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 170,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 170,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 170,
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
        "unitName": "Axis Heavy Tank (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 24.6,
        "hitpoints": 253,
        "production": {
          "costs": {
            "manpower": 1650,
            "metal": 3630,
            "oil": 5280,
            "cash": 4400,
            "food": 0
          },
          "minTimeInSeconds": 48857
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 17.5,
            "defense": 17.5
          },
          "vsLightArmor": {
            "attack": 31.3,
            "defense": 31.3
          },
          "vsHeavyArmor": {
            "attack": 25,
            "defense": 25
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsShip": {
            "attack": 8.8,
            "defense": 8.8
          },
          "vsSubmarine": {
            "attack": 8.8,
            "defense": 8.8
          },
          "vsBuildings": {
            "attack": 11.3,
            "defense": 11.3
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
            "health": 253,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 220,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 220,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 220,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 220,
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
        "unitName": "Comintern Heavy Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 7,
        "hitpoints": 110,
        "production": {
          "costs": {
            "manpower": 1105,
            "metal": 1785,
            "oil": 2635,
            "cash": 2210,
            "food": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5,
            "defense": 5
          },
          "vsLightArmor": {
            "attack": 9,
            "defense": 9
          },
          "vsHeavyArmor": {
            "attack": 8.4,
            "defense": 8.4
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
            "attack": 2.3,
            "defense": 2.3
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
            "health": 110,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 100,
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
        "unitName": "Comintern Heavy Tank (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 9.6,
        "hitpoints": 143,
        "production": {
          "costs": {
            "manpower": 1190,
            "metal": 2040,
            "oil": 2975,
            "cash": 2550,
            "food": 0
          },
          "minTimeInSeconds": 37286
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsLightArmor": {
            "attack": 12.6,
            "defense": 12.6
          },
          "vsHeavyArmor": {
            "attack": 11.6,
            "defense": 11.6
          },
          "vsAirplane": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsShip": {
            "attack": 3.6,
            "defense": 3.6
          },
          "vsSubmarine": {
            "attack": 3.6,
            "defense": 3.6
          },
          "vsBuildings": {
            "attack": 3.6,
            "defense": 3.6
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
            "health": 143,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 130,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 130,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 130,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 130,
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
        "unitName": "Comintern Heavy Tank (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 13.2,
        "hitpoints": 187,
        "production": {
          "costs": {
            "manpower": 1190,
            "metal": 2465,
            "oil": 3485,
            "cash": 2975,
            "food": 0
          },
          "minTimeInSeconds": 43714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9,
            "defense": 9
          },
          "vsLightArmor": {
            "attack": 17.1,
            "defense": 17.1
          },
          "vsHeavyArmor": {
            "attack": 15.8,
            "defense": 15.8
          },
          "vsAirplane": {
            "attack": 3.6,
            "defense": 3.6
          },
          "vsShip": {
            "attack": 5,
            "defense": 5
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 5
          },
          "vsBuildings": {
            "attack": 5.4,
            "defense": 5.4
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
            "health": 187,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 170,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 170,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 170,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 170,
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
        "unitName": "Comintern Heavy Tank (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 17.7,
        "hitpoints": 242,
        "production": {
          "costs": {
            "manpower": 1275,
            "metal": 2805,
            "oil": 4080,
            "cash": 3400,
            "food": 0
          },
          "minTimeInSeconds": 48857
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12.6,
            "defense": 12.6
          },
          "vsLightArmor": {
            "attack": 22.5,
            "defense": 22.5
          },
          "vsHeavyArmor": {
            "attack": 21,
            "defense": 21
          },
          "vsAirplane": {
            "attack": 4.5,
            "defense": 4.5
          },
          "vsShip": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsSubmarine": {
            "attack": 6.3,
            "defense": 6.3
          },
          "vsBuildings": {
            "attack": 8.1,
            "defense": 8.1
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
            "health": 242,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 220,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 220,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 220,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 220,
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
        "unitName": "Pan-Asian Heavy Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 7.8,
        "hitpoints": 100,
        "production": {
          "costs": {
            "manpower": 1300,
            "metal": 2100,
            "oil": 3100,
            "cash": 2600,
            "food": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.5,
            "defense": 5.5
          },
          "vsLightArmor": {
            "attack": 10,
            "defense": 10
          },
          "vsHeavyArmor": {
            "attack": 8,
            "defense": 8
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
            "attack": 2.5,
            "defense": 2.5
          },
          "vsBuildings": {
            "attack": 3,
            "defense": 3
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
            "health": 100,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 100,
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
        "unitName": "Pan-Asian Heavy Tank (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 10.7,
        "hitpoints": 130,
        "production": {
          "costs": {
            "manpower": 1400,
            "metal": 2400,
            "oil": 3500,
            "cash": 3000,
            "food": 0
          },
          "minTimeInSeconds": 37286
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7,
            "defense": 7
          },
          "vsLightArmor": {
            "attack": 14,
            "defense": 14
          },
          "vsHeavyArmor": {
            "attack": 11,
            "defense": 11
          },
          "vsAirplane": {
            "attack": 3,
            "defense": 3
          },
          "vsShip": {
            "attack": 4,
            "defense": 4
          },
          "vsSubmarine": {
            "attack": 4,
            "defense": 4
          },
          "vsBuildings": {
            "attack": 4,
            "defense": 4
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
            "health": 130,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 130,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 130,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 130,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 130,
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
        "unitName": "Pan-Asian Heavy Tank (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 14.7,
        "hitpoints": 170,
        "production": {
          "costs": {
            "manpower": 1400,
            "metal": 2900,
            "oil": 4100,
            "cash": 3500,
            "food": 0
          },
          "minTimeInSeconds": 43714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 10,
            "defense": 10
          },
          "vsLightArmor": {
            "attack": 19,
            "defense": 19
          },
          "vsHeavyArmor": {
            "attack": 15,
            "defense": 15
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 4
          },
          "vsShip": {
            "attack": 5.5,
            "defense": 5.5
          },
          "vsSubmarine": {
            "attack": 5.5,
            "defense": 5.5
          },
          "vsBuildings": {
            "attack": 6,
            "defense": 6
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
            "health": 170,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 170,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 170,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 170,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 170,
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
        "unitName": "Pan-Asian Heavy Tank (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 19.7,
        "hitpoints": 220,
        "production": {
          "costs": {
            "manpower": 1500,
            "metal": 3300,
            "oil": 4800,
            "cash": 4000,
            "food": 0
          },
          "minTimeInSeconds": 48857
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 14,
            "defense": 14
          },
          "vsLightArmor": {
            "attack": 25,
            "defense": 25
          },
          "vsHeavyArmor": {
            "attack": 20,
            "defense": 20
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 5
          },
          "vsShip": {
            "attack": 7,
            "defense": 7
          },
          "vsSubmarine": {
            "attack": 7,
            "defense": 7
          },
          "vsBuildings": {
            "attack": 9,
            "defense": 9
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
            "health": 220,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 220,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 220,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 220,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 220,
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
