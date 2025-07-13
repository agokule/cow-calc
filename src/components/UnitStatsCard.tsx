import { IUnitStats } from "@/types";
import CombatStatsTable from "./CombatStatsTable";
import ProductionInfoDisplay from "./ProductionInfoDisplay";
import TerrainEffectsTable from "./TerrainEffectsTable";
import SpecialPropertiesDisplay from "./SpecialPropertiesDisplay";

// Helper to add spaces before capital letters (e.g., "LightArmor" -> "Light Armor")
const formatCamelCase = (text: string) => {
  return text.replace(/([A-Z])/g, ' $1').trim();
};

const UnitStatsCard = ({ unit }: { unit: IUnitStats }) => {
  return (
    <div className="card">
      <div className="unit-header">
        <h2>{unit.unitName}</h2>
        <span className={`doctrine-badge doctrine-${unit.doctrine.toLowerCase()}`}>
          {unit.doctrine}
        </span>
      </div>

      <div className="stats-grid">
        <div><strong>Level:</strong> {unit.level}</div>
        <div><strong>Type:</strong> {formatCamelCase(unit.type)}</div>
        <div><strong>Hitpoints:</strong> {unit.hitpoints}</div>
        <div><strong>Avg. Damage:</strong> {unit.averageDamage}</div>
      </div>

      <SpecialPropertiesDisplay properties={unit.specialProperties} />

      <ProductionInfoDisplay production={unit.production} />
      
      <div className="tables-container">
        <CombatStatsTable stats={unit.combatStatistics} />
        <TerrainEffectsTable effects={unit.terrainEffects} />
      </div>
    </div>
  );
};

export default UnitStatsCard;
