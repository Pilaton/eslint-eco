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
    ...typescriptPlugin.configs.recommended.rules,
    ...typescriptPlugin.configs['recommended-type-checked'].rules,
    ...typescriptPlugin.configs['stylistic-type-checked'].rules,
    ...standardTSConfig.rules,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
});
export default config;
