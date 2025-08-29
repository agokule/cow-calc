import { IUnitType } from '@/types';

export const nuclearBomberData: IUnitType = {
  genericName: 'Nuclear Bomber',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Boeing B-29 Superfortress',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 628,
        hitpoints: 75,
        production: {
          costs: {
            food: 3500,
            manpower: 5700,
            metal: 3500,
            cash: 21000,
            oil: 9400
          },
          minTimeInSeconds: 47700
        },
        specialProperties: [ 'Storm', 'Air Unit', 'Friendly Fire', 'Converts on Attack', 'Nuclear Weapon', 'Nuclear Fallout' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1200, defense: null },
          vsLightArmor:     { attack: 800,  defense: null },
          vsHeavyArmor:     { attack: 750,  defense: null },
          vsAirplane:       { attack: 500,  defense: null },
          vsShip:           { attack: 750,  defense: null },
          vsSubmarine:      { attack: 200,  defense: null },
          vsBuildings:      { attack: 750,  defense: null },
          vsProvinceMorale: { attack: 75,   defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
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
      {
        unitName: 'N. American B-45 Tornado',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 854,
        hitpoints: 98,
        production: {
          costs: {
            food: 3700,
            manpower: 5800,
            metal: 3700,
            cash: 22000,
            oil: 9800
          },
          minTimeInSeconds: 49500
        },
        specialProperties: [ 'Storm', 'Air Unit', 'Friendly Fire', 'Converts on Attack', 'Nuclear Weapon', 'Nuclear Fallout' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1600, defense: null },
          vsLightArmor:     { attack: 1200, defense: null },
          vsHeavyArmor:     { attack: 1000, defense: null },
          vsAirplane:       { attack: 700,  defense: null },
          vsShip:           { attack: 1000, defense: null },
          vsSubmarine:      { attack: 250,  defense: null },
          vsBuildings:      { attack: 1000, defense: null },
          vsProvinceMorale: { attack: 85,   defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 98,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Boeing B-47 Stratojet',
        level: 3,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 1163,
        hitpoints: 121,
        production: {
          costs: {
            food: 3900,
            manpower: 5900,
            metal: 3900,
            cash: 23000,
            oil: 10000
          },
          minTimeInSeconds: 50400
        },
        specialProperties: [ 'Storm', 'Air Unit', 'Friendly Fire', 'Converts on Attack', 'Nuclear Weapon', 'Nuclear Fallout' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2200, defense: null },
          vsLightArmor:     { attack: 1600, defense: null },
          vsHeavyArmor:     { attack: 1350, defense: null },
          vsAirplane:       { attack: 1000, defense: null },
          vsShip:           { attack: 1350, defense: null },
          vsSubmarine:      { attack: 350,  defense: null },
          vsBuildings:      { attack: 1350, defense: null },
          vsProvinceMorale: { attack: 100,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 121,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    "Axis": [
      {
        "unitName": "Axis Nuclear Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 722.2,
        "hitpoints": 75,
        "production": {
          "costs": {
            "food": 3850,
            "manpower": 6270,
            "metal": 3850,
            "cash": 23100,
            "oil": 10340
          },
          "minTimeInSeconds": 68143
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Converts on Attack",
          "Nuclear Weapon",
          "Nuclear Fallout"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1380,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 920,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 862.5,
            "defense": null
          },
          "vsAirplane": {
            "attack": 575,
            "defense": null
          },
          "vsShip": {
            "attack": 862.5,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 230,
            "defense": null
          },
          "vsBuildings": {
            "attack": 862.5,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 86.3,
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
      },
      {
        "unitName": "Axis Nuclear Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 982.1,
        "hitpoints": 98,
        "production": {
          "costs": {
            "food": 4070,
            "manpower": 6380,
            "metal": 4070,
            "cash": 24200,
            "oil": 10780
          },
          "minTimeInSeconds": 70714
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Converts on Attack",
          "Nuclear Weapon",
          "Nuclear Fallout"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1840,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 1380,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 1150,
            "defense": null
          },
          "vsAirplane": {
            "attack": 805,
            "defense": null
          },
          "vsShip": {
            "attack": 1150,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 287.5,
            "defense": null
          },
          "vsBuildings": {
            "attack": 1150,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 97.7,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 98,
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
        "unitName": "Axis Nuclear Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Axis",
        "type": "Airplane",
        "averageDamage": 1337.4,
        "hitpoints": 121,
        "production": {
          "costs": {
            "food": 4290,
            "manpower": 6490,
            "metal": 4290,
            "cash": 25300,
            "oil": 11000
          },
          "minTimeInSeconds": 72000
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Converts on Attack",
          "Nuclear Weapon",
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
            "attack": 1552.5,
            "defense": null
          },
          "vsAirplane": {
            "attack": 1150,
            "defense": null
          },
          "vsShip": {
            "attack": 1552.5,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 402.5,
            "defense": null
          },
          "vsBuildings": {
            "attack": 1552.5,
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
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 121,
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
        "unitName": "Comintern Nuclear Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 565.2,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 2975,
            "manpower": 4845,
            "metal": 2975,
            "cash": 17850,
            "oil": 7990
          },
          "minTimeInSeconds": 68143
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Converts on Attack",
          "Nuclear Weapon",
          "Nuclear Fallout"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1080,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 720,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 675,
            "defense": null
          },
          "vsAirplane": {
            "attack": 450,
            "defense": null
          },
          "vsShip": {
            "attack": 675,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 180,
            "defense": null
          },
          "vsBuildings": {
            "attack": 675,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 67.5,
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
      },
      {
        "unitName": "Comintern Nuclear Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 768.6,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 3145,
            "manpower": 4930,
            "metal": 3145,
            "cash": 18700,
            "oil": 8330
          },
          "minTimeInSeconds": 70714
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Converts on Attack",
          "Nuclear Weapon",
          "Nuclear Fallout"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1440,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 1080,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 900,
            "defense": null
          },
          "vsAirplane": {
            "attack": 630,
            "defense": null
          },
          "vsShip": {
            "attack": 900,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 225,
            "defense": null
          },
          "vsBuildings": {
            "attack": 900,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 76.5,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 98,
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
        "unitName": "Comintern Nuclear Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Comintern",
        "type": "Airplane",
        "averageDamage": 1046.7,
        "hitpoints": 105,
        "production": {
          "costs": {
            "food": 3315,
            "manpower": 5015,
            "metal": 3315,
            "cash": 19550,
            "oil": 8500
          },
          "minTimeInSeconds": 72000
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Converts on Attack",
          "Nuclear Weapon",
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
            "attack": 1215,
            "defense": null
          },
          "vsAirplane": {
            "attack": 900,
            "defense": null
          },
          "vsShip": {
            "attack": 1215,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 315,
            "defense": null
          },
          "vsBuildings": {
            "attack": 1215,
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
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 121,
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
        "unitName": "Pan-Asian Nuclear Bomber (Estimated Stats)",
        "level": 1,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 628,
        "hitpoints": 65,
        "production": {
          "costs": {
            "food": 3500,
            "manpower": 5700,
            "metal": 3500,
            "cash": 21000,
            "oil": 9400
          },
          "minTimeInSeconds": 68143
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Converts on Attack",
          "Nuclear Weapon",
          "Nuclear Fallout"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1200,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 800,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 750,
            "defense": null
          },
          "vsAirplane": {
            "attack": 500,
            "defense": null
          },
          "vsShip": {
            "attack": 750,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 200,
            "defense": null
          },
          "vsBuildings": {
            "attack": 750,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 75,
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
      },
      {
        "unitName": "Pan-Asian Nuclear Bomber (Estimated Stats)",
        "level": 2,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 854,
        "hitpoints": 85,
        "production": {
          "costs": {
            "food": 3700,
            "manpower": 5800,
            "metal": 3700,
            "cash": 22000,
            "oil": 9800
          },
          "minTimeInSeconds": 70714
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Converts on Attack",
          "Nuclear Weapon",
          "Nuclear Fallout"
        ],
        "combatStatistics": {
          "vsUnarmored": {
            "attack": 1600,
            "defense": null
          },
          "vsLightArmor": {
            "attack": 1200,
            "defense": null
          },
          "vsHeavyArmor": {
            "attack": 1000,
            "defense": null
          },
          "vsAirplane": {
            "attack": 700,
            "defense": null
          },
          "vsShip": {
            "attack": 1000,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 250,
            "defense": null
          },
          "vsBuildings": {
            "attack": 1000,
            "defense": null
          },
          "vsProvinceMorale": {
            "attack": 85,
            "defense": null
          },
          "vsRocket": {
            "attack": 0,
            "defense": 0
          }
        },
        "terrainEffects": {
          "plains": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 98,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 98,
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
        "unitName": "Pan-Asian Nuclear Bomber (Estimated Stats)",
        "level": 3,
        "doctrine": "Pan-Asian",
        "type": "Airplane",
        "averageDamage": 1163,
        "hitpoints": 105,
        "production": {
          "costs": {
            "food": 3900,
            "manpower": 5900,
            "metal": 3900,
            "cash": 23000,
            "oil": 10000
          },
          "minTimeInSeconds": 72000
        },
        "specialProperties": [
          "Storm",
          "Air Unit",
          "Friendly Fire",
          "Converts on Attack",
          "Nuclear Weapon",
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
            "attack": 1350,
            "defense": null
          },
          "vsAirplane": {
            "attack": 1000,
            "defense": null
          },
          "vsShip": {
            "attack": 1350,
            "defense": null
          },
          "vsSubmarine": {
            "attack": 350,
            "defense": null
          },
          "vsBuildings": {
            "attack": 1350,
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
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "hills": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "mountains": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "forest": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "urban": {
            "health": 121,
            "attackModifier": null,
            "speedModifier": null,
            "strengthModifier": null
          },
          "sea": {
            "health": 121,
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
