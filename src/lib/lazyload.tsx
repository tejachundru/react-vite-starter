import {
  lazy,
  Suspense,
  type ComponentProps,
  type ComponentType,
  type ReactNode,
} from "react";

interface Options {
  fallback?: ReactNode;
}

type Unpromisify<T> = T extends Promise<infer P> ? P : never;

export function lazyLoad<T extends Promise<unknown>, U extends ComponentType>(
  importFn: () => T,
  selectorFn?: (module: Unpromisify<T>) => U,
  options?: Options
): (props: ComponentProps<U>) => ReactNode {
  const lazyFactory = (): Promise<{ default: ComponentType }> =>
    importFn().then((module) => ({
      default: selectorFn
        ? selectorFn(module as Unpromisify<T>)
        : (module as { default: ComponentType }).default,
    }));

  const LazyComponent = lazy(lazyFactory);

  return (props: ComponentProps<U>): ReactNode => (
    <Suspense fallback={options?.fallback ?? null}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
