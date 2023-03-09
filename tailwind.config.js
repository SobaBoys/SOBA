/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      nw: '100vw',
      nh: '100vh',
      full: '576px',
    },
    maxWidth: {
      full: '576px',
    },
    extend: {
      colors: {
        primary: {},
        secondary: {},
        title: '#232323',
        span: '#ababab',
        black: '#333333',
        white: '#fefefe',
        warn: '#C7A43C',
        error: '#C7473B',
        success: '#47C753',
      },
      keyframes: {
        push: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.025)' },
        },
        pull: {
          '0%': { transform: 'scale(1.025)' },
          '100%': { transform: 'scale(0.96)' },
        },
      },
      animation: {},
    },
  },
  variants: {},
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.2xl'), color: theme('colors.text.title') },
        h2: { fontSize: theme('fontSize.xl'), color: theme('colors.text.title') },
        h3: { fontSize: theme('fontSize.lg'), color: theme('colors.text.title') },
        p: { fontSize: theme('fontSize.base'), color: theme('colors.text.black') },
        span: { fontSize: theme('fontSize.sm'), color: theme('colors.text.span') },
      });
    }),
  ],
};
