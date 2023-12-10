import eslint from '@eslint/js';
import { defineFlatConfig } from 'eslint-define-config';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';
import importConfig from './configs/import.js';
import prettierConfig from './configs/prettier.js';
import promiseConfig from './configs/promise.js';
import standardConfig from './configs/standard.js';
import typescriptConfig from './configs/typescript.js';
import unicornConfig from './configs/unicorn.js';

export default defineFlatConfig([
  { ignores: ['.next', 'build', 'dist', '.cache'] },

  // Globals
  {
    settings: {
      configName: 'Globals',
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
  },

  eslint.configs.recommended,

  ...nodePlugin.configs['flat/mixed-esm-and-cjs'],
  importConfig,
  promiseConfig,
  standardConfig,

  typescriptConfig,
  unicornConfig,
  prettierConfig,
]);
