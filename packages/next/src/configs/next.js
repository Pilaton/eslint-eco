import nextPlugin from '@next/eslint-plugin-next';
import { defineFlatConfig } from 'eslint-define-config';

const config = defineFlatConfig({
  files: ['**/*.{jsx,tsx}'],
  settings: {
    configName: 'Next',
  },
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
  },
});

export default config;
