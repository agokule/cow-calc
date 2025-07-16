import { IUnitType } from '@/types';

export const rocketFighterData: IUnitType = {
  genericName: 'Rocket Fighter',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Northrop XP-79',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 2.5,
        hitpoints: 30,
        production: {
          costs: {
            food: 1100,
            manpower: 750,
            metal: 0,
            cash: 1400,
            oil: 2000
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Anti-Air', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,   defense: 3 },
          vsLightArmor:     { attack: 2,   defense: 1 },
          vsHeavyArmor:     { attack: 2,   defense: 1 },
          vsAirplane:       { attack: 22,  defense: 11 },
          vsShip:           { attack: 2,   defense: 1 },
          vsSubmarine:      { attack: 2,   defense: 1 },
          vsBuildings:      { attack: 0.8, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Bell X-1',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 3.5,
        hitpoints: 50,
        production: {
          costs: {
            food: 1400,
            manpower: 800,
            metal: 0,
            cash: 1700,
            oil: 2600
          },
          minTimeInSeconds: 17100
        },
        specialProperties: [ 'Anti-Air', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8,   defense: 4 },
          vsLightArmor:     { attack: 3,   defense: 1.5 },
          vsHeavyArmor:     { attack: 3,   defense: 1.5 },
          vsAirplane:       { attack: 36,  defense: 18 },
          vsShip:           { attack: 3,   defense: 1.5 },
          vsSubmarine:      { attack: 3,   defense: 1.5 },
          vsBuildings:      { attack: 1.2, defense: 0.6 },
          vsProvinceMorale: { attack: 0.2, defense: null },
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
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
