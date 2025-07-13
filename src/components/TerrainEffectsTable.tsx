import { ITerrainEffects } from "@/types";

// Helper to format percentage values nicely
const formatPercent = (value: number | null) => {
  if (value === null) return '-';
  const percentage = value * 100;
  return `${percentage > 0 ? '+' : ''}${percentage}%`;
};

const TerrainEffectsTable = ({ effects }: { effects: ITerrainEffects }) => {
  return (
    <div className="stats-section">
      <h3>Terrain Effects</h3>
      <table>
        <thead>
          <tr>
            <th>Terrain</th>
            <th>Health</th>
            <th>Speed</th>
            <th>Strength</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(effects).map(([terrain, mods]) => (
            <tr key={terrain}>
              <td style={{textTransform: 'capitalize'}}>{terrain.replace('enemyTerritory', 'Enemy Territory')}</td>
              <td>{mods.health ?? '-'}</td>
              <td>{formatPercent(mods.speedModifier)}</td>
              <td>{formatPercent(mods.strengthModifier)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TerrainEffectsTable;
