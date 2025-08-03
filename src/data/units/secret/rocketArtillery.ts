import { IUnitType } from '@/types';

export const rocketArtilleryData: IUnitType = {
  genericName: 'Rocket Artillery',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'T27',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 1.5,
        hitpoints: 15,
        production: {
          costs: {
            food: 1300,
            manpower: 1000,
            metal: 1800,
            cash: 1400,
            oil: 0
          },
          minTimeInSeconds: 10800
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3.5, defense: 0.9 },
          vsLightArmor:     { attack: 2.2, defense: 0.6 },
          vsHeavyArmor:     { attack: 1.5, defense: 0.4 },
          vsAirplane:       { attack: 2.8, defense: 0.7 },
          vsShip:           { attack: 1.8, defense: 0.4 },
          vsSubmarine:      { attack: 1.5, defense: 0.4 },
          vsBuildings:      { attack: 2,   defense: 0.5 },
          vsProvinceMorale: { attack: 2.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 15,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Land Mattress',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 2.7,
        hitpoints: 25,
        production: {
          costs: {
            food: 1400,
            manpower: 1000,
            metal: 2100,
            cash: 1600,
            oil: 0
          },
          minTimeInSeconds: 12600
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,   defense: 1.5 },
          vsLightArmor:     { attack: 4.5, defense: 1.1 },
          vsHeavyArmor:     { attack: 2.5, defense: 0.6 },
          vsAirplane:       { attack: 5,   defense: 1.2 },
          vsShip:           { attack: 2.8, defense: 0.7 },
          vsSubmarine:      { attack: 2,   defense: 0.5 },
          vsBuildings:      { attack: 3.3, defense: 0.8 },
          vsProvinceMorale: { attack: 4,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 25,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'T66',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 4.5,
        hitpoints: 35,
        production: {
          costs: {
            food: 1800,
            manpower: 1100,
            metal: 2600,
            cash: 2000,
            oil: 0
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10.3, defense: 2.6 },
          vsLightArmor:     { attack: 7,    defense: 1.7 },
          vsHeavyArmor:     { attack: 4.5,  defense: 1.1 },
          vsAirplane:       { attack: 8,    defense: 2 },
          vsShip:           { attack: 4.5,  defense: 1.1 },
          vsSubmarine:      { attack: 3.5,  defense: 0.9 },
          vsBuildings:      { attack: 5,    defense: 1.3 },
          vsProvinceMorale: { attack: 6,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 35,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 35,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    Axis: [], Comintern: [], "Pan-Asian": [],
  },
};
