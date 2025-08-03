import { IUnitType } from '@/types';

export const mediumTankData: IUnitType = {
  genericName: 'Medium Tank',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'M3 Lee',
        level: 1,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 4.0,
        hitpoints: 40,
        production: {
          costs: {
            manpower: 1400,
            metal: 1800,
            oil: 1900,
            cash: 1800,
            food: 0
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 4.5, defense: 3 },
          vsLightArmor:     { attack: 6.5, defense: 4.3 },
          vsHeavyArmor:     { attack: 3.5, defense: 2.3 },
          vsAirplane:       { attack: 0.8, defense: 0.5 },
          vsShip:           { attack: 1,   defense: 0.7 },
          vsSubmarine:      { attack: 1,   defense: 0.7 },
          vsBuildings:      { attack: 0.6, defense: 0.4 },
          vsProvinceMorale: { attack: 0.2, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 40,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 40,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 40,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 40,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 40,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M4 Sherman',
        level: 2,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 5.5,
        hitpoints: 50,
        production: {
          costs: {
            manpower: 1400,
            metal: 2000,
            oil: 2100,
            cash: 2000,
            food: 0
          },
          minTimeInSeconds: 18000
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 6,   defense: 4 },
          vsLightArmor:     { attack: 9,   defense: 6 },
          vsHeavyArmor:     { attack: 4.8, defense: 3.2 },
          vsAirplane:       { attack: 1.5, defense: 1 },
          vsShip:           { attack: 2,   defense: 1.3 },
          vsSubmarine:      { attack: 2,   defense: 1.3 },
          vsBuildings:      { attack: 1,   defense: 0.7 },
          vsProvinceMorale: { attack: 0.3, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 50,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 50,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 50,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 50,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M4A3 Sherman',
        level: 3,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 7.3,
        hitpoints: 65,
        production: {
          costs: {
            manpower: 1500,
            metal: 2200,
            oil: 2400,
            cash: 2200,
            food: 0
          },
          minTimeInSeconds: 20700
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 8,   defense: 5.3 },
          vsLightArmor:     { attack: 12,  defense: 8 },
          vsHeavyArmor:     { attack: 6.3, defense: 4.2 },
          vsAirplane:       { attack: 2,   defense: 1.3 },
          vsShip:           { attack: 3,   defense: 2 },
          vsSubmarine:      { attack: 3,   defense: 2 },
          vsBuildings:      { attack: 1.6, defense: 1.1 },
          vsProvinceMorale: { attack: 0.5, defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
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
        unitName: 'M26 Pershing',
        level: 4,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 9.4,
        hitpoints: 80,
        production: {
          costs: {
            manpower: 1500,
            metal: 2500,
            oil: 2700,
            cash: 2500,
            food: 0
          },
          minTimeInSeconds: 23400
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 10.5, defense: 7 },
          vsLightArmor:     { attack: 15.5, defense: 10.3 },
          vsHeavyArmor:     { attack: 8,    defense: 5.3 },
          vsAirplane:       { attack: 3,    defense: 2 },
          vsShip:           { attack: 4,    defense: 2.7 },
          vsSubmarine:      { attack: 4,    defense: 2.7 },
          vsBuildings:      { attack: 2.4,  defense: 1.6 },
          vsProvinceMorale: { attack: 0.7,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 80,   attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 80,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 80,   attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 80,   attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 80,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M47 Patton II',
        level: 5,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 12.1,
        hitpoints: 100,
        production: {
          costs: {
            manpower: 1500,
            metal: 2800,
            oil: 3000,
            cash: 2800,
            food: 0
          },
          minTimeInSeconds: 26100
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 13.8, defense: 9.2 },
          vsLightArmor:     { attack: 19.5, defense: 13 },
          vsHeavyArmor:     { attack: 10.3, defense: 6.9 },
          vsAirplane:       { attack: 4.5,  defense: 3 },
          vsShip:           { attack: 5.5,  defense: 3.7 },
          vsSubmarine:      { attack: 5.5,  defense: 3.7 },
          vsBuildings:      { attack: 3.5,  defense: 2.3 },
          vsProvinceMorale: { attack: 1,    defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 100,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 100,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 100,  attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 100,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 100,  attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
      {
        unitName: 'M60',
        level: 6,
        doctrine: 'Allies',
        type: 'HeavyArmor',
        averageDamage: 15,
        hitpoints: 125,
        production: {
          costs: {
            manpower: 1600,
            metal: 3000,
            oil: 3300,
            cash: 3000,
            food: 0
          },
          minTimeInSeconds: 27900
        },
        specialProperties: [ 'Anti-Light Armor', 'Offensive' ],
        combatStatistics: {
          vsUnarmored:      { attack: 17.5, defense: 11.7 },
          vsLightArmor:     { attack: 23.5, defense: 15.7 },
          vsHeavyArmor:     { attack: 13,   defense: 8.7 },
          vsAirplane:       { attack: 6,    defense: 4 },
          vsShip:           { attack: 7,    defense: 4.7 },
          vsSubmarine:      { attack: 7,    defense: 4.7 },
          vsBuildings:      { attack: 5,    defense: 3.3 },
          vsProvinceMorale: { attack: 1.5,  defense: null },
          vsRocket:         { attack: 0,    defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 125,  attackModifier: null, speedModifier: 0.25,  strengthModifier: 0.5 },
          hills:          { health: 125,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          mountains:      { health: 125,  attackModifier: null, speedModifier: -0.5,  strengthModifier: null },
          forest:         { health: 125,  attackModifier: null, speedModifier: -0.25, strengthModifier: null },
          urban:          { health: 125,  attackModifier: null, speedModifier: null,  strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null,  strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: -0.5,  strengthModifier: null }
        },
      },
    ],
    Axis: [], Comintern: [], "Pan-Asian": [],
  },
};
