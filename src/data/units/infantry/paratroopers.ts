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
      Axis: [], Comintern: [], "Pan-Asian": [],
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
      Axis: [], Comintern: [], "Pan-Asian": [],
    },
  },
];
