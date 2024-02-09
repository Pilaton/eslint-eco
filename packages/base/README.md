# @pilaton/eslint-config-base

![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-base?style=for-the-badge&logo=npm&labelColor=%231955FF&color=%231955FF)

The configuration includes basic JS and TS code checks.

> [!NOTE]
> Package from the [`eslint-eco`](https://github.com/Pilaton/eslint-eco) monorepository.  
> I recommend reading the [documentation](https://github.com/Pilaton/eslint-eco?tab=readme-ov-file#eslint-eco) to understand the whole picture.

## Included in the package

1. [ESLint recommended config](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js)
2. [`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n) — Additional ESLint rules for Node.js
3. [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) — ES2015+ (ES6+) import/export syntax linting support
4. [`eslint-plugin-promise`](https://www.npmjs.com/package/eslint-plugin-promise) – The best practices for JS/TS promises
5. [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn) — More than 100 powerful ESLint rules
6. [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) — Turns off all rules that are unnecessary or might conflict with Prettier (eslint-config-prettier is not installed)
7. [`eslint-config-standard`](https://www.npmjs.com/package/eslint-config-standard) — Rules to make your code conform to the general practices of the «JS Standard Code Style»
8. [`eslint-config-standard-with-typescript`](https://www.npmjs.com/package/eslint-config-standard-with-typescript) — Rules for TypeScript to comply with the «JS Standard Code Style»

## Install

```bash
npm i @pilaton/eslint-config-base --save-dev
```

## Usage

This configuration is created for the new ESLint Flat Config, and only supports ESM!

### [`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files-new) (eslint>=v8.23.1)

```js
import base from '@pilaton/eslint-config-base';

export default [
  ...base,

  {
    // Your config
  },
];
```
