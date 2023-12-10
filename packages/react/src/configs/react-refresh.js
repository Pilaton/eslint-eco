import { defineFlatConfig } from 'eslint-define-config';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

const config = defineFlatConfig({
  files: ['**/*.{jsx,tsx}'],
  settings: {
    configName: 'React refresh',
  },
  plugins: {
    'react-refresh': reactRefreshPlugin,
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
});

export default config;
