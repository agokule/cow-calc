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
            food: 200,
            manpower: 750,
            metal: 0,
            cash: 750,
            oil: 400
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
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
