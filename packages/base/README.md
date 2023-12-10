# @pilaton/eslint-config-base

![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-base?style=for-the-badge&logo=npm&labelColor=%231955FF&color=%231955FF)

ESLint configuration for basic code inspection, which includes:

1. [ESLint recommended config](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js)
2. [`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n)
3. [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
4. [`eslint-plugin-promise`](https://www.npmjs.com/package/eslint-plugin-promise)
5. [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn)
6. [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier) and [`eslint-prettier-configs`](https://www.npmjs.com/package/eslint-prettier-configs)
7. [`eslint-config-standard`](https://www.npmjs.com/package/eslint-config-standard)
8. [`eslint-config-standard-with-typescript`](https://www.npmjs.com/package/eslint-config-standard-with-typescript)

## Install

```bash
npm i @pilaton/eslint-config-base --save-dev
```

## Usage

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
