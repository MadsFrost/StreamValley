module.exports = {
  mode: 'jit', // Optionally use just in time engine
  purge: ['./src/**/*.{js,jsx,ts,tsx,css}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'brand': 'linear-gradient(to top, #cc208e 0%, #6713d2 100%)',
        'brand-2': 'linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)',
        'start': "url('https://www.qiez.de/app/uploads/2018/03/mensch-in-einem-dunklen-club-mit-lasern-alexander-popov-365743.jpeg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}