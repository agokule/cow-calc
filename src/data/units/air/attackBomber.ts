import { IUnitType } from '@/types';

export const attackBomberData: IUnitType = {
  genericName: 'Attack Bomber',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Curtiss A-12 Shrike',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 2.7,
        hitpoints: 20,
        production: {
          costs: {
            food: 1100,
            manpower: 1100,
            metal: 0,
            cash: 1500,
            oil: 1600
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 0.5 },
          vsLightArmor:     { attack: 4.3, defense: 2.2 },
          vsHeavyArmor:     { attack: 5.5, defense: 2.8 },
          vsAirplane:       { attack: 1,   defense: 0.5 },
          vsShip:           { attack: 4.3, defense: 2.2 },
          vsSubmarine:      { attack: 1,   defense: 0.5 },
          vsBuildings:      { attack: 0.7, defense: 0.4 },
          vsProvinceMorale: { attack: 0.2, defense: null },
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
        unitName: 'Northrop A-17',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 4.6,
        hitpoints: 30,
        production: {
          costs: {
            food: 1200,
            manpower: 1100,
            metal: 0,
            cash: 1700,
            oil: 1800
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 1 },
          vsLightArmor:     { attack: 7.5, defense: 3.7 },
          vsHeavyArmor:     { attack: 9,   defense: 4.5 },
          vsAirplane:       { attack: 2,   defense: 1 },
          vsShip:           { attack: 7.5, defense: 3.7 },
          vsSubmarine:      { attack: 2,   defense: 1 },
          vsBuildings:      { attack: 1,   defense: 0.5 },
          vsProvinceMorale: { attack: 0.3, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Curtiss SB2C Helldiver',
        level: 3,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 7.1,
        hitpoints: 40,
        production: {
          costs: {
            food: 1400,
            manpower: 1100,
            metal: 0,
            cash: 1900,
            oil: 2100
          },
          minTimeInSeconds: 20700
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3.5,  defense: 1.7 },
          vsLightArmor:     { attack: 11.5, defense: 5.8 },
          vsHeavyArmor:     { attack: 13.5, defense: 6.8 },
          vsAirplane:       { attack: 3.5,  defense: 1.7 },
          vsShip:           { attack: 11,   defense: 5.5 },
          vsSubmarine:      { attack: 3.5,  defense: 1.7 },
          vsBuildings:      { attack: 1.4,  defense: 0.7 },
          vsProvinceMorale: { attack: 0.5,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'A-20 Havoc',
        level: 4,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 10.3,
        hitpoints: 55,
        production: {
          costs: {
            food: 1600,
            manpower: 1200,
            metal: 0,
            cash: 2300,
            oil: 2500
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5,    defense: 2.5 },
          vsLightArmor:     { attack: 16,   defense: 8 },
          vsHeavyArmor:     { attack: 20,   defense: 10 },
          vsAirplane:       { attack: 5,    defense: 2.5 },
          vsShip:           { attack: 15.5, defense: 7.8 },
          vsSubmarine:      { attack: 5,    defense: 2.5 },
          vsBuildings:      { attack: 2,    defense: 1 },
          vsProvinceMorale: { attack: 0.7,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
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
        unitName: 'Douglas A-1 Skyraider',
        level: 5,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 14.8,
        hitpoints: 75,
        production: {
          costs: {
            food: 1800,
            manpower: 1200,
            metal: 0,
            cash: 2500,
            oil: 2700
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7,  defense: 3.5 },
          vsLightArmor:     { attack: 23, defense: 11.5 },
          vsHeavyArmor:     { attack: 29, defense: 14.5 },
          vsAirplane:       { attack: 7,  defense: 3.5 },
          vsShip:           { attack: 22, defense: 11 },
          vsSubmarine:      { attack: 7,  defense: 3.5 },
          vsBuildings:      { attack: 3,  defense: 1.5 },
          vsProvinceMorale: { attack: 1,  defense: null },
          vsRocket:         { attack: 0,  defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Attack Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 3.1,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 1210,
            "manpower": 1210,
            "metal": 0,
            "cash": 1650,
            "oil": 1760
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.3,
            "defense": 0.7
          },
          "vsLightArmor": {
            "attack": 4.9,
            "defense": 2.5
          },
          "vsHeavyArmor": {
            "attack": 7.2,
            "defense": 3.6
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 4.9,
            "defense": 2.5
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 0.8,
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
        "unitName": "Axis Attack Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 5.3,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1320,
            "manpower": 1210,
            "metal": 0,
            "cash": 1870,
            "oil": 1980
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.6,
            "defense": 1.3
          },
          "vsLightArmor": {
            "attack": 8.6,
            "defense": 4.3
          },
          "vsHeavyArmor": {
            "attack": 11.7,
            "defense": 5.9
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 8.6,
            "defense": 4.3
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 1.2,
            "defense": 0.6
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
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Axis Attack Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 8.2,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 1540,
            "manpower": 1210,
            "metal": 0,
            "cash": 2090,
            "oil": 2310
          },
          "minTimeInSeconds": 29571
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.6,
            "defense": 2.2
          },
          "vsLightArmor": {
            "attack": 13.2,
            "defense": 6.7
          },
          "vsHeavyArmor": {
            "attack": 17.6,
            "defense": 8.8
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 2
          },
          "vsShip": {
            "attack": 12.6,
            "defense": 6.3
          },
          "vsSubmarine": {
            "attack": 4,
            "defense": 2
          },
          "vsBuildings": {
            "attack": 1.6,
            "defense": 0.8
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
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Axis Attack Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 11.8,
        "hitpoints": 63,
        "production": {
          "costs": {
            "food": 1760,
            "manpower": 1320,
            "metal": 0,
            "cash": 2530,
            "oil": 2750
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.5,
            "defense": 3.3
          },
          "vsLightArmor": {
            "attack": 18.4,
            "defense": 9.2
          },
          "vsHeavyArmor": {
            "attack": 26,
            "defense": 13
          },
          "vsAirplane": {
            "attack": 5.8,
            "defense": 2.9
          },
          "vsShip": {
            "attack": 17.8,
            "defense": 9
          },
          "vsSubmarine": {
            "attack": 5.8,
            "defense": 2.9
          },
          "vsBuildings": {
            "attack": 2.3,
            "defense": 1.2
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
        "unitName": "Axis Attack Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 17,
        "hitpoints": 86,
        "production": {
          "costs": {
            "food": 1980,
            "manpower": 1320,
            "metal": 0,
            "cash": 2750,
            "oil": 2970
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9.1,
            "defense": 4.6
          },
          "vsLightArmor": {
            "attack": 26.5,
            "defense": 13.2
          },
          "vsHeavyArmor": {
            "attack": 37.7,
            "defense": 18.9
          },
          "vsAirplane": {
            "attack": 8,
            "defense": 4
          },
          "vsShip": {
            "attack": 25.3,
            "defense": 12.6
          },
          "vsSubmarine": {
            "attack": 8,
            "defense": 4
          },
          "vsBuildings": {
            "attack": 3.5,
            "defense": 1.7
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
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 75,
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
      }
    ],
    "Comintern": [
      {
        "unitName": "Comintern Attack Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 2.4,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 935,
            "manpower": 935,
            "metal": 0,
            "cash": 1275,
            "oil": 1360
          },
          "minTimeInSeconds": 12022
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 3.9,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 5,
            "defense": 2.5
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 3.9,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 0.6,
            "defense": 0.4
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
        "unitName": "Comintern Attack Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 4.1,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1020,
            "manpower": 935,
            "metal": 0,
            "cash": 1445,
            "oil": 1530
          },
          "minTimeInSeconds": 19672
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsLightArmor": {
            "attack": 6.8,
            "defense": 3.3
          },
          "vsHeavyArmor": {
            "attack": 8.1,
            "defense": 4.1
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 6.8,
            "defense": 3.3
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 0.9,
            "defense": 0.5
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
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Comintern Attack Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 6.4,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 1190,
            "manpower": 935,
            "metal": 0,
            "cash": 1615,
            "oil": 1785
          },
          "minTimeInSeconds": 25135
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.2,
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 10.4,
            "defense": 5.2
          },
          "vsHeavyArmor": {
            "attack": 12.2,
            "defense": 6.1
          },
          "vsAirplane": {
            "attack": 3.2,
            "defense": 1.5
          },
          "vsShip": {
            "attack": 9.9,
            "defense": 5
          },
          "vsSubmarine": {
            "attack": 3.2,
            "defense": 1.5
          },
          "vsBuildings": {
            "attack": 1.3,
            "defense": 0.6
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
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Comintern Attack Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 9.3,
        "hitpoints": 63,
        "production": {
          "costs": {
            "food": 1360,
            "manpower": 1020,
            "metal": 0,
            "cash": 1955,
            "oil": 2125
          },
          "minTimeInSeconds": 26228
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 14.4,
            "defense": 7.2
          },
          "vsHeavyArmor": {
            "attack": 18,
            "defense": 9
          },
          "vsAirplane": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 14,
            "defense": 7
          },
          "vsSubmarine": {
            "attack": 4.5,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 1.8,
            "defense": 0.9
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
        "unitName": "Comintern Attack Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 13.3,
        "hitpoints": 86,
        "production": {
          "costs": {
            "food": 1530,
            "manpower": 1020,
            "metal": 0,
            "cash": 2125,
            "oil": 2295
          },
          "minTimeInSeconds": 29507
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsLightArmor": {
            "attack": 20.7,
            "defense": 10.4
          },
          "vsHeavyArmor": {
            "attack": 26.1,
            "defense": 13.1
          },
          "vsAirplane": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsShip": {
            "attack": 19.8,
            "defense": 9.9
          },
          "vsSubmarine": {
            "attack": 6.3,
            "defense": 3.2
          },
          "vsBuildings": {
            "attack": 2.7,
            "defense": 1.4
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
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 75,
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
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Attack Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 2.7,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 1100,
            "metal": 0,
            "cash": 1500,
            "oil": 1600
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 4.3,
            "defense": 2.2
          },
          "vsHeavyArmor": {
            "attack": 5.5,
            "defense": 2.8
          },
          "vsAirplane": {
            "attack": 1,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 4.3,
            "defense": 2.2
          },
          "vsSubmarine": {
            "attack": 1,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 0.7,
            "defense": 0.4
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
        "unitName": "Pan-Asian Attack Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 4.6,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1200,
            "manpower": 1100,
            "metal": 0,
            "cash": 1700,
            "oil": 1800
          },
          "minTimeInSeconds": 23143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 7.5,
            "defense": 3.7
          },
          "vsHeavyArmor": {
            "attack": 9,
            "defense": 4.5
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 1
          },
          "vsShip": {
            "attack": 7.5,
            "defense": 3.7
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 1,
            "defense": 0.5
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
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Pan-Asian Attack Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 7.1,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1400,
            "manpower": 1100,
            "metal": 0,
            "cash": 1900,
            "oil": 2100
          },
          "minTimeInSeconds": 29571
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsLightArmor": {
            "attack": 11.5,
            "defense": 5.8
          },
          "vsHeavyArmor": {
            "attack": 13.5,
            "defense": 6.8
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsShip": {
            "attack": 11,
            "defense": 5.5
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 1.7
          },
          "vsBuildings": {
            "attack": 1.4,
            "defense": 0.7
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
            "speedModifier": null,
            "strengthModifier": null
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
        "unitName": "Pan-Asian Attack Bomber (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 10.3,
        "hitpoints": 55,
        "production": {
          "costs": {
            "food": 1600,
            "manpower": 1200,
            "metal": 0,
            "cash": 2300,
            "oil": 2500
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5,
            "defense": 2.5
          },
          "vsLightArmor": {
            "attack": 16,
            "defense": 8
          },
          "vsHeavyArmor": {
            "attack": 20,
            "defense": 10
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 2.5
          },
          "vsShip": {
            "attack": 15.5,
            "defense": 7.8
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 2.5
          },
          "vsBuildings": {
            "attack": 2,
            "defense": 1
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
        "unitName": "Pan-Asian Attack Bomber (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 14.8,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 1800,
            "manpower": 1200,
            "metal": 0,
            "cash": 2500,
            "oil": 2700
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Carriable",
          "Aircraft"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 23,
            "defense": 11.5
          },
          "vsHeavyArmor": {
            "attack": 29,
            "defense": 14.5
          },
          "vsAirplane": {
            "attack": 7,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 22,
            "defense": 11
          },
          "vsSubmarine": {
            "attack": 7,
            "defense": 3.5
          },
          "vsBuildings": {
            "attack": 3,
            "defense": 1.5
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
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 75,
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
      }
    ]
  },
};
