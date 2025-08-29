import { IUnitType } from '@/types';

export const nuclearRocketData: IUnitType = {
  genericName: 'Nuclear Rocket',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'SM-62 Snark',
        level: 1,
        doctrine: 'Allies',
        type: 'Rocket',
        averageDamage: 1256,
        hitpoints: 20,
        production: {
          costs: {
            food: 6800,
            manpower: 4600,
            metal: 6800,
            cash: 24000,
            oil: 8100
          },
          minTimeInSeconds: 50400
        },
        specialProperties: [ 'Storm', 'Air Unit', 'Friendly Fire', 'Rocket', 'Converts on Attack', 'Nuclear Weapon', 'Supersonic', 'Nuclear Fallout' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2200, defense: null },
          vsLightArmor:     { attack: 1600, defense: null },
          vsHeavyArmor:     { attack: 1600, defense: null },
          vsAirplane:       { attack: 1000, defense: null },
          vsShip:           { attack: 1600, defense: null },
          vsSubmarine:      { attack: 350,  defense: null },
          vsBuildings:      { attack: 1600, defense: null },
          vsProvinceMorale: { attack: 100,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
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
    ],
    "Axis": [
      {
        "unitName": "Axis Nuclear Rocket (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Rocket",
        "averageDamage": 1444.4,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 7480,
            "manpower": 5060,
            "metal": 7480,
            "cash": 26400,
            "oil": 8910
          },
          "minTimeInSeconds": 72000
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Rocket",
          "Converts on Attack",
          "Nuclear Weapon",
          "Supersonic",
          "Nuclear Fallout"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2530,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 1840,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 1840,
            "defense": null
          },
          "vsAirplane": {
            "attack": 1150,
            "defense": null
          },
          "vsShip": {
            "attack": 1840,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 402.5,
            "defense": null
          },
          "vsBuildings": {
            "attack": 1840,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 115,
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
      }
    ],
    "Comintern": [
      {
        "unitName": "Comintern Nuclear Rocket (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Rocket",
        "averageDamage": 1130.4,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 5780,
            "manpower": 3910,
            "metal": 5780,
            "cash": 20400,
            "oil": 6885
          },
          "minTimeInSeconds": 72000
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Rocket",
          "Converts on Attack",
          "Nuclear Weapon",
          "Supersonic",
          "Nuclear Fallout"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1980,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 1440,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 1440,
            "defense": null
          },
          "vsAirplane": {
            "attack": 900,
            "defense": null
          },
          "vsShip": {
            "attack": 1440,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 315,
            "defense": null
          },
          "vsBuildings": {
            "attack": 1440,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 90,
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
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Nuclear Rocket (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Rocket",
        "averageDamage": 1256,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 6800,
            "manpower": 4600,
            "metal": 6800,
            "cash": 24000,
            "oil": 8100
          },
          "minTimeInSeconds": 72000
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Rocket",
          "Converts on Attack",
          "Nuclear Weapon",
          "Supersonic",
          "Nuclear Fallout"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2200,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 1600,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 1600,
            "defense": null
          },
          "vsAirplane": {
            "attack": 1000,
            "defense": null
          },
          "vsShip": {
            "attack": 1600,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 350,
            "defense": null
          },
          "vsBuildings": {
            "attack": 1600,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 100,
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
      }
    ]
  },
};
