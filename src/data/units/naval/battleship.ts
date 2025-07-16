import { IUnitType } from '@/types';

export const battleshipData: IUnitType = {
  genericName: 'Battleship',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Tennessee Class',
        level: 1,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 4.5,
        hitpoints: 50,
        production: {
          costs: {
            food: 900,
            manpower: 1700,
            metal: 2700,
            cash: 1800,
            oil: 0
          },
          minTimeInSeconds: 10800
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,   defense: 3 },
          vsLightArmor:     { attack: 3,   defense: 3 },
          vsHeavyArmor:     { attack: 3,   defense: 3 },
          vsAirplane:       { attack: 1.5, defense: 1.5 },
          vsShip:           { attack: 7.5, defense: 7.5 },
          vsSubmarine:      { attack: 1.5, defense: 1.5 },
          vsBuildings:      { attack: 3,   defense: 3 },
          vsProvinceMorale: { attack: 1,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Colorado Class',
        level: 2,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 6.3,
        hitpoints: 65,
        production: {
          costs: {
            food: 950,
            manpower: 1700,
            metal: 2900,
            cash: 2000,
            oil: 0
          },
          minTimeInSeconds: 12600
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.5,  defense: 4.5 },
          vsLightArmor:     { attack: 4.5,  defense: 4.5 },
          vsHeavyArmor:     { attack: 4.5,  defense: 4.5 },
          vsAirplane:       { attack: 2,    defense: 2 },
          vsShip:           { attack: 10.5, defense: 10.5 },
          vsSubmarine:      { attack: 2,    defense: 2 },
          vsBuildings:      { attack: 4.3,  defense: 4.3 },
          vsProvinceMorale: { attack: 1.4,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'North Carolina Class',
        level: 3,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 8.8,
        hitpoints: 85,
        production: {
          costs: {
            food: 1100,
            manpower: 1700,
            metal: 3400,
            cash: 2300,
            oil: 0
          },
          minTimeInSeconds: 18900
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,    defense: 6 },
          vsLightArmor:     { attack: 6,    defense: 6 },
          vsHeavyArmor:     { attack: 6,    defense: 6 },
          vsAirplane:       { attack: 3,    defense: 3 },
          vsShip:           { attack: 14.5, defense: 14.5 },
          vsSubmarine:      { attack: 3,    defense: 3 },
          vsBuildings:      { attack: 6,    defense: 6 },
          vsProvinceMorale: { attack: 2,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 85,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'South Dakota class',
        level: 4,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 11.8,
        hitpoints: 115,
        production: {
          costs: {
            food: 1300,
            manpower: 1800,
            metal: 3800,
            cash: 2500,
            oil: 0
          },
          minTimeInSeconds: 20700
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8,    defense: 8 },
          vsLightArmor:     { attack: 8,    defense: 8 },
          vsHeavyArmor:     { attack: 8,    defense: 8 },
          vsAirplane:       { attack: 4,    defense: 4 },
          vsShip:           { attack: 19.5, defense: 19.5 },
          vsSubmarine:      { attack: 4,    defense: 4 },
          vsBuildings:      { attack: 8,    defense: 8 },
          vsProvinceMorale: { attack: 2.7,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 115,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Iowa Class',
        level: 5,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 15.8,
        hitpoints: 155,
        production: {
          costs: {
            food: 1500,
            manpower: 1800,
            metal: 4500,
            cash: 3000,
            oil: 0
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10.5, defense: 10.5 },
          vsLightArmor:     { attack: 10.5, defense: 10.5 },
          vsHeavyArmor:     { attack: 10.5, defense: 10.5 },
          vsAirplane:       { attack: 5.5,  defense: 5.5 },
          vsShip:           { attack: 26,   defense: 26 },
          vsSubmarine:      { attack: 5.5,  defense: 5.5 },
          vsBuildings:      { attack: 10.5, defense: 10.5 },
          vsProvinceMorale: { attack: 3.5,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 155,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Montana Class',
        level: 6,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 20.5,
        hitpoints: 200,
        production: {
          costs: {
            food: 1600,
            manpower: 1900,
            metal: 4900,
            cash: 3300,
            oil: 0
          },
          minTimeInSeconds: 25200
        },
        specialProperties: [ 'Ranged Attack', 'Anti-Naval', 'Anti-Land' ],
        combatStatistics: {
          vsUnarmored:      { attack: 14,  defense: 14 },
          vsLightArmor:     { attack: 14,  defense: 14 },
          vsHeavyArmor:     { attack: 14,  defense: 14 },
          vsAirplane:       { attack: 7,   defense: 7 },
          vsShip:           { attack: 34,  defense: 34 },
          vsSubmarine:      { attack: 7,   defense: 7 },
          vsBuildings:      { attack: 14,  defense: 14 },
          vsProvinceMorale: { attack: 4.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 200,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
