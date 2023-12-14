import { defineFlatConfig } from 'eslint-define-config';
import promisePlugin from 'eslint-plugin-promise';

const config = defineFlatConfig({
  files: ['**/*{js,cjs,mjs}', '**/*{ts,mts}', '**/*{jsx,tsx}', '**/*.{test,spec,d}.ts'],
  settings: {
    configName: 'Promise',
  },
  plugins: {
    promise: promisePlugin,
  },
  rules: { ...promisePlugin.configs.recommended.rules },
});
export default config;
