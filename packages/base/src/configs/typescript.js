import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import standardTSConfig from 'eslint-config-standard-with-typescript';
import { defineFlatConfig } from 'eslint-define-config';

const config = defineFlatConfig({
  files: ['**/*.{ts,tsx}', '**/*.{test,spec,d}.ts'],
  settings: {
    configName: 'Typescript',
  },
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      project: true,
    },
  },
  rules: {
    ...standardTSConfig.rules,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
});
export default config;
