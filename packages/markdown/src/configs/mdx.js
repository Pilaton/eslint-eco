import { defineFlatConfig } from 'eslint-define-config';
import mdxPlugin from 'eslint-plugin-mdx';

const config = defineFlatConfig([
  {
    ...mdxPlugin.flat,
    // optional, if you want to lint code blocks at the same
    processor: mdxPlugin.createRemarkProcessor({
      lintCodeBlocks: true,
      // optional, if you want to disable language mapper, set it to `false`
      // if you want to override the default language mapper inside, you can provide your own
      languageMapper: {},
    }),
    settings: {
      configName: 'MDX',
    },
    ignores: ['**/README.md'],
  },
  {
    ...mdxPlugin.flatCodeBlocks,
    rules: {
      ...mdxPlugin.flatCodeBlocks.rules,
      // if you want to override some rules for code blocks
      'no-var': 'error',
      'prefer-const': 'error',
    },
    settings: {
      configName: 'MDX Code',
    },
    ignores: ['**/README.md'],
  },
]);

export default config;
