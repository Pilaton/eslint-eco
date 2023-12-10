import { defineFlatConfig } from 'eslint-define-config';
import markdownlintPlugin from 'eslint-plugin-markdownlint';
import markdownlintParser from 'eslint-plugin-markdownlint/parser.js';

const config = defineFlatConfig({
  files: ['**/*.md'],
  ignores: ['**/CHANGELOG.md'],
  settings: {
    configName: 'MarkdownLint',
  },
  plugins: {
    markdownlint: markdownlintPlugin,
  },
  languageOptions: {
    parser: markdownlintParser,
  },
  rules: {
    ...markdownlintPlugin.configs.recommended.rules,

    'markdownlint/md013': 'off',
    'markdownlint/md033': 'off',
    'markdownlint/md041': 'off',
  },
});

export default config;
