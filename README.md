# React Vite Starter

With all batteries included in this project, you can start building React apps with Vite.

This project is a starter template using **Vite** for fast React development with TypeScript, TailwindCSS, and other modern tools for building, linting, formatting, and testing.

## Get Started

```sh
# Clone the repository
git clone https://github.com/tejachundru/vite-starter

# Navigate to the project directory
cd vite-starter

# Reset the git repository
rm -rf .git

# Install dependencies
pnpm install

# Setup project
pnpm run bootstrap

# Start development
pnpm run dev
```

## Overview

Built with type safety, scalability, and developer experience in mind. A batteries included Vite + React template.

- [**React**](https://react.dev) ⚛️ - A modern front-end JavaScript library for building user interfaces based on components
- [**Vite**](https://vitejs.dev) ⚡ - Feature rich and highly optimized frontend tooling with TypeScript support out of the box
- [**TypeScript**](https://www.typescriptlang.org) 🔷 - A typed superset of JavaScript designed with large scale applications in mind
- [**Tailwind CSS**](https://tailwindcss.com) 🎨 - A utility-first CSS framework packed with classes to build any web design imaginable
- [**ShadCN/ui**](https://ui.shadcn.com/) 🧩 - A UI library with a focus on simplicity and customization
- [**ReactRouter**](https://reactrouter.com) 🧭 - A lightweight, fully-featured routing library for React
- [**RTK Query**](https://redux-toolkit.js.org/) 🔄 - A toolkit for building RTK Query based applications
- [**Zod**](https://zod.dev) 🛡️ - TypeScript-first schema validation with static type inference
- [**Vitest**](https://vitest.dev) ⚡ - A blazing fast unit test framework powered by Vite
- [**React Testing Library**](https://testing-library.com) 🧪 - A very light-weight, best practice first, solution for testing React components
- [**Playwright**](https://playwright.dev) 🎭 - Enables reliable end-to-end testing for modern web apps
- [**pnpm**](https://pnpm.io) 📦 - A strict and efficient alternative to npm with up to 3x faster performance
- [**ESLint**](https://eslint.org) 🧹 - Static code analysis to help find problems within a codebase
- [**Prettier**](https://prettier.io) ✨ - An opinionated code formatter
- [**Storybook**](https://storybook.js.org) 📚 - A frontend workshop for building UI components and pages in isolation
- [**react-i18next**](https://react.i18next.com/) 🌐 - A powerful internationalization framework for React/React Native based on i18next
- [**Docker**](https://www.docker.com) 🐳 - Containerization tool for deploying your vite-react-boilerplate app
- [**Husky**](https://github.com/typicode/husky#readme) + [**Commitizen**](https://github.com/commitizen/cz-cli#readme) + [**Commitlint**](https://github.com/conventional-changelog/commitlint#readme) 🐶 - Git hooks and commit linting to ensure use of descriptive and practical commit messages
- [**ts-reset**](https://github.com/total-typescript/ts-reset#readme) 🔧 - Improvements for TypeScripts built-in typings for use in applications

## Available Scripts

In this project, the following scripts are available:

| Script               | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `bootstrap`          | Initializes the project with Husky and Playwright                            |
| `format`             | Formats the code using Prettier                                              |
| `lint`               | Lints the code with ESLint to ensure coding standards are followed           |
| `lint:fix`           | Fixes linting issues automatically                                           |
| `dev`                | Starts the development server using Vite                                     |
| `storybook`          | Launches Storybook in development mode to view and test UI components        |
| `storybook:build`    | Builds Storybook for production                                              |
| `test`               | Runs unit and end-to-end tests                                               |
| `test:unit`          | Runs only unit tests                                                         |
| `test:unit:coverage` | Runs unit tests with coverage report                                         |
| `test:e2e`           | Runs only end-to-end tests                                                   |
| `test:e2e:report`    | Shows the Playwright test report                                             |
| `build`              | Builds the project for production using Vite                                 |
| `preview`            | Starts the preview server with Vite to view the production build locally     |
| `commitlint`         | Lints commit messages to ensure they follow the defined conventions          |
| `commitizen`         | Initializes Commitizen to assist with conventional commit message formatting |

## Project Structure

```
react-vite-starter/
├── .storybook/          # Storybook configuration
├── e2e/                 # End-to-end tests
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── locales/         # i18n translations
│   ├── pages/           # Page components
│   ├── router/          # Routing configuration
│   ├── services/        # API services
│   ├── store/           # Redux store and slices
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
```

## Docker Build

### Development

```sh
docker build -t my-app -f ./Dockerfile.dev .
```

### Production Image Build

This image is production-optimized using a multi-stage build for a minimal footprint with built-in nginx configuration to efficiently serve your application.

```sh
docker build -t my-app -f ./Dockerfile .
```

To run the Docker container:

```sh
docker run -p 8080:80 my-app
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=https://api.example.com
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `pnpm run commitizen`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Resources for development

Some resources links that can helpful while development

- [Shadcn FormBuilder](https://shadcn-form-build.vercel.app/) - Create forms with Shadcn, react-hook-form and zod within minutes.
