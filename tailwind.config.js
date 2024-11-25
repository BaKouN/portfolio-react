/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      colors: {
        'tobacco-brown': {
          50: '#F8F7F5',
          100: '#F0EFEC',
          200: '#DBD6CF',
          300: '#C5BDB2',
          400: '#998C79',
          500: '#6D5B3F',
          600: '#625239',
          700: '#413726',
          800: '#31291C',
          900: '#211B13',
        },
      }
    },
  },
  plugins: [tailwindScrollbar],
}