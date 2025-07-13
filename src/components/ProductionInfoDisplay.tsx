import { IProductionInfo, ResourceType } from "@/types";

/**
 * Formats a duration in seconds into a human-readable string (e.g., "1h 45m").
 */
const formatSeconds = (totalSeconds: number): string => {
  if (totalSeconds < 60) return `${totalSeconds}s`;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  
  let result = '';
  if (hours > 0) result += `${hours}h `;
  if (minutes > 0) result += `${minutes}m`;
  
  return result.trim();
};

const ProductionInfoDisplay = ({ production }: { production: IProductionInfo }) => {
  return (
    <div className="production-info stats-section">
      <h3>Production</h3>
      <div className="production-details">
        <div className="resource-costs">
          <h4>Costs</h4>
          <ul>
            {Object.entries(production.costs).map(([resource, amount]) => (
              <li key={resource}>
                <span>{resource.charAt(0).toUpperCase() + resource.slice(1)}</span>
                <strong>{amount.toLocaleString()}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="production-time">
          <h4>Minimum Time</h4>
          <p>{formatSeconds(production.minTimeInSeconds)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductionInfoDisplay;
