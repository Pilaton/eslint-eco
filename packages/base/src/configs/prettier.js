import prettierConfig from 'eslint-config-prettier';
import { defineFlatConfig } from 'eslint-define-config';

const config = defineFlatConfig({
  files: ['**/*'],
  settings: {
    configName: 'Prettier',
  },
  rules: {
    ...prettierConfig.rules,
  },
});
export default config;
