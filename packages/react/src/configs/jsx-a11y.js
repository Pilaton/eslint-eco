import { defineFlatConfig } from 'eslint-define-config';
import a11yPlugin from 'eslint-plugin-jsx-a11y';

const config = defineFlatConfig({
  files: ['**/*.{jsx,tsx}'],
  settings: {
    configName: 'a11y',
  },
  plugins: {
    'jsx-a11y': a11yPlugin,
  },
  rules: {
    ...a11yPlugin.configs.strict.rules,
  },
});

export default config;
