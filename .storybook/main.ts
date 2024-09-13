import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-viewport',
    "@chromatic-com/storybook"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  refs: {
    // 👇 Upper-case characters not supported in the refs key
    "chromatic-published-storybook": {
      // The title of your Storybook
      title: "Design System",
      // The url provided by Chromatic when it was published
      url: "https://main--66e2b672791b5320e8cdd018.chromatic.com",
    },
  },
};
export default config;
