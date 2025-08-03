import { IUnitType } from '@/types';

export const transportShipData: IUnitType = {
  genericName: 'Transport Ship',
  doctrineVariants: {
    Allies: [
      {
        unitName: 'C2 Class',
        level: 1,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 0.7,
        hitpoints: 10,
        production: {
          costs: {
            food: 0,
            manpower: 0,
            metal: 0,
            cash: 0,
            oil: 0
          },
          minTimeInSeconds: 0
        },
        specialProperties: [ 'Vulnerable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.5, defense: 0.5 },
          vsLightArmor:     { attack: 0.5, defense: 0.5 },
          vsHeavyArmor:     { attack: 0.5, defense: 0.5 },
          vsAirplane:       { attack: 0.5, defense: 0.5 },
          vsShip:           { attack: 0.8, defense: 0.8 },
          vsSubmarine:      { attack: 0.5, defense: 0.5 },
          vsBuildings:      { attack: 0,   defense: null },
          vsProvinceMorale: { attack: 0,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 10,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'C4 Class',
        level: 2,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 1.1,
        hitpoints: 15,
        production: {
          costs: {
            food: 0,
            manpower: 0,
            metal: 0,
            cash: 0,
            oil: 0
          },
          minTimeInSeconds: 0
        },
        specialProperties: [ 'Vulnerable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 0.8, defense: 0.8 },
          vsLightArmor:     { attack: 0.8, defense: 0.8 },
          vsHeavyArmor:     { attack: 0.8, defense: 0.8 },
          vsAirplane:       { attack: 0.8, defense: 0.8 },
          vsShip:           { attack: 1.3, defense: 1.3 },
          vsSubmarine:      { attack: 0.8, defense: 0.8 },
          vsBuildings:      { attack: 0,   defense: null },
          vsProvinceMorale: { attack: 0,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 15,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Liberty Ship',
        level: 3,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 1.7,
        hitpoints: 20,
        production: {
          costs: {
            food: 0,
            manpower: 0,
            metal: 0,
            cash: 0,
            oil: 0
          },
          minTimeInSeconds: 0
        },
        specialProperties: [ 'Vulnerable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 1.3, defense: 1.3 },
          vsLightArmor:     { attack: 1.3, defense: 1.3 },
          vsHeavyArmor:     { attack: 1.3, defense: 1.3 },
          vsAirplane:       { attack: 1.3, defense: 1.3 },
          vsShip:           { attack: 2,   defense: 2 },
          vsSubmarine:      { attack: 1.3, defense: 1.3 },
          vsBuildings:      { attack: 0,   defense: null },
          vsProvinceMorale: { attack: 0,   defense: null },
          vsRocket:         { attack: 0,   defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 20,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
      {
        unitName: 'Victory ship',
        level: 4,
        doctrine: 'Allies',
        type: 'Ship',
        averageDamage: 2.5,
        hitpoints: 25,
        production: {
          costs: {
            food: 0,
            manpower: 0,
            metal: 0,
            cash: 0,
            oil: 0
          },
          minTimeInSeconds: 0
        },
        specialProperties: [ 'Vulnerable' ],
        combatStatistics: {
          vsUnarmored:      { attack: 2, defense: 2 },
          vsLightArmor:     { attack: 2, defense: 2 },
          vsHeavyArmor:     { attack: 2, defense: 2 },
          vsAirplane:       { attack: 2, defense: 2 },
          vsShip:           { attack: 3, defense: 3 },
          vsSubmarine:      { attack: 2, defense: 2 },
          vsBuildings:      { attack: 0, defense: null },
          vsProvinceMorale: { attack: 0, defense: null },
          vsRocket:         { attack: 0, defense: 0 },
        },
        terrainEffects: {
          plains:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          hills:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          mountains:      { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          forest:         { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          urban:          { health: null, attackModifier: null, speedModifier: null, strengthModifier: null },
          sea:            { health: 25,   attackModifier: null, speedModifier: null, strengthModifier: null },
          enemyTerritory: { health: null, attackModifier: null, speedModifier: null, strengthModifier: null }
        },
      },
    ],
    Axis: [], Comintern: [], "Pan-Asian": [],
  },
};
