module.exports = {
  mode: 'jit', // Optionally use just in time engine
  purge: ['./src/**/*.{js,jsx,ts,tsx,css}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'max': '576px'},
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        app: '#191A2D',
        'app-secondary': '#323352',
        'app-tertiary': '#464371',
        youtube: '#FF0000',
        'youtube-secondary': '#d41e11',
        spotify: '#1DB954',
        'spotify-secondary': '#129942',
        soundcloud: '#F26F23',
        'soundcloud-secondary': '#d15f1d'
      },
      boxShadow: {
        custom: '0px 7px 8px -2px rgba(0,0,0,0.44)'
      },
      backgroundImage: {
        'brand': 'linear-gradient(to top, #cc208e 0%, #6713d2 100%)',
        'brand-2': 'linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)',
        'start': "url('../assets/frank.jpg')",
        'switch-1': "url('../assets/control.jpg')",
        'switch-2': "url('../assets/techno.jpg')",
        'play': 'linear-gradient(to top right, #786BE9 0%, #A55BF1 100%)',
        'home': 'linear-gradient(to bottom left, #333453 0%, #1C1D31 100%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}