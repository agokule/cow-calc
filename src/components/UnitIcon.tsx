import { UnitClass } from '@/types';
import LightArmor from '@/icons/lightArmor';
import HeavyArmor from '@/icons/heavyArmor';
import Unarmored from '@/icons/unarmoured';
import FighterJet from '@/icons/airplane';
import Ship from '@/icons/ship';
import Submarine from '@/icons/submarine';
import Buildings from '@/icons/buildings';
import ProvinceMorale from '@/icons/provinceMorale';
import Rocket from '@/icons/rocket';

// Icon component for unit classes
export const UnitIcon: React.FC<{ unitClass: UnitClass, size?: string }> = ({ unitClass, size }) => {
  if (!size)
    size = '20px'

  switch (unitClass) {
    case 'Unarmored':
      return <Unarmored size={size}/>
    case 'LightArmor':
      return <LightArmor size={size}/>
    case 'HeavyArmor':
      return <HeavyArmor size={size}/>
    case 'Airplane':
      return <FighterJet size={size}/>
    case 'Ship':
      return <Ship size={size}/>
    case 'Submarine':
      return <Submarine size={size}/>
    case 'Buildings':
      return <Buildings size={size}/>
    case 'ProvinceMorale':
      return <ProvinceMorale size={size}/>
    case 'Rocket':
      return <Rocket size={size}/>
  }
};

