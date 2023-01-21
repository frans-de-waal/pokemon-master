/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: {
        DEFAULT: '#FF0000',
        dark: '#CC0000',
      },
      blue: {
        DEFAULT: '#0075BE',
        dark: '#0A285F',
      },
      yellow: {
        DEFAULT: '#FFCC00',
        dark: '#D5A100',
      },
    },
    extend: {},
  },
  plugins: [],
};
