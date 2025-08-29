import { IUnitType } from '@/types';

export const tankDestroyerData: IUnitType = {
  genericName: 'Tank Destroyer',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'M3 Gun Motor Carriage',
        level: 1,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 4.5,
        hitpoints: 40,
        production: {
          costs: {
            manpower: 940,
            metal: 1600,
            oil: 940,
            cash: 1700,
            food: 0
          },
          minTimeInSeconds: 12600
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.7, defense: 1.1 },
          vsLightArmor:     { attack: 4,   defense: 6 },
          vsHeavyArmor:     { attack: 6,   defense: 9 },
          vsAirplane:       { attack: 0.5, defense: 0.8 },
          vsShip:           { attack: 1,   defense: 1.5 },
          vsSubmarine:      { attack: 1,   defense: 1.5 },
          vsBuildings:      { attack: 0.4, defense: 0.6 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 40,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: -0.5,  strengthModifier: 0.25 },
          forest:         { health: 40,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 40,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M10 Wolverine',
        level: 2,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 6,
        hitpoints: 50,
        production: {
          costs: {
            manpower: 980,
            metal: 1800,
            oil: 1100,
            cash: 2000,
            food: 0
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 1.5 },
          vsLightArmor:     { attack: 5.3, defense: 7.9 },
          vsHeavyArmor:     { attack: 8,   defense: 12 },
          vsAirplane:       { attack: 1,   defense: 1.5 },
          vsShip:           { attack: 1.5, defense: 2.3 },
          vsSubmarine:      { attack: 1.5, defense: 2.3 },
          vsBuildings:      { attack: 0.6, defense: 0.9 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5,  strengthModifier: 0.25 },
          forest:         { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 50,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Achilles',
        level: 3,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 8.1,
        hitpoints: 65,
        production: {
          costs: {
            manpower: 980,
            metal: 2000,
            oil: 1200,
            cash: 2200,
            food: 0
          },
          minTimeInSeconds: 18900
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 2.3 },
          vsLightArmor:     { attack: 7,   defense: 10.5 },
          vsHeavyArmor:     { attack: 11,  defense: 16.5 },
          vsAirplane:       { attack: 1.3, defense: 2 },
          vsShip:           { attack: 2,   defense: 3 },
          vsSubmarine:      { attack: 2,   defense: 3 },
          vsBuildings:      { attack: 1,   defense: 1.5 },
          vsProvinceMorale: { attack: 0.3, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5,  strengthModifier: 0.25 },
          forest:         { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 65,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M18 Hellcat',
        level: 4,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 11.1,
        hitpoints: 80,
        production: {
          costs: {
            manpower: 1000,
            metal: 2300,
            oil: 1400,
            cash: 2500,
            food: 0
          },
          minTimeInSeconds: 22500
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2.3, defense: 3.5 },
          vsLightArmor:     { attack: 9.3, defense: 13.9 },
          vsHeavyArmor:     { attack: 15,  defense: 22.5 },
          vsAirplane:       { attack: 2,   defense: 3 },
          vsShip:           { attack: 3,   defense: 4.5 },
          vsSubmarine:      { attack: 3,   defense: 4.5 },
          vsBuildings:      { attack: 1.6, defense: 2.4 },
          vsProvinceMorale: { attack: 0.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 80,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 80,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 80,   attackModifier: null, speedModifier: -0.5,  strengthModifier: 0.25 },
          forest:         { health: 80,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 80,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M36 Jackson',
        level: 5,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 14.8,
        hitpoints: 100,
        production: {
          costs: {
            manpower: 1000,
            metal: 2600,
            oil: 1500,
            cash: 2800,
            food: 0
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.7,  defense: 7 },
          vsLightArmor:     { attack: 15.3, defense: 22.9 },
          vsHeavyArmor:     { attack: 26,   defense: 39 },
          vsAirplane:       { attack: 4,    defense: 6 },
          vsShip:           { attack: 5,    defense: 7.5 },
          vsSubmarine:      { attack: 5,    defense: 7.5 },
          vsBuildings:      { attack: 3.5,  defense: 5.3 },
          vsProvinceMorale: { attack: 1,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 100,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 100,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 100,  attackModifier: null, speedModifier: -0.5,  strengthModifier: 0.25 },
          forest:         { health: 100,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 100,  attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'T95 Gun Motor Carriage',
        level: 6,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 19.2,
        hitpoints: 125,
        production: {
          costs: {
            manpower: 1100,
            metal: 2800,
            oil: 1600,
            cash: 3000,
            food: 0
          },
          minTimeInSeconds: 25200
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.7,  defense: 7 },
          vsLightArmor:     { attack: 15.3, defense: 22.9 },
          vsHeavyArmor:     { attack: 26,   defense: 39 },
          vsAirplane:       { attack: 4,    defense: 6 },
          vsShip:           { attack: 5,    defense: 7.5 },
          vsSubmarine:      { attack: 5,    defense: 7.5 },
          vsBuildings:      { attack: 3.5,  defense: 5.3 },
          vsProvinceMorale: { attack: 1,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 125,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 125,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 125,  attackModifier: null, speedModifier: -0.5,  strengthModifier: 0.25 },
          forest:         { health: 125,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 125,  attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Tank Destroyer (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 5.2,
        "hitpoints": 46,
        "production": {
          "costs": {
            "manpower": 1216,
            "metal": 2071,
            "oil": 1216,
            "cash": 2200,
            "food": 0
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
            "attack": 0.8,
            "defense": 1.3
          },
          "vsLightArmor": {
            "attack": 4.6,
            "defense": 6.9
          },
          "vsHeavyArmor": {
            "attack": 6.9,
            "defense": 10.4
          },
          "vsAirplane": {
            "attack": 0.6,
            "defense": 0.9
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
            "health": 46,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 46,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 40,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Axis Tank Destroyer (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 6.9,
        "hitpoints": 57,
        "production": {
          "costs": {
            "manpower": 1268,
            "metal": 2329,
            "oil": 1424,
            "cash": 2588,
            "food": 0
          },
          "minTimeInSeconds": 23143
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
            "defense": 1.7
          },
          "vsLightArmor": {
            "attack": 6.1,
            "defense": 9.1
          },
          "vsHeavyArmor": {
            "attack": 9.2,
            "defense": 13.8
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 1.7
          },
          "vsShip": {
            "attack": 1.7,
            "defense": 2.6
          },
          "vsSubmarine": {
            "attack": 1.7,
            "defense": 2.6
          },
          "vsBuildings": {
            "attack": 0.7,
            "defense": 1
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
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 57,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 50,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
        "unitName": "Axis Tank Destroyer (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 9.3,
        "hitpoints": 75,
        "production": {
          "costs": {
            "manpower": 1268,
            "metal": 2588,
            "oil": 1553,
            "cash": 2847,
            "food": 0
          },
          "minTimeInSeconds": 27000
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
            "defense": 2.6
          },
          "vsLightArmor": {
            "attack": 8,
            "defense": 12.1
          },
          "vsHeavyArmor": {
            "attack": 12.6,
            "defense": 19
          },
          "vsAirplane": {
            "attack": 1.5,
            "defense": 2.3
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
            "attack": 1.2,
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
            "health": 75,
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
            "health": 75,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 65,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
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
      },
      {
        "unitName": "Axis Tank Destroyer (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 12.8,
        "hitpoints": 92,
        "production": {
          "costs": {
            "manpower": 1294,
            "metal": 2976,
            "oil": 1812,
            "cash": 3235,
            "food": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.6,
            "defense": 4
          },
          "vsLightArmor": {
            "attack": 10.7,
            "defense": 16
          },
          "vsHeavyArmor": {
            "attack": 17.3,
            "defense": 25.9
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 3.5
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 5.2
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": 5.2
          },
          "vsBuildings": {
            "attack": 1.8,
            "defense": 2.8
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
            "health": 92,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 92,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 92,
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
        "unitName": "Axis Tank Destroyer (Estimated Stats)",
        "level": 5,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 17,
        "hitpoints": 115,
        "production": {
          "costs": {
            "manpower": 1294,
            "metal": 3365,
            "oil": 1941,
            "cash": 3624,
            "food": 0
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 5.4,
            "defense": 8
          },
          "vsLightArmor": {
            "attack": 17.6,
            "defense": 26.3
          },
          "vsHeavyArmor": {
            "attack": 29.9,
            "defense": 44.8
          },
          "vsAirplane": {
            "attack": 4.6,
            "defense": 6.9
          },
          "vsShip": {
            "attack": 5.8,
            "defense": 8.6
          },
          "vsSubmarine": {
            "attack": 5.8,
            "defense": 8.6
          },
          "vsBuildings": {
            "attack": 4,
            "defense": 6.1
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
            "health": 115,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 100,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 115,
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
        "unitName": "Axis Tank Destroyer (Estimated Stats)",
        "level": 6,
        "doctrine": "Axis",
        "type": "HeavyArmor",
        "averageDamage": 22.1,
        "hitpoints": 144,
        "production": {
          "costs": {
            "manpower": 1424,
            "metal": 3624,
            "oil": 2071,
            "cash": 3882,
            "food": 0
          },
          "minTimeInSeconds": 36000
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
            "defense": 8
          },
          "vsLightArmor": {
            "attack": 17.6,
            "defense": 26.3
          },
          "vsHeavyArmor": {
            "attack": 29.9,
            "defense": 44.8
          },
          "vsAirplane": {
            "attack": 4.6,
            "defense": 6.9
          },
          "vsShip": {
            "attack": 5.8,
            "defense": 8.6
          },
          "vsSubmarine": {
            "attack": 5.8,
            "defense": 8.6
          },
          "vsBuildings": {
            "attack": 4,
            "defense": 6.1
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
            "health": 144,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 125,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 144,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 125,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 144,
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
        "unitName": "Comintern Tank Destroyer (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 4.1,
        "hitpoints": 40,
        "production": {
          "costs": {
            "manpower": 940,
            "metal": 1600,
            "oil": 940,
            "cash": 1700,
            "food": 0
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
            "attack": 0.6,
            "defense": 1
          },
          "vsLightArmor": {
            "attack": 3.6,
            "defense": 5.4
          },
          "vsHeavyArmor": {
            "attack": 5.4,
            "defense": 8.1
          },
          "vsAirplane": {
            "attack": 0.5,
            "defense": 0.7
          },
          "vsShip": {
            "attack": 0.9,
            "defense": 1.4
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 1.4
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
            "health": 40,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
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
            "strengthModifier": 0.25
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
        "unitName": "Comintern Tank Destroyer (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 5.4,
        "hitpoints": 50,
        "production": {
          "costs": {
            "manpower": 980,
            "metal": 1800,
            "oil": 1100,
            "cash": 2000,
            "food": 0
          },
          "minTimeInSeconds": 23143
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
            "defense": 1.4
          },
          "vsLightArmor": {
            "attack": 4.8,
            "defense": 7.1
          },
          "vsHeavyArmor": {
            "attack": 7.2,
            "defense": 10.8
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 1.4
          },
          "vsShip": {
            "attack": 1.4,
            "defense": 2.1
          },
          "vsSubmarine": {
            "attack": 1.4,
            "defense": 2.1
          },
          "vsBuildings": {
            "attack": 0.5,
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
            "health": 50,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
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
            "strengthModifier": 0.25
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
        "unitName": "Comintern Tank Destroyer (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 7.3,
        "hitpoints": 65,
        "production": {
          "costs": {
            "manpower": 980,
            "metal": 2000,
            "oil": 1200,
            "cash": 2200,
            "food": 0
          },
          "minTimeInSeconds": 27000
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
            "defense": 2.1
          },
          "vsLightArmor": {
            "attack": 6.3,
            "defense": 9.5
          },
          "vsHeavyArmor": {
            "attack": 9.9,
            "defense": 14.9
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 1.8
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
            "attack": 0.9,
            "defense": 1.4
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
            "strengthModifier": 0.25
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
      },
      {
        "unitName": "Comintern Tank Destroyer (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 10,
        "hitpoints": 80,
        "production": {
          "costs": {
            "manpower": 1000,
            "metal": 2300,
            "oil": 1400,
            "cash": 2500,
            "food": 0
          },
          "minTimeInSeconds": 32143
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.1,
            "defense": 3.2
          },
          "vsLightArmor": {
            "attack": 8.4,
            "defense": 12.5
          },
          "vsHeavyArmor": {
            "attack": 13.5,
            "defense": 20.3
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 2.7
          },
          "vsShip": {
            "attack": 2.7,
            "defense": 4.1
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": 4.1
          },
          "vsBuildings": {
            "attack": 1.4,
            "defense": 2.2
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
            "health": 80,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 80,
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
        "unitName": "Comintern Tank Destroyer (Estimated Stats)",
        "level": 5,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 13.3,
        "hitpoints": 100,
        "production": {
          "costs": {
            "manpower": 1000,
            "metal": 2600,
            "oil": 1500,
            "cash": 2800,
            "food": 0
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.2,
            "defense": 6.3
          },
          "vsLightArmor": {
            "attack": 13.8,
            "defense": 20.6
          },
          "vsHeavyArmor": {
            "attack": 23.4,
            "defense": 35.1
          },
          "vsAirplane": {
            "attack": 3.6,
            "defense": 5.4
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 6.8
          },
          "vsSubmarine": {
            "attack": 4.5,
            "defense": 6.8
          },
          "vsBuildings": {
            "attack": 3.2,
            "defense": 4.8
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
            "health": 100,
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
            "strengthModifier": 0.25
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
        "unitName": "Comintern Tank Destroyer (Estimated Stats)",
        "level": 6,
        "doctrine": "Comintern",
        "type": "HeavyArmor",
        "averageDamage": 17.3,
        "hitpoints": 125,
        "production": {
          "costs": {
            "manpower": 1100,
            "metal": 2800,
            "oil": 1600,
            "cash": 3000,
            "food": 0
          },
          "minTimeInSeconds": 36000
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
            "defense": 6.3
          },
          "vsLightArmor": {
            "attack": 13.8,
            "defense": 20.6
          },
          "vsHeavyArmor": {
            "attack": 23.4,
            "defense": 35.1
          },
          "vsAirplane": {
            "attack": 3.6,
            "defense": 5.4
          },
          "vsShip": {
            "attack": 4.5,
            "defense": 6.8
          },
          "vsSubmarine": {
            "attack": 4.5,
            "defense": 6.8
          },
          "vsBuildings": {
            "attack": 3.2,
            "defense": 4.8
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
            "health": 125,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.5
          },
          "hills": {
            "health": 125,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 125,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.25
          },
          "forest": {
            "health": 125,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 125,
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
        "unitName": "Pan-Asian Tank Destroyer (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 4.5,
        "hitpoints": 40,
        "production": {
          "costs": {
            "manpower": 1106,
            "metal": 1882,
            "oil": 1106,
            "cash": 2000,
            "food": 0
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
            "attack": 0.7,
            "defense": 1.1
          },
          "vsLightArmor": {
            "attack": 4,
            "defense": 6
          },
          "vsHeavyArmor": {
            "attack": 6,
            "defense": 9
          },
          "vsAirplane": {
            "attack": 0.5,
            "defense": 0.8
          },
          "vsShip": {
            "attack": 1,
            "defense": 1.5
          },
          "vsSubmarine": {
            "attack": 1,
            "defense": 1.5
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
            "health": 40,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
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
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian Tank Destroyer (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 6,
        "hitpoints": 50,
        "production": {
          "costs": {
            "manpower": 1153,
            "metal": 2118,
            "oil": 1294,
            "cash": 2353,
            "food": 0
          },
          "minTimeInSeconds": 23143
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
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 5.3,
            "defense": 7.9
          },
          "vsHeavyArmor": {
            "attack": 8,
            "defense": 12
          },
          "vsAirplane": {
            "attack": 1,
            "defense": 1.5
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 0.6,
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
            "health": 50,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
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
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian Tank Destroyer (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 8.1,
        "hitpoints": 65,
        "production": {
          "costs": {
            "manpower": 1153,
            "metal": 2353,
            "oil": 1412,
            "cash": 2588,
            "food": 0
          },
          "minTimeInSeconds": 27000
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
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 7,
            "defense": 10.5
          },
          "vsHeavyArmor": {
            "attack": 11,
            "defense": 16.5
          },
          "vsAirplane": {
            "attack": 1.3,
            "defense": 2
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
            "attack": 1,
            "defense": 1.5
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
            "strengthModifier": 0.7
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
            "strengthModifier": 0.45
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
      },
      {
        "unitName": "Pan-Asian Tank Destroyer (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 11.1,
        "hitpoints": 80,
        "production": {
          "costs": {
            "manpower": 1176,
            "metal": 2706,
            "oil": 1647,
            "cash": 2941,
            "food": 0
          },
          "minTimeInSeconds": 32143
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
            "defense": 3.5
          },
          "vsLightArmor": {
            "attack": 9.3,
            "defense": 13.9
          },
          "vsHeavyArmor": {
            "attack": 15,
            "defense": 22.5
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 3
          },
          "vsShip": {
            "attack": 3,
            "defense": 4.5
          },
          "vsSubmarine": {
            "attack": 3,
            "defense": 4.5
          },
          "vsBuildings": {
            "attack": 1.6,
            "defense": 2.4
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
            "health": 80,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.45
          },
          "forest": {
            "health": 80,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 80,
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
        "unitName": "Pan-Asian Tank Destroyer (Estimated Stats)",
        "level": 5,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 14.8,
        "hitpoints": 100,
        "production": {
          "costs": {
            "manpower": 1176,
            "metal": 3059,
            "oil": 1765,
            "cash": 3294,
            "food": 0
          },
          "minTimeInSeconds": 34714
        },
        "specialProperties": [
          "Anti-Heavy Armor",
          "Anti-Light Armor",
          "Defensive",
          "Partial Stealth"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 4.7,
            "defense": 7
          },
          "vsLightArmor": {
            "attack": 15.3,
            "defense": 22.9
          },
          "vsHeavyArmor": {
            "attack": 26,
            "defense": 39
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 6
          },
          "vsShip": {
            "attack": 5,
            "defense": 7.5
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 7.5
          },
          "vsBuildings": {
            "attack": 3.5,
            "defense": 5.3
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
            "strengthModifier": 0.45
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
        "unitName": "Pan-Asian Tank Destroyer (Estimated Stats)",
        "level": 6,
        "doctrine": "Pan-Asian",
        "type": "HeavyArmor",
        "averageDamage": 19.2,
        "hitpoints": 125,
        "production": {
          "costs": {
            "manpower": 1294,
            "metal": 3294,
            "oil": 1882,
            "cash": 3529,
            "food": 0
          },
          "minTimeInSeconds": 36000
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
            "defense": 7
          },
          "vsLightArmor": {
            "attack": 15.3,
            "defense": 22.9
          },
          "vsHeavyArmor": {
            "attack": 26,
            "defense": 39
          },
          "vsAirplane": {
            "attack": 4,
            "defense": 6
          },
          "vsShip": {
            "attack": 5,
            "defense": 7.5
          },
          "vsSubmarine": {
            "attack": 5,
            "defense": 7.5
          },
          "vsBuildings": {
            "attack": 3.5,
            "defense": 5.3
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
            "health": 125,
            "attackModifier": null,
            "speedModifier": 0.25,
            "strengthModifier": 0.7
          },
          "hills": {
            "health": 125,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "mountains": {
            "health": 125,
            "attackModifier": null,
            "speedModifier": -0.5,
            "strengthModifier": 0.45
          },
          "forest": {
            "health": 125,
            "attackModifier": null,
            "speedModifier": -0.25,
            "strengthModifier": null
          },
          "urban": {
            "health": 125,
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
