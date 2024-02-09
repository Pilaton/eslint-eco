import prettierConfig from 'eslint-config-prettier';
import { defineFlatConfig } from 'eslint-define-config';
import prettierPlugin from 'eslint-plugin-prettier';

const config = defineFlatConfig({
  files: ['**/*'],
  settings: {
    configName: 'Prettier',
  },
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    ...prettierConfig.rules,
  },
});
export default config;
