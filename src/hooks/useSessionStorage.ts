import { useState, useEffect } from 'react';

export function useSessionStorage<T>(key: string, initialValue: T): [T, (val: T) => void] {
  // 1. Initialize state. We use a function so this only runs once.
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn("Error reading sessionStorage", error);
      return initialValue;
    }
  });

  // 2. Create a setter function that updates React state AND sessionStorage
  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have the exact same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Update React state
      setStoredValue(valueToStore);
      
      // Update sessionStorage
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn("Error setting sessionStorage", error);
    }
  };

  return [storedValue, setValue];
}
