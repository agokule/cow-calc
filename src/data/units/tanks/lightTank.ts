import { IUnitType } from '@/types';

export const lightTankData: IUnitType = {
  genericName: 'Light Tank',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'M2 Light Tank',
        level: 1,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 2.3,
        hitpoints: 20,
        production: {
          costs: {
            manpower: 900,
            metal: 1500,
            oil: 1400,
            cash: 1100,
            food: 0
          },
          minTimeInSeconds: 8100
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2.7, defense: 1.8 },
          vsLightArmor:     { attack: 4,   defense: 2.7 },
          vsHeavyArmor:     { attack: 1.5, defense: 1 },
          vsAirplane:       { attack: 0.8, defense: 0.5 },
          vsShip:           { attack: 0.8, defense: 0.5 },
          vsSubmarine:      { attack: 0.8, defense: 0.5 },
          vsBuildings:      { attack: 0.4, defense: 0.3 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 20,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 20,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 20,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M3 Stuart',
        level: 2,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 3.6,
        hitpoints: 30,
        production: {
          costs: {
            manpower: 950,
            metal: 1600,
            oil: 1500,
            cash: 1200,
            food: 0
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4,   defense: 2.7 },
          vsLightArmor:     { attack: 6.5, defense: 4.3 },
          vsHeavyArmor:     { attack: 2.5, defense: 1.7 },
          vsAirplane:       { attack: 1.5, defense: 1 },
          vsShip:           { attack: 1.5, defense: 1 },
          vsSubmarine:      { attack: 1.5, defense: 1 },
          vsBuildings:      { attack: 0.6, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M22 Locust',
        level: 3,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 5.7,
        hitpoints: 45,
        production: {
          costs: {
            manpower: 950,
            metal: 1800,
            oil: 1700,
            cash: 1400,
            food: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6.5, defense: 4.3 },
          vsLightArmor:     { attack: 10,  defense: 6.7 },
          vsHeavyArmor:     { attack: 4,   defense: 2.7 },
          vsAirplane:       { attack: 2.5, defense: 1.7 },
          vsShip:           { attack: 2.5, defense: 1.7 },
          vsSubmarine:      { attack: 2.5, defense: 1.7 },
          vsBuildings:      { attack: 0.9, defense: 0.6 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 45,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 45,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 45,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 45,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 45,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M24 Chaffee',
        level: 4,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 9.3,
        hitpoints: 65,
        production: {
          costs: {
            manpower: 1000,
            metal: 2200,
            oil: 2000,
            cash: 1600,
            food: 0
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10.5, defense: 7 },
          vsLightArmor:     { attack: 15.5, defense: 10.3 },
          vsHeavyArmor:     { attack: 7.5,  defense: 5 },
          vsAirplane:       { attack: 4,    defense: 2.7 },
          vsShip:           { attack: 4,    defense: 2.7 },
          vsSubmarine:      { attack: 4,    defense: 2.7 },
          vsBuildings:      { attack: 1.8,  defense: 1.2 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 65,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M41 Walker Bulldog',
        level: 5,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 13.8,
        hitpoints: 85,
        production: {
          costs: {
            manpower: 1100,
            metal: 2600,
            oil: 2300,
            cash: 1900,
            food: 0
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 15.5, defense: 10.3 },
          vsLightArmor:     { attack: 23,   defense: 15.3 },
          vsHeavyArmor:     { attack: 11,   defense: 7.3 },
          vsAirplane:       { attack: 6,    defense: 4 },
          vsShip:           { attack: 6,    defense: 4 },
          vsSubmarine:      { attack: 6,    defense: 4 },
          vsBuildings:      { attack: 2.8,  defense: 1.9 },
          vsProvinceMorale: { attack: 0.3,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 85,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 85,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 85,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 85,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 85,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
