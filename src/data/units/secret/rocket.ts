import { IUnitType } from '@/types';

export const rocketData: IUnitType = {
  genericName: 'Rocket',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'RTV-G-4 Bumper',
        level: 1,
        doctrine: 'Allies',
        type: 'Rocket',
        averageDamage: 7.5,
        hitpoints: 10,
        production: {
          costs: {
            food: 450,
            manpower: 800,
            metal: 0,
            cash: 2200,
            oil: 1100
          },
          minTimeInSeconds: 11700
        },
        specialProperties: [ 'Anti-Morale', 'Single use', 'Supersonic', 'Friendly Fire' ],
        combatStatistics: {
          vsUnarmored:      { attack: 15, defense: null },
          vsLightArmor:     { attack: 15, defense: null },
          vsHeavyArmor:     { attack: 15, defense: null },
          vsAirplane:       { attack: 8,  defense: null },
          vsShip:           { attack: 8,  defense: null },
          vsSubmarine:      { attack: 4,  defense: null },
          vsBuildings:      { attack: 15, defense: null },
          vsProvinceMorale: { attack: 12, defense: null },
          vsRocket:         { attack: 0,  defense: 0 },
        },
        terrainEffects: {
          plains:         { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'SSM-N-8A Regulus',
        level: 2,
        doctrine: 'Allies',
        type: 'Rocket',
        averageDamage: 11,
        hitpoints: 15,
        production: {
          costs: {
            food: 450,
            manpower: 900,
            metal: 0,
            cash: 2500,
            oil: 1200
          },
          minTimeInSeconds: 13500
        },
        specialProperties: [ 'Anti-Morale', 'Single use', 'Supersonic', 'Friendly Fire' ],
        combatStatistics: {
          vsUnarmored:      { attack: 22, defense: null },
          vsLightArmor:     { attack: 22, defense: null },
          vsHeavyArmor:     { attack: 22, defense: null },
          vsAirplane:       { attack: 11, defense: null },
          vsShip:           { attack: 11, defense: null },
          vsSubmarine:      { attack: 6,  defense: null },
          vsBuildings:      { attack: 22, defense: null },
          vsProvinceMorale: { attack: 18, defense: null },
          vsRocket:         { attack: 0,  defense: 0 },
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
        unitName: 'MGM-13 Mace',
        level: 3,
        doctrine: 'Allies',
        type: 'Rocket',
        averageDamage: 15,
        hitpoints: 20,
        production: {
          costs: {
            food: 500,
            manpower: 1100,
            metal: 0,
            cash: 2800,
            oil: 1400
          },
          minTimeInSeconds: 15300
        },
        specialProperties: [ 'Anti-Morale', 'Single use', 'Supersonic', 'Friendly Fire' ],
        combatStatistics: {
          vsUnarmored:      { attack: 30, defense: null },
          vsLightArmor:     { attack: 30, defense: null },
          vsHeavyArmor:     { attack: 30, defense: null },
          vsAirplane:       { attack: 15, defense: null },
          vsShip:           { attack: 15, defense: null },
          vsSubmarine:      { attack: 9,  defense: null },
          vsBuildings:      { attack: 30, defense: null },
          vsProvinceMorale: { attack: 26, defense: null },
          vsRocket:         { attack: 0,  defense: 0 },
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
        unitName: 'PGM-17 Thor',
        level: 4,
        doctrine: 'Allies',
        type: 'Rocket',
        averageDamage: 20,
        hitpoints: 25,
        production: {
          costs: {
            food: 500,
            manpower: 1200,
            metal: 0,
            cash: 3100,
            oil: 1500
          },
          minTimeInSeconds: 17100
        },
        specialProperties: [ 'Anti-Morale', 'Single use', 'Supersonic', 'Friendly Fire' ],
        combatStatistics: {
          vsUnarmored:      { attack: 40, defense: null },
          vsLightArmor:     { attack: 40, defense: null },
          vsHeavyArmor:     { attack: 40, defense: null },
          vsAirplane:       { attack: 21, defense: null },
          vsShip:           { attack: 21, defense: null },
          vsSubmarine:      { attack: 13, defense: null },
          vsBuildings:      { attack: 40, defense: null },
          vsProvinceMorale: { attack: 36, defense: null },
          vsRocket:         { attack: 0,  defense: 0 },
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
    ],
    Axis: [], Communist: [], "Pan-Asian": [],
  },
};
