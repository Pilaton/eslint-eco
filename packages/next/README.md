# @pilaton/eslint-config-next

![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-next?style=for-the-badge&logo=npm&labelColor=%231955FF&color=%231955FF)

ESLint configuration for code inspection of Next.js projects.

> [!NOTE]
> Package from the [`eslint-eco`](https://github.com/Pilaton/eslint-eco) monorepository.  
> I recommend reading the [documentation](https://github.com/Pilaton/eslint-eco?tab=readme-ov-file#eslint-eco) to understand the whole picture.

## Included in the package

[`@next/eslint-plugin-next`](https://www.npmjs.com/package/@next/eslint-plugin-next)

## Install

```bash
npm i @pilaton/eslint-config-next --save-dev
```

I recommend using this config over [`@pilaton/eslint-config-base`](https://github.com/Pilaton/eslint-eco/tree/main/packages/base#pilatoneslint-config-base) and [`@pilaton/eslint-config-react`](https://github.com/Pilaton/eslint-eco/tree/main/packages/react#pilatoneslint-config-react):

```bash
npm i @pilaton/eslint-config-base @pilaton/eslint-config-react @pilaton/eslint-config-next --save-dev
```

## Usage

This configuration is created for the new ESLint Flat Config, and only supports ESM!

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
