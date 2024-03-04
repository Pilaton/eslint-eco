import standardTSConfig from 'eslint-config-standard-with-typescript';
import {
  configs,
  config as tsEslintConfigFunction,
  plugin as tsEslintPlugin,
  parser as tsEslintParser,
} from 'typescript-eslint';

const tsEslintConfig = {};
for (const config of [
  ...configs.recommended,
  ...configs.recommendedTypeChecked,
  ...configs.stylisticTypeChecked,
]) {
  if ('rules' in config) {
    Object.assign(tsEslintConfig, config.rules);
  }
}

const config = tsEslintConfigFunction({
  files: ['**/*.{ts,tsx}', '**/*.{test,spec,d}.ts'],
  settings: {
    configName: 'Typescript',
  },
  plugins: {
    '@typescript-eslint': tsEslintPlugin,
  },

  languageOptions: {
    parser: tsEslintParser,
    parserOptions: {
      project: true,
    },
  },

  rules: {
    ...tsEslintConfig,
    ...standardTSConfig.rules,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
});
export default config;
