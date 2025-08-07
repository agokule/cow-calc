import { IUnitType } from '@/types';

export const antiTankData: IUnitType = {
  genericName: 'Anti Tank',
  doctrineVariants: {
    Allies: [
      {
        unitName: '37 mm Gun M3',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 2.9,
        hitpoints: 15,
        production: {
          costs: {
            food: 1100,
            manpower: 750,
            metal: 550,
            cash: 800,
            oil: 0
          },
          minTimeInSeconds: 5400
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.5, defense: 1 },
          vsLightArmor:     { attack: 2.3, defense: 4.6 },
          vsHeavyArmor:     { attack: 3,   defense: 6 },
          vsAirplane:       { attack: 0.5, defense: 1 },
          vsShip:           { attack: 0.5, defense: 1 },
          vsSubmarine:      { attack: 0.5, defense: 1 },
          vsBuildings:      { attack: 0.4, defense: 0.8 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 15,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '57 mm Gun M1',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 4.2,
        hitpoints: 20,
        production: {
          costs: {
            food: 1200,
            manpower: 750,
            metal: 600,
            cash: 900,
            oil: 0
          },
          minTimeInSeconds: 7200
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.8, defense: 1.6 },
          vsLightArmor:     { attack: 3.3, defense: 6.6 },
          vsHeavyArmor:     { attack: 4.3, defense: 8.6 },
          vsAirplane:       { attack: 1,   defense: 2 },
          vsShip:           { attack: 0.8, defense: 1.6 },
          vsSubmarine:      { attack: 0.8, defense: 1.6 },
          vsBuildings:      { attack: 0.6, defense: 1.2 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '3-inch Gun M5',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 5.9,
        hitpoints: 30,
        production: {
          costs: {
            food: 1300,
            manpower: 800,
            metal: 700,
            cash: 1000,
            oil: 0
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 2 },
          vsLightArmor:     { attack: 4.8, defense: 9.6 },
          vsHeavyArmor:     { attack: 6,   defense: 12 },
          vsAirplane:       { attack: 1.5, defense: 3 },
          vsShip:           { attack: 1,   defense: 2 },
          vsSubmarine:      { attack: 1,   defense: 2 },
          vsBuildings:      { attack: 0.8, defense: 1.6 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '76 mm Gun M1',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 8,
        hitpoints: 40,
        production: {
          costs: {
            food: 1500,
            manpower: 800,
            metal: 800,
            cash: 1100,
            oil: 0
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 3 },
          vsLightArmor:     { attack: 6.5, defense: 13 },
          vsHeavyArmor:     { attack: 8,   defense: 16 },
          vsAirplane:       { attack: 2,   defense: 4 },
          vsShip:           { attack: 1.5, defense: 3 },
          vsSubmarine:      { attack: 1.5, defense: 3 },
          vsBuildings:      { attack: 1.2, defense: 2.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '90 mm Gun M3',
        level: 5,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 10.8,
        hitpoints: 50,
        production: {
          costs: {
            food: 1600,
            manpower: 850,
            metal: 850,
            cash: 1300,
            oil: 0
          },
          minTimeInSeconds: 12600
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 4 },
          vsLightArmor:     { attack: 8.5, defense: 17 },
          vsHeavyArmor:     { attack: 11,  defense: 22 },
          vsAirplane:       { attack: 3,   defense: 6 },
          vsShip:           { attack: 2,   defense: 4 },
          vsSubmarine:      { attack: 2,   defense: 4 },
          vsBuildings:      { attack: 1.8, defense: 3.6 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '105mm Gun T8',
        level: 6,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 14.4,
        hitpoints: 65,
        production: {
          costs: {
            food: 1800,
            manpower: 850,
            metal: 950,
            cash: 1400,
            oil: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,    defense: 6 },
          vsLightArmor:     { attack: 11.3, defense: 22.6 },
          vsHeavyArmor:     { attack: 14.5, defense: 29 },
          vsAirplane:       { attack: 4,    defense: 8 },
          vsShip:           { attack: 3,    defense: 6 },
          vsSubmarine:      { attack: 3,    defense: 6 },
          vsBuildings:      { attack: 2.6,  defense: 5.2 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Anti Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 3.3,
        "hitpoints": 17,
        "production": {
          "costs": {
            "food": 1210,
            "manpower": 825,
            "metal": 605,
            "cash": 880,
            "oil": 0
          },
          "minTimeInSeconds": 7714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.6,
            "defense": 1.2
          },
          "vsLightArmor": {
            "attack": 2.6,
            "defense": 5.3
          },
          "vsHeavyArmor": {
            "attack": 3.5,
            "defense": 6.9
          },
          "vsAirplane": {
            "attack": 0.6,
            "defense": 1.2
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 15,
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
        "unitName": "Axis Anti Tank (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 4.8,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 1320,
            "manpower": 825,
            "metal": 660,
            "cash": 990,
            "oil": 0
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 3.8,
            "defense": 7.6
          },
          "vsHeavyArmor": {
            "attack": 4.9,
            "defense": 9.9
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 2.3
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
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 23,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 23,
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
        "unitName": "Axis Anti Tank (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 6.8,
        "hitpoints": 35,
        "production": {
          "costs": {
            "food": 1430,
            "manpower": 880,
            "metal": 770,
            "cash": 1100,
            "oil": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.2,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 5.5,
            "defense": 11
          },
          "vsHeavyArmor": {
            "attack": 6.9,
            "defense": 13.8
          },
          "vsAirplane": {
            "attack": 1.7,
            "defense": 3.5
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
            "attack": 0.9,
            "defense": 1.8
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
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 35,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 35,
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
        "unitName": "Axis Anti Tank (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 9.2,
        "hitpoints": 46,
        "production": {
          "costs": {
            "food": 1650,
            "manpower": 880,
            "metal": 880,
            "cash": 1210,
            "oil": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.7,
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 7.5,
            "defense": 15
          },
          "vsHeavyArmor": {
            "attack": 9.2,
            "defense": 18.4
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 4.6
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
            "attack": 1.4,
            "defense": 2.8
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
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 46,
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
        "unitName": "Axis Anti Tank (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 12.4,
        "hitpoints": 57,
        "production": {
          "costs": {
            "food": 1760,
            "manpower": 935,
            "metal": 935,
            "cash": 1430,
            "oil": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.3,
            "defense": 4.6
          },
          "vsLightArmor": {
            "attack": 9.8,
            "defense": 19.5
          },
          "vsHeavyArmor": {
            "attack": 12.6,
            "defense": 25.3
          },
          "vsAirplane": {
            "attack": 3.5,
            "defense": 6.9
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
            "attack": 2.1,
            "defense": 4.1
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
            "strengthModifier": null
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
      },
      {
        "unitName": "Axis Anti Tank (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "Unarmored",
        "averageDamage": 16.6,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 1980,
            "manpower": 935,
            "metal": 1045,
            "cash": 1540,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3.5,
            "defense": 6.9
          },
          "vsLightArmor": {
            "attack": 13,
            "defense": 26
          },
          "vsHeavyArmor": {
            "attack": 16.7,
            "defense": 33.3
          },
          "vsAirplane": {
            "attack": 4.6,
            "defense": 9.2
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
            "attack": 3,
            "defense": 6
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 75,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 75,
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
        "unitName": "Comintern Anti Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 2.6,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 935,
            "manpower": 638,
            "metal": 468,
            "cash": 680,
            "oil": 0
          },
          "minTimeInSeconds": 7714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.5,
            "defense": 0.9
          },
          "vsLightArmor": {
            "attack": 2.4,
            "defense": 4.8
          },
          "vsHeavyArmor": {
            "attack": 3.2,
            "defense": 6.3
          },
          "vsAirplane": {
            "attack": 0.5,
            "defense": 0.9
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
          },
          "urban": {
            "health": 15,
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
        "unitName": "Comintern Anti Tank (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 3.8,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 1020,
            "manpower": 638,
            "metal": 510,
            "cash": 765,
            "oil": 0
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.7,
            "defense": 1.4
          },
          "vsLightArmor": {
            "attack": 3.5,
            "defense": 6.9
          },
          "vsHeavyArmor": {
            "attack": 4.5,
            "defense": 9
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 1.8
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
        "unitName": "Comintern Anti Tank (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 5.3,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1105,
            "manpower": 680,
            "metal": 595,
            "cash": 850,
            "oil": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.9,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 5,
            "defense": 10.1
          },
          "vsHeavyArmor": {
            "attack": 6.3,
            "defense": 12.6
          },
          "vsAirplane": {
            "attack": 1.4,
            "defense": 2.7
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
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern Anti Tank (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 7.2,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1275,
            "manpower": 680,
            "metal": 680,
            "cash": 935,
            "oil": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.4,
            "defense": 2.7
          },
          "vsLightArmor": {
            "attack": 6.8,
            "defense": 13.7
          },
          "vsHeavyArmor": {
            "attack": 8.4,
            "defense": 16.8
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 3.6
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
            "attack": 1.1,
            "defense": 2.2
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
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Comintern Anti Tank (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 9.7,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1360,
            "manpower": 723,
            "metal": 723,
            "cash": 1105,
            "oil": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.8,
            "defense": 3.6
          },
          "vsLightArmor": {
            "attack": 8.9,
            "defense": 17.9
          },
          "vsHeavyArmor": {
            "attack": 11.6,
            "defense": 23.1
          },
          "vsAirplane": {
            "attack": 2.7,
            "defense": 5.4
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
            "attack": 1.6,
            "defense": 3.2
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
            "strengthModifier": null
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
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
      },
      {
        "unitName": "Comintern Anti Tank (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "Unarmored",
        "averageDamage": 13,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1530,
            "manpower": 723,
            "metal": 808,
            "cash": 1190,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.7,
            "defense": 5.4
          },
          "vsLightArmor": {
            "attack": 11.9,
            "defense": 23.7
          },
          "vsHeavyArmor": {
            "attack": 15.2,
            "defense": 30.5
          },
          "vsAirplane": {
            "attack": 3.6,
            "defense": 7.2
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
            "attack": 2.3,
            "defense": 4.7
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
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
            "speedModifier": null,
            "strengthModifier": 0.25
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
        "unitName": "Pan-Asian Anti Tank (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 2.9,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 1100,
            "manpower": 750,
            "metal": 550,
            "cash": 800,
            "oil": 0
          },
          "minTimeInSeconds": 7714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.5,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 2.3,
            "defense": 4.6
          },
          "vsHeavyArmor": {
            "attack": 3,
            "defense": 6
          },
          "vsAirplane": {
            "attack": 0.5,
            "defense": 1
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
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 15,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
          },
          "urban": {
            "health": 15,
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
        "unitName": "Pan-Asian Anti Tank (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 4.2,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 1200,
            "manpower": 750,
            "metal": 600,
            "cash": 900,
            "oil": 0
          },
          "minTimeInSeconds": 10286
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.8,
            "defense": 1.6
          },
          "vsLightArmor": {
            "attack": 3.3,
            "defense": 6.6
          },
          "vsHeavyArmor": {
            "attack": 4.3,
            "defense": 8.6
          },
          "vsAirplane": {
            "attack": 1,
            "defense": 2
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
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 20,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian Anti Tank (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 5.9,
        "hitpoints": 30,
        "production": {
          "costs": {
            "food": 1300,
            "manpower": 800,
            "metal": 700,
            "cash": 1000,
            "oil": 0
          },
          "minTimeInSeconds": 14143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1,
            "defense": 2
          },
          "vsLightArmor": {
            "attack": 4.8,
            "defense": 9.6
          },
          "vsHeavyArmor": {
            "attack": 6,
            "defense": 12
          },
          "vsAirplane": {
            "attack": 1.5,
            "defense": 3
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
            "attack": 0.8,
            "defense": 1.6
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
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 30,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian Anti Tank (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 8,
        "hitpoints": 40,
        "production": {
          "costs": {
            "food": 1500,
            "manpower": 800,
            "metal": 800,
            "cash": 1100,
            "oil": 0
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.5,
            "defense": 3
          },
          "vsLightArmor": {
            "attack": 6.5,
            "defense": 13
          },
          "vsHeavyArmor": {
            "attack": 8,
            "defense": 16
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 4
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
            "attack": 1.2,
            "defense": 2.4
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
            "speedModifier": -0.5,
            "strengthModifier": null
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian Anti Tank (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 10.8,
        "hitpoints": 50,
        "production": {
          "costs": {
            "food": 1600,
            "manpower": 850,
            "metal": 850,
            "cash": 1300,
            "oil": 0
          },
          "minTimeInSeconds": 18000
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2,
            "defense": 4
          },
          "vsLightArmor": {
            "attack": 8.5,
            "defense": 17
          },
          "vsHeavyArmor": {
            "attack": 11,
            "defense": 22
          },
          "vsAirplane": {
            "attack": 3,
            "defense": 6
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
            "attack": 1.8,
            "defense": 3.6
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
            "strengthModifier": null
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": null,
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
      },
      {
        "unitName": "Pan-Asian Anti Tank (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "Unarmored",
        "averageDamage": 14.4,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 1800,
            "manpower": 850,
            "metal": 950,
            "cash": 1400,
            "oil": 0
          },
          "minTimeInSeconds": 20571
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 3,
            "defense": 6
          },
          "vsLightArmor": {
            "attack": 11.3,
            "defense": 22.6
          },
          "vsHeavyArmor": {
            "attack": 14.5,
            "defense": 29
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 8
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
            "attack": 2.6,
            "defense": 5.2
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
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": null,
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
            "speedModifier": null,
            "strengthModifier": 0.45
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
