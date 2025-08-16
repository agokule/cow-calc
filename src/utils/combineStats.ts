export function combineStats<T extends Record<string, any>>(a: Partial<T>, b: Partial<T>): Partial<T> {
  const result: any = {};

  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

  for (const key of keys) {
    const aVal = a[key];
    const bVal = b[key];

    if (aVal === undefined && bVal === undefined) {
      continue; // skip
    }

    if (typeof aVal === "number" && typeof bVal === "number") {
      result[key] = aVal + bVal as T[typeof key];
    } else if (aVal !== undefined && bVal === undefined) {
      result[key] = aVal;
    } else if (aVal === undefined && bVal !== undefined) {
      result[key] = bVal;
    } else if (typeof aVal === "object" && typeof bVal === "object") {
      result[key] = combineStats(aVal, bVal);
    } else {
      throw new Error(`Incompatible types for key '${key}'`);
    }
  }

  return result as Partial<T>;
}


