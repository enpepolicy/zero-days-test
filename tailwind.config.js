/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'red-hat-display': [
          'Red Hat Display',
          'sans-serif'
        ]        
      },
      colors: {
        blue: {
          deep: '#110F23'
        },
        gray: {
          soft: '#E6DAFE'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}

