const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './next.config.js'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        ...colors,
        gray: {
          '50': '#F7FAFC',
          '100': '#EDF2F7',
          '200': '#E2E8F0',
          '300': '#CBD5E0',
          '400': '#A0AEC0',
          '500': '#718096',
          '600': '#4A5568',
          '700': '#2D3748',
          '800': '#1A202C',
          '900': '#171923',
        },
        blue: {
          '50': '#f4f8ff',
          '100': '#e9f1ff',
          '200': '#c8ddff',
          '300': '#a6c8ff',
          '400': '#649fff',
          '500': '#2176ff',
          '600': '#1e6ae6',
          '700': '#1959bf',
          '800': '#144799',
          '900': '#103a7d'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
