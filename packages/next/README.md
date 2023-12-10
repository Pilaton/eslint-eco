# @pilaton/eslint-config-next

![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-react?style=for-the-badge&logo=npm&labelColor=%231955FF&color=%231955FF)

ESLint configuration for code inspection of Next.js projects, which includes:

Next.js plugin [`@next/eslint-plugin-next`](https://www.npmjs.com/package/@next/eslint-plugin-next)

## Install

```bash
npm i @pilaton/eslint-config-base --save-dev
npm i @pilaton/eslint-config-react --save-dev
npm i @pilaton/eslint-config-next --save-dev
```

## Usage

### [`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files-new) (eslint>=v8.23.1)

```js
import base from '@pilaton/eslint-config-base';
import react from '@pilaton/eslint-config-react';
import next from '@pilaton/eslint-config-next';

export default [
  ...base,
  ...react,
  ...next

  {
    // Your config
  },
];
```
