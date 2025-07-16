import { IUnitType } from '@/types';

export const antiAirData: IUnitType = {
  genericName: 'Anti Air',
  doctrineVariants: {
    Allies: [
      {
        unitName: '3-inch Gun M3',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 1.3,
        hitpoints: 12,
        production: {
          costs: {
            food: 1000,
            manpower: 850,
            metal: 600,
            cash: 850,
            oil: 0
          },
          minTimeInSeconds: 5400
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.5, defense: 1 },
          vsLightArmor:     { attack: 0.8, defense: 1.6 },
          vsHeavyArmor:     { attack: 1.3, defense: 2.6 },
          vsAirplane:       { attack: 2.8, defense: 5.6 },
          vsShip:           { attack: 0.5, defense: 1 },
          vsSubmarine:      { attack: 0.5, defense: 1 },
          vsBuildings:      { attack: 0.2, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 12,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 12,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 12,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 12,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 12,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '37 mm Gun M1',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 1.9,
        hitpoints: 17,
        production: {
          costs: {
            food: 1100,
            manpower: 900,
            metal: 650,
            cash: 900,
            oil: 0
          },
          minTimeInSeconds: 7200
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.8, defense: 1.6 },
          vsLightArmor:     { attack: 1,   defense: 2 },
          vsHeavyArmor:     { attack: 2,   defense: 4 },
          vsAirplane:       { attack: 4,   defense: 8 },
          vsShip:           { attack: 0.8, defense: 1.6 },
          vsSubmarine:      { attack: 0.8, defense: 1.6 },
          vsBuildings:      { attack: 0.3, defense: 0.6 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 17,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 17,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 17,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 17,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 17,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '40 mm Automatic Gun M1',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 2.8,
        hitpoints: 22,
        production: {
          costs: {
            food: 1200,
            manpower: 900,
            metal: 700,
            cash: 1000,
            oil: 0
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 2 },
          vsLightArmor:     { attack: 1.5, defense: 3 },
          vsHeavyArmor:     { attack: 3,   defense: 6 },
          vsAirplane:       { attack: 5.5, defense: 11 },
          vsShip:           { attack: 1,   defense: 2 },
          vsSubmarine:      { attack: 1,   defense: 2 },
          vsBuildings:      { attack: 0.4, defense: 0.8 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 22,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 22,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 22,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 22,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 22,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '90 mm Gun M1',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 3.9,
        hitpoints: 27,
        production: {
          costs: {
            food: 1400,
            manpower: 950,
            metal: 800,
            cash: 1200,
            oil: 0
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 3 },
          vsLightArmor:     { attack: 2,   defense: 4 },
          vsHeavyArmor:     { attack: 4.3, defense: 8.6 },
          vsAirplane:       { attack: 7.5, defense: 15 },
          vsShip:           { attack: 1.5, defense: 3 },
          vsSubmarine:      { attack: 1.5, defense: 3 },
          vsBuildings:      { attack: 0.6, defense: 1.2 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 27,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 27,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 27,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 27,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 27,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '90 mm Gun M2',
        level: 5,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 5.5,
        hitpoints: 32,
        production: {
          costs: {
            food: 1600,
            manpower: 950,
            metal: 900,
            cash: 1300,
            oil: 0
          },
          minTimeInSeconds: 12600
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 4 },
          vsLightArmor:     { attack: 3,   defense: 6 },
          vsHeavyArmor:     { attack: 6,   defense: 12 },
          vsAirplane:       { attack: 10,  defense: 20 },
          vsShip:           { attack: 2,   defense: 4 },
          vsSubmarine:      { attack: 2,   defense: 4 },
          vsBuildings:      { attack: 0.8, defense: 1.6 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 32,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 32,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 32,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 32,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 32,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '120 mm Gun M1',
        level: 6,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 7.5,
        hitpoints: 50,
        production: {
          costs: {
            food: 1700,
            manpower: 1000,
            metal: 1000,
            cash: 1500,
            oil: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,    defense: 6 },
          vsLightArmor:     { attack: 4.5,  defense: 9 },
          vsHeavyArmor:     { attack: 7.5,  defense: 15 },
          vsAirplane:       { attack: 12.5, defense: 25 },
          vsShip:           { attack: 3,    defense: 6 },
          vsSubmarine:      { attack: 3,    defense: 6 },
          vsBuildings:      { attack: 1.2,  defense: 2.4 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          hills:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
