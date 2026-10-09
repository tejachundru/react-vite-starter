import { useCallback, useEffect, useState } from "react";

/**
 * Breakpoint keys used in the responsive system.
 *
 * These correspond to common responsive design breakpoints
 * used by frameworks like TailwindCSS.
 */
type BreakpointKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Breakpoint values in pixels.
 *
 * Each key represents the **minimum viewport width**
 * at which the breakpoint becomes active.
 */
const breakpoints: Record<BreakpointKey, number> = {
  xs: 0,      // mobile
  sm: 640,    // small tablets / large phones
  md: 768,    // tablets
  lg: 1024,   // laptops
  xl: 1280,   // desktops
  "2xl": 1536 // large desktops
};

/**
 * Hook: useBreakpoint
 *
 * Returns whether the viewport width is **greater than or equal to**
 * the specified breakpoint.
 *
 * Internally listens to the window resize event and updates
 * the result when the viewport size changes.
 *
 * @param breakpoint - breakpoint key to check against
 *
 * @returns boolean indicating whether the breakpoint is active
 *
 * @example
 * ```tsx
 * // Check if viewport is medium size or larger
 * const isMediumOrLarger = useBreakpoint("md");
 *
 * return (
 *   <div>
 *     {isMediumOrLarger ? <DesktopLayout /> : <MobileLayout />}
 *   </div>
 * );
 * ```
 */
export function useBreakpoint(breakpoint: BreakpointKey): boolean {
  /**
   * Checks if the current viewport width satisfies the breakpoint.
   *
   * Used both for lazy state initialization and inside the
   * memoized resize handler below.
   */
  const getIsBreakpoint = (): boolean => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= breakpoints[breakpoint];
  };

  // State storing whether the breakpoint condition is satisfied,
  // initialized lazily so no effect is needed for the first render
  const [isBreakpoint, setIsBreakpoint] =
    useState<boolean>(getIsBreakpoint);

  /**
   * Memoized with useCallback so the same function reference
   * is used for event listeners.
   */
  const checkBreakpoint = useCallback(() => {
    setIsBreakpoint(window.innerWidth >= breakpoints[breakpoint]);
  }, [breakpoint]);

  useEffect(() => {
    // Listen for window resize events
    window.addEventListener("resize", checkBreakpoint);

    // Cleanup event listener on component unmount
    return (): void => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  }, [checkBreakpoint]);

  return isBreakpoint;
}

/**
 * Hook: useActiveBreakpoint
 *
 * Returns the **current active breakpoint key**
 * based on the viewport width.
 *
 * The hook determines which breakpoint range the viewport falls into
 * by selecting the largest breakpoint that is less than or equal
 * to the current width.
 *
 * @returns the active breakpoint key
 *
 * @example
 * ```tsx
 * const breakpoint = useActiveBreakpoint();
 *
 * return (
 *   <div>
 *     <p>Current breakpoint: {breakpoint}</p>
 *
 *     {breakpoint === "xs" && <MobileOnlyFeature />}
 *     {breakpoint === "lg" && <DesktopFeature />}
 *   </div>
 * );
 * ```
 */
export function useActiveBreakpoint(): BreakpointKey {

  /**
   * Helper function that calculates the current active breakpoint.
   *
   * Handles SSR environments by returning "xs"
   * when window is not available.
   */
  const getBreakpoint = (): BreakpointKey => {
    // SSR safety guard
    if (typeof window === "undefined") return "xs";

    const width = window.innerWidth;

    /**
     * Convert breakpoint object to entries and sort them
     * in descending order so we can find the largest
     * breakpoint that the viewport width satisfies.
     */
    const sorted = Object.entries(breakpoints)
      .sort((a, b) => b[1] - a[1]) as Array<[BreakpointKey, number]>;

    // Find the first matching breakpoint
    for (const [key, minWidth] of sorted) {
      if (width >= minWidth) return key;
    }

    // Fallback (should rarely happen)
    return "xs";
  };

  /**
   * State storing the currently active breakpoint.
   *
   * The initial state is calculated using getBreakpoint()
   * so the correct value is set immediately on mount.
   */
  const [activeBreakpoint, setActiveBreakpoint] =
    useState<BreakpointKey>(getBreakpoint);

  /**
   * Resize handler that recalculates the breakpoint
   * and updates state only if the breakpoint actually changed.
   */
  const updateActiveBreakpoint = useCallback(() => {
    const next = getBreakpoint();

    setActiveBreakpoint((previous) => (previous === next ? previous : next));
  }, []);

  useEffect(() => {
    // Prevent execution during server-side rendering
    if (typeof window === "undefined") return;

    // Listen for window resize events
    window.addEventListener("resize", updateActiveBreakpoint);

    // Cleanup listener when component unmounts
    return (): void => { window.removeEventListener("resize", updateActiveBreakpoint); };
  }, [updateActiveBreakpoint]);

  return activeBreakpoint;
}