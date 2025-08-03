import { IUnitType } from '@/types';

export const attackBomberData: IUnitType = {
  genericName: 'Attack Bomber',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'Curtiss A-12 Shrike',
        level: 1,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 2.7,
        hitpoints: 20,
        production: {
          costs: {
            food: 1100,
            manpower: 1100,
            metal: 0,
            cash: 1500,
            oil: 1600
          },
          minTimeInSeconds: 9900
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1,   defense: 0.5 },
          vsLightArmor:     { attack: 4.3, defense: 2.2 },
          vsHeavyArmor:     { attack: 5.5, defense: 2.8 },
          vsAirplane:       { attack: 1,   defense: 0.5 },
          vsShip:           { attack: 4.3, defense: 2.2 },
          vsSubmarine:      { attack: 1,   defense: 0.5 },
          vsBuildings:      { attack: 0.7, defense: 0.4 },
          vsProvinceMorale: { attack: 0.2, defense: null },
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
        unitName: 'Northrop A-17',
        level: 2,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 4.6,
        hitpoints: 30,
        production: {
          costs: {
            food: 1200,
            manpower: 1100,
            metal: 0,
            cash: 1700,
            oil: 1800
          },
          minTimeInSeconds: 16200
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2,   defense: 1 },
          vsLightArmor:     { attack: 7.5, defense: 3.7 },
          vsHeavyArmor:     { attack: 9,   defense: 4.5 },
          vsAirplane:       { attack: 2,   defense: 1 },
          vsShip:           { attack: 7.5, defense: 3.7 },
          vsSubmarine:      { attack: 2,   defense: 1 },
          vsBuildings:      { attack: 1,   defense: 0.5 },
          vsProvinceMorale: { attack: 0.3, defense: null },
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
        unitName: 'Curtiss SB2C Helldiver',
        level: 3,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 7.1,
        hitpoints: 40,
        production: {
          costs: {
            food: 1400,
            manpower: 1100,
            metal: 0,
            cash: 1900,
            oil: 2100
          },
          minTimeInSeconds: 20700
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 3.5,  defense: 1.7 },
          vsLightArmor:     { attack: 11.5, defense: 5.8 },
          vsHeavyArmor:     { attack: 13.5, defense: 6.8 },
          vsAirplane:       { attack: 3.5,  defense: 1.7 },
          vsShip:           { attack: 11,   defense: 5.5 },
          vsSubmarine:      { attack: 3.5,  defense: 1.7 },
          vsBuildings:      { attack: 1.4,  defense: 0.7 },
          vsProvinceMorale: { attack: 0.5,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
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
        unitName: 'A-20 Havoc',
        level: 4,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 10.3,
        hitpoints: 55,
        production: {
          costs: {
            food: 1600,
            manpower: 1200,
            metal: 0,
            cash: 2300,
            oil: 2500
          },
          minTimeInSeconds: 21600
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 5,    defense: 2.5 },
          vsLightArmor:     { attack: 16,   defense: 8 },
          vsHeavyArmor:     { attack: 20,   defense: 10 },
          vsAirplane:       { attack: 5,    defense: 2.5 },
          vsShip:           { attack: 15.5, defense: 7.8 },
          vsSubmarine:      { attack: 5,    defense: 2.5 },
          vsBuildings:      { attack: 2,    defense: 1 },
          vsProvinceMorale: { attack: 0.7,  defense: null },
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
        unitName: 'Douglas A-1 Skyraider',
        level: 5,
        doctrine: 'Allies',
        type: 'Airplane',
        averageDamage: 14.8,
        hitpoints: 75,
        production: {
          costs: {
            food: 1800,
            manpower: 1200,
            metal: 0,
            cash: 2500,
            oil: 2700
          },
          minTimeInSeconds: 24300
        },
        specialProperties: [ 'Anti-Heavy Armor', 'Carriable', 'Aircraft' ],
        combatStatistics: {
          vsUnarmored:      { attack: 7,  defense: 3.5 },
          vsLightArmor:     { attack: 23, defense: 11.5 },
          vsHeavyArmor:     { attack: 29, defense: 14.5 },
          vsAirplane:       { attack: 7,  defense: 3.5 },
          vsShip:           { attack: 22, defense: 11 },
          vsSubmarine:      { attack: 7,  defense: 3.5 },
          vsBuildings:      { attack: 3,  defense: 1.5 },
          vsProvinceMorale: { attack: 1,  defense: null },
          vsRocket:         { attack: 0,  defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 75,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    Axis: [], Comintern: [], "Pan-Asian": [],
  },
};
