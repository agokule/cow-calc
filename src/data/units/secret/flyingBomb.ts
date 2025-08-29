import { IUnitType } from '@/types';

export const flyingBombData: IUnitType = {
  genericName: 'Flying Bomb',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'LTV-N-2 Loon',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 5.0,
        hitpoints: 15,
        production: {
          costs: {
            manpower: 200,
            metal: 750,
            oil: 400,
            cash: 750,
            food: 0
          },
          minTimeInSeconds: 6300
        },
        specialProperties: [ 'Anti-Morale', 'Friendly Fire', 'Single use' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10, defense: null },
          vsLightArmor:     { attack: 10, defense: null },
          vsHeavyArmor:     { attack: 10, defense: null },
          vsAirplane:       { attack: 6,  defense: null },
          vsShip:           { attack: 6,  defense: null },
          vsSubmarine:      { attack: 3,  defense: null },
          vsBuildings:      { attack: 12, defense: null },
          vsProvinceMorale: { attack: 12, defense: null },
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
    ],
    "Axis": [
      {
        "unitName": "Axis Flying Bomb (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 5.8,
        "hitpoints": 17,
        "production": {
          "costs": {
            "manpower": 220,
            "metal": 825,
            "oil": 440,
            "cash": 825,
            "food": 0
          },
          "minTimeInSeconds": 9000
        },
        "specialProperties": [
          "Anti-Morale",
          "Friendly Fire",
          "Single use"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 11.5,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 11.5,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 11.5,
            "defense": null
          },
          "vsAirplane": {
            "attack": 6.9,
            "defense": null
          },
          "vsShip": {
            "attack": 6.9,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 3.5,
            "defense": null
          },
          "vsBuildings": {
            "attack": 13.8,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 13.8,
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
      }
    ],
    "Comintern": [
      {
        "unitName": "Comintern Flying Bomb (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 4.5,
        "hitpoints": 15,
        "production": {
          "costs": {
            "manpower": 170,
            "metal": 638,
            "oil": 340,
            "cash": 638,
            "food": 0
          },
          "minTimeInSeconds": 9000
        },
        "specialProperties": [
          "Anti-Morale",
          "Friendly Fire",
          "Single use"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 9,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 9,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 9,
            "defense": null
          },
          "vsAirplane": {
            "attack": 5.4,
            "defense": null
          },
          "vsShip": {
            "attack": 5.4,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 2.7,
            "defense": null
          },
          "vsBuildings": {
            "attack": 10.8,
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
      }
    ],
    "Pan-Asian": [
      {
        "unitName": "Pan-Asian Flying Bomb (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 6,
        "hitpoints": 15,
        "production": {
          "costs": {
            "manpower": 200,
            "metal": 750,
            "oil": 400,
            "cash": 750,
            "food": 0
          },
          "minTimeInSeconds": 6300
        },
        "specialProperties": [
          "Anti-Morale",
          "Friendly Fire",
          "Single use"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 12,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 12,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 12,
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
            "attack": 14.4,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 14.4,
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
      }
    ]
  },
};
