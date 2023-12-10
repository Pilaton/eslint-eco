# @pilaton/eslint-config-markdown

![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-react?style=for-the-badge&logo=npm&labelColor=%231955FF&color=%231955FF)

ESLint configuration for checking markdown and mdx files, including:

1. MDX plugin [`eslint-plugin-mdx`](https://www.npmjs.com/package/eslint-plugin-mdx)
2. MarkdownLint plugin [`eslint-plugin-markdownlint`](https://www.npmjs.com/package/eslint-plugin-markdownlint)

## Install

```bash
npm i @pilaton/eslint-config-markdown --save-dev
```

## Usage

### [`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files-new) (eslint>=v8.23.1)

```js
import markdown from '@pilaton/eslint-config-markdown';

export default [
  {
    // Your config
  },

  ...markdown,

  {
    // Your config
  },
];
```
