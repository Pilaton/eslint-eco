import { defineFlatConfig } from 'eslint-define-config';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

const config = defineFlatConfig({
  files: ['**/*.{jsx,tsx}'],
  settings: {
    configName: 'React hooks',
  },
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    ...reactHooksPlugin.configs.recommended.rules,
  },
});

export default config;
