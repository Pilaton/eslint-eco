import { defineFlatConfig } from 'eslint-define-config';
import reactRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';

const config = defineFlatConfig({
  files: ['**/*.{jsx,tsx}'],
  settings: {
    configName: 'React',

    react: {
      version: 'detect',
    },
  },

  ...reactRecommended,
  ...reactRuntime,

  languageOptions: {
    ...reactRecommended.languageOptions,
    ...reactRuntime.languageOptions,
  },

  rules: {
    ...reactRecommended.rules,
    ...reactRuntime.rules,
  },
});

export default config;
