import { IUnitType } from '@/types';

export const artilleryData: IUnitType = {
  genericName: 'Artillery',
  doctrineVariants: {
    Allies: [
      {
        unitName: '75 mm Pack Howitzer M1',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 1.3,
        hitpoints: 10,
        production: {
          costs: {
            food: 1800,
            manpower: 1100,
            metal: 750,
            cash: 1400,
            oil: 0
          },
          minTimeInSeconds: 7140
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 0.4 },
          vsLightArmor:     { attack: 2.7, defense: 0.7 },
          vsHeavyArmor:     { attack: 2,   defense: 0.5 },
          vsAirplane:       { attack: 1,   defense: 0.2 },
          vsShip:           { attack: 2,   defense: 0.5 },
          vsSubmarine:      { attack: 1,   defense: 0.2 },
          vsBuildings:      { attack: 2.5, defense: 0.6 },
          vsProvinceMorale: { attack: 0.7, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 10,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '105 mm Howitzer M2A1',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 1.9,
        hitpoints: 15,
        production: {
          costs: {
            food: 2000,
            manpower: 1100,
            metal: 850,
            cash: 1600,
            oil: 0
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 0.5 },
          vsLightArmor:     { attack: 4,   defense: 1 },
          vsHeavyArmor:     { attack: 3,   defense: 0.8 },
          vsAirplane:       { attack: 1.5, defense: 0.4 },
          vsShip:           { attack: 3,   defense: 0.8 },
          vsSubmarine:      { attack: 1.5, defense: 0.4 },
          vsBuildings:      { attack: 3,   defense: 0.8 },
          vsProvinceMorale: { attack: 1,   defense: null },
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
        unitName: '105 mm Howitzer M3',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 2.6,
        hitpoints: 20,
        production: {
          costs: {
            food: 2200,
            manpower: 1100,
            metal: 950,
            cash: 1700,
            oil: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2.8, defense: 0.7 },
          vsLightArmor:     { attack: 5.5, defense: 1.4 },
          vsHeavyArmor:     { attack: 4,   defense: 1 },
          vsAirplane:       { attack: 2,   defense: 0.5 },
          vsShip:           { attack: 4,   defense: 1 },
          vsSubmarine:      { attack: 2,   defense: 0.5 },
          vsBuildings:      { attack: 4,   defense: 1 },
          vsProvinceMorale: { attack: 1.4, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '155 mm Howitzer M1',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 3.5,
        hitpoints: 25,
        production: {
          costs: {
            food: 2500,
            manpower: 1200,
            metal: 1000,
            cash: 1900,
            oil: 0
          },
          minTimeInSeconds: 17100
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3.8, defense: 0.9 },
          vsLightArmor:     { attack: 7.5, defense: 1.9 },
          vsHeavyArmor:     { attack: 5.5, defense: 1.4 },
          vsAirplane:       { attack: 2.8, defense: 0.7 },
          vsShip:           { attack: 5.5, defense: 1.4 },
          vsSubmarine:      { attack: 2.8, defense: 0.7 },
          vsBuildings:      { attack: 5.5, defense: 1.4 },
          vsProvinceMorale: { attack: 2,   defense: null },
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
        unitName: '240 mm Howitzer M1',
        level: 5,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 4.8,
        hitpoints: 30,
        production: {
          costs: {
            food: 2800,
            manpower: 1200,
            metal: 1200,
            cash: 2200,
            oil: 0
          },
          minTimeInSeconds: 20100
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5,    defense: 1.3 },
          vsLightArmor:     { attack: 10.3, defense: 2.6 },
          vsHeavyArmor:     { attack: 7.5,  defense: 1.9 },
          vsAirplane:       { attack: 3.8,  defense: 1 },
          vsShip:           { attack: 7.5,  defense: 1.9 },
          vsSubmarine:      { attack: 3.8,  defense: 1 },
          vsBuildings:      { attack: 7.5,  defense: 1.9 },
          vsProvinceMorale: { attack: 2.7,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'BL 7.2-inch Howitzer Mk. 6',
        level: 6,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 6.2,
        hitpoints: 40,
        production: {
          costs: {
            food: 3100,
            manpower: 1200,
            metal: 1300,
            cash: 2400,
            oil: 0
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Ranged Attack', 'Offensive', 'Anti-Light Armor' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6.5,  defense: 1.6 },
          vsLightArmor:     { attack: 13.5, defense: 3.4 },
          vsHeavyArmor:     { attack: 9.8,  defense: 2.4 },
          vsAirplane:       { attack: 5,    defense: 1.2 },
          vsShip:           { attack: 9.8,  defense: 2.4 },
          vsSubmarine:      { attack: 5,    defense: 1.2 },
          vsBuildings:      { attack: 10,   defense: 2.5 },
          vsProvinceMorale: { attack: 3.5,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          mountains:      { health: 40,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.5 },
          forest:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
