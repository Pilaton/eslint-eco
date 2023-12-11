# @pilaton/eslint-config-react

![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-react?style=for-the-badge&logo=npm&labelColor=%231955FF&color=%231955FF)

ESLint configuration including all necessary plugins for testing React project code.

> [!NOTE]
> Package from the [`eslint-eco`](https://github.com/Pilaton/eslint-eco) monorepository.  
> I recommend reading the [documentation](https://github.com/Pilaton/eslint-eco?tab=readme-ov-file#eslint-eco) to understand the whole picture.

## Included in the package

1. React plugin [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
2. React-hooks plugin [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
3. React-refresh plugin [`eslint-plugin-react-refresh`](https://www.npmjs.com/package/eslint-plugin-react-refresh)
4. jsx-a11y plugin [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
5. Tailwind CSS plugin [`eslint-plugin-tailwindcss`](https://www.npmjs.com/package/eslint-plugin-tailwindcss)

## Install

```bash
npm i @pilaton/eslint-config-react --save-dev
```

I recommend using this config over the [`@pilaton/eslint-config-base`](https://github.com/Pilaton/eslint-eco/tree/main/packages/base#pilatoneslint-config-base) base config:

```bash
npm i @pilaton/eslint-config-base @pilaton/eslint-config-react --save-dev
```

## Usage

This configuration is created for the new ESLint Flat Config, and only supports ESM!

### [`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files-new) (eslint>=v8.23.1)

```js
import base from '@pilaton/eslint-config-base';
import react from '@pilaton/eslint-config-react';

export default [
  ...base,
  ...react

  {
    // Your config
  },
];
```
