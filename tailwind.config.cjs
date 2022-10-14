/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 32,
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',

      gray: {
        900: '#121214',
        800: '#202024',
        450: '#76768A',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },
      
      cyan: {
      500: '#81D8F7',
      300: '#A3E3FA',
      }
      
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
