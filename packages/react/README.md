# @pilaton/eslint-config-react

![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-react?style=for-the-badge&logo=npm&labelColor=%231955FF&color=%231955FF)

ESLint's configuration for React project code testing, which includes:

1. React plugin [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
2. React-hooks plugin [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
3. React-refresh plugin [`eslint-plugin-react-refresh`](https://www.npmjs.com/package/eslint-plugin-react-refresh)
4. jsx-a11y plugin [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
5. Tailwind CSS plugin [`eslint-plugin-tailwindcss`](https://www.npmjs.com/package/eslint-plugin-tailwindcss)

## Install

```bash
npm i @pilaton/eslint-config-base --save-dev
npm i @pilaton/eslint-config-react --save-dev
```

## Usage

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
