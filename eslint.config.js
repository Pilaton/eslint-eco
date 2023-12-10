import { defineFlatConfig } from 'eslint-define-config';
import baseConfig from './packages/base/src/index.js';
import markdownConfig from './packages/markdown/src/index.js';
import nextConfig from './packages/next/src/index.js';
import reactConfig from './packages/react/src/index.js';

export default defineFlatConfig([
  ...baseConfig,
  ...reactConfig,
  ...nextConfig,
  ...markdownConfig,
  {
    rules: {
      'markdownlint/md013': 'off',
      'markdownlint/md033': 'off',
      'markdownlint/md041': 'off',
    },
  },
]);
