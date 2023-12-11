# @pilaton/eslint-config-markdown

![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-markdown?style=for-the-badge&logo=npm&labelColor=%231955FF&color=%231955FF)

ESLint configuration for checking `markdown` and `mdx` files.

> [!NOTE]
> Package from the [`eslint-eco`](https://github.com/Pilaton/eslint-eco) monorepository.  
> I recommend reading the [documentation](https://github.com/Pilaton/eslint-eco?tab=readme-ov-file#eslint-eco) to understand the whole picture.

## Included in the package

1. [`eslint-plugin-mdx`](https://www.npmjs.com/package/eslint-plugin-mdx)
2. [`eslint-plugin-markdownlint`](https://www.npmjs.com/package/eslint-plugin-markdownlint)

## Install

```bash
npm i @pilaton/eslint-config-markdown --save-dev
```

## Usage

This configuration is created for the new ESLint Flat Config, and only supports ESM!

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
