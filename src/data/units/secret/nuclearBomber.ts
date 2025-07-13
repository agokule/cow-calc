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
        production: { costs: { food: 3500, manpower: 5700, metal: 3500, cash: 21000, oil: 9400 }, minTimeInSeconds: 47700 },
        specialProperties: [ 'Storm', 'Air Unit', 'Friendly Fire', 'Converts on Attack', 'Nuclear Weapon', 'Nuclear Fallout' ],
        combatStatistics: { vsUnarmored: { attack: 1200, defense: null }, vsLightArmor: { attack: 800, defense: null }, vsHeavyArmor: { attack: 750, defense: null }, vsAirplane: { attack: 500, defense: null }, vsShip: { attack: 750, defense: null }, vsSubmarine: { attack: 200, defense: null }, vsBuildings: { attack: 750, defense: null }, vsProvinceMorale: { attack: 75, defense: null }, vsRocket: { attack: 0, defense: 0 }, },
        terrainEffects: { plains: { health: 75, attackModifier: null, speedModifier: null, strengthModifier: null }, hills: { health: 75, attackModifier: null, speedModifier: null, strengthModifier: null }, mountains: { health: 75, attackModifier: null, speedModifier: null, strengthModifier: null }, forest: { health: 75, attackModifier: null, speedModifier: null, strengthModifier: null }, urban: { health: 75, attackModifier: null, speedModifier: null, strengthModifier: null }, sea: { health: 75, attackModifier: null, speedModifier: null, strengthModifier: null }, enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null } },
      },
      {
        unitName: 'N. American B-45 Tornado',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 854,
        hitpoints: 98,
        production: { costs: { food: 3700, manpower: 5800, metal: 3700, cash: 22000, oil: 9800 }, minTimeInSeconds: 49500 },
        specialProperties: [ 'Storm', 'Air Unit', 'Friendly Fire', 'Converts on Attack', 'Nuclear Weapon', 'Nuclear Fallout' ],
        combatStatistics: { vsUnarmored: { attack: 1600, defense: null }, vsLightArmor: { attack: 1200, defense: null }, vsHeavyArmor: { attack: 1000, defense: null }, vsAirplane: { attack: 700, defense: null }, vsShip: { attack: 1000, defense: null }, vsSubmarine: { attack: 250, defense: null }, vsBuildings: { attack: 1000, defense: null }, vsProvinceMorale: { attack: 85, defense: null }, vsRocket: { attack: 0, defense: 0 }, },
        terrainEffects: { plains: { health: 98, attackModifier: null, speedModifier: null, strengthModifier: null }, hills: { health: 98, attackModifier: null, speedModifier: null, strengthModifier: null }, mountains: { health: 98, attackModifier: null, speedModifier: null, strengthModifier: null }, forest: { health: 98, attackModifier: null, speedModifier: null, strengthModifier: null }, urban: { health: 98, attackModifier: null, speedModifier: null, strengthModifier: null }, sea: { health: 98, attackModifier: null, speedModifier: null, strengthModifier: null }, enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null } },
      },
      {
        unitName: 'Boeing B-47 Stratojet',
        level: 3,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 1163,
        hitpoints: 121,
        production: { costs: { food: 3900, manpower: 5900, metal: 3900, cash: 23000, oil: 10000 }, minTimeInSeconds: 50400 },
        specialProperties: [ 'Storm', 'Air Unit', 'Friendly Fire', 'Converts on Attack', 'Nuclear Weapon', 'Nuclear Fallout' ],
        combatStatistics: { vsUnarmored: { attack: 2200, defense: null }, vsLightArmor: { attack: 1600, defense: null }, vsHeavyArmor: { attack: 1350, defense: null }, vsAirplane: { attack: 1000, defense: null }, vsShip: { attack: 1350, defense: null }, vsSubmarine: { attack: 350, defense: null }, vsBuildings: { attack: 1350, defense: null }, vsProvinceMorale: { attack: 100, defense: null }, vsRocket: { attack: 0, defense: 0 }, },
        terrainEffects: { plains: { health: 121, attackModifier: null, speedModifier: null, strengthModifier: null }, hills: { health: 121, attackModifier: null, speedModifier: null, strengthModifier: null }, mountains: { health: 121, attackModifier: null, speedModifier: null, strengthModifier: null }, forest: { health: 121, attackModifier: null, speedModifier: null, strengthModifier: null }, urban: { health: 121, attackModifier: null, speedModifier: null, strengthModifier: null }, sea: { health: 121, attackModifier: null, speedModifier: null, strengthModifier: null }, enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null } },
      },
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
