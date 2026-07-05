import { ICombatStatistics } from "@/types";

// Helper to format the key names for display
const formatStatName = (name: string) => {
  return name.replace('vs', 'vs. ').replace(/([A-Z])/g, ' $1').trim();
};

const CombatStatsTable = ({ stats }: { stats: ICombatStatistics }) => {
  return (
    <div className="stats-section">
      <h3>Combat Statistics</h3>
      <table>
        <thead>
          <tr>
            <th>Target Type</th>
            <th>Attack</th>
            <th>Defense</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(stats).map(([key, value]) => (
            <tr key={key}>
              <td>{formatStatName(key)}</td>
              <td>{Math.round(value.attack * 10) / 10}</td>
              <td>{value.defense ? (Math.round(value.defense * 10) / 10) : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CombatStatsTable;
