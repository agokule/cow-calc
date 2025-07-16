import { IUnitType } from '@/types';

export const motorizedInfantryData: IUnitType = {
  genericName: 'Motorized Infantry',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Mot. Infantry Type 1934',
        level: 1,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 3.1,
        hitpoints: 20,
        production: {
          costs: {
            food: 1000,
            manpower: 1200,
            metal: 0,
            cash: 1300,
            oil: 1500
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,   defense: 4 },
          vsLightArmor:     { attack: 3,   defense: 2 },
          vsHeavyArmor:     { attack: 2.3, defense: 1.5 },
          vsAirplane:       { attack: 2.3, defense: 1.5 },
          vsShip:           { attack: 1.5, defense: 1 },
          vsSubmarine:      { attack: 1.5, defense: 1 },
          vsBuildings:      { attack: 0.4, defense: 0.3 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 20,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 20,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 20,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mot. Infantry Type 1940',
        level: 2,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 4.3,
        hitpoints: 25,
        production: {
          costs: {
            food: 1100,
            manpower: 1200,
            metal: 0,
            cash: 1300,
            oil: 1600
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8.3, defense: 5.5 },
          vsLightArmor:     { attack: 4.2, defense: 2.8 },
          vsHeavyArmor:     { attack: 3,   defense: 2 },
          vsAirplane:       { attack: 3,   defense: 2 },
          vsShip:           { attack: 2.3, defense: 1.5 },
          vsSubmarine:      { attack: 2.3, defense: 1.5 },
          vsBuildings:      { attack: 0.6, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 25,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 25,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 25,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 25,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 25,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mot. Infantry Type 1944',
        level: 3,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 6,
        hitpoints: 30,
        production: {
          costs: {
            food: 1200,
            manpower: 1200,
            metal: 0,
            cash: 1500,
            oil: 1800
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 11,  defense: 7.3 },
          vsLightArmor:     { attack: 6,   defense: 4 },
          vsHeavyArmor:     { attack: 4.5, defense: 3 },
          vsAirplane:       { attack: 4.5, defense: 3 },
          vsShip:           { attack: 3,   defense: 2 },
          vsSubmarine:      { attack: 3,   defense: 2 },
          vsBuildings:      { attack: 1,   defense: 0.7 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mot. Infantry Type 1947',
        level: 4,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 7.6,
        hitpoints: 40,
        production: {
          costs: {
            food: 1300,
            manpower: 1200,
            metal: 0,
            cash: 1700,
            oil: 2000
          },
          minTimeInSeconds: 17100
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 14,  defense: 9.3 },
          vsLightArmor:     { attack: 7.5, defense: 5 },
          vsHeavyArmor:     { attack: 6,   defense: 4 },
          vsAirplane:       { attack: 6,   defense: 4 },
          vsShip:           { attack: 4.5, defense: 3 },
          vsSubmarine:      { attack: 4.5, defense: 3 },
          vsBuildings:      { attack: 1.2, defense: 0.8 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 40,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 40,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 40,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'Mot. Infantry Type 1950',
        level: 5,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 10.3,
        hitpoints: 50,
        production: {
          costs: {
            food: 1500,
            manpower: 1300,
            metal: 0,
            cash: 1900,
            oil: 2200
          },
          minTimeInSeconds: 20100
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 18.5, defense: 12.3 },
          vsLightArmor:     { attack: 10.5, defense: 7 },
          vsHeavyArmor:     { attack: 8,    defense: 5.3 },
          vsAirplane:       { attack: 8,    defense: 5.3 },
          vsShip:           { attack: 6,    defense: 4 },
          vsSubmarine:      { attack: 6,    defense: 4 },
          vsBuildings:      { attack: 1.8,  defense: 1.2 },
          vsProvinceMorale: { attack: 0.2,  defense: null },
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
        unitName: 'Mot. Infantry Type 1952',
        level: 6,
        doctrine: 'Allies',
        type: 'Unarmored',
        averageDamage: 13.2,
        hitpoints: 65,
        production: {
          costs: {
            food: 1700,
            manpower: 1300,
            metal: 0,
            cash: 2100,
            oil: 2500
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Anti-Stealth', 'Anti-Unarmored', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 23,   defense: 15.3 },
          vsLightArmor:     { attack: 14,   defense: 9.3 },
          vsHeavyArmor:     { attack: 10.5, defense: 7 },
          vsAirplane:       { attack: 10.5, defense: 7 },
          vsShip:           { attack: 8.5,  defense: 5.7 },
          vsSubmarine:      { attack: 8.5,  defense: 5.7 },
          vsBuildings:      { attack: 2.8,  defense: 1.9 },
          vsProvinceMorale: { attack: 0.3,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.25 },
          hills:          { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 65,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 65,   attackModifier: null, speedModifier: null,  strengthModifier: 0.25 },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
