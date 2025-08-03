import { IUnitType } from '@/types';

export const mechanizedInfantryData: IUnitType = {
  genericName: 'Mechanized Infantry',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Mech. Infantry Type 1940',
        level: 1,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 5.5,
        hitpoints: 39,
        production: {
          costs: {
            food: 1100,
            manpower: 1300,
            metal: 1200,
            cash: 1400,
            oil: 0
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8.5, defense: 8.5 },
          vsLightArmor:     { attack: 4.5, defense: 4.5 },
          vsHeavyArmor:     { attack: 3.5, defense: 3.5 },
          vsAirplane:       { attack: 3.5, defense: 3.5 },
          vsShip:           { attack: 2,   defense: 2 },
          vsSubmarine:      { attack: 2.3, defense: 2.3 },
          vsBuildings:      { attack: 0.6, defense: 0.6 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 39,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 39,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 39,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 39,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 39,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mech. Infantry Type 1944',
        level: 2,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 7.6,
        hitpoints: 50,
        production: {
          costs: {
            food: 1200,
            manpower: 1500,
            metal: 1400,
            cash: 1700,
            oil: 0
          },
          minTimeInSeconds: 18000
        },
        specialProperties: [ 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 11.5, defense: 11.5 },
          vsLightArmor:     { attack: 6.5,  defense: 6.5 },
          vsHeavyArmor:     { attack: 4.8,  defense: 4.8 },
          vsAirplane:       { attack: 4.8,  defense: 4.8 },
          vsShip:           { attack: 3,    defense: 3 },
          vsSubmarine:      { attack: 3,    defense: 3 },
          vsBuildings:      { attack: 0.8,  defense: 0.8 },
          vsProvinceMorale: { attack: 0.1,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 50,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mech. Infantry Type 1947',
        level: 3,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 9.9,
        hitpoints: 61,
        production: {
          costs: {
            food: 1200,
            manpower: 1700,
            metal: 1500,
            cash: 1900,
            oil: 0
          },
          minTimeInSeconds: 20100
        },
        specialProperties: [ 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 14.5, defense: 14.5 },
          vsLightArmor:     { attack: 8.8,  defense: 8.8 },
          vsHeavyArmor:     { attack: 6.5,  defense: 6.5 },
          vsAirplane:       { attack: 6.5,  defense: 6.5 },
          vsShip:           { attack: 4.5,  defense: 4.5 },
          vsSubmarine:      { attack: 4.5,  defense: 4.5 },
          vsBuildings:      { attack: 1.2,  defense: 1.2 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 61,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 61,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 61,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 61,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 61,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mech. Infantry Type 1950',
        level: 4,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 13.1,
        hitpoints: 77,
        production: {
          costs: {
            food: 1200,
            manpower: 1900,
            metal: 1700,
            cash: 2100,
            oil: 0
          },
          minTimeInSeconds: 22500
        },
        specialProperties: [ 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 19,   defense: 19 },
          vsLightArmor:     { attack: 11.5, defense: 11.5 },
          vsHeavyArmor:     { attack: 8.8,  defense: 8.8 },
          vsAirplane:       { attack: 8.8,  defense: 8.8 },
          vsShip:           { attack: 6.8,  defense: 6.8 },
          vsSubmarine:      { attack: 6,    defense: 6 },
          vsBuildings:      { attack: 1.8,  defense: 1.8 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 77,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 77,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 77,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 77,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 77,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mech. Infantry Type 1952',
        level: 5,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 16.5,
        hitpoints: 94,
        production: {
          costs: {
            food: 1300,
            manpower: 2000,
            metal: 1800,
            cash: 2400,
            oil: 0
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 23.5, defense: 23.5 },
          vsLightArmor:     { attack: 14.5, defense: 14.5 },
          vsHeavyArmor:     { attack: 11.5, defense: 11.5 },
          vsAirplane:       { attack: 11.5, defense: 11.5 },
          vsShip:           { attack: 8.5,  defense: 8.5 },
          vsSubmarine:      { attack: 8.5,  defense: 8.5 },
          vsBuildings:      { attack: 2.8,  defense: 2.8 },
          vsProvinceMorale: { attack: 0.3,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 94,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 94,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 94,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 94,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 94,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    Axis: [], Comintern: [], "Pan-Asian": [],
  },
};
