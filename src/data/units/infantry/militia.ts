import { IUnitType } from '@/types';

export const militiaData: IUnitType = {
  genericName: 'Militia',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Militia Type 1932',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 1.3,
        hitpoints: 15,
        production: {
          costs: {
            food: 500,
            manpower: 800,
            metal: 200,
            cash: 600,
            oil: 0
          },
          minTimeInSeconds: 1800
        },
        specialProperties: [ 'Fast Production', 'Partial Stealth', 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.7, defense: 2.5 },
          vsLightArmor:     { attack: 1,   defense: 1.5 },
          vsHeavyArmor:     { attack: 0.5, defense: 0.7 },
          vsAirplane:       { attack: 1,   defense: 1.5 },
          vsShip:           { attack: 0.5, defense: 0.7 },
          vsSubmarine:      { attack: 0.5, defense: 0.7 },
          vsBuildings:      { attack: 0.4, defense: 0.6 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          hills:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          mountains:      { health: 15,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.25 },
          forest:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          urban:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Militia Type 1934',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 2.5,
        hitpoints: 20,
        production: {
          costs: {
            food: 550,
            manpower: 850,
            metal: 250,
            cash: 650,
            oil: 0
          },
          minTimeInSeconds: 2700
        },
        specialProperties: [ 'Fast Production', 'Partial Stealth', 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3.2, defense: 4.8 },
          vsLightArmor:     { attack: 1.7, defense: 2.5 },
          vsHeavyArmor:     { attack: 1,   defense: 1.5 },
          vsAirplane:       { attack: 1.7, defense: 2.5 },
          vsShip:           { attack: 1.3, defense: 1.9 },
          vsSubmarine:      { attack: 1.3, defense: 1.9 },
          vsBuildings:      { attack: 0.6, defense: 0.9 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          hills:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.25 },
          forest:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          urban:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Militia Type 1942',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 4.5,
        hitpoints: 30,
        production: {
          costs: {
            food: 650,
            manpower: 850,
            metal: 300,
            cash: 750,
            oil: 0
          },
          minTimeInSeconds: 3600
        },
        specialProperties: [ 'Fast Production', 'Partial Stealth', 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5.8, defense: 8.7 },
          vsLightArmor:     { attack: 3,   defense: 4.5 },
          vsHeavyArmor:     { attack: 2,   defense: 3 },
          vsAirplane:       { attack: 3,   defense: 4.5 },
          vsShip:           { attack: 2,   defense: 3 },
          vsSubmarine:      { attack: 2,   defense: 3 },
          vsBuildings:      { attack: 0.8, defense: 1.2 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.25 },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Militia Type 1947',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 8.0,
        hitpoints: 45,
        production: {
          costs: {
            food: 750,
            manpower: 900,
            metal: 350,
            cash: 900,
            oil: 0
          },
          minTimeInSeconds: 4500
        },
        specialProperties: [ 'Fast Production', 'Partial Stealth', 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10,  defense: 15 },
          vsLightArmor:     { attack: 5.8, defense: 8.7 },
          vsHeavyArmor:     { attack: 3.5, defense: 5.3 },
          vsAirplane:       { attack: 5,   defense: 7.5 },
          vsShip:           { attack: 3.3, defense: 4.9 },
          vsSubmarine:      { attack: 3.3, defense: 4.9 },
          vsBuildings:      { attack: 1.2, defense: 1.8 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 45,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          hills:          { health: 45,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          mountains:      { health: 45,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.25 },
          forest:         { health: 45,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          urban:          { health: 45,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Militia (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 1.5,
        "hitpoints": 17,
        "production": {
          "costs": {
            "food": 550,
            "manpower": 880,
            "metal": 220,
            "cash": 660,
            "oil": 0
          },
          "minTimeInSeconds": 2571
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2,
            "defense": 2.9
          },
          "vsLightArmor": {
            "attack": 1.2,
            "defense": 1.7
          },
          "vsHeavyArmor": {
            "attack": 0.6,
            "defense": 0.8
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 1.7
          },
          "vsShip": {
            "attack": 0.6,
            "defense": 0.8
          },
          "vsSubmarine": {
            "attack": 0.6,
            "defense": 0.8
          },
          "vsBuildings": {
            "attack": 0.5,
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Axis Militia (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 2.9,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 605,
            "manpower": 935,
            "metal": 275,
            "cash": 715,
            "oil": 0
          },
          "minTimeInSeconds": 3857
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.7,
            "defense": 5.5
          },
          "vsLightArmor": {
            "attack": 2,
            "defense": 2.9
          },
          "vsHeavyArmor": {
            "attack": 1.2,
            "defense": 1.7
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 2.9
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 2.2
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 2.2
          },
          "vsBuildings": {
            "attack": 0.7,
            "defense": 1
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
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Axis Militia (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 5.2,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 715,
            "manpower": 935,
            "metal": 330,
            "cash": 825,
            "oil": 0
          },
          "minTimeInSeconds": 5143
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 6.7,
            "defense": 10
          },
          "vsLightArmor": {
            "attack": 3.5,
            "defense": 5.2
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 3.5
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 5.2
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 3.5
          },
          "vsBuildings": {
            "attack": 0.9,
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Axis Militia (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 9.2,
        "hitpoints": 52,
        "production": {
          "costs": {
            "food": 825,
            "manpower": 990,
            "metal": 385,
            "cash": 990,
            "oil": 0
          },
          "minTimeInSeconds": 6429
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 11.5,
            "defense": 17.3
          },
          "vsLightArmor": {
            "attack": 6.7,
            "defense": 10
          },
          "vsHeavyArmor": {
            "attack": 4,
            "defense": 6.1
          },
          "vsAirplane": {
            "attack": 5.8,
            "defense": 8.6
          },
          "vsShip": {
            "attack": 3.8,
            "defense": 5.6
          },
          "vsSubmarine": {
            "attack": 3.8,
            "defense": 5.6
          },
          "vsBuildings": {
            "attack": 1.4,
            "defense": 2.1
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
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
      }
    ],
    "Comintern": [
      {
        "unitName": "Comintern Militia (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 1.2,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 425,
            "manpower": 680,
            "metal": 170,
            "cash": 510,
            "oil": 0
          },
          "minTimeInSeconds": 2571
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.5,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 0.9,
            "defense": 1.4
          },
          "vsHeavyArmor": {
            "attack": 0.5,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 0.5,
            "defense": 0.6
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 0.4,
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.75
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Militia (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 2.3,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 468,
            "manpower": 723,
            "metal": 213,
            "cash": 553,
            "oil": 0
          },
          "minTimeInSeconds": 3857
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.9,
            "defense": 4.3
          },
          "vsLightArmor": {
            "attack": 1.5,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 0.9,
            "defense": 1.4
          },
          "vsAirplane": {
            "attack": 1.5,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 1.2,
            "defense": 1.7
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 1.7
          },
          "vsBuildings": {
            "attack": 0.5,
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
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.75
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Militia (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 4.1,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 553,
            "manpower": 723,
            "metal": 255,
            "cash": 638,
            "oil": 0
          },
          "minTimeInSeconds": 5143
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.2,
            "defense": 7.8
          },
          "vsLightArmor": {
            "attack": 2.7,
            "defense": 4.1
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 2.7
          },
          "vsAirplane": {
            "attack": 2.7,
            "defense": 4.1
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 2.7
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 2.7
          },
          "vsBuildings": {
            "attack": 0.7,
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.75
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
        "unitName": "Comintern Militia (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 7.2,
        "hitpoints": 45,
        "production": {
          "costs": {
            "food": 638,
            "manpower": 765,
            "metal": 298,
            "cash": 765,
            "oil": 0
          },
          "minTimeInSeconds": 6429
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9,
            "defense": 13.5
          },
          "vsLightArmor": {
            "attack": 5.2,
            "defense": 7.8
          },
          "vsHeavyArmor": {
            "attack": 3.2,
            "defense": 4.8
          },
          "vsAirplane": {
            "attack": 4.5,
            "defense": 6.8
          },
          "vsShip": {
            "attack": 3,
            "defense": 4.4
          },
          "vsSubmarine": {
            "attack": 3,
            "defense": 4.4
          },
          "vsBuildings": {
            "attack": 1.1,
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
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.75
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.5
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
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Militia (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 1.3,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 500,
            "manpower": 800,
            "metal": 200,
            "cash": 600,
            "oil": 0
          },
          "minTimeInSeconds": 2571
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.7,
            "defense": 2.5
          },
          "vsLightArmor": {
            "attack": 1,
            "defense": 1.5
          },
          "vsHeavyArmor": {
            "attack": 0.5,
            "defense": 0.7
          },
          "vsAirplane": {
            "attack": 1,
            "defense": 1.5
          },
          "vsShip": {
            "attack": 0.5,
            "defense": 0.7
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 0.7
          },
          "vsBuildings": {
            "attack": 0.4,
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.45
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Militia (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 2.5,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 550,
            "manpower": 850,
            "metal": 250,
            "cash": 650,
            "oil": 0
          },
          "minTimeInSeconds": 3857
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.2,
            "defense": 4.8
          },
          "vsLightArmor": {
            "attack": 1.7,
            "defense": 2.5
          },
          "vsHeavyArmor": {
            "attack": 1,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 1.7,
            "defense": 2.5
          },
          "vsShip": {
            "attack": 1.3,
            "defense": 1.9
          },
          "vsSubmarine": {
            "attack": 1.3,
            "defense": 1.9
          },
          "vsBuildings": {
            "attack": 0.6,
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
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "mountains": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.45
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Militia (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 4.5,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 650,
            "manpower": 850,
            "metal": 300,
            "cash": 750,
            "oil": 0
          },
          "minTimeInSeconds": 5143
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.8,
            "defense": 8.7
          },
          "vsLightArmor": {
            "attack": 3,
            "defense": 4.5
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 3
          },
          "vsAirplane": {
            "attack": 3,
            "defense": 4.5
          },
          "vsShip": {
            "attack": 2,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 3
          },
          "vsBuildings": {
            "attack": 0.8,
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
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "mountains": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.45
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
        "unitName": "Pan-Asian Militia (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 8,
        "hitpoints": 45,
        "production": {
          "costs": {
            "food": 750,
            "manpower": 900,
            "metal": 350,
            "cash": 900,
            "oil": 0
          },
          "minTimeInSeconds": 6429
        },
        "specialProperties": [
          "Fast Production",
          "Partial Stealth",
          "Defensive",
          "Anti-Unarmored"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 10,
            "defense": 15
          },
          "vsLightArmor": {
            "attack": 5.8,
            "defense": 8.7
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 5.3
          },
          "vsAirplane": {
            "attack": 5,
            "defense": 7.5
          },
          "vsShip": {
            "attack": 3.3,
            "defense": 4.9
          },
          "vsSubmarine": {
            "attack": 3.3,
            "defense": 4.9
          },
          "vsBuildings": {
            "attack": 1.2,
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
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "hills": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "mountains": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.45
          },
          "forest": {
            "health": 45,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.7
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
      }
    ]
  },
};
