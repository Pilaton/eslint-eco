# eslint-eco

Monorepository with all necessary ESLint configurations.

---

> [!IMPORTANT]
> Only ESM and ESLint FlatConfig

---

Includes the following sub-packages:

1. [`@pilaton/eslint-config-base`](./packages/base/README.md)  
   The configuration includes basic JS and TS code checks.

   ![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-base?style=flat-square&logo=npm&labelColor=%236a6eff&color=%236a6eff)

2. [`@pilaton/eslint-config-react`](./packages/react/README.md)  
   Additional config on top of the base config if you use React in your project.

   ![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-react?style=flat-square&logo=npm&labelColor=%236a6eff&color=%236a6eff)

3. [`@pilaton/eslint-config-next`](./packages/next/README.md)  
   Additional config on top of react config if you use Next.js in your project.

   ![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-next?style=flat-square&logo=npm&labelColor=%236a6eff&color=%236a6eff)

4. [`@pilaton/eslint-config-markdown`](./packages/markdown/README.md)  
   Config for linting .md and .mdx files.

   ![npm](https://img.shields.io/npm/v/%40pilaton%2Feslint-config-markdown?style=flat-square&logo=npm&labelColor=%236a6eff&color=%236a6eff)

## Install

```bash
npm i @pilaton/eslint-config-[NAME] --save-dev
```

[NAME]: **base**, **react**, **next** or **markdown**

## Usage

### [`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files-new) (eslint>=v8.23.1)

```js
import base from '@pilaton/eslint-config-base';
import markdown from '@pilaton/eslint-config-markdown';
import next from '@pilaton/eslint-config-next';
import react from '@pilaton/eslint-config-react';

export default [
  ...base,
  ...react,
  ...next,
  ...markdown,

  {
    // Your config
  },
];
```
