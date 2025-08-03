import { IUnitType } from '@/types';

export const infantryData: IUnitType = {
  genericName: 'Infantry',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Infantry Type 1932',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 2.3,
        hitpoints: 15,
        production: {
          costs: {
            food: 1100,
            manpower: 950,
            metal: 250,
            cash: 800,
            oil: 0
          },
          minTimeInSeconds: 6300
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,   defense: 4.5 },
          vsLightArmor:     { attack: 1.5, defense: 2.3 },
          vsHeavyArmor:     { attack: 1,   defense: 1.5 },
          vsAirplane:       { attack: 1,   defense: 1.5 },
          vsShip:           { attack: 0.5, defense: 0.8 },
          vsSubmarine:      { attack: 0.5, defense: 0.8 },
          vsBuildings:      { attack: 0.2, defense: 0.3 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 15,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1934',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 3.1,
        hitpoints: 20,
        production: {
          costs: {
            food: 1200,
            manpower: 950,
            metal: 250,
            cash: 800,
            oil: 0
          },
          minTimeInSeconds: 7200
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4,   defense: 6 },
          vsLightArmor:     { attack: 2,   defense: 3 },
          vsHeavyArmor:     { attack: 1.5, defense: 2.3 },
          vsAirplane:       { attack: 1.5, defense: 2.3 },
          vsShip:           { attack: 1,   defense: 1.5 },
          vsSubmarine:      { attack: 1,   defense: 1.5 },
          vsBuildings:      { attack: 0.3, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1938',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 4.3,
        hitpoints: 25,
        production: {
          costs: {
            food: 1200,
            manpower: 950,
            metal: 250,
            cash: 850,
            oil: 0
          },
          minTimeInSeconds: 9000
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5.5, defense: 8.3 },
          vsLightArmor:     { attack: 2.7, defense: 4.1 },
          vsHeavyArmor:     { attack: 2,   defense: 3 },
          vsAirplane:       { attack: 2,   defense: 3 },
          vsShip:           { attack: 1.5, defense: 2.3 },
          vsSubmarine:      { attack: 1.5, defense: 2.3 },
          vsBuildings:      { attack: 0.4, defense: 0.6 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 25,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1942',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 5.8,
        hitpoints: 30,
        production: {
          costs: {
            food: 1300,
            manpower: 1000,
            metal: 250,
            cash: 900,
            oil: 0
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7,   defense: 10.5 },
          vsLightArmor:     { attack: 4,   defense: 6 },
          vsHeavyArmor:     { attack: 3,   defense: 4.5 },
          vsAirplane:       { attack: 3,   defense: 4.5 },
          vsShip:           { attack: 2,   defense: 3 },
          vsSubmarine:      { attack: 2,   defense: 3 },
          vsBuildings:      { attack: 0.6, defense: 0.9 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1946',
        level: 5,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 7.5,
        hitpoints: 40,
        production: {
          costs: {
            food: 1400,
            manpower: 1000,
            metal: 300,
            cash: 1000,
            oil: 0
          },
          minTimeInSeconds: 12600
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 9,   defense: 13.5 },
          vsLightArmor:     { attack: 5,   defense: 7.5 },
          vsHeavyArmor:     { attack: 4,   defense: 6 },
          vsAirplane:       { attack: 4,   defense: 6 },
          vsShip:           { attack: 3,   defense: 4.5 },
          vsSubmarine:      { attack: 3,   defense: 4.5 },
          vsBuildings:      { attack: 0.8, defense: 1.2 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1950',
        level: 6,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 10.1,
        hitpoints: 50,
        production: {
          costs: {
            food: 1600,
            manpower: 1100,
            metal: 350,
            cash: 1200,
            oil: 0
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 12,  defense: 18 },
          vsLightArmor:     { attack: 7,   defense: 10.5 },
          vsHeavyArmor:     { attack: 5.3, defense: 8 },
          vsAirplane:       { attack: 5.3, defense: 8 },
          vsShip:           { attack: 4,   defense: 6 },
          vsSubmarine:      { attack: 4,   defense: 6 },
          vsBuildings:      { attack: 1.2, defense: 1.8 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
      {
        unitName: 'Infantry Type 1952',
        level: 7,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 13.2,
        hitpoints: 65,
        production: {
          costs: {
            food: 1800,
            manpower: 1100,
            metal: 400,
            cash: 1300,
            oil: 0
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Defensive', 'Anti-Unarmored' ],
        combatStatistics: {
          vsUnarmored:      { attack: 15.3, defense: 22.9 },
          vsLightArmor:     { attack: 9.3,  defense: 13.9 },
          vsHeavyArmor:     { attack: 7,    defense: 10.5 },
          vsAirplane:       { attack: 7,    defense: 10.5 },
          vsShip:           { attack: 5.7,  defense: 8.5 },
          vsSubmarine:      { attack: 5.7,  defense: 8.5 },
          vsBuildings:      { attack: 1.8,  defense: 2.7 },
          vsProvinceMorale: { attack: 0.3,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5, strengthModifier: 0.2 },
          forest:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: 0.2 },
          urban:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: 0.5 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5, strengthModifier: null }
        },
      },
    ],
    Axis: [], Comintern: [], "Pan-Asian": [],
  },
};
