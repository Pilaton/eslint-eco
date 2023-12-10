import { defineFlatConfig } from 'eslint-define-config';
import unicornPlugin from 'eslint-plugin-unicorn';

const config = defineFlatConfig({
  files: ['**/*'],
  settings: {
    configName: 'Unicorn',
  },
  plugins: {
    unicorn: unicornPlugin,
  },
  rules: {
    ...unicornPlugin.configs.recommended.rules,

    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: false,
        allowList: { props: true },
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['^README\\.md$', '^CHANGELOG\\.md$'],
      },
    ],
    'unicorn/no-null': 'off',
  },
});
export default config;
