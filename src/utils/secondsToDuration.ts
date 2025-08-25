/**
 * Converts a number of seconds into a duration string like "1h30m" or "24m".
 * Examples:
 *   5400 => "1h30m"
 *   1440 => "24m"
 *   59   => "0m"
 *   3600 => "1h"
 *   3661 => "1h1m"
 */
export function secondsToDuration(seconds: number): string {
  if (seconds < 0) throw new Error("Negative seconds not allowed");

  if (seconds === Infinity)
    return "Forever";

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  let result = "";
  if (hours > 0) result += `${hours}h`;
  result += `${minutes}m`;

  return result;
}
