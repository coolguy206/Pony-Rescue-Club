// prettier.config.js
import * as tailwindPlugin from 'prettier-plugin-tailwindcss';

/** @type {import("prettier").Config} */
export default {
  plugins: [tailwindPlugin],
  tailwindStylesheet: './src/index.css',

  // ADD THIS LINE: Tell Prettier to look inside custom props
  tailwindAttributes: ['className', 'customClassProp', 'styles', ' divContainerClasses', 'textContainerClasses', 'imageContainerClasses', 'sectionClasses', 'h2Classes', 'pClasses', 'CTAClasses'],

  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  arrowParens: 'always',
  endOfLine: 'lf',
};
