import { IUnitType } from '@/types';

export const tacticalBomberData: IUnitType = {
  genericName: 'Tactical Bomber',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Martin B-10',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 2.4,
        hitpoints: 25,
        production: {
          costs: {
            food: 2100,
            manpower: 1300,
            metal: 0,
            cash: 1600,
            oil: 1300
          },
          minTimeInSeconds: 10800
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.5, defense: 2.3 },
          vsLightArmor:     { attack: 3.5, defense: 1.8 },
          vsHeavyArmor:     { attack: 1.5, defense: 0.8 },
          vsAirplane:       { attack: 1,   defense: 0.5 },
          vsShip:           { attack: 1.5, defense: 0.8 },
          vsSubmarine:      { attack: 1,   defense: 0.5 },
          vsBuildings:      { attack: 1.5, defense: 0.8 },
          vsProvinceMorale: { attack: 1,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Douglas B-18 Bolo',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 3.2,
        hitpoints: 30,
        production: {
          costs: {
            food: 2300,
            manpower: 1300,
            metal: 0,
            cash: 1800,
            oil: 1400
          },
          minTimeInSeconds: 14400
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,   defense: 3 },
          vsLightArmor:     { attack: 4.6, defense: 2.3 },
          vsHeavyArmor:     { attack: 2,   defense: 1 },
          vsAirplane:       { attack: 1.5, defense: 0.8 },
          vsShip:           { attack: 2,   defense: 1 },
          vsSubmarine:      { attack: 1.5, defense: 0.8 },
          vsBuildings:      { attack: 2,   defense: 1 },
          vsProvinceMorale: { attack: 1.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 30,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Douglas B-23 Dragon',
        level: 3,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 4.3,
        hitpoints: 40,
        production: {
          costs: {
            food: 2400,
            manpower: 1400,
            metal: 0,
            cash: 1900,
            oil: 1500
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8.5, defense: 4.3 },
          vsLightArmor:     { attack: 6.3, defense: 3.2 },
          vsHeavyArmor:     { attack: 2.5, defense: 1.3 },
          vsAirplane:       { attack: 2,   defense: 1 },
          vsShip:           { attack: 2.5, defense: 1.3 },
          vsSubmarine:      { attack: 2,   defense: 1 },
          vsBuildings:      { attack: 2.8, defense: 1.4 },
          vsProvinceMorale: { attack: 1.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 40,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Martin B-26 Marauder',
        level: 4,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 5.9,
        hitpoints: 55,
        production: {
          costs: {
            food: 2800,
            manpower: 1400,
            metal: 0,
            cash: 2100,
            oil: 1700
          },
          minTimeInSeconds: 18900
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 11.5, defense: 5.8 },
          vsLightArmor:     { attack: 8.6,  defense: 4.3 },
          vsHeavyArmor:     { attack: 3.5,  defense: 1.7 },
          vsAirplane:       { attack: 3,    defense: 1.5 },
          vsShip:           { attack: 3.5,  defense: 1.7 },
          vsSubmarine:      { attack: 3,    defense: 1.5 },
          vsBuildings:      { attack: 4,    defense: 2 },
          vsProvinceMorale: { attack: 1.9,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 55,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'N. American B-25 Mitchell',
        level: 5,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 7.9,
        hitpoints: 65,
        production: {
          costs: {
            food: 3100,
            manpower: 1400,
            metal: 0,
            cash: 2400,
            oil: 1900
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 15,   defense: 7.5 },
          vsLightArmor:     { attack: 11.5, defense: 5.7 },
          vsHeavyArmor:     { attack: 5,    defense: 2.5 },
          vsAirplane:       { attack: 4,    defense: 2 },
          vsShip:           { attack: 5,    defense: 2.5 },
          vsSubmarine:      { attack: 4,    defense: 2 },
          vsBuildings:      { attack: 5.5,  defense: 2.8 },
          vsProvinceMorale: { attack: 2.5,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 65,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Douglas A-26 Invader',
        level: 6,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 10.3,
        hitpoints: 80,
        production: {
          costs: {
            food: 3400,
            manpower: 1500,
            metal: 0,
            cash: 2600,
            oil: 2100
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 19,  defense: 9.5 },
          vsLightArmor:     { attack: 15,  defense: 7.5 },
          vsHeavyArmor:     { attack: 7,   defense: 3.5 },
          vsAirplane:       { attack: 5.5, defense: 2.7 },
          vsShip:           { attack: 7,   defense: 3.5 },
          vsSubmarine:      { attack: 5.5, defense: 2.7 },
          vsBuildings:      { attack: 7.5, defense: 3.8 },
          vsProvinceMorale: { attack: 3.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 80,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Martin XB-48',
        level: 7,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 13.3,
        hitpoints: 100,
        production: {
          costs: {
            food: 3800,
            manpower: 1500,
            metal: 0,
            cash: 2900,
            oil: 2300
          },
          minTimeInSeconds: 25200
        },
        specialProperties: [ 'Anti-Unarmored', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 23.5, defense: 11.8 },
          vsLightArmor:     { attack: 19.6, defense: 9.8 },
          vsHeavyArmor:     { attack: 10,   defense: 5 },
          vsAirplane:       { attack: 7,    defense: 3.5 },
          vsShip:           { attack: 10,   defense: 5 },
          vsSubmarine:      { attack: 7,    defense: 5 },
          vsBuildings:      { attack: 10,   defense: 5 },
          vsProvinceMorale: { attack: 4,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 100,  attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    Axis: [], Comintern: [], "Pan-Asian": [],
  },
};
