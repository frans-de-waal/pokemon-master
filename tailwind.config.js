/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poke: ['PokemonGb'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1F0812',
      white: '#F2F2F2',
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
      types: {
        Bug: '#A6B91A',
        Dark: '#705746',
        Dragon: '#6F35FC',
        Electric: '#F7D02C',
        Fairy: '#D685AD',
        Fighting: '#C22E28',
        Fire: '#EE8130',
        Flying: '#A98FF3',
        Ghost: '#735797',
        Grass: '#7AC74C',
        Ground: '#E2BF65',
        Ice: '#96D9D6',
        Normal: '#A8A77A',
        Poison: '#A33EA1',
        Psychic: '#F95587',
        Rock: '#B6A136',
        Steel: '#B7B7CE',
        Water: '#6390F0',
      },
    },
    extend: {},
  },
  plugins: [],
};
