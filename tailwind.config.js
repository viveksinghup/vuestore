module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Oakes Grotesk', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1312px',
        },
      },
      fontSize: {
        '24': '24px',
      },
      colors: {
        brandBlue: '#013CAC',
        darkBlue: '#012B6D',
        yellow: '#FFCD28',
        blue10: '#EBF5FF',
        blue20: '#DFE9F2',
        gray: '#F2F2F2',
        gray10: '#CCCCCC',
        gray20: '#B7B7B7',
        gray30: '#ADADAD',
        gray40: '#999999',
        gray50: '#7B7E83'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

