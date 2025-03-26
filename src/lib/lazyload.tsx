/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense } from "react";

interface Options {
  fallback: React.ReactNode;
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never;

/**
 * @example
 * ```tsx
 * // Dynamically load a component without a selector function
 * const LazyComponent = lazyLoad(() => import('./MyComponent'));
 *
 * // Dynamically load a component with a selector function
 * const LazyComponent = lazyLoad(
 *   () => import('./MyComponent'),
 *   (module) => module.MyComponent
 * );
 *
 * // Use the lazy-loaded component in your JSX
 * <LazyComponent someProp="value" />
 * ```
 */
export const lazyLoad = <
  T extends Promise<any>,
  U extends React.ComponentType<any>
>(
  importFn: () => T,
  selectorFn?: (s: Unpromisify<T>) => U,
  options: Options = { fallback: null }
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFn;

  if (selectorFn) {
    lazyFactory = (): Promise<{ default: U }> =>
      importFn().then((module: Unpromisify<T>) => ({
        default: selectorFn(module),
      }));
  }

  const LazyComponent = lazy(lazyFactory);

  return (props: React.ComponentProps<U>): JSX.Element => (
    <Suspense fallback={options.fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
