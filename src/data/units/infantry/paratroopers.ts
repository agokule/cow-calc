import { IUnitType } from '@/types';

export const paratrooperData: IUnitType[] = [
  {
    genericName: 'Paratroopers',
    mode: 'On Ground',
    doctrineVariants: {
      Allies: [
        {
          unitName: 'Waco CG-4A',
          level: 1,
          doctrine: 'Allies',
          type: 'Unarmored',
          averageDamage: 5.5,
          hitpoints: 39,
          production: {
            costs: {
              food: 1200,
              manpower: 1200,
              metal: 0,
              cash: 2200,
              oil: 1000
            },
            minTimeInSeconds: 16200
          },
          specialProperties: [ 'Partial Stealth', 'Convertible' ],
          combatStatistics: {
            vsUnarmored:      { attack: 9,   defense: 9 },
            vsLightArmor:     { attack: 4.5, defense: 4.5 },
            vsHeavyArmor:     { attack: 3,   defense: 3 },
            vsAirplane:       { attack: 1,   defense: 1 },
            vsShip:           { attack: 1,   defense: 1 },
            vsSubmarine:      { attack: 1,   defense: 1 },
            vsBuildings:      { attack: 0.8, defense: 0.8 },
            vsProvinceMorale: { attack: 0.1, defense: null },
            vsRocket:         { attack: 0,   defense: 0 },
          },
          terrainEffects: {
            plains:         { health: 39,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
            hills:          { health: 39,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
            mountains:      { health: 39,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.25 },
            forest:         { health: 39,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
            urban:          { health: 39,   attackModifier: null, speedModifier: null, strengthModifier: null },
            sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
            enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
          },
        },
        {
          unitName: 'Airspeed AS.51 Horsa',
          level: 2,
          doctrine: 'Allies',
          type: 'Unarmored',
          averageDamage: 6.8,
          hitpoints: 50,
          production: {
            costs: {
              food: 1300,
              manpower: 1200,
              metal: 0,
              cash: 2400,
              oil: 1200
            },
            minTimeInSeconds: 18900
          },
          specialProperties: [ 'Partial Stealth', 'Convertible' ],
          combatStatistics: {
            vsUnarmored:      { attack: 11,  defense: 11 },
            vsLightArmor:     { attack: 5.5, defense: 5.5 },
            vsHeavyArmor:     { attack: 4,   defense: 4 },
            vsAirplane:       { attack: 1.5, defense: 1.5 },
            vsShip:           { attack: 1.5, defense: 1.5 },
            vsSubmarine:      { attack: 1.5, defense: 1.5 },
            vsBuildings:      { attack: 1.2, defense: 1.2 },
            vsProvinceMorale: { attack: 0.2, defense: null },
            vsRocket:         { attack: 0,   defense: 0 },
          },
          terrainEffects: {
            plains:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
            hills:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
            mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.25 },
            forest:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
            urban:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
            sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
            enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
          },
        },
        {
          unitName: 'Armstrong Whitworth A.W.41 Albemarle',
          level: 3,
          doctrine: 'Allies',
          type: 'Unarmored',
          averageDamage: 9.2,
          hitpoints: 61,
          production: {
            costs: {
              food: 1500,
              manpower: 1200,
              metal: 0,
              cash: 2800,
              oil: 1300
            },
            minTimeInSeconds: 21600
          },
          specialProperties: [ 'Partial Stealth', 'Convertible' ],
          combatStatistics: {
            vsUnarmored:      { attack: 14.5, defense: 14.5 },
            vsLightArmor:     { attack: 7.5,  defense: 7.5 },
            vsHeavyArmor:     { attack: 5.5,  defense: 5.5 },
            vsAirplane:       { attack: 2.5,  defense: 2.5 },
            vsShip:           { attack: 2.5,  defense: 2.5 },
            vsSubmarine:      { attack: 2.5,  defense: 2.5 },
            vsBuildings:      { attack: 1.8,  defense: 1.8 },
            vsProvinceMorale: { attack: 0.2,  defense: null },
            vsRocket:         { attack: 0,    defense: 0 },
          },
          terrainEffects: {
            plains:         { health: 61,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
            hills:          { health: 61,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
            mountains:      { health: 61,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.25 },
            forest:         { health: 61,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
            urban:          { health: 61,   attackModifier: null, speedModifier: null, strengthModifier: null },
            sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
            enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
          },
        },
        {
          unitName: 'Handley Page Halifax A.71',
          level: 4,
          doctrine: 'Allies',
          type: 'Unarmored',
          averageDamage: 12.3,
          hitpoints: 77,
          production: {
            costs: {
              food: 1700,
              manpower: 1300,
              metal: 0,
              cash: 3200,
              oil: 1500
            },
            minTimeInSeconds: 24300
          },
          specialProperties: [ 'Partial Stealth', 'Convertible' ],
          combatStatistics: {
            vsUnarmored:      { attack: 20,  defense: 20 },
            vsLightArmor:     { attack: 10,  defense: 10 },
            vsHeavyArmor:     { attack: 7,   defense: 7 },
            vsAirplane:       { attack: 4,   defense: 4 },
            vsShip:           { attack: 4,   defense: 4 },
            vsSubmarine:      { attack: 4,   defense: 4 },
            vsBuildings:      { attack: 2.8, defense: 2.8 },
            vsProvinceMorale: { attack: 0.3, defense: null },
            vsRocket:         { attack: 0,   defense: 0 },
          },
          terrainEffects: {
            plains:         { health: 77,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
            hills:          { health: 77,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
            mountains:      { health: 77,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.25 },
            forest:         { health: 77,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
            urban:          { health: 77,   attackModifier: null, speedModifier: null, strengthModifier: null },
            sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
            enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
          },
        },
      ],
      "Axis": [
        {
          "unitName": "Axis Paratroopers (On Ground, Estimated Stats)",
          "level": 1,
          "doctrine": "Axis",
          "type": "Unarmored",
          "averageDamage": 6.3,
          "hitpoints": 41,
          "production": {
            "costs": {
              "food": 1553,
              "manpower": 1553,
              "metal": 0,
              "cash": 2847,
              "oil": 1294
            },
            "minTimeInSeconds": 23143
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 10.4,
              "defense": 10.4
            },
            "vsLightArmor": {
              "attack": 5.2,
              "defense": 5.2
            },
            "vsHeavyArmor": {
              "attack": 3.5,
              "defense": 3.5
            },
            "vsAirplane": {
              "attack": 1.2,
              "defense": 1.2
            },
            "vsShip": {
              "attack": 1.2,
              "defense": 1.2
            },
            "vsSubmarine": {
              "attack": 1.2,
              "defense": 1.2
            },
            "vsBuildings": {
              "attack": 0.9,
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
              "health": 41,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "hills": {
              "health": 41,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "mountains": {
              "health": 41,
              "attackModifier": null,
              "speedModifier": -0.5,
              "strengthModifier": 0.25
            },
            "forest": {
              "health": 41,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.5
            },
            "urban": {
              "health": 39,
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
          "unitName": "Axis Paratroopers (On Ground, Estimated Stats)",
          "level": 2,
          "doctrine": "Axis",
          "type": "Unarmored",
          "averageDamage": 7.8,
          "hitpoints": 52,
          "production": {
            "costs": {
              "food": 1682,
              "manpower": 1553,
              "metal": 0,
              "cash": 3106,
              "oil": 1553
            },
            "minTimeInSeconds": 27000
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 12.6,
              "defense": 12.6
            },
            "vsLightArmor": {
              "attack": 6.3,
              "defense": 6.3
            },
            "vsHeavyArmor": {
              "attack": 4.6,
              "defense": 4.6
            },
            "vsAirplane": {
              "attack": 1.7,
              "defense": 1.7
            },
            "vsShip": {
              "attack": 1.7,
              "defense": 1.7
            },
            "vsSubmarine": {
              "attack": 1.7,
              "defense": 1.7
            },
            "vsBuildings": {
              "attack": 1.4,
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
              "health": 52,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "hills": {
              "health": 52,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "mountains": {
              "health": 52,
              "attackModifier": null,
              "speedModifier": -0.5,
              "strengthModifier": 0.25
            },
            "forest": {
              "health": 52,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.5
            },
            "urban": {
              "health": 50,
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
          "unitName": "Axis Paratroopers (On Ground, Estimated Stats)",
          "level": 3,
          "doctrine": "Axis",
          "type": "Unarmored",
          "averageDamage": 10.6,
          "hitpoints": 64,
          "production": {
            "costs": {
              "food": 1941,
              "manpower": 1553,
              "metal": 0,
              "cash": 3624,
              "oil": 1682
            },
            "minTimeInSeconds": 30857
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 16.7,
              "defense": 16.7
            },
            "vsLightArmor": {
              "attack": 8.6,
              "defense": 8.6
            },
            "vsHeavyArmor": {
              "attack": 6.3,
              "defense": 6.3
            },
            "vsAirplane": {
              "attack": 2.9,
              "defense": 2.9
            },
            "vsShip": {
              "attack": 2.9,
              "defense": 2.9
            },
            "vsSubmarine": {
              "attack": 2.9,
              "defense": 2.9
            },
            "vsBuildings": {
              "attack": 2.1,
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
              "health": 64,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "hills": {
              "health": 64,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "mountains": {
              "health": 64,
              "attackModifier": null,
              "speedModifier": -0.5,
              "strengthModifier": 0.25
            },
            "forest": {
              "health": 64,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.5
            },
            "urban": {
              "health": 61,
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
          "unitName": "Axis Paratroopers (On Ground, Estimated Stats)",
          "level": 4,
          "doctrine": "Axis",
          "type": "Unarmored",
          "averageDamage": 14.1,
          "hitpoints": 81,
          "production": {
            "costs": {
              "food": 2200,
              "manpower": 1682,
              "metal": 0,
              "cash": 4141,
              "oil": 1941
            },
            "minTimeInSeconds": 34714
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 23,
              "defense": 23
            },
            "vsLightArmor": {
              "attack": 11.5,
              "defense": 11.5
            },
            "vsHeavyArmor": {
              "attack": 8,
              "defense": 8
            },
            "vsAirplane": {
              "attack": 4.6,
              "defense": 4.6
            },
            "vsShip": {
              "attack": 4.6,
              "defense": 4.6
            },
            "vsSubmarine": {
              "attack": 4.6,
              "defense": 4.6
            },
            "vsBuildings": {
              "attack": 3.2,
              "defense": 3.2
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
              "health": 81,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "hills": {
              "health": 81,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "mountains": {
              "health": 81,
              "attackModifier": null,
              "speedModifier": -0.5,
              "strengthModifier": 0.25
            },
            "forest": {
              "health": 81,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.5
            },
            "urban": {
              "health": 77,
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
          "unitName": "Comintern Paratroopers (On Ground, Estimated Stats)",
          "level": 1,
          "doctrine": "Comintern",
          "type": "Unarmored",
          "averageDamage": 5,
          "hitpoints": 35,
          "production": {
            "costs": {
              "food": 1200,
              "manpower": 1200,
              "metal": 0,
              "cash": 2200,
              "oil": 1000
            },
            "minTimeInSeconds": 23143
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 8.1,
              "defense": 8.1
            },
            "vsLightArmor": {
              "attack": 4.1,
              "defense": 4.1
            },
            "vsHeavyArmor": {
              "attack": 2.7,
              "defense": 2.7
            },
            "vsAirplane": {
              "attack": 0.9,
              "defense": 0.9
            },
            "vsShip": {
              "attack": 0.9,
              "defense": 0.9
            },
            "vsSubmarine": {
              "attack": 0.9,
              "defense": 0.9
            },
            "vsBuildings": {
              "attack": 0.7,
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
              "health": 35,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "hills": {
              "health": 35,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "mountains": {
              "health": 35,
              "attackModifier": null,
              "speedModifier": -0.5,
              "strengthModifier": 0.25
            },
            "forest": {
              "health": 35,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.5
            },
            "urban": {
              "health": 39,
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
          "unitName": "Comintern Paratroopers (On Ground, Estimated Stats)",
          "level": 2,
          "doctrine": "Comintern",
          "type": "Unarmored",
          "averageDamage": 6.1,
          "hitpoints": 45,
          "production": {
            "costs": {
              "food": 1300,
              "manpower": 1200,
              "metal": 0,
              "cash": 2400,
              "oil": 1200
            },
            "minTimeInSeconds": 27000
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 9.9,
              "defense": 9.9
            },
            "vsLightArmor": {
              "attack": 5,
              "defense": 5
            },
            "vsHeavyArmor": {
              "attack": 3.6,
              "defense": 3.6
            },
            "vsAirplane": {
              "attack": 1.4,
              "defense": 1.4
            },
            "vsShip": {
              "attack": 1.4,
              "defense": 1.4
            },
            "vsSubmarine": {
              "attack": 1.4,
              "defense": 1.4
            },
            "vsBuildings": {
              "attack": 1.1,
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
              "health": 50,
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
          "unitName": "Comintern Paratroopers (On Ground, Estimated Stats)",
          "level": 3,
          "doctrine": "Comintern",
          "type": "Unarmored",
          "averageDamage": 8.3,
          "hitpoints": 55,
          "production": {
            "costs": {
              "food": 1500,
              "manpower": 1200,
              "metal": 0,
              "cash": 2800,
              "oil": 1300
            },
            "minTimeInSeconds": 30857
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 13.1,
              "defense": 13.1
            },
            "vsLightArmor": {
              "attack": 6.8,
              "defense": 6.8
            },
            "vsHeavyArmor": {
              "attack": 5,
              "defense": 5
            },
            "vsAirplane": {
              "attack": 2.3,
              "defense": 2.3
            },
            "vsShip": {
              "attack": 2.3,
              "defense": 2.3
            },
            "vsSubmarine": {
              "attack": 2.3,
              "defense": 2.3
            },
            "vsBuildings": {
              "attack": 1.6,
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
              "health": 55,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "hills": {
              "health": 55,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "mountains": {
              "health": 55,
              "attackModifier": null,
              "speedModifier": -0.5,
              "strengthModifier": 0.25
            },
            "forest": {
              "health": 55,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.5
            },
            "urban": {
              "health": 61,
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
          "unitName": "Comintern Paratroopers (On Ground, Estimated Stats)",
          "level": 4,
          "doctrine": "Comintern",
          "type": "Unarmored",
          "averageDamage": 11.1,
          "hitpoints": 70,
          "production": {
            "costs": {
              "food": 1700,
              "manpower": 1300,
              "metal": 0,
              "cash": 3200,
              "oil": 1500
            },
            "minTimeInSeconds": 34714
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 18,
              "defense": 18
            },
            "vsLightArmor": {
              "attack": 9,
              "defense": 9
            },
            "vsHeavyArmor": {
              "attack": 6.3,
              "defense": 6.3
            },
            "vsAirplane": {
              "attack": 3.6,
              "defense": 3.6
            },
            "vsShip": {
              "attack": 3.6,
              "defense": 3.6
            },
            "vsSubmarine": {
              "attack": 3.6,
              "defense": 3.6
            },
            "vsBuildings": {
              "attack": 2.5,
              "defense": 2.5
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
              "health": 70,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "hills": {
              "health": 70,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.25
            },
            "mountains": {
              "health": 70,
              "attackModifier": null,
              "speedModifier": -0.5,
              "strengthModifier": 0.25
            },
            "forest": {
              "health": 70,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.5
            },
            "urban": {
              "health": 77,
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
          "unitName": "Pan-Asian Paratroopers (On Ground, Estimated Stats)",
          "level": 1,
          "doctrine": "Pan-Asian",
          "type": "Unarmored",
          "averageDamage": 5.5,
          "hitpoints": 35,
          "production": {
            "costs": {
              "food": 1412,
              "manpower": 1412,
              "metal": 0,
              "cash": 2588,
              "oil": 1176
            },
            "minTimeInSeconds": 23143
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 9,
              "defense": 9
            },
            "vsLightArmor": {
              "attack": 4.5,
              "defense": 4.5
            },
            "vsHeavyArmor": {
              "attack": 3,
              "defense": 3
            },
            "vsAirplane": {
              "attack": 1,
              "defense": 1
            },
            "vsShip": {
              "attack": 1,
              "defense": 1
            },
            "vsSubmarine": {
              "attack": 1,
              "defense": 1
            },
            "vsBuildings": {
              "attack": 0.8,
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
              "health": 35,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.45
            },
            "hills": {
              "health": 35,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.45
            },
            "mountains": {
              "health": 35,
              "attackModifier": null,
              "speedModifier": -0.5,
              "strengthModifier": 0.45
            },
            "forest": {
              "health": 35,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.7
            },
            "urban": {
              "health": 39,
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
          "unitName": "Pan-Asian Paratroopers (On Ground, Estimated Stats)",
          "level": 2,
          "doctrine": "Pan-Asian",
          "type": "Unarmored",
          "averageDamage": 6.8,
          "hitpoints": 45,
          "production": {
            "costs": {
              "food": 1529,
              "manpower": 1412,
              "metal": 0,
              "cash": 2824,
              "oil": 1412
            },
            "minTimeInSeconds": 27000
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 11,
              "defense": 11
            },
            "vsLightArmor": {
              "attack": 5.5,
              "defense": 5.5
            },
            "vsHeavyArmor": {
              "attack": 4,
              "defense": 4
            },
            "vsAirplane": {
              "attack": 1.5,
              "defense": 1.5
            },
            "vsShip": {
              "attack": 1.5,
              "defense": 1.5
            },
            "vsSubmarine": {
              "attack": 1.5,
              "defense": 1.5
            },
            "vsBuildings": {
              "attack": 1.2,
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
              "health": 50,
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
          "unitName": "Pan-Asian Paratroopers (On Ground, Estimated Stats)",
          "level": 3,
          "doctrine": "Pan-Asian",
          "type": "Unarmored",
          "averageDamage": 9.2,
          "hitpoints": 55,
          "production": {
            "costs": {
              "food": 1765,
              "manpower": 1412,
              "metal": 0,
              "cash": 3294,
              "oil": 1529
            },
            "minTimeInSeconds": 30857
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 14.5,
              "defense": 14.5
            },
            "vsLightArmor": {
              "attack": 7.5,
              "defense": 7.5
            },
            "vsHeavyArmor": {
              "attack": 5.5,
              "defense": 5.5
            },
            "vsAirplane": {
              "attack": 2.5,
              "defense": 2.5
            },
            "vsShip": {
              "attack": 2.5,
              "defense": 2.5
            },
            "vsSubmarine": {
              "attack": 2.5,
              "defense": 2.5
            },
            "vsBuildings": {
              "attack": 1.8,
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
              "health": 55,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.45
            },
            "hills": {
              "health": 55,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.45
            },
            "mountains": {
              "health": 55,
              "attackModifier": null,
              "speedModifier": -0.5,
              "strengthModifier": 0.45
            },
            "forest": {
              "health": 55,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.7
            },
            "urban": {
              "health": 61,
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
          "unitName": "Pan-Asian Paratroopers (On Ground, Estimated Stats)",
          "level": 4,
          "doctrine": "Pan-Asian",
          "type": "Unarmored",
          "averageDamage": 12.3,
          "hitpoints": 70,
          "production": {
            "costs": {
              "food": 2000,
              "manpower": 1529,
              "metal": 0,
              "cash": 3765,
              "oil": 1765
            },
            "minTimeInSeconds": 34714
          },
          "specialProperties": [
            "Partial Stealth",
            "Convertible"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 20,
              "defense": 20
            },
            "vsLightArmor": {
              "attack": 10,
              "defense": 10
            },
            "vsHeavyArmor": {
              "attack": 7,
              "defense": 7
            },
            "vsAirplane": {
              "attack": 4,
              "defense": 4
            },
            "vsShip": {
              "attack": 4,
              "defense": 4
            },
            "vsSubmarine": {
              "attack": 4,
              "defense": 4
            },
            "vsBuildings": {
              "attack": 2.8,
              "defense": 2.8
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
              "health": 70,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.45
            },
            "hills": {
              "health": 70,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.45
            },
            "mountains": {
              "health": 70,
              "attackModifier": null,
              "speedModifier": -0.5,
              "strengthModifier": 0.45
            },
            "forest": {
              "health": 70,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": 0.7
            },
            "urban": {
              "health": 77,
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
  },
  {
    genericName: 'Paratroopers',
    mode: 'In Air',
    doctrineVariants: {
      Allies: [
        {
          unitName: 'Waco CG-4A',
          level: 1,
          doctrine: 'Allies',
          type: 'Airplane',
          averageDamage: 0.8,
          hitpoints: 39,
          production: {
            costs: {
              food: 1200,
              manpower: 1200,
              metal: 0,
              cash: 2200,
              oil: 1000
            },
            minTimeInSeconds: 16200
          },
          specialProperties: [ 'Partial Stealth', 'Aircraft', 'Converts on Attack' ],
          combatStatistics: {
            vsUnarmored:      { attack: 1,   defense: 0.5 },
            vsLightArmor:     { attack: 1,   defense: 0.5 },
            vsHeavyArmor:     { attack: 1,   defense: 0.5 },
            vsAirplane:       { attack: 1,   defense: 0.5 },
            vsShip:           { attack: 1,   defense: 0.5 },
            vsSubmarine:      { attack: 1,   defense: 0.5 },
            vsBuildings:      { attack: 0.2, defense: 0.1 },
            vsProvinceMorale: { attack: 0,   defense: null },
            vsRocket:         { attack: 0,   defense: 0 },
          },
          terrainEffects: {
            plains:         { health: 39,   attackModifier: null, speedModifier: null, strengthModifier: null },
            hills:          { health: 39,   attackModifier: null, speedModifier: null, strengthModifier: null },
            mountains:      { health: 39,   attackModifier: null, speedModifier: null, strengthModifier: null },
            forest:         { health: 39,   attackModifier: null, speedModifier: null, strengthModifier: null },
            urban:          { health: 39,   attackModifier: null, speedModifier: null, strengthModifier: null },
            sea:            { health: 39,   attackModifier: null, speedModifier: null, strengthModifier: null },
            enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
          },
        },
        {
          unitName: 'Airspeed AS.51 Horsa',
          level: 2,
          doctrine: 'Allies',
          type: 'Airplane',
          averageDamage: 1.1,
          hitpoints: 50,
          production: {
            costs: {
              food: 1300,
              manpower: 1200,
              metal: 0,
              cash: 2400,
              oil: 1200
            },
            minTimeInSeconds: 18900
          },
          specialProperties: [ 'Partial Stealth', 'Aircraft', 'Converts on Attack' ],
          combatStatistics: {
            vsUnarmored:      { attack: 1.5, defense: 0.8 },
            vsLightArmor:     { attack: 1.5, defense: 0.8 },
            vsHeavyArmor:     { attack: 1.5, defense: 0.8 },
            vsAirplane:       { attack: 1.5, defense: 0.8 },
            vsShip:           { attack: 1.5, defense: 0.8 },
            vsSubmarine:      { attack: 1.5, defense: 0.8 },
            vsBuildings:      { attack: 0.3, defense: 0.2 },
            vsProvinceMorale: { attack: 0,   defense: null },
            vsRocket:         { attack: 0,   defense: 0 },
          },
          terrainEffects: {
            plains:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
            hills:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
            mountains:      { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
            forest:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
            urban:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
            sea:            { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
            enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
          },
        },
        {
          unitName: 'Armstrong Whitworth A.W.41 Albemarle',
          level: 3,
          doctrine: 'Allies',
          type: 'Airplane',
          averageDamage: 1.9,
          hitpoints: 61,
          production: {
            costs: {
              food: 1500,
              manpower: 1200,
              metal: 0,
              cash: 2800,
              oil: 1300
            },
            minTimeInSeconds: 21600
          },
          specialProperties: [ 'Partial Stealth', 'Aircraft', 'Converts on Attack' ],
          combatStatistics: {
            vsUnarmored:      { attack: 2.5, defense: 1.3 },
            vsLightArmor:     { attack: 2.5, defense: 1.3 },
            vsHeavyArmor:     { attack: 2.5, defense: 1.3 },
            vsAirplane:       { attack: 2.5, defense: 1.3 },
            vsShip:           { attack: 2.5, defense: 1.3 },
            vsSubmarine:      { attack: 2.5, defense: 1.3 },
            vsBuildings:      { attack: 0.4, defense: 0.2 },
            vsProvinceMorale: { attack: 0,   defense: null },
            vsRocket:         { attack: 0,   defense: 0 },
          },
          terrainEffects: {
            plains:         { health: 61,   attackModifier: null, speedModifier: null, strengthModifier: null },
            hills:          { health: 61,   attackModifier: null, speedModifier: null, strengthModifier: null },
            mountains:      { health: 61,   attackModifier: null, speedModifier: null, strengthModifier: null },
            forest:         { health: 61,   attackModifier: null, speedModifier: null, strengthModifier: null },
            urban:          { health: 61,   attackModifier: null, speedModifier: null, strengthModifier: null },
            sea:            { health: 61,   attackModifier: null, speedModifier: null, strengthModifier: null },
            enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
          },
        },
        {
          unitName: 'Handley Page Halifax A.71',
          level: 4,
          doctrine: 'Allies',
          type: 'Airplane',
          averageDamage: 3,
          hitpoints: 77,
          production: {
            costs: {
              food: 1700,
              manpower: 1300,
              metal: 0,
              cash: 3200,
              oil: 1500
            },
            minTimeInSeconds: 24300
          },
          specialProperties: [ 'Partial Stealth', 'Aircraft', 'Converts on Attack' ],
          combatStatistics: {
            vsUnarmored:      { attack: 4,   defense: 2 },
            vsLightArmor:     { attack: 4,   defense: 2 },
            vsHeavyArmor:     { attack: 4,   defense: 2 },
            vsAirplane:       { attack: 4,   defense: 2 },
            vsShip:           { attack: 4,   defense: 2 },
            vsSubmarine:      { attack: 4,   defense: 2 },
            vsBuildings:      { attack: 0.6, defense: 0.3 },
            vsProvinceMorale: { attack: 0,   defense: null },
            vsRocket:         { attack: 0,   defense: 0 },
          },
          terrainEffects: {
            plains:         { health: 77,   attackModifier: null, speedModifier: null, strengthModifier: null },
            hills:          { health: 77,   attackModifier: null, speedModifier: null, strengthModifier: null },
            mountains:      { health: 77,   attackModifier: null, speedModifier: null, strengthModifier: null },
            forest:         { health: 77,   attackModifier: null, speedModifier: null, strengthModifier: null },
            urban:          { health: 77,   attackModifier: null, speedModifier: null, strengthModifier: null },
            sea:            { health: 77,   attackModifier: null, speedModifier: null, strengthModifier: null },
            enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
          },
        },
      ],
      "Axis": [
        {
          "unitName": "Axis Paratroopers (In Air, Estimated Stats)",
          "level": 1,
          "doctrine": "Axis",
          "type": "Airplane",
          "averageDamage": 0.9,
          "hitpoints": 41,
          "production": {
            "costs": {
              "food": 1553,
              "manpower": 1553,
              "metal": 0,
              "cash": 2847,
              "oil": 1294
            },
            "minTimeInSeconds": 23143
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 1.2,
              "defense": 0.6
            },
            "vsLightArmor": {
              "attack": 1.2,
              "defense": 0.6
            },
            "vsHeavyArmor": {
              "attack": 1.2,
              "defense": 0.6
            },
            "vsAirplane": {
              "attack": 1.2,
              "defense": 0.6
            },
            "vsShip": {
              "attack": 1.2,
              "defense": 0.6
            },
            "vsSubmarine": {
              "attack": 1.2,
              "defense": 0.6
            },
            "vsBuildings": {
              "attack": 0.2,
              "defense": 0.1
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
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "hills": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "mountains": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 39,
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
          "unitName": "Axis Paratroopers (In Air, Estimated Stats)",
          "level": 2,
          "doctrine": "Axis",
          "type": "Airplane",
          "averageDamage": 1.3,
          "hitpoints": 52,
          "production": {
            "costs": {
              "food": 1682,
              "manpower": 1553,
              "metal": 0,
              "cash": 3106,
              "oil": 1553
            },
            "minTimeInSeconds": 27000
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 1.7,
              "defense": 0.9
            },
            "vsLightArmor": {
              "attack": 1.7,
              "defense": 0.9
            },
            "vsHeavyArmor": {
              "attack": 1.7,
              "defense": 0.9
            },
            "vsAirplane": {
              "attack": 1.7,
              "defense": 0.9
            },
            "vsShip": {
              "attack": 1.7,
              "defense": 0.9
            },
            "vsSubmarine": {
              "attack": 1.7,
              "defense": 0.9
            },
            "vsBuildings": {
              "attack": 0.3,
              "defense": 0.2
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
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 50,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 50,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 50,
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
          "unitName": "Axis Paratroopers (In Air, Estimated Stats)",
          "level": 3,
          "doctrine": "Axis",
          "type": "Airplane",
          "averageDamage": 2.2,
          "hitpoints": 64,
          "production": {
            "costs": {
              "food": 1941,
              "manpower": 1553,
              "metal": 0,
              "cash": 3624,
              "oil": 1682
            },
            "minTimeInSeconds": 30857
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 2.9,
              "defense": 1.5
            },
            "vsLightArmor": {
              "attack": 2.9,
              "defense": 1.5
            },
            "vsHeavyArmor": {
              "attack": 2.9,
              "defense": 1.5
            },
            "vsAirplane": {
              "attack": 2.9,
              "defense": 1.5
            },
            "vsShip": {
              "attack": 2.9,
              "defense": 1.5
            },
            "vsSubmarine": {
              "attack": 2.9,
              "defense": 1.5
            },
            "vsBuildings": {
              "attack": 0.5,
              "defense": 0.2
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
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "hills": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "mountains": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 61,
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
          "unitName": "Axis Paratroopers (In Air, Estimated Stats)",
          "level": 4,
          "doctrine": "Axis",
          "type": "Airplane",
          "averageDamage": 3.5,
          "hitpoints": 81,
          "production": {
            "costs": {
              "food": 2200,
              "manpower": 1682,
              "metal": 0,
              "cash": 4141,
              "oil": 1941
            },
            "minTimeInSeconds": 34714
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 4.6,
              "defense": 2.3
            },
            "vsLightArmor": {
              "attack": 4.6,
              "defense": 2.3
            },
            "vsHeavyArmor": {
              "attack": 4.6,
              "defense": 2.3
            },
            "vsAirplane": {
              "attack": 4.6,
              "defense": 2.3
            },
            "vsShip": {
              "attack": 4.6,
              "defense": 2.3
            },
            "vsSubmarine": {
              "attack": 4.6,
              "defense": 2.3
            },
            "vsBuildings": {
              "attack": 0.7,
              "defense": 0.3
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
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "hills": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "mountains": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 77,
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
          "unitName": "Comintern Paratroopers (In Air, Estimated Stats)",
          "level": 1,
          "doctrine": "Comintern",
          "type": "Airplane",
          "averageDamage": 0.7,
          "hitpoints": 35,
          "production": {
            "costs": {
              "food": 1200,
              "manpower": 1200,
              "metal": 0,
              "cash": 2200,
              "oil": 1000
            },
            "minTimeInSeconds": 23143
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 0.9,
              "defense": 0.5
            },
            "vsLightArmor": {
              "attack": 0.9,
              "defense": 0.5
            },
            "vsHeavyArmor": {
              "attack": 0.9,
              "defense": 0.5
            },
            "vsAirplane": {
              "attack": 0.9,
              "defense": 0.5
            },
            "vsShip": {
              "attack": 0.9,
              "defense": 0.5
            },
            "vsSubmarine": {
              "attack": 0.9,
              "defense": 0.5
            },
            "vsBuildings": {
              "attack": 0.2,
              "defense": 0.1
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
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "hills": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "mountains": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 39,
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
          "unitName": "Comintern Paratroopers (In Air, Estimated Stats)",
          "level": 2,
          "doctrine": "Comintern",
          "type": "Airplane",
          "averageDamage": 1,
          "hitpoints": 45,
          "production": {
            "costs": {
              "food": 1300,
              "manpower": 1200,
              "metal": 0,
              "cash": 2400,
              "oil": 1200
            },
            "minTimeInSeconds": 27000
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 1.4,
              "defense": 0.7
            },
            "vsLightArmor": {
              "attack": 1.4,
              "defense": 0.7
            },
            "vsHeavyArmor": {
              "attack": 1.4,
              "defense": 0.7
            },
            "vsAirplane": {
              "attack": 1.4,
              "defense": 0.7
            },
            "vsShip": {
              "attack": 1.4,
              "defense": 0.7
            },
            "vsSubmarine": {
              "attack": 1.4,
              "defense": 0.7
            },
            "vsBuildings": {
              "attack": 0.3,
              "defense": 0.2
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
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 50,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 50,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 50,
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
          "unitName": "Comintern Paratroopers (In Air, Estimated Stats)",
          "level": 3,
          "doctrine": "Comintern",
          "type": "Airplane",
          "averageDamage": 1.7,
          "hitpoints": 55,
          "production": {
            "costs": {
              "food": 1500,
              "manpower": 1200,
              "metal": 0,
              "cash": 2800,
              "oil": 1300
            },
            "minTimeInSeconds": 30857
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 2.3,
              "defense": 1.2
            },
            "vsLightArmor": {
              "attack": 2.3,
              "defense": 1.2
            },
            "vsHeavyArmor": {
              "attack": 2.3,
              "defense": 1.2
            },
            "vsAirplane": {
              "attack": 2.3,
              "defense": 1.2
            },
            "vsShip": {
              "attack": 2.3,
              "defense": 1.2
            },
            "vsSubmarine": {
              "attack": 2.3,
              "defense": 1.2
            },
            "vsBuildings": {
              "attack": 0.4,
              "defense": 0.2
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
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "hills": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "mountains": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 61,
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
          "unitName": "Comintern Paratroopers (In Air, Estimated Stats)",
          "level": 4,
          "doctrine": "Comintern",
          "type": "Airplane",
          "averageDamage": 2.7,
          "hitpoints": 70,
          "production": {
            "costs": {
              "food": 1700,
              "manpower": 1300,
              "metal": 0,
              "cash": 3200,
              "oil": 1500
            },
            "minTimeInSeconds": 34714
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 3.6,
              "defense": 1.8
            },
            "vsLightArmor": {
              "attack": 3.6,
              "defense": 1.8
            },
            "vsHeavyArmor": {
              "attack": 3.6,
              "defense": 1.8
            },
            "vsAirplane": {
              "attack": 3.6,
              "defense": 1.8
            },
            "vsShip": {
              "attack": 3.6,
              "defense": 1.8
            },
            "vsSubmarine": {
              "attack": 3.6,
              "defense": 1.8
            },
            "vsBuildings": {
              "attack": 0.5,
              "defense": 0.3
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
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "hills": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "mountains": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 77,
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
          "unitName": "Pan-Asian Paratroopers (In Air, Estimated Stats)",
          "level": 1,
          "doctrine": "Pan-Asian",
          "type": "Airplane",
          "averageDamage": 0.8,
          "hitpoints": 35,
          "production": {
            "costs": {
              "food": 1412,
              "manpower": 1412,
              "metal": 0,
              "cash": 2588,
              "oil": 1176
            },
            "minTimeInSeconds": 23143
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 1,
              "defense": 0.5
            },
            "vsLightArmor": {
              "attack": 1,
              "defense": 0.5
            },
            "vsHeavyArmor": {
              "attack": 1,
              "defense": 0.5
            },
            "vsAirplane": {
              "attack": 1,
              "defense": 0.5
            },
            "vsShip": {
              "attack": 1,
              "defense": 0.5
            },
            "vsSubmarine": {
              "attack": 1,
              "defense": 0.5
            },
            "vsBuildings": {
              "attack": 0.2,
              "defense": 0.1
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
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "hills": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "mountains": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 39,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 39,
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
          "unitName": "Pan-Asian Paratroopers (In Air, Estimated Stats)",
          "level": 2,
          "doctrine": "Pan-Asian",
          "type": "Airplane",
          "averageDamage": 1.1,
          "hitpoints": 45,
          "production": {
            "costs": {
              "food": 1529,
              "manpower": 1412,
              "metal": 0,
              "cash": 2824,
              "oil": 1412
            },
            "minTimeInSeconds": 27000
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 1.5,
              "defense": 0.8
            },
            "vsLightArmor": {
              "attack": 1.5,
              "defense": 0.8
            },
            "vsHeavyArmor": {
              "attack": 1.5,
              "defense": 0.8
            },
            "vsAirplane": {
              "attack": 1.5,
              "defense": 0.8
            },
            "vsShip": {
              "attack": 1.5,
              "defense": 0.8
            },
            "vsSubmarine": {
              "attack": 1.5,
              "defense": 0.8
            },
            "vsBuildings": {
              "attack": 0.3,
              "defense": 0.2
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
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 50,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 50,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 50,
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
          "unitName": "Pan-Asian Paratroopers (In Air, Estimated Stats)",
          "level": 3,
          "doctrine": "Pan-Asian",
          "type": "Airplane",
          "averageDamage": 1.9,
          "hitpoints": 55,
          "production": {
            "costs": {
              "food": 1765,
              "manpower": 1412,
              "metal": 0,
              "cash": 3294,
              "oil": 1529
            },
            "minTimeInSeconds": 30857
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 2.5,
              "defense": 1.3
            },
            "vsLightArmor": {
              "attack": 2.5,
              "defense": 1.3
            },
            "vsHeavyArmor": {
              "attack": 2.5,
              "defense": 1.3
            },
            "vsAirplane": {
              "attack": 2.5,
              "defense": 1.3
            },
            "vsShip": {
              "attack": 2.5,
              "defense": 1.3
            },
            "vsSubmarine": {
              "attack": 2.5,
              "defense": 1.3
            },
            "vsBuildings": {
              "attack": 0.4,
              "defense": 0.2
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
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "hills": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "mountains": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 61,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 61,
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
          "unitName": "Pan-Asian Paratroopers (In Air, Estimated Stats)",
          "level": 4,
          "doctrine": "Pan-Asian",
          "type": "Airplane",
          "averageDamage": 3,
          "hitpoints": 70,
          "production": {
            "costs": {
              "food": 2000,
              "manpower": 1529,
              "metal": 0,
              "cash": 3765,
              "oil": 1765
            },
            "minTimeInSeconds": 34714
          },
          "specialProperties": [
            "Partial Stealth",
            "Aircraft",
            "Converts on Attack"
          ],
          "combatStatistics": {
            "vsUnarmored": {
              "attack": 4,
              "defense": 2
            },
            "vsLightArmor": {
              "attack": 4,
              "defense": 2
            },
            "vsHeavyArmor": {
              "attack": 4,
              "defense": 2
            },
            "vsAirplane": {
              "attack": 4,
              "defense": 2
            },
            "vsShip": {
              "attack": 4,
              "defense": 2
            },
            "vsSubmarine": {
              "attack": 4,
              "defense": 2
            },
            "vsBuildings": {
              "attack": 0.6,
              "defense": 0.3
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
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "hills": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "mountains": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "forest": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "urban": {
              "health": 77,
              "attackModifier": null,
              "speedModifier": null,
              "strengthModifier": null
            },
            "sea": {
              "health": 77,
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
  },
];
