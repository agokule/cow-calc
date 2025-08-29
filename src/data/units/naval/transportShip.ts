import { IUnitType } from '@/types';

export const transportShipData: IUnitType = {
  genericName: 'Transport Ship',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'C2 Class',
        level: 1,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 0.7,
        hitpoints: 10,
        production: {
          costs: {
            food: 0,
            manpower: 0,
            metal: 0,
            cash: 0,
            oil: 0
          },
          minTimeInSeconds: 0
        },
        specialProperties: [ 'Vulnerable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.5, defense: 0.5 },
          vsLightArmor:     { attack: 0.5, defense: 0.5 },
          vsHeavyArmor:     { attack: 0.5, defense: 0.5 },
          vsAirplane:       { attack: 0.5, defense: 0.5 },
          vsShip:           { attack: 0.8, defense: 0.8 },
          vsSubmarine:      { attack: 0.5, defense: 0.5 },
          vsBuildings:      { attack: 0,   defense: null },
          vsProvinceMorale: { attack: 0,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'C4 Class',
        level: 2,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 1.1,
        hitpoints: 15,
        production: {
          costs: {
            food: 0,
            manpower: 0,
            metal: 0,
            cash: 0,
            oil: 0
          },
          minTimeInSeconds: 0
        },
        specialProperties: [ 'Vulnerable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.8, defense: 0.8 },
          vsLightArmor:     { attack: 0.8, defense: 0.8 },
          vsHeavyArmor:     { attack: 0.8, defense: 0.8 },
          vsAirplane:       { attack: 0.8, defense: 0.8 },
          vsShip:           { attack: 1.3, defense: 1.3 },
          vsSubmarine:      { attack: 0.8, defense: 0.8 },
          vsBuildings:      { attack: 0,   defense: null },
          vsProvinceMorale: { attack: 0,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Liberty Ship',
        level: 3,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 1.7,
        hitpoints: 20,
        production: {
          costs: {
            food: 0,
            manpower: 0,
            metal: 0,
            cash: 0,
            oil: 0
          },
          minTimeInSeconds: 0
        },
        specialProperties: [ 'Vulnerable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.3, defense: 1.3 },
          vsLightArmor:     { attack: 1.3, defense: 1.3 },
          vsHeavyArmor:     { attack: 1.3, defense: 1.3 },
          vsAirplane:       { attack: 1.3, defense: 1.3 },
          vsShip:           { attack: 2,   defense: 2 },
          vsSubmarine:      { attack: 1.3, defense: 1.3 },
          vsBuildings:      { attack: 0,   defense: null },
          vsProvinceMorale: { attack: 0,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Victory ship',
        level: 4,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 2.5,
        hitpoints: 25,
        production: {
          costs: {
            food: 0,
            manpower: 0,
            metal: 0,
            cash: 0,
            oil: 0
          },
          minTimeInSeconds: 0
        },
        specialProperties: [ 'Vulnerable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2, defense: 2 },
          vsLightArmor:     { attack: 2, defense: 2 },
          vsHeavyArmor:     { attack: 2, defense: 2 },
          vsAirplane:       { attack: 2, defense: 2 },
          vsShip:           { attack: 3, defense: 3 },
          vsSubmarine:      { attack: 2, defense: 2 },
          vsBuildings:      { attack: 0, defense: null },
          vsProvinceMorale: { attack: 0, defense: null },
          vsRocket:         { attack: 0, defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Transport Ship (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 0.8,
        "hitpoints": 12,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.6,
            "defense": 0.6
          },
          "vsLightArmor": {
            "attack": 0.6,
            "defense": 0.6
          },
          "vsHeavyArmor": {
            "attack": 0.6,
            "defense": 0.6
          },
          "vsAirplane": {
            "attack": 0.6,
            "defense": 0.6
          },
          "vsShip": {
            "attack": 0.9,
            "defense": 0.9
          },
          "vsSubmarine": {
            "attack": 0.6,
            "defense": 0.6
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
        "unitName": "Axis Transport Ship (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 1.3,
        "hitpoints": 17,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.9,
            "defense": 0.9
          },
          "vsLightArmor": {
            "attack": 0.9,
            "defense": 0.9
          },
          "vsHeavyArmor": {
            "attack": 0.9,
            "defense": 0.9
          },
          "vsAirplane": {
            "attack": 0.9,
            "defense": 0.9
          },
          "vsShip": {
            "attack": 1.5,
            "defense": 1.5
          },
          "vsSubmarine": {
            "attack": 0.9,
            "defense": 0.9
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
        "unitName": "Axis Transport Ship (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 2,
        "hitpoints": 23,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.5,
            "defense": 1.5
          },
          "vsLightArmor": {
            "attack": 1.5,
            "defense": 1.5
          },
          "vsHeavyArmor": {
            "attack": 1.5,
            "defense": 1.5
          },
          "vsAirplane": {
            "attack": 1.5,
            "defense": 1.5
          },
          "vsShip": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsSubmarine": {
            "attack": 1.5,
            "defense": 1.5
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
        "unitName": "Axis Transport Ship (Estimated Stats)",
        "level": 4,
        "doctrine": "Axis",
        "type": "Ship",
        "averageDamage": 2.9,
        "hitpoints": 29,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsLightArmor": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsHeavyArmor": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsAirplane": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsShip": {
            "attack": 3.5,
            "defense": 3.5
          },
          "vsSubmarine": {
            "attack": 2.3,
            "defense": 2.3
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
        "unitName": "Comintern Transport Ship (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 0.6,
        "hitpoints": 10,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsHeavyArmor": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 0.7,
            "defense": 0.7
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
        "unitName": "Comintern Transport Ship (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 1,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.7,
            "defense": 0.7
          },
          "vsLightArmor": {
            "attack": 0.7,
            "defense": 0.7
          },
          "vsHeavyArmor": {
            "attack": 0.7,
            "defense": 0.7
          },
          "vsAirplane": {
            "attack": 0.7,
            "defense": 0.7
          },
          "vsShip": {
            "attack": 1.2,
            "defense": 1.2
          },
          "vsSubmarine": {
            "attack": 0.7,
            "defense": 0.7
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
        "unitName": "Comintern Transport Ship (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 1.5,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.2,
            "defense": 1.2
          },
          "vsLightArmor": {
            "attack": 1.2,
            "defense": 1.2
          },
          "vsHeavyArmor": {
            "attack": 1.2,
            "defense": 1.2
          },
          "vsAirplane": {
            "attack": 1.2,
            "defense": 1.2
          },
          "vsShip": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsSubmarine": {
            "attack": 1.2,
            "defense": 1.2
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
        "unitName": "Comintern Transport Ship (Estimated Stats)",
        "level": 4,
        "doctrine": "Comintern",
        "type": "Ship",
        "averageDamage": 2.3,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsLightArmor": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsHeavyArmor": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsAirplane": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsShip": {
            "attack": 2.7,
            "defense": 2.7
          },
          "vsSubmarine": {
            "attack": 1.8,
            "defense": 1.8
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
        "unitName": "Pan-Asian Transport Ship (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 0.7,
        "hitpoints": 10,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsLightArmor": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsHeavyArmor": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsAirplane": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsShip": {
            "attack": 0.8,
            "defense": 0.8
          },
          "vsSubmarine": {
            "attack": 0.5,
            "defense": 0.5
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
        "unitName": "Pan-Asian Transport Ship (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 1.1,
        "hitpoints": 15,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 0.8,
            "defense": 0.8
          },
          "vsLightArmor": {
            "attack": 0.8,
            "defense": 0.8
          },
          "vsHeavyArmor": {
            "attack": 0.8,
            "defense": 0.8
          },
          "vsAirplane": {
            "attack": 0.8,
            "defense": 0.8
          },
          "vsShip": {
            "attack": 1.3,
            "defense": 1.3
          },
          "vsSubmarine": {
            "attack": 0.8,
            "defense": 0.8
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
        "unitName": "Pan-Asian Transport Ship (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 1.7,
        "hitpoints": 20,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1.3,
            "defense": 1.3
          },
          "vsLightArmor": {
            "attack": 1.3,
            "defense": 1.3
          },
          "vsHeavyArmor": {
            "attack": 1.3,
            "defense": 1.3
          },
          "vsAirplane": {
            "attack": 1.3,
            "defense": 1.3
          },
          "vsShip": {
            "attack": 2,
            "defense": 2
          },
          "vsSubmarine": {
            "attack": 1.3,
            "defense": 1.3
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
        "unitName": "Pan-Asian Transport Ship (Estimated Stats)",
        "level": 4,
        "doctrine": "Pan-Asian",
        "type": "Ship",
        "averageDamage": 2.5,
        "hitpoints": 25,
        "production": {
          "costs": {
            "food": 0,
            "manpower": 0,
            "metal": 0,
            "cash": 0,
            "oil": 0
          },
          "minTimeInSeconds": 0
        },
        "specialProperties": [
          "Vulnerable"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 2,
            "defense": 2
          },
          "vsLightArmor": {
            "attack": 2,
            "defense": 2
          },
          "vsHeavyArmor": {
            "attack": 2,
            "defense": 2
          },
          "vsAirplane": {
            "attack": 2,
            "defense": 2
          },
          "vsShip": {
            "attack": 3,
            "defense": 3
          },
          "vsSubmarine": {
            "attack": 2,
            "defense": 2
          },
          "vsBuildings": {
            "attack": 0,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 0,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": null,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": null,
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
