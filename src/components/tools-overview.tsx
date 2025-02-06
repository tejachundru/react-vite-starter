import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Tool {
  name: string;
  description: string;
  link: string;
}

const tools: Array<Tool> = [
  {
    name: "pnpm",
    description:
      "A strict and efficient alternative to npm with up to 3x faster performance",
    link: "https://pnpm.io/",
  },
  {
    name: "TypeScript",
    description:
      "A typed superset of JavaScript designed with large scale applications in mind",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "ESLint",
    description: "Static code analysis to help find problems within a codebase",
    link: "https://eslint.org/",
  },
  {
    name: "Prettier",
    description: "An opinionated code formatter",
    link: "https://prettier.io/",
  },
  {
    name: "Vite",
    description:
      "Feature rich and highly optimized frontend tooling with TypeScript support out of the box",
    link: "https://vitejs.dev/",
  },
  {
    name: "React",
    description:
      "A modern front-end JavaScript library for building user interfaces based on components",
    link: "https://reactjs.org/",
  },
  {
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes to build any web design imaginable",
    link: "https://tailwindcss.com/",
  },
  {
    name: "ShadCN/ui",
    description: "A UI library with a focus on simplicity and customization",
    link: "https://shadcn.dev/",
  },
  {
    name: "Storybook",
    description:
      "A frontend workshop for building UI components and pages in isolation",
    link: "https://storybook.js.org/",
  },
  {
    name: "ReactRouter",
    description: "A lightweight, fully-featured routing library for React",
    link: "https://reactrouter.com/",
  },
  {
    name: "RTK Query",
    description: "A toolkit for building RTK Query based applications",
    link: "https://redux-toolkit.js.org/rtk-query/overview",
  },
  {
    name: "Zod",
    description:
      "TypeScript-first schema validation with static type inference",
    link: "https://zod.dev/",
  },
  {
    name: "React Testing Library",
    description:
      "A very light-weight, best practice first, solution for testing React components",
    link: "https://testing-library.com/react",
  },
  {
    name: "Vitest",
    description: "A blazing fast unit test framework powered by Vite",
    link: "https://vitest.dev/",
  },
  {
    name: "Playwright",
    description: "Enables reliable end-to-end testing for modern web apps",
    link: "https://playwright.dev/",
  },
  {
    name: "react-i18next",
    description:
      "A powerful internationalization framework for React/React Native based on i18next",
    link: "https://react.i18next.com/",
  },
  {
    name: "Husky + Commitizen + Commitlint",
    description:
      "Git hooks and commit linting to ensure use of descriptive and practical commit messages",
    link: "https://typicode.github.io/husky/",
  },
  {
    name: "ts-reset",
    description:
      "Improvements for TypeScripts built-in typings for use in applications",
    link: "https://github.com/total-typescript/ts-reset",
  },
  {
    name: "Docker",
    description:
      "Containerization tool for deploying your vite-react-boilerplate app",
    link: "https://www.docker.com/",
  },
];

const bgColors = [
  "bg-red-100",
  "bg-yellow-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-indigo-100",
  "bg-purple-100",
  "bg-pink-100",
];

export default function DevelopmentToolsGrid(): JSX.Element {
  return (
    <div className="container mx-auto p-2">
      <h1 className="mb-6 text-2xl font-light text-white">Powered by tools</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map((tool, index) => (
          <Card
            key={tool.name}
            className={`flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-md ${
              bgColors[index % bgColors.length]
            }`}
          >
            <CardHeader className="p-4 pb-0">
              <CardTitle className="flex items-center justify-between text-base">
                <span className="truncate">{tool.name}</span>
                <a
                  className="text-muted-foreground hover:text-primary"
                  href={tool.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink className="size-4" />
                  <span className="sr-only">Visit {tool.name}</span>
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-4 pt-0">
              <p className="line-clamp-3 text-xs text-muted-foreground">
                {tool.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
