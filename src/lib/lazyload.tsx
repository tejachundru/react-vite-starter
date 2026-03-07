import React, { lazy, Suspense, ComponentType, ReactNode } from "react";

interface Options {
  fallback?: ReactNode;
}

type Unpromisify<T> = T extends Promise<infer P> ? P : never;

export function lazyLoad<
  T extends Promise<any>,
  U extends ComponentType<any>
>(
  importFn: () => T,
  selectorFn?: (module: Unpromisify<T>) => U,
  options?: Options
) {
  const lazyFactory = () =>
    importFn().then((module: Unpromisify<T>) => ({
      default: selectorFn ? selectorFn(module) : module.default,
    }));

  const LazyComponent = lazy(lazyFactory);

  return (props: React.ComponentProps<U>) => (
    <Suspense fallback={options?.fallback ?? null}>
      <LazyComponent {...props} />
    </Suspense>
  );
}