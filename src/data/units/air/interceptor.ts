import { IUnitType } from '@/types';

export const interceptorData: IUnitType = {
  genericName: 'Interceptor',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Boeing P-26',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 0.5,
        hitpoints: 15,
        production: {
          costs: {
            food: 950,
            manpower: 800,
            metal: 0,
            cash: 1500,
            oil: 950
          },
          minTimeInSeconds: 6900
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.8, defense: 0.5 },
          vsLightArmor:     { attack: 0.5, defense: 0.3 },
          vsHeavyArmor:     { attack: 0.5, defense: 0.3 },
          vsAirplane:       { attack: 6,   defense: 4 },
          vsShip:           { attack: 0.5, defense: 0.3 },
          vsSubmarine:      { attack: 0.5, defense: 0.3 },
          vsBuildings:      { attack: 0.2, defense: 0.1 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Seversky P-35',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 1,
        hitpoints: 20,
        production: {
          costs: {
            food: 1000,
            manpower: 800,
            metal: 0,
            cash: 1600,
            oil: 1000
          },
          minTimeInSeconds: 9000
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.5, defense: 1 },
          vsLightArmor:     { attack: 1,   defense: 0.7 },
          vsHeavyArmor:     { attack: 1,   defense: 0.7 },
          vsAirplane:       { attack: 8,   defense: 5.3 },
          vsShip:           { attack: 1,   defense: 0.7 },
          vsSubmarine:      { attack: 1,   defense: 0.7 },
          vsBuildings:      { attack: 0.3, defense: 0.2 },
          vsProvinceMorale: { attack: 0.1, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Curtiss P-40 Warhawk',
        level: 3,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 1.4,
        hitpoints: 25,
        production: {
          costs: {
            food: 1100,
            manpower: 800,
            metal: 0,
            cash: 1700,
            oil: 1100
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 1.3 },
          vsLightArmor:     { attack: 1.5, defense: 1 },
          vsHeavyArmor:     { attack: 1.5, defense: 1 },
          vsAirplane:       { attack: 10,  defense: 6.7 },
          vsShip:           { attack: 1.5, defense: 1 },
          vsSubmarine:      { attack: 1.5, defense: 1 },
          vsBuildings:      { attack: 0.4, defense: 0.3 },
          vsProvinceMorale: { attack: 0.1, defense: null },
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
        unitName: 'P-51 Mustang',
        level: 4,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 2.2,
        hitpoints: 30,
        production: {
          costs: {
            food: 1300,
            manpower: 850,
            metal: 0,
            cash: 2000,
            oil: 1300
          },
          minTimeInSeconds: 15300
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3,   defense: 2 },
          vsLightArmor:     { attack: 2.5, defense: 1.7 },
          vsHeavyArmor:     { attack: 2.5, defense: 1.7 },
          vsAirplane:       { attack: 13,  defense: 8.7 },
          vsShip:           { attack: 2.5, defense: 1.7 },
          vsSubmarine:      { attack: 2.5, defense: 1.7 },
          vsBuildings:      { attack: 0.6, defense: 0.4 },
          vsProvinceMorale: { attack: 0.1, defense: null },
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
        unitName: 'Grumman F6F Hellcat',
        level: 5,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 3.3,
        hitpoints: 40,
        production: {
          costs: {
            food: 1400,
            manpower: 850,
            metal: 0,
            cash: 2200,
            oil: 1400
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.3, defense: 2.9 },
          vsLightArmor:     { attack: 3.8, defense: 2.5 },
          vsHeavyArmor:     { attack: 3.8, defense: 2.5 },
          vsAirplane:       { attack: 17,  defense: 11.3 },
          vsShip:           { attack: 3.8, defense: 2.5 },
          vsSubmarine:      { attack: 3.8, defense: 2.5 },
          vsBuildings:      { attack: 0.8, defense: 0.5 },
          vsProvinceMorale: { attack: 0.2, defense: null },
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
        unitName: 'Lockheed P-80 Shooting Star',
        level: 6,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 4.4,
        hitpoints: 50,
        production: {
          costs: {
            food: 1600,
            manpower: 900,
            metal: 0,
            cash: 2500,
            oil: 1600
          },
          minTimeInSeconds: 18000
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5.8, defense: 3.9 },
          vsLightArmor:     { attack: 5,   defense: 3.3 },
          vsHeavyArmor:     { attack: 5,   defense: 3.3 },
          vsAirplane:       { attack: 22,  defense: 14.7 },
          vsShip:           { attack: 5,   defense: 3.3 },
          vsSubmarine:      { attack: 5,   defense: 3.3 },
          vsBuildings:      { attack: 1.2, defense: 0.8 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 50,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'North American F-86 Sabre',
        level: 7,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 5.7,
        hitpoints: 65,
        production: {
          costs: {
            food: 1800,
            manpower: 900,
            metal: 0,
            cash: 2700,
            oil: 1800
          },
          minTimeInSeconds: 19800
        },
        specialProperties: [ 'Anti-Air', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7.5, defense: 5 },
          vsLightArmor:     { attack: 6.5, defense: 4.3 },
          vsHeavyArmor:     { attack: 6.5, defense: 4.3 },
          vsAirplane:       { attack: 28,  defense: 18.7 },
          vsShip:           { attack: 6.5, defense: 4.3 },
          vsSubmarine:      { attack: 6.5, defense: 4.3 },
          vsBuildings:      { attack: 1.8, defense: 1.2 },
          vsProvinceMorale: { attack: 0.3, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
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
    ],
    Axis: [], Comintern: [], "Pan-Asian": [],
  },
};
