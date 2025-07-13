import { IUnitType } from '@/types';

export const spRocketArtilleryData: IUnitType = {
  genericName: 'SP Rocket Artillery',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Xylophone',
        level: 1,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 2.7,
        hitpoints: 25,
        production: { costs: { food: 1600, manpower: 1900, metal: 1900, cash: 1900, oil: 0 }, minTimeInSeconds: 19800 },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Unarmored' ],
        combatStatistics: { vsUnarmored: { attack: 6, defense: 1.5 }, vsLightArmor: { attack: 4.5, defense: 1.1 }, vsHeavyArmor: { attack: 2.5, defense: 0.6 }, vsAirplane: { attack: 5, defense: 1.2 }, vsShip: { attack: 2.8, defense: 0.7 }, vsSubmarine: { attack: 2, defense: 0.5 }, vsBuildings: { attack: 3.3, defense: 0.8 }, vsProvinceMorale: { attack: 4, defense: null }, vsRocket: { attack: 0, defense: 0 }, },
        terrainEffects: { plains: { health: 25, attackModifier: null, speedModifier: 0.25, strengthModifier: 0.2 }, hills: { health: 25, attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 }, mountains: { health: 25, attackModifier: null, speedModifier: -0.5, strengthModifier: null }, forest: { health: 25, attackModifier: null, speedModifier: -0.25, strengthModifier: null }, urban: { health: 25, attackModifier: null, speedModifier: null, strengthModifier: 0.2 }, sea: { health: 10, attackModifier: null, speedModifier: null, strengthModifier: null }, enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null } },
      },
      {
        unitName: 'Calliope',
        level: 2,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 4.5,
        hitpoints: 45,
        production: { costs: { food: 1600, manpower: 2500, metal: 2500, cash: 2500, oil: 0 }, minTimeInSeconds: 23400 },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Unarmored' ],
        combatStatistics: { vsUnarmored: { attack: 10.3, defense: 2.6 }, vsLightArmor: { attack: 7, defense: 1.7 }, vsHeavyArmor: { attack: 4.5, defense: 1.1 }, vsAirplane: { attack: 8, defense: 2 }, vsShip: { attack: 4.5, defense: 1.1 }, vsSubmarine: { attack: 3.5, defense: 0.9 }, vsBuildings: { attack: 5, defense: 1.3 }, vsProvinceMorale: { attack: 6, defense: null }, vsRocket: { attack: 0, defense: 0 }, },
        terrainEffects: { plains: { health: 45, attackModifier: null, speedModifier: 0.25, strengthModifier: 0.2 }, hills: { health: 45, attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 }, mountains: { health: 45, attackModifier: null, speedModifier: -0.5, strengthModifier: null }, forest: { health: 45, attackModifier: null, speedModifier: -0.25, strengthModifier: null }, urban: { health: 45, attackModifier: null, speedModifier: null, strengthModifier: 0.2 }, sea: { health: 10, attackModifier: null, speedModifier: null, strengthModifier: null }, enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null } },
      },
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
