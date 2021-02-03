module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bp-blue': '#187BE5',
      },
      fontFamily: {
        logo: ['Poppins', 'Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      rotate: {
        360: '360deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
