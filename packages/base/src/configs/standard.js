// eslint-disable-next-line n/no-extraneous-import
import standardConfig from 'eslint-config-standard';
import { defineFlatConfig } from 'eslint-define-config';
import importPlugin from 'eslint-plugin-import';
import nodePlugin from 'eslint-plugin-n';
import promisePlugin from 'eslint-plugin-promise';

const config = defineFlatConfig({
  files: ['**/*{js,cjs,mjs}', '**/*{ts,mts}', '**/*{jsx,tsx}', '**/*.{test,spec,d}.ts'],
  settings: {
    configName: 'standard',
  },
  languageOptions: {
    parserOptions: {
      ...standardConfig.parserOptions,
    },
  },
  plugins: {
    import: importPlugin,
    n: nodePlugin,
    promise: promisePlugin,
  },

  rules: {
    ...standardConfig.rules,
  },
});
export default config;
