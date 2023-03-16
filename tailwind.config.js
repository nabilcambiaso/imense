const windmill = require('@windmill/react-ui/config')
/** @type {import('tailwindcss').Config} */
const config = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ourGray:'#B6B6B6',
        ourSlightDarkGray: "#AAAAAA",
        ourDarkerGray: '#6B6B6B',
        ourDisabledGray: '#DCDCDC',
        ourBlack: "#616161",
        ourBlue: '#2C8EFF',
        bgColor: '#F8FAFD',
        ourOrange: '#EB7421',
        ourGreen: '#47CA5B',
      }
    },
  },
  plugins: [],
};

module.exports = {
  ...windmill(config),
  ...config,
}