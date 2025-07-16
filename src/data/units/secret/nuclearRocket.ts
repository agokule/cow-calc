import { IUnitType } from '@/types';

export const nuclearRocketData: IUnitType = {
  genericName: 'Nuclear Rocket',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'SM-62 Snark',
        level: 1,
        doctrine: 'Allies',
        type: 'Rocket',
        averageDamage: 1256,
        hitpoints: 20,
        production: {
          costs: {
            food: 6800,
            manpower: 4600,
            metal: 6800,
            cash: 24000,
            oil: 8100
          },
          minTimeInSeconds: 50400
        },
        specialProperties: [ 'Storm', 'Air Unit', 'Friendly Fire', 'Rocket', 'Converts on Attack', 'Nuclear Weapon', 'Supersonic', 'Nuclear Fallout' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2200, defense: null },
          vsLightArmor:     { attack: 1600, defense: null },
          vsHeavyArmor:     { attack: 1600, defense: null },
          vsAirplane:       { attack: 1000, defense: null },
          vsShip:           { attack: 1600, defense: null },
          vsSubmarine:      { attack: 350,  defense: null },
          vsBuildings:      { attack: 1600, defense: null },
          vsProvinceMorale: { attack: 100,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
