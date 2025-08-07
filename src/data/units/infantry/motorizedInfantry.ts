import { IUnitType } from '@/types';

export const motorizedInfantryData: IUnitType = {
  genericName: 'Motorized Infantry',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Mot. Infantry Type 1934',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 3.1,
        hitpoints: 20,
        production: {
          costs: {
            food: 1000,
            manpower: 1200,
            metal: 0,
            cash: 1300,
            oil: 1500
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,   defense: 4 },
          vsLightArmor:     { attack: 3,   defense: 2 },
          vsHeavyArmor:     { attack: 2.3, defense: 1.5 },
          vsAirplane:       { attack: 2.3, defense: 1.5 },
          vsShip:           { attack: 1.5, defense: 1 },
          vsSubmarine:      { attack: 1.5, defense: 1 },
          vsBuildings:      { attack: 0.4, defense: 0.3 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 20,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 20,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 20,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mot. Infantry Type 1940',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 4.3,
        hitpoints: 25,
        production: {
          costs: {
            food: 1100,
            manpower: 1200,
            metal: 0,
            cash: 1300,
            oil: 1600
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8.3, defense: 5.5 },
          vsLightArmor:     { attack: 4.2, defense: 2.8 },
          vsHeavyArmor:     { attack: 3,   defense: 2 },
          vsAirplane:       { attack: 3,   defense: 2 },
          vsShip:           { attack: 2.3, defense: 1.5 },
          vsSubmarine:      { attack: 2.3, defense: 1.5 },
          vsBuildings:      { attack: 0.6, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 25,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 25,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 25,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 25,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 25,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mot. Infantry Type 1944',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 6,
        hitpoints: 30,
        production: {
          costs: {
            food: 1200,
            manpower: 1200,
            metal: 0,
            cash: 1500,
            oil: 1800
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 11,  defense: 7.3 },
          vsLightArmor:     { attack: 6,   defense: 4 },
          vsHeavyArmor:     { attack: 4.5, defense: 3 },
          vsAirplane:       { attack: 4.5, defense: 3 },
          vsShip:           { attack: 3,   defense: 2 },
          vsSubmarine:      { attack: 3,   defense: 2 },
          vsBuildings:      { attack: 1,   defense: 0.7 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mot. Infantry Type 1947',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 7.6,
        hitpoints: 40,
        production: {
          costs: {
            food: 1300,
            manpower: 1200,
            metal: 0,
            cash: 1700,
            oil: 2000
          },
          minTimeInSeconds: 17100
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 14,  defense: 9.3 },
          vsLightArmor:     { attack: 7.5, defense: 5 },
          vsHeavyArmor:     { attack: 6,   defense: 4 },
          vsAirplane:       { attack: 6,   defense: 4 },
          vsShip:           { attack: 4.5, defense: 3 },
          vsSubmarine:      { attack: 4.5, defense: 3 },
          vsBuildings:      { attack: 1.2, defense: 0.8 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 40,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 40,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 40,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mot. Infantry Type 1950',
        level: 5,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 10.3,
        hitpoints: 50,
        production: {
          costs: {
            food: 1500,
            manpower: 1300,
            metal: 0,
            cash: 1900,
            oil: 2200
          },
          minTimeInSeconds: 20100
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 18.5, defense: 12.3 },
          vsLightArmor:     { attack: 10.5, defense: 7 },
          vsHeavyArmor:     { attack: 8,    defense: 5.3 },
          vsAirplane:       { attack: 8,    defense: 5.3 },
          vsShip:           { attack: 6,    defense: 4 },
          vsSubmarine:      { attack: 6,    defense: 4 },
          vsBuildings:      { attack: 1.8,  defense: 1.2 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 50,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mot. Infantry Type 1952',
        level: 6,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 13.2,
        hitpoints: 65,
        production: {
          costs: {
            food: 1700,
            manpower: 1300,
            metal: 0,
            cash: 2100,
            oil: 2500
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 23,   defense: 15.3 },
          vsLightArmor:     { attack: 14,   defense: 9.3 },
          vsHeavyArmor:     { attack: 10.5, defense: 7 },
          vsAirplane:       { attack: 10.5, defense: 7 },
          vsShip:           { attack: 8.5,  defense: 5.7 },
          vsSubmarine:      { attack: 8.5,  defense: 5.7 },
          vsBuildings:      { attack: 2.8,  defense: 1.9 },
          vsProvinceMorale: { attack: 0.3,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 65,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Motorized Infantry (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 3.6,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 1320,
            "metal": 0,
            "cash": 1430,
            "oil": 1650
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.8,
            "defense": 5.2
          },
          "vsLightArmor": {
            "attack": 3.5,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 2.6,
            "defense": 1.7
          },
          "vsAirplane": {
            "attack": 2.6,
            "defense": 1.7
          },
          "vsShip": {
            "attack": 1.7,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 1.2
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
            "health": 20,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Axis Motorized Infantry (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 4.9,
        "hitpoints": 29,
        "production": {
          "costs": {
            "food": 1210,
            "manpower": 1320,
            "metal": 0,
            "cash": 1430,
            "oil": 1760
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 10.8,
            "defense": 7.2
          },
          "vsLightArmor": {
            "attack": 4.8,
            "defense": 3.2
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 2.6,
            "defense": 1.7
          },
          "vsSubmarine": {
            "attack": 2.6,
            "defense": 1.7
          },
          "vsBuildings": {
            "attack": 0.7,
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Axis Motorized Infantry (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 6.9,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1320,
            "manpower": 1320,
            "metal": 0,
            "cash": 1650,
            "oil": 1980
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 14.3,
            "defense": 9.5
          },
          "vsLightArmor": {
            "attack": 6.9,
            "defense": 4.6
          },
          "vsHeavyArmor": {
            "attack": 5.2,
            "defense": 3.5
          },
          "vsAirplane": {
            "attack": 5.2,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 1.2,
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 30,
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
        "unitName": "Axis Motorized Infantry (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 8.7,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 1430,
            "manpower": 1320,
            "metal": 0,
            "cash": 1870,
            "oil": 2200
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 18.2,
            "defense": 12.1
          },
          "vsLightArmor": {
            "attack": 8.6,
            "defense": 5.8
          },
          "vsHeavyArmor": {
            "attack": 6.9,
            "defense": 4.6
          },
          "vsAirplane": {
            "attack": 6.9,
            "defense": 4.6
          },
          "vsShip": {
            "attack": 5.2,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 5.2,
            "defense": 3.5
          },
          "vsBuildings": {
            "attack": 1.4,
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
            "health": 40,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 40,
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
        "unitName": "Axis Motorized Infantry (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 11.8,
        "hitpoints": 57,
        "production": {
          "costs": {
            "food": 1650,
            "manpower": 1430,
            "metal": 0,
            "cash": 2090,
            "oil": 2420
          },
          "minTimeInSeconds": 28714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 24.1,
            "defense": 16
          },
          "vsLightArmor": {
            "attack": 12.1,
            "defense": 8
          },
          "vsHeavyArmor": {
            "attack": 9.2,
            "defense": 6.1
          },
          "vsAirplane": {
            "attack": 9.2,
            "defense": 6.1
          },
          "vsShip": {
            "attack": 6.9,
            "defense": 4.6
          },
          "vsSubmarine": {
            "attack": 6.9,
            "defense": 4.6
          },
          "vsBuildings": {
            "attack": 2.1,
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
            "health": 50,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
            "speedModifier": -0.25,
            "strengthModifier": null
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
      },
      {
        "unitName": "Axis Motorized Infantry (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 15.2,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 1870,
            "manpower": 1430,
            "metal": 0,
            "cash": 2310,
            "oil": 2750
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 29.9,
            "defense": 19.9
          },
          "vsLightArmor": {
            "attack": 16.1,
            "defense": 10.7
          },
          "vsHeavyArmor": {
            "attack": 12.1,
            "defense": 8
          },
          "vsAirplane": {
            "attack": 12.1,
            "defense": 8
          },
          "vsShip": {
            "attack": 9.8,
            "defense": 6.6
          },
          "vsSubmarine": {
            "attack": 9.8,
            "defense": 6.6
          },
          "vsBuildings": {
            "attack": 3.2,
            "defense": 2.2
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
            "health": 65,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 65,
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
        "unitName": "Comintern Motorized Infantry (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 2.8,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 850,
            "manpower": 1020,
            "metal": 0,
            "cash": 1105,
            "oil": 1275
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.4,
            "defense": 3.6
          },
          "vsLightArmor": {
            "attack": 2.7,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 2.1,
            "defense": 1.4
          },
          "vsAirplane": {
            "attack": 2.1,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 1.4,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 0.4,
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
            "health": 20,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Comintern Motorized Infantry (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 3.9,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 935,
            "manpower": 1020,
            "metal": 0,
            "cash": 1105,
            "oil": 1360
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.5,
            "defense": 5
          },
          "vsLightArmor": {
            "attack": 3.8,
            "defense": 2.5
          },
          "vsHeavyArmor": {
            "attack": 2.7,
            "defense": 1.8
          },
          "vsAirplane": {
            "attack": 2.7,
            "defense": 1.8
          },
          "vsShip": {
            "attack": 2.1,
            "defense": 1.4
          },
          "vsSubmarine": {
            "attack": 2.1,
            "defense": 1.4
          },
          "vsBuildings": {
            "attack": 0.5,
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Comintern Motorized Infantry (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 5.4,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1020,
            "manpower": 1020,
            "metal": 0,
            "cash": 1275,
            "oil": 1530
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9.9,
            "defense": 6.6
          },
          "vsLightArmor": {
            "attack": 5.4,
            "defense": 3.6
          },
          "vsHeavyArmor": {
            "attack": 4.1,
            "defense": 2.7
          },
          "vsAirplane": {
            "attack": 4.1,
            "defense": 2.7
          },
          "vsShip": {
            "attack": 2.7,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": 1.8
          },
          "vsBuildings": {
            "attack": 0.9,
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 30,
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
        "unitName": "Comintern Motorized Infantry (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 6.8,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1105,
            "manpower": 1020,
            "metal": 0,
            "cash": 1445,
            "oil": 1700
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12.6,
            "defense": 8.4
          },
          "vsLightArmor": {
            "attack": 6.8,
            "defense": 4.5
          },
          "vsHeavyArmor": {
            "attack": 5.4,
            "defense": 3.6
          },
          "vsAirplane": {
            "attack": 5.4,
            "defense": 3.6
          },
          "vsShip": {
            "attack": 4.1,
            "defense": 2.7
          },
          "vsSubmarine": {
            "attack": 4.1,
            "defense": 2.7
          },
          "vsBuildings": {
            "attack": 1.1,
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
            "health": 40,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 40,
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
        "unitName": "Comintern Motorized Infantry (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 9.3,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1275,
            "manpower": 1105,
            "metal": 0,
            "cash": 1615,
            "oil": 1870
          },
          "minTimeInSeconds": 28714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 16.7,
            "defense": 11.1
          },
          "vsLightArmor": {
            "attack": 9.5,
            "defense": 6.3
          },
          "vsHeavyArmor": {
            "attack": 7.2,
            "defense": 4.8
          },
          "vsAirplane": {
            "attack": 7.2,
            "defense": 4.8
          },
          "vsShip": {
            "attack": 5.4,
            "defense": 3.6
          },
          "vsSubmarine": {
            "attack": 5.4,
            "defense": 3.6
          },
          "vsBuildings": {
            "attack": 1.6,
            "defense": 1.1
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
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
            "speedModifier": -0.25,
            "strengthModifier": null
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
      },
      {
        "unitName": "Comintern Motorized Infantry (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 11.9,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1445,
            "manpower": 1105,
            "metal": 0,
            "cash": 1785,
            "oil": 2125
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 20.7,
            "defense": 13.8
          },
          "vsLightArmor": {
            "attack": 12.6,
            "defense": 8.4
          },
          "vsHeavyArmor": {
            "attack": 9.5,
            "defense": 6.3
          },
          "vsAirplane": {
            "attack": 9.5,
            "defense": 6.3
          },
          "vsShip": {
            "attack": 7.7,
            "defense": 5.1
          },
          "vsSubmarine": {
            "attack": 7.7,
            "defense": 5.1
          },
          "vsBuildings": {
            "attack": 2.5,
            "defense": 1.7
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
            "health": 65,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 65,
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
        "unitName": "Pan-Asian Motorized Infantry (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 3.1,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 1000,
            "manpower": 1200,
            "metal": 0,
            "cash": 1300,
            "oil": 1500
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6,
            "defense": 4
          },
          "vsLightArmor": {
            "attack": 3,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 1.5
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 1
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 1
          },
          "vsBuildings": {
            "attack": 0.4,
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
            "health": 20,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 20,
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
        "unitName": "Pan-Asian Motorized Infantry (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 4.3,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 1200,
            "metal": 0,
            "cash": 1300,
            "oil": 1600
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 8.3,
            "defense": 5.5
          },
          "vsLightArmor": {
            "attack": 4.2,
            "defense": 2.8
          },
          "vsHeavyArmor": {
            "attack": 3,
            "defense": 2
          },
          "vsAirplane": {
            "attack": 3,
            "defense": 2
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 1.5
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 1.5
          },
          "vsBuildings": {
            "attack": 0.6,
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
            "health": 25,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 25,
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
        "unitName": "Pan-Asian Motorized Infantry (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 6,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1200,
            "manpower": 1200,
            "metal": 0,
            "cash": 1500,
            "oil": 1800
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 11,
            "defense": 7.3
          },
          "vsLightArmor": {
            "attack": 6,
            "defense": 4
          },
          "vsHeavyArmor": {
            "attack": 4.5,
            "defense": 3
          },
          "vsAirplane": {
            "attack": 4.5,
            "defense": 3
          },
          "vsShip": {
            "attack": 3,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 3,
            "defense": 2
          },
          "vsBuildings": {
            "attack": 1,
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 30,
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
        "unitName": "Pan-Asian Motorized Infantry (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 7.6,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 1200,
            "metal": 0,
            "cash": 1700,
            "oil": 2000
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 14,
            "defense": 9.3
          },
          "vsLightArmor": {
            "attack": 7.5,
            "defense": 5
          },
          "vsHeavyArmor": {
            "attack": 6,
            "defense": 4
          },
          "vsAirplane": {
            "attack": 6,
            "defense": 4
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 4.5,
            "defense": 3
          },
          "vsBuildings": {
            "attack": 1.2,
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
            "health": 40,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 40,
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
        "unitName": "Pan-Asian Motorized Infantry (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 10.3,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1500,
            "manpower": 1300,
            "metal": 0,
            "cash": 1900,
            "oil": 2200
          },
          "minTimeInSeconds": 28714
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 18.5,
            "defense": 12.3
          },
          "vsLightArmor": {
            "attack": 10.5,
            "defense": 7
          },
          "vsHeavyArmor": {
            "attack": 8,
            "defense": 5.3
          },
          "vsAirplane": {
            "attack": 8,
            "defense": 5.3
          },
          "vsShip": {
            "attack": 6,
            "defense": 4
          },
          "vsSubmarine": {
            "attack": 6,
            "defense": 4
          },
          "vsBuildings": {
            "attack": 1.8,
            "defense": 1.2
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
            "speedModifier": 0.25,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
            "speedModifier": -0.25,
            "strengthModifier": null
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
      },
      {
        "unitName": "Pan-Asian Motorized Infantry (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 13.2,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1700,
            "manpower": 1300,
            "metal": 0,
            "cash": 2100,
            "oil": 2500
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Stealth",
          "Anti-Unarmored",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 23,
            "defense": 15.3
          },
          "vsLightArmor": {
            "attack": 14,
            "defense": 9.3
          },
          "vsHeavyArmor": {
            "attack": 10.5,
            "defense": 7
          },
          "vsAirplane": {
            "attack": 10.5,
            "defense": 7
          },
          "vsShip": {
            "attack": 8.5,
            "defense": 5.7
          },
          "vsSubmarine": {
            "attack": 8.5,
            "defense": 5.7
          },
          "vsBuildings": {
            "attack": 2.8,
            "defense": 1.9
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
            "health": 65,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 65,
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
