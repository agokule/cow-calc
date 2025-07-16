import { IUnitType } from '@/types';

export const railroadGunData: IUnitType = {
  genericName: 'Railroad Gun',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'BL 12-inch Railway Howitzer',
        level: 1,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 3.1,
        hitpoints: 30,
        production: {
          costs: {
            manpower: 2700,
            metal: 3400,
            oil: 1900,
            cash: 4100,
            food: 0
          },
          minTimeInSeconds: 22500
        },
        specialProperties: [ 'Ranged Attack', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4,   defense: 1 },
          vsLightArmor:     { attack: 5,   defense: 1.3 },
          vsHeavyArmor:     { attack: 6,   defense: 1.5 },
          vsAirplane:       { attack: 1.5, defense: 0.4 },
          vsShip:           { attack: 4,   defense: 1 },
          vsSubmarine:      { attack: 1.5, defense: 0.4 },
          vsBuildings:      { attack: 6.5, defense: 1.6 },
          vsProvinceMorale: { attack: 2,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: '406 mm Gun',
        level: 2,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 5.3,
        hitpoints: 50,
        production: {
          costs: {
            manpower: 2900,
            metal: 4700,
            oil: 2600,
            cash: 5600,
            food: 0
          },
          minTimeInSeconds: 33300
        },
        specialProperties: [ 'Ranged Attack', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7,   defense: 1.7 },
          vsLightArmor:     { attack: 8.5, defense: 2.1 },
          vsHeavyArmor:     { attack: 10,  defense: 2.5 },
          vsAirplane:       { attack: 2.5, defense: 0.6 },
          vsShip:           { attack: 6,   defense: 1.5 },
          vsSubmarine:      { attack: 2.5, defense: 0.6 },
          vsBuildings:      { attack: 11,  defense: 2.8 },
          vsProvinceMorale: { attack: 3.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 50,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
