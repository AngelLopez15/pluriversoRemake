module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'subtitle': '#8FDE7D'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
