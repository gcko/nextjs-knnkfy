import { join } from 'path';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(__dirname, 'node_modules/primereact/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
export default config;
