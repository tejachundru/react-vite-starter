import { useEffect, useState } from "react";

/**
 * Type for the setter function returned by storage hooks.
 *
 * Works exactly like React's setState:
 *
 * - Accepts a direct value
 * - Or a function that receives the previous value
 */
type SetValue<T> = (value: T | ((val: T) => T)) => void;

/**
 * Factory function for creating storage hooks.
 *
 * This allows us to reuse the same logic for:
 * - localStorage
 * - sessionStorage
 *
 * @param storage - The storage object (localStorage or sessionStorage)
 */
function createStorageHook(storage: Storage) {
  /**
   * Hook for persisting state inside browser storage.
   *
   * @template T - Type of the stored value
   *
   * @param key - Storage key
   * @param initialValue - Default value used if storage is empty
   *
   * @returns A tuple containing:
   * - stored value
   * - setter function (same API as React useState)
   *
   * @example
   * ```tsx
   * const [theme, setTheme] = useLocalStorage("theme", "light");
   *
   * setTheme("dark");
   * ```
   */
  return function useStorage<T>(
    key: string,
    initialValue: T
  ): [T, SetValue<T>] {
    /**
     * Initialize state by reading from storage.
     * Lazy initialization prevents unnecessary reads on re-render.
     */
    const [storedValue, setStoredValue] = useState<T>(() => {
      if (typeof window === "undefined") {
        return initialValue;
      }

      try {
        const item = storage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(`Error reading storage key "${key}":`, error);
        return initialValue;
      }
    });

    /**
     * Updates both React state and browser storage.
     *
     * Supports functional updates like React's setState.
     */
    const setValue: SetValue<T> = (value) => {
      try {
        const valueToStore =
          typeof value === "function"
            ? (value as (val: T) => T)(storedValue)
            : value;

        setStoredValue(valueToStore);

        if (typeof window !== "undefined") {
          storage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error(`Error setting storage key "${key}":`, error);
      }
    };

    /**
     * Listen for storage updates across browser tabs.
     *
     * The "storage" event fires when another tab modifies storage.
     */
    useEffect(() => {
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === key && event.newValue) {
          try {
            setStoredValue(JSON.parse(event.newValue));
          } catch (error) {
            console.error(`Error parsing storage value:`, error);
          }
        }
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, [key]);

    return [storedValue, setValue];
  };
}

/**
 * Hook for persisting state inside **localStorage**.
 *
 * localStorage persists data across browser sessions.
 *
 * @example
 * ```tsx
 * const [theme, setTheme] = useLocalStorage("theme", "light");
 *
 * return (
 *   <button onClick={() => setTheme("dark")}>
 *     Switch Theme
 *   </button>
 * );
 * ```
 *
 * @example
 * Functional updates
 * ```tsx
 * const [count, setCount] = useLocalStorage("count", 0);
 *
 * setCount((prev) => prev + 1);
 * ```
 */
export const useLocalStorage =
  typeof window !== "undefined"
    ? createStorageHook(window.localStorage)
    : (() => {}) as any;

/**
 * Hook for persisting state inside **sessionStorage**.
 *
 * sessionStorage persists data only for the duration of the browser tab.
 * Data is cleared when the tab or window is closed.
 *
 * @example
 * ```tsx
 * const [token, setToken] = useSessionStorage("token", "");
 *
 * setToken("abc123");
 * ```
 *
 * @example
 * Using with form data
 * ```tsx
 * const [formData, setFormData] = useSessionStorage("form", {
 *   name: "",
 *   email: "",
 * });
 * ```
 */
export const useSessionStorage =
  typeof window !== "undefined"
    ? createStorageHook(window.sessionStorage)
    : (() => {}) as any;