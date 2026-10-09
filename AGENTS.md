# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

React + Vite starter template (shadcn/ui style components, Tailwind CSS v4, Redux Toolkit + RTK Query, react-router-dom, i18next, Storybook).

- Package manager: **pnpm** (enable via `corepack enable pnpm` if missing). Never use npm/yarn; `pnpm-lock.yaml` is the source of truth.
- Node >= 20. `@/` is a path alias for `src/` (configured in `tsconfig*.json` and `vite.config.ts`).

## Commands

| Task | Command |
| --- | --- |
| Dev server | `pnpm dev` |
| Build | `pnpm build` |
| Type check | `pnpm type-check` |
| Lint | `pnpm lint` (or `pnpm lint:fix`) |
| Format | `pnpm format` |
| Unit tests | `pnpm test:unit` |
| Unit tests + coverage | `pnpm test:unit:coverage` |
| E2e tests | `pnpm test:e2e` (requires `npx playwright install` first) |
| Everything | `pnpm test` (unit + e2e) |
| Storybook | `pnpm storybook` / `pnpm storybook:build` |

**Run after any change:** `pnpm lint && pnpm type-check && pnpm test:unit`. Lint runs with `--max-warnings 0`, so warnings are failures.

## Dependency constraints (do not bump blindly)

- `eslint` is pinned to **9.x** — ESLint 10 breaks `eslint-plugin-react`/`jsx-a11y` at runtime.
- `typescript` is pinned to **~6.0** — TS 7 is not supported by `typescript-eslint`.
- Build scripts for `esbuild` and `@swc/core` are allow-listed under `pnpm.onlyBuiltDependencies` in `package.json`.

## Code conventions

- ESLint (flat config in `eslint.config.js`) enforces strict typed rules; the important ones:
  - Explicit return types on all functions (`explicit-function-return-type`) and exported functions' parameters (`explicit-module-boundary-types`).
  - No `any` / unsafe typed-API usage (`no-explicit-any`, `no-unsafe-*`).
  - Type-only imports are required (`consistent-type-imports`); avoid duplicate import statements from the same module.
  - Array types use `Array<T>`, not `T[]`.
  - `react-hooks/exhaustive-deps` is an error — dependency arrays must be complete (memoize helpers with `useCallback` when needed).
  - Do not call `setState` synchronously inside effects (`react-hooks/set-state-in-effect`); use lazy `useState` initializers instead.
  - React 19 types: import `JSX` explicitly (`import type { JSX } from "react"`); the global `JSX` namespace no longer exists.
- Environment checks use `import.meta.env` (Vite), not `process.env`.
- Comments/JSDoc are the established style in hooks under `src/hooks/` — follow it when adding hooks.
- Commits follow Conventional Commits (commitlint + husky `commit-msg` hook). Use `pnpm commitizen` for guided commits.
- UI components live in `src/components/ui/` (shadcn pattern, `cva` variants exported next to components — `react-refresh/only-export-components` is disabled for that directory).

## Testing notes

- Unit tests: Vitest + Testing Library (jsdom), setup in `vitest.setup.ts`, config in `vite.config.ts` (`test` block).
- E2e: Playwright, specs in `e2e/`, config in `playwright.config.ts`.
- Storybook stories: `*.stories.tsx` colocated with components; `.storybook/main.ts` holds the addon list.

## Tailwind CSS v4

- No `tailwind.config.js`; the CSS-first config is `src/index.css` (via `@tailwindcss/postcss`).
- `eslint-plugin-tailwindcss` resolves classes from `./src/index.css` (`cssConfigPath` in `eslint.config.js`).
