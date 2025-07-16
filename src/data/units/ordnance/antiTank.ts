import { IUnitType } from '@/types';

export const antiTankData: IUnitType = {
  genericName: 'Anti Tank',
  doctrineVariants: {
    Allies: [
      {
        unitName: '37 mm Gun M3',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 2.9,
        hitpoints: 15,
        production: {
          costs: {
            food: 1100,
            manpower: 750,
            metal: 550,
            cash: 800,
            oil: 0
          },
          minTimeInSeconds: 5400
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.5, defense: 1 },
          vsLightArmor:     { attack: 2.3, defense: 4.6 },
          vsHeavyArmor:     { attack: 3,   defense: 6 },
          vsAirplane:       { attack: 0.5, defense: 1 },
          vsShip:           { attack: 0.5, defense: 1 },
          vsSubmarine:      { attack: 0.5, defense: 1 },
          vsBuildings:      { attack: 0.4, defense: 0.8 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 15,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '57 mm Gun M1',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 4.2,
        hitpoints: 20,
        production: {
          costs: {
            food: 1200,
            manpower: 750,
            metal: 600,
            cash: 900,
            oil: 0
          },
          minTimeInSeconds: 7200
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.8, defense: 1.6 },
          vsLightArmor:     { attack: 3.3, defense: 6.6 },
          vsHeavyArmor:     { attack: 4.3, defense: 8.6 },
          vsAirplane:       { attack: 1,   defense: 2 },
          vsShip:           { attack: 0.8, defense: 1.6 },
          vsSubmarine:      { attack: 0.8, defense: 1.6 },
          vsBuildings:      { attack: 0.6, defense: 1.2 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '3-inch Gun M5',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 5.9,
        hitpoints: 30,
        production: {
          costs: {
            food: 1300,
            manpower: 800,
            metal: 700,
            cash: 1000,
            oil: 0
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 2 },
          vsLightArmor:     { attack: 4.8, defense: 9.6 },
          vsHeavyArmor:     { attack: 6,   defense: 12 },
          vsAirplane:       { attack: 1.5, defense: 3 },
          vsShip:           { attack: 1,   defense: 2 },
          vsSubmarine:      { attack: 1,   defense: 2 },
          vsBuildings:      { attack: 0.8, defense: 1.6 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '76 mm Gun M1',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 8,
        hitpoints: 40,
        production: {
          costs: {
            food: 1500,
            manpower: 800,
            metal: 800,
            cash: 1100,
            oil: 0
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 3 },
          vsLightArmor:     { attack: 6.5, defense: 13 },
          vsHeavyArmor:     { attack: 8,   defense: 16 },
          vsAirplane:       { attack: 2,   defense: 4 },
          vsShip:           { attack: 1.5, defense: 3 },
          vsSubmarine:      { attack: 1.5, defense: 3 },
          vsBuildings:      { attack: 1.2, defense: 2.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '90 mm Gun M3',
        level: 5,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 10.8,
        hitpoints: 50,
        production: {
          costs: {
            food: 1600,
            manpower: 850,
            metal: 850,
            cash: 1300,
            oil: 0
          },
          minTimeInSeconds: 12600
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 4 },
          vsLightArmor:     { attack: 8.5, defense: 17 },
          vsHeavyArmor:     { attack: 11,  defense: 22 },
          vsAirplane:       { attack: 3,   defense: 6 },
          vsShip:           { attack: 2,   defense: 4 },
          vsSubmarine:      { attack: 2,   defense: 4 },
          vsBuildings:      { attack: 1.8, defense: 3.6 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: '105mm Gun T8',
        level: 6,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 14.4,
        hitpoints: 65,
        production: {
          costs: {
            food: 1800,
            manpower: 850,
            metal: 950,
            cash: 1400,
            oil: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Anti-Light Armor', 'Defensive', 'Partial Stealth' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,    defense: 6 },
          vsLightArmor:     { attack: 11.3, defense: 22.6 },
          vsHeavyArmor:     { attack: 14.5, defense: 29 },
          vsAirplane:       { attack: 4,    defense: 8 },
          vsShip:           { attack: 3,    defense: 6 },
          vsSubmarine:      { attack: 3,    defense: 6 },
          vsBuildings:      { attack: 2.6,  defense: 5.2 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5, strengthModifier: null },
          forest:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          urban:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
