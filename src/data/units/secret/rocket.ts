import { IUnitType } from '@/types';

export const rocketData: IUnitType = {
  genericName: 'Rocket',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'RTV-G-4 Bumper',
        level: 1,
        doctrine: 'Allies',
        type: 'Rocket',
        averageDamage: 7.5,
        hitpoints: 10,
        production: {
          costs: {
            manpower: 450,
            metal: 800,
            food: 0,
            cash: 2200,
            oil: 1100
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Morale', 'Single use', 'Supersonic', 'Friendly Fire' ],
        combatStatistics: {
          vsUnarmored:      { attack: 15, defense: null },
          vsLightArmor:     { attack: 15, defense: null },
          vsHeavyArmor:     { attack: 15, defense: null },
          vsAirplane:       { attack: 8,  defense: null },
          vsShip:           { attack: 8,  defense: null },
          vsSubmarine:      { attack: 4,  defense: null },
          vsBuildings:      { attack: 15, defense: null },
          vsProvinceMorale: { attack: 12, defense: null },
          vsRocket:         { attack: 0,  defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'SSM-N-8A Regulus',
        level: 2,
        doctrine: 'Allies',
        type: 'Rocket',
        averageDamage: 11,
        hitpoints: 15,
        production: {
          costs: {
            manpower: 450,
            metal: 900,
            food: 0,
            cash: 2500,
            oil: 1200
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Anti-Morale', 'Single use', 'Supersonic', 'Friendly Fire' ],
        combatStatistics: {
          vsUnarmored:      { attack: 22, defense: null },
          vsLightArmor:     { attack: 22, defense: null },
          vsHeavyArmor:     { attack: 22, defense: null },
          vsAirplane:       { attack: 11, defense: null },
          vsShip:           { attack: 11, defense: null },
          vsSubmarine:      { attack: 6,  defense: null },
          vsBuildings:      { attack: 22, defense: null },
          vsProvinceMorale: { attack: 18, defense: null },
          vsRocket:         { attack: 0,  defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'MGM-13 Mace',
        level: 3,
        doctrine: 'Allies',
        type: 'Rocket',
        averageDamage: 15,
        hitpoints: 20,
        production: {
          costs: {
            manpower: 500,
            metal: 1100,
            food: 0,
            cash: 2800,
            oil: 1400
          },
          minTimeInSeconds: 15300
        },
        specialProperties: [ 'Anti-Morale', 'Single use', 'Supersonic', 'Friendly Fire' ],
        combatStatistics: {
          vsUnarmored:      { attack: 30, defense: null },
          vsLightArmor:     { attack: 30, defense: null },
          vsHeavyArmor:     { attack: 30, defense: null },
          vsAirplane:       { attack: 15, defense: null },
          vsShip:           { attack: 15, defense: null },
          vsSubmarine:      { attack: 9,  defense: null },
          vsBuildings:      { attack: 30, defense: null },
          vsProvinceMorale: { attack: 26, defense: null },
          vsRocket:         { attack: 0,  defense: 0 },
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
        unitName: 'PGM-17 Thor',
        level: 4,
        doctrine: 'Allies',
        type: 'Rocket',
        averageDamage: 20,
        hitpoints: 25,
        production: {
          costs: {
            manpower: 500,
            metal: 1200,
            food: 0,
            cash: 3100,
            oil: 1500
          },
          minTimeInSeconds: 17100
        },
        specialProperties: [ 'Anti-Morale', 'Single use', 'Supersonic', 'Friendly Fire' ],
        combatStatistics: {
          vsUnarmored:      { attack: 40, defense: null },
          vsLightArmor:     { attack: 40, defense: null },
          vsHeavyArmor:     { attack: 40, defense: null },
          vsAirplane:       { attack: 21, defense: null },
          vsShip:           { attack: 21, defense: null },
          vsSubmarine:      { attack: 13, defense: null },
          vsBuildings:      { attack: 40, defense: null },
          vsProvinceMorale: { attack: 36, defense: null },
          vsRocket:         { attack: 0,  defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Rocket (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Rocket",
        "averageDamage": 9.8,
        "hitpoints": 12,
        "production": {
          "costs": {
            "manpower": 495,
            "metal": 880,
            "food": 0,
            "cash": 2420,
            "oil": 1210
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 19.5,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 19.5,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 19.5,
            "defense": null
          },
          "vsAirplane": {
            "attack": 10.4,
            "defense": null
          },
          "vsShip": {
            "attack": 10.4,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 5.2,
            "defense": null
          },
          "vsBuildings": {
            "attack": 19.5,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 15.6,
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
            "strengthModifier": null
          },
          "mountains": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "speedModifier": null,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Axis Rocket (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Rocket",
        "averageDamage": 14.3,
        "hitpoints": 17,
        "production": {
          "costs": {
            "manpower": 495,
            "metal": 990,
            "food": 0,
            "cash": 2750,
            "oil": 1320
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 28.6,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 28.6,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 28.6,
            "defense": null
          },
          "vsAirplane": {
            "attack": 14.3,
            "defense": null
          },
          "vsShip": {
            "attack": 14.3,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 7.8,
            "defense": null
          },
          "vsBuildings": {
            "attack": 28.6,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 23.4,
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
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 15,
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
        "unitName": "Axis Rocket (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Rocket",
        "averageDamage": 19.5,
        "hitpoints": 23,
        "production": {
          "costs": {
            "manpower": 550,
            "metal": 1210,
            "food": 0,
            "cash": 3080,
            "oil": 1540
          },
          "minTimeInSeconds": 21857
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 39,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 39,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 39,
            "defense": null
          },
          "vsAirplane": {
            "attack": 19.5,
            "defense": null
          },
          "vsShip": {
            "attack": 19.5,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 11.7,
            "defense": null
          },
          "vsBuildings": {
            "attack": 39,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 33.8,
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
        "unitName": "Axis Rocket (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Rocket",
        "averageDamage": 26,
        "hitpoints": 29,
        "production": {
          "costs": {
            "manpower": 550,
            "metal": 1320,
            "food": 0,
            "cash": 3410,
            "oil": 1650
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 52,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 52,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 52,
            "defense": null
          },
          "vsAirplane": {
            "attack": 27.3,
            "defense": null
          },
          "vsShip": {
            "attack": 27.3,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 16.9,
            "defense": null
          },
          "vsBuildings": {
            "attack": 52,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 46.8,
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
            "strengthModifier": null
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 25,
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
        "unitName": "Comintern Rocket (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Rocket",
        "averageDamage": 6.8,
        "hitpoints": 10,
        "production": {
          "costs": {
            "manpower": 383,
            "metal": 680,
            "food": 0,
            "cash": 1870,
            "oil": 935
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 13.5,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 13.5,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 13.5,
            "defense": null
          },
          "vsAirplane": {
            "attack": 7.2,
            "defense": null
          },
          "vsShip": {
            "attack": 7.2,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 3.6,
            "defense": null
          },
          "vsBuildings": {
            "attack": 13.5,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 10.8,
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
            "strengthModifier": null
          },
          "mountains": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "speedModifier": null,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Comintern Rocket (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Rocket",
        "averageDamage": 9.9,
        "hitpoints": 15,
        "production": {
          "costs": {
            "manpower": 383,
            "metal": 765,
            "food": 0,
            "cash": 2125,
            "oil": 1020
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 19.8,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 19.8,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 19.8,
            "defense": null
          },
          "vsAirplane": {
            "attack": 9.9,
            "defense": null
          },
          "vsShip": {
            "attack": 9.9,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 5.4,
            "defense": null
          },
          "vsBuildings": {
            "attack": 19.8,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 16.2,
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
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 15,
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
        "unitName": "Comintern Rocket (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Rocket",
        "averageDamage": 13.5,
        "hitpoints": 20,
        "production": {
          "costs": {
            "manpower": 425,
            "metal": 935,
            "food": 0,
            "cash": 2380,
            "oil": 1190
          },
          "minTimeInSeconds": 21857
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 27,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 27,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 27,
            "defense": null
          },
          "vsAirplane": {
            "attack": 13.5,
            "defense": null
          },
          "vsShip": {
            "attack": 13.5,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 8.1,
            "defense": null
          },
          "vsBuildings": {
            "attack": 27,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 23.4,
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
        "unitName": "Comintern Rocket (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Rocket",
        "averageDamage": 18,
        "hitpoints": 25,
        "production": {
          "costs": {
            "manpower": 425,
            "metal": 1020,
            "food": 0,
            "cash": 2635,
            "oil": 1275
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 36,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 36,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 36,
            "defense": null
          },
          "vsAirplane": {
            "attack": 18.9,
            "defense": null
          },
          "vsShip": {
            "attack": 18.9,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 11.7,
            "defense": null
          },
          "vsBuildings": {
            "attack": 36,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 32.4,
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
            "strengthModifier": null
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 25,
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
        "unitName": "Pan-Asian Rocket (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Rocket",
        "averageDamage": 7.5,
        "hitpoints": 10,
        "production": {
          "costs": {
            "manpower": 450,
            "metal": 800,
            "food": 0,
            "cash": 2200,
            "oil": 1100
          },
          "minTimeInSeconds": 16714
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 15,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 15,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 15,
            "defense": null
          },
          "vsAirplane": {
            "attack": 8,
            "defense": null
          },
          "vsShip": {
            "attack": 8,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 4,
            "defense": null
          },
          "vsBuildings": {
            "attack": 15,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 12,
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
            "strengthModifier": null
          },
          "mountains": {
            "health": 10,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "speedModifier": null,
            "strengthModifier": null
          }
        }
      },
      {
        "unitName": "Pan-Asian Rocket (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Rocket",
        "averageDamage": 11,
        "hitpoints": 15,
        "production": {
          "costs": {
            "manpower": 450,
            "metal": 900,
            "food": 0,
            "cash": 2500,
            "oil": 1200
          },
          "minTimeInSeconds": 19286
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 22,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 22,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 22,
            "defense": null
          },
          "vsAirplane": {
            "attack": 11,
            "defense": null
          },
          "vsShip": {
            "attack": 11,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 6,
            "defense": null
          },
          "vsBuildings": {
            "attack": 22,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 18,
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
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 15,
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
        "unitName": "Pan-Asian Rocket (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Rocket",
        "averageDamage": 15,
        "hitpoints": 20,
        "production": {
          "costs": {
            "manpower": 500,
            "metal": 1100,
            "food": 0,
            "cash": 2800,
            "oil": 1400
          },
          "minTimeInSeconds": 21857
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 30,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 30,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 30,
            "defense": null
          },
          "vsAirplane": {
            "attack": 15,
            "defense": null
          },
          "vsShip": {
            "attack": 15,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 9,
            "defense": null
          },
          "vsBuildings": {
            "attack": 30,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 26,
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
        "unitName": "Pan-Asian Rocket (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Rocket",
        "averageDamage": 20,
        "hitpoints": 25,
        "production": {
          "costs": {
            "manpower": 500,
            "metal": 1200,
            "food": 0,
            "cash": 3100,
            "oil": 1500
          },
          "minTimeInSeconds": 24429
        },
        "specialProperties": [
          "Anti-Morale",
          "Single use",
          "Supersonic",
          "Friendly Fire"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 40,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 40,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 40,
            "defense": null
          },
          "vsAirplane": {
            "attack": 21,
            "defense": null
          },
          "vsShip": {
            "attack": 21,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 13,
            "defense": null
          },
          "vsBuildings": {
            "attack": 40,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 36,
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
            "strengthModifier": null
          },
          "mountains": {
            "health": 25,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
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
            "health": 25,
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
