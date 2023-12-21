import { defineFlatConfig } from 'eslint-define-config';
import unicornPlugin from 'eslint-plugin-unicorn';

const config = defineFlatConfig({
  settings: {
    configName: 'Unicorn',
  },

  files: ['**/*'],
  ...unicornPlugin.configs['flat/recommended'],

  rules: {
    ...unicornPlugin.configs['flat/recommended'].rules,

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
