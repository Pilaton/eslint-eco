# @pilaton/eslint-eco

Monorepository with all necessary ESLint configurations.

---

> [!IMPORTANT]
> Only ESM and ESLint FlatConfig

---

Includes the following sub-packages:

1. [`@pilaton/eslint-config-base`](./packages/base/README.md)  
   The configuration includes basic JS and TS code checks.

2. [`@pilaton/eslint-config-react`](./packages/react/README.md)  
   Additional config on top of the base config if you use React in your project.
3. [`@pilaton/eslint-config-next`](./packages/next/README.md)  
   Additional config on top of react config if you use Next.js in your project.
4. [`@pilaton/eslint-config-markdown`](./packages/markdown/README.md)  
   Config for linting .md and .mdx files.

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
