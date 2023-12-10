import { defineFlatConfig } from 'eslint-define-config';
import a11yConfig from './configs/jsx-a11y.js';
import hooksConfig from './configs/react-hooks.js';
import refreshConfig from './configs/react-refresh.js';
import reactConfig from './configs/react.js';
import tailwindcssConfig from './configs/tailwindcss.js';

export default defineFlatConfig([
  reactConfig,
  hooksConfig,
  refreshConfig,
  a11yConfig,
  tailwindcssConfig,
]);
