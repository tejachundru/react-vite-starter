import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that merges multiple class names into one.
 */
export function cn(...inputs: Array<ClassValue>): string {
  return twMerge(clsx(inputs));
}

/**
 * Checks if the current environment is production.
 *
 * @returns {boolean} True if the current environment is production, false otherwise.
 */
export const isProduction = import.meta.env.MODE === "production";
