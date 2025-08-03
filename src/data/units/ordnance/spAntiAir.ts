import { IUnitType } from '@/types';

export const spAntiAirData: IUnitType = {
  genericName: 'SP Anti Air',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'M13 Multiple Gun Motor Carriage',
        level: 1,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 2.3,
        hitpoints: 22,
        production: {
          costs: {
            food: 900,
            manpower: 1000,
            cash: 1400,
            oil: 1700,
            metal: 0
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 2 },
          vsLightArmor:     { attack: 2.3, defense: 4.6 },
          vsHeavyArmor:     { attack: 1.3, defense: 2.6 },
          vsAirplane:       { attack: 4.8, defense: 9.6 },
          vsShip:           { attack: 1,   defense: 2 },
          vsSubmarine:      { attack: 1,   defense: 2 },
          vsBuildings:      { attack: 0.4, defense: 0.8 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 22,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 22,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 22,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 22,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 22,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M15 Multiple Gun Motor Carriage',
        level: 2,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 3.3,
        hitpoints: 27,
        production: {
          costs: {
            food: 1100,
            manpower: 1000,
            cash: 1600,
            oil: 1900,
            metal: 0
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 3 },
          vsLightArmor:     { attack: 3,   defense: 6 },
          vsHeavyArmor:     { attack: 2,   defense: 4 },
          vsAirplane:       { attack: 6.5, defense: 13 },
          vsShip:           { attack: 1.5, defense: 3 },
          vsSubmarine:      { attack: 1.5, defense: 3 },
          vsBuildings:      { attack: 0.6, defense: 1.2 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 27,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 27,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 27,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 27,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 27,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M16 Multiple Gun Motor Carriage',
        level: 3,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 4.4,
        hitpoints: 32,
        production: {
          costs: {
            food: 1200,
            manpower: 1100,
            cash: 1900,
            oil: 2200,
            metal: 0
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 4 },
          vsLightArmor:     { attack: 4,   defense: 8 },
          vsHeavyArmor:     { attack: 2.8, defense: 5.6 },
          vsAirplane:       { attack: 8.8, defense: 17.6 },
          vsShip:           { attack: 2,   defense: 4 },
          vsSubmarine:      { attack: 2,   defense: 4 },
          vsBuildings:      { attack: 0.8, defense: 1.6 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 32,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 32,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 32,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 32,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 32,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M19 Gun Motor Carriage',
        level: 4,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 6.2,
        hitpoints: 42,
        production: {
          costs: {
            food: 1300,
            manpower: 1100,
            cash: 2100,
            oil: 2400,
            metal: 0
          },
          minTimeInSeconds: 18000
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,    defense: 6 },
          vsLightArmor:     { attack: 5.5,  defense: 11 },
          vsHeavyArmor:     { attack: 3.8,  defense: 7.6 },
          vsAirplane:       { attack: 11.3, defense: 22.6 },
          vsShip:           { attack: 3,    defense: 6 },
          vsSubmarine:      { attack: 3,    defense: 6 },
          vsBuildings:      { attack: 1.2,  defense: 2.4 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 42,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 42,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 42,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 42,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 42,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M42 Duster',
        level: 5,
        doctrine: 'Allies',
        type: 'LightArmor',
        averageDamage: 8.4,
        hitpoints: 65,
        production: {
          costs: {
            food: 1500,
            manpower: 1100,
            cash: 2300,
            oil: 2700,
            metal: 0
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Anti-Air', 'Defensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4,   defense: 8 },
          vsLightArmor:     { attack: 7.5, defense: 15 },
          vsHeavyArmor:     { attack: 5.3, defense: 10.6 },
          vsAirplane:       { attack: 14,  defense: 28 },
          vsShip:           { attack: 4,   defense: 8 },
          vsSubmarine:      { attack: 4,   defense: 8 },
          vsBuildings:      { attack: 1.8, defense: 3.6 },
          vsProvinceMorale: { attack: 0.3, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: 0.25,  strengthModifier: null },
          hills:          { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: 0.5 },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 65,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    Axis: [], Comintern: [], "Pan-Asian": [],
  },
};
