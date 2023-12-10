import { defineFlatConfig } from 'eslint-define-config';
// import importPlugin, { configs as importRules } from 'eslint-plugin-import';
import importPlugin from 'eslint-plugin-import';

const config = defineFlatConfig({
  files: ['**/*{js,cjs,mjs}', '**/*{ts,mts}', '**/*.{test,spec,d}.ts'],
  settings: {
    configName: 'Import',
  },
  plugins: {
    import: importPlugin,
  },
  rules: {
    // ...importRules.recommended.rules,
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'never',
      },
    ],
  },
});
export default config;
