import { militiaData } from './infantry/militia';
import { infantryData } from './infantry/infantry';
import { motorizedInfantryData } from './infantry/motorizedInfantry';
import { mechanizedInfantryData } from './infantry/mechanizedInfantry';
import { commandosData } from './infantry/commandos';
import { paratrooperData } from './infantry/paratroopers';

import { antiTankData } from './ordnance/antiTank';
import { artilleryData } from './ordnance/artillery';
import { spArtilleryData } from './ordnance/spArtillery';
import { antiAirData } from './ordnance/antiAir';
import { spAntiAirData } from './ordnance/spAntiAir';

import { armoredCarData } from './tanks/armoredCar';
import { lightTankData } from './tanks/lightTank';
import { mediumTankData } from './tanks/mediumTank';
import { heavyTankData } from './tanks/heavyTank';
import { tankDestroyerData } from './tanks/tankDestroyer';

import { interceptorData } from './air/interceptor';
import { tacticalBomberData } from './air/tacticalBomber';
import { attackBomberData } from './air/attackBomber';
import { strategicBomberData } from './air/strategicBomber';
import { navalBomberData } from './air/navalBomber';

import { destroyerData } from './naval/destroyer';
import { submarineData } from './naval/submarine';
import { cruiserData } from './naval/cruiser';
import { battleshipData } from './naval/battleship';
import { aircraftCarrierData } from './naval/aircraftCarrier';
import { transportShipData } from './naval/transportShip';

import { rocketArtilleryData } from './secret/rocketArtillery';
import { spRocketArtilleryData } from './secret/spRocketArtillery';
import { railroadGunData } from './secret/railroadGun';
import { flyingBombData } from './secret/flyingBomb';
import { rocketData } from './secret/rocket';
import { rocketFighterData } from './secret/rocketFighter';
import { nuclearBomberData } from './secret/nuclearBomber';
import { nuclearRocketData } from './secret/nuclearRocket';

// Note: Atomic Bomb is a research unlock and not a deployable unit, so it's omitted.
export const unitDataCategorized = {
  Infantry: [
    militiaData,
    infantryData,
    motorizedInfantryData,
    mechanizedInfantryData,
    commandosData,
    paratrooperData,
  ],
  Ordnance: [
    antiTankData,
    artilleryData,
    spArtilleryData,
    antiAirData,
    spAntiAirData,
  ],
  Tanks: [
    armoredCarData,
    lightTankData,
    mediumTankData,
    heavyTankData,
    tankDestroyerData,
  ],
  Air: [
    interceptorData,
    tacticalBomberData,
    attackBomberData,
    strategicBomberData,
    navalBomberData,
  ],
  Naval: [
    destroyerData,
    submarineData,
    cruiserData,
    battleshipData,
    aircraftCarrierData,
    transportShipData,
  ],
  Secret: [
    rocketArtilleryData,
    spRocketArtilleryData,
    railroadGunData,
    flyingBombData,
    rocketData,
    rocketFighterData,
    nuclearBomberData,
    nuclearRocketData,
  ],
} as const;
