module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'subtitle': '#8FDE7D',
        'secondary': '#78DEA7',
        'action': '#68DEC8'
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }
      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }
      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }
      'md': { 'max': '768px' },
      // => @media (max-width: 767px) { ... }
      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    rotate: {
      '360': '360deg',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
