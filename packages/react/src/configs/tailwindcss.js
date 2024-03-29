import { defineFlatConfig } from 'eslint-define-config';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';

const config = defineFlatConfig({
  files: ['**/*.{jsx,tsx}'],
  settings: {
    configName: 'Tailwind CSS',
  },
  plugins: {
    tailwindcss: tailwindcssPlugin,
  },
  rules: {
    ...tailwindcssPlugin.configs.recommended.rules,
    'tailwindcss/no-custom-classname': 'off', // Very slow rule
  },
});

export default config;
