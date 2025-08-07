import { IUnitType } from '@/types';

export const lightTankData: IUnitType = {
  genericName: 'Light Tank',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'M2 Light Tank',
        level: 1,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 2.3,
        hitpoints: 20,
        production: {
          costs: {
            manpower: 900,
            metal: 1500,
            oil: 1400,
            cash: 1100,
            food: 0
          },
          minTimeInSeconds: 8100
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2.7, defense: 1.8 },
          vsLightArmor:     { attack: 4,   defense: 2.7 },
          vsHeavyArmor:     { attack: 1.5, defense: 1 },
          vsAirplane:       { attack: 0.8, defense: 0.5 },
          vsShip:           { attack: 0.8, defense: 0.5 },
          vsSubmarine:      { attack: 0.8, defense: 0.5 },
          vsBuildings:      { attack: 0.4, defense: 0.3 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 20,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 20,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 20,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M3 Stuart',
        level: 2,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 3.6,
        hitpoints: 30,
        production: {
          costs: {
            manpower: 950,
            metal: 1600,
            oil: 1500,
            cash: 1200,
            food: 0
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4,   defense: 2.7 },
          vsLightArmor:     { attack: 6.5, defense: 4.3 },
          vsHeavyArmor:     { attack: 2.5, defense: 1.7 },
          vsAirplane:       { attack: 1.5, defense: 1 },
          vsShip:           { attack: 1.5, defense: 1 },
          vsSubmarine:      { attack: 1.5, defense: 1 },
          vsBuildings:      { attack: 0.6, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M22 Locust',
        level: 3,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 5.7,
        hitpoints: 45,
        production: {
          costs: {
            manpower: 950,
            metal: 1800,
            oil: 1700,
            cash: 1400,
            food: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6.5, defense: 4.3 },
          vsLightArmor:     { attack: 10,  defense: 6.7 },
          vsHeavyArmor:     { attack: 4,   defense: 2.7 },
          vsAirplane:       { attack: 2.5, defense: 1.7 },
          vsShip:           { attack: 2.5, defense: 1.7 },
          vsSubmarine:      { attack: 2.5, defense: 1.7 },
          vsBuildings:      { attack: 0.9, defense: 0.6 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 45,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 45,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 45,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 45,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 45,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M24 Chaffee',
        level: 4,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 9.3,
        hitpoints: 65,
        production: {
          costs: {
            manpower: 1000,
            metal: 2200,
            oil: 2000,
            cash: 1600,
            food: 0
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10.5, defense: 7 },
          vsLightArmor:     { attack: 15.5, defense: 10.3 },
          vsHeavyArmor:     { attack: 7.5,  defense: 5 },
          vsAirplane:       { attack: 4,    defense: 2.7 },
          vsShip:           { attack: 4,    defense: 2.7 },
          vsSubmarine:      { attack: 4,    defense: 2.7 },
          vsBuildings:      { attack: 1.8,  defense: 1.2 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 65,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M41 Walker Bulldog',
        level: 5,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 13.8,
        hitpoints: 85,
        production: {
          costs: {
            manpower: 1100,
            metal: 2600,
            oil: 2300,
            cash: 1900,
            food: 0
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 15.5, defense: 10.3 },
          vsLightArmor:     { attack: 23,   defense: 15.3 },
          vsHeavyArmor:     { attack: 11,   defense: 7.3 },
          vsAirplane:       { attack: 6,    defense: 4 },
          vsShip:           { attack: 6,    defense: 4 },
          vsSubmarine:      { attack: 6,    defense: 4 },
          vsBuildings:      { attack: 2.8,  defense: 1.9 },
          vsProvinceMorale: { attack: 0.3,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 85,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 85,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 85,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 85,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 85,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    Axis: [
      {
        "unitName": "Axis Light Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 2.6,
        "hitpoints": 23,
        "production": {
          "costs": {
            "manpower": 990,
            "metal": 1650,
            "oil": 1540,
            "cash": 1210,
            "food": 0
          },
          "minTimeInSeconds": 11571
        },
        "specialProperties": [
          "Anti-Light Armor",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.1,
            "defense": 2.1
          },
          "vsLightArmor": {
            "attack": 4.6,
            "defense": 3.1
          },
          "vsHeavyArmor": {
            "attack": 1.7,
            "defense": 1.1
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 0.9,
            "defense": 0.6
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 0.6
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
            "strengthModifier": 0.5
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
        "unitName": "Axis Light Tank (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 4.1,
        "hitpoints": 35,
        "production": {
          "costs": {
            "manpower": 1045,
            "metal": 1760,
            "oil": 1650,
            "cash": 1320,
            "food": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Light Armor",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.6,
            "defense": 3.1
          },
          "vsLightArmor": {
            "attack": 7.5,
            "defense": 4.9
          },
          "vsHeavyArmor": {
            "attack": 2.9,
            "defense": 2
          },
          "vsAirplane": {
            "attack": 1.7,
            "defense": 1.2
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
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
        "unitName": "Axis Light Tank (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 6.6,
        "hitpoints": 52,
        "production": {
          "costs": {
            "manpower": 1045,
            "metal": 1980,
            "oil": 1870,
            "cash": 1540,
            "food": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Light Armor",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 7.5,
            "defense": 4.9
          },
          "vsLightArmor": {
            "attack": 11.5,
            "defense": 7.7
          },
          "vsHeavyArmor": {
            "attack": 4.6,
            "defense": 3.1
          },
          "vsAirplane": {
            "attack": 2.9,
            "defense": 2
          },
          "vsShip": {
            "attack": 2.9,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 2.9,
            "defense": 2
          },
          "vsBuildings": {
            "attack": 1,
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
            "health": 45,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 45,
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
        "unitName": "Axis Light Tank (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 10.7,
        "hitpoints": 75,
        "production": {
          "costs": {
            "manpower": 1100,
            "metal": 2420,
            "oil": 2200,
            "cash": 1760,
            "food": 0
          },
          "minTimeInSeconds": 28285
        },
        "specialProperties": [
          "Anti-Light Armor",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12.1,
            "defense": 8
          },
          "vsLightArmor": {
            "attack": 17.8,
            "defense": 11.8
          },
          "vsHeavyArmor": {
            "attack": 8.6,
            "defense": 5.8
          },
          "vsAirplane": {
            "attack": 4.6,
            "defense": 3.1
          },
          "vsShip": {
            "attack": 4.6,
            "defense": 3.1
          },
          "vsSubmarine": {
            "attack": 4.6,
            "defense": 3.1
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
            "health": 65,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
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
        "unitName": "Axis Light Tank (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "LightArmor",
        "averageDamage": 15.9,
        "hitpoints": 98,
        "production": {
          "costs": {
            "manpower": 1210,
            "metal": 2860,
            "oil": 2530,
            "cash": 2090,
            "food": 0
          },
          "minTimeInSeconds": 30857
        },
        "specialProperties": [
          "Anti-Light Armor",
          "Offensive"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 17.8,
            "defense": 11.8
          },
          "vsLightArmor": {
            "attack": 26.5,
            "defense": 17.6
          },
          "vsHeavyArmor": {
            "attack": 12.6,
            "defense": 8.4
          },
          "vsAirplane": {
            "attack": 6.9,
            "defense": 4.6
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
            "health": 85,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 85,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 85,
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
    Comintern: [],
    "Pan-Asian": [],
  },
};
