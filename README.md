# React Vite Starter

With all batteries included in this project, you can start building React apps with Vite.

This project is a starter template using **Vite** for fast React development with TypeScript, TailwindCSS, and other modern tools for building, linting, formatting, and testing.

## Get Started

```sh
git clone https://github.com/tejachundru/vite-starter

cd vite-starter

# reset the git repository
rm -rf .git

# install dependencies
pnpm install

# Setup project
pnpm run bootstrap

# Start development
pnpm run dev
```

## Overview

Built with type safety, scalability, and developer experience in mind. A batteries included Vite + React template.

- [pnpm](https://pnpm.io) - A strict and efficient alternative to npm with up to 3x faster performance
- [TypeScript](https://www.typescriptlang.org) - A typed superset of JavaScript designed with large scale applications in mind
- [ESLint](https://eslint.org) - Static code analysis to help find problems within a codebase
- [Prettier](https://prettier.io) - An opinionated code formatter
- [Vite](https://vitejs.dev) - Feature rich and highly optimized frontend tooling with TypeScript support out of the box
- [React](https://react.dev) - A modern front-end JavaScript library for building user interfaces based on components
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework packed with classes to build any web design imaginable
- [ShadCN/ui](https://ui.shadcn.com/) - A UI library with a focus on simplicity and customization
- [Storybook](https://storybook.js.org) - A frontend workshop for building UI components and pages in isolation
- [ReactRouter](https://reactrouter.com) - A lightweight, fully-featured routing library for React
- [RTK Query](https://redux-toolkit.js.org/) - A toolkit for building RTK Query based applications
- [Zod](https://zod.dev) - TypeScript-first schema validation with static type inference
- [React Testing Library](https://testing-library.com) - A very light-weight, best practice first, solution for testing React components
- [Vitest](https://vitest.dev) - A blazing fast unit test framework powered by Vite
- [Playwright](https://playwright.dev) - Enables reliable end-to-end testing for modern web apps
- [react-i18next](https://react.i18next.com/) - A powerful internationalization framework for React/React Native based on i18next
- [Husky](https://github.com/typicode/husky#readme) + [Commitizen](https://github.com/commitizen/cz-cli#readme) + [Commitlint](https://github.com/conventional-changelog/commitlint#readme) - Git hooks and commit linting to ensure use of descriptive and practical commit messages
- [ts-reset](https://github.com/total-typescript/ts-reset#readme) - Improvements for TypeScripts built-in typings for use in applications
- [Docker](https://www.docker.com) - Containerization tool for deploying your vite-react-boilerplate app

## Available Scripts

In this project, the following scripts are available:

- **`bootstrap`**: Initializes the project with Husky and Playwright.
- **`format`**: Formats the code using Prettier.
- **`lint`**: Lints the code with ESLint to ensure coding standards are followed.
- **`dev`**: Starts the development server using Vite.
- **`storybook`**: Launches Storybook in development mode to view and test UI components.
- **`test`**: Runs unit and end-to-end tests.
- **`build`**: Builds the project for production using Vite.
- **`preview`**: Starts the preview server with Vite to view the production build locally.
- **`commitlint`**: Lints commit messages to ensure they follow the defined conventions.
- **`commitizen`**: Initializes Commitizen to assist with conventional commit message formatting.

## Docker build

### Build the Docker image

To build the Docker image for your application, use the following command:

### Development

```sh
docker build -t vite-starter .
```

### Production image build

This image is production-optimized using a multi-stage build for a minimal footprint with built-in nginx configuration to efficiently serve your application.

```sh
docker build -t my-app -f ./dockerizer/Dockerfile .
```
