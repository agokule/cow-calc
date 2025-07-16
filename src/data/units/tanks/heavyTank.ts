import { IUnitType } from '@/types';

export const heavyTankData: IUnitType = {
  genericName: 'Heavy Tank',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'M6 Heavy Tank',
        level: 1,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 7.8,
        hitpoints: 100,
        production: {
          costs: {
            food: 1300,
            manpower: 2100,
            metal: 3100,
            cash: 2600,
            oil: 0
          },
          minTimeInSeconds: 22500
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5.5, defense: 5.5 },
          vsLightArmor:     { attack: 10,  defense: 10 },
          vsHeavyArmor:     { attack: 8,   defense: 8 },
          vsAirplane:       { attack: 2,   defense: 2 },
          vsShip:           { attack: 2.5, defense: 2.5 },
          vsSubmarine:      { attack: 2.5, defense: 2.5 },
          vsBuildings:      { attack: 3,   defense: 3 },
          vsProvinceMorale: { attack: 1,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 100,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 100,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 100,  attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 100,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 100,  attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'T29 Heavy Tank',
        level: 2,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 10.7,
        hitpoints: 130,
        production: {
          costs: {
            food: 1400,
            manpower: 2400,
            metal: 3500,
            cash: 3000,
            oil: 0
          },
          minTimeInSeconds: 26100
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7,   defense: 7 },
          vsLightArmor:     { attack: 14,  defense: 14 },
          vsHeavyArmor:     { attack: 11,  defense: 11 },
          vsAirplane:       { attack: 3,   defense: 3 },
          vsShip:           { attack: 4,   defense: 4 },
          vsSubmarine:      { attack: 4,   defense: 4 },
          vsBuildings:      { attack: 4,   defense: 4 },
          vsProvinceMorale: { attack: 1.3, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 130,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 130,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 130,  attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 130,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 130,  attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'T26 Super Pershing',
        level: 3,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 14.7,
        hitpoints: 170,
        production: {
          costs: {
            food: 1400,
            manpower: 2900,
            metal: 4100,
            cash: 3500,
            oil: 0
          },
          minTimeInSeconds: 30600
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10,  defense: 10 },
          vsLightArmor:     { attack: 19,  defense: 19 },
          vsHeavyArmor:     { attack: 15,  defense: 15 },
          vsAirplane:       { attack: 4,   defense: 4 },
          vsShip:           { attack: 5.5, defense: 5.5 },
          vsSubmarine:      { attack: 5.5, defense: 5.5 },
          vsBuildings:      { attack: 6,   defense: 6 },
          vsProvinceMorale: { attack: 1.8, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 170,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 170,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 170,  attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 170,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 170,  attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M103 Heavy Tank',
        level: 4,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 19.7,
        hitpoints: 220,
        production: {
          costs: {
            food: 1500,
            manpower: 3300,
            metal: 4800,
            cash: 4000,
            oil: 0
          },
          minTimeInSeconds: 34200
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 14,  defense: 14 },
          vsLightArmor:     { attack: 25,  defense: 25 },
          vsHeavyArmor:     { attack: 20,  defense: 20 },
          vsAirplane:       { attack: 5,   defense: 5 },
          vsShip:           { attack: 7,   defense: 7 },
          vsSubmarine:      { attack: 7,   defense: 7 },
          vsBuildings:      { attack: 9,   defense: 9 },
          vsProvinceMorale: { attack: 2.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 220,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 220,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 220,  attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 220,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 220,  attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
