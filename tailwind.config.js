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
          soft: '#E6DAFE',
          table: {
            dark: '#252236',
            light: '#313147'
          }
        },
        beige: {
          "100": 'rgba(229,231,235,.1)',
          "200": 'rgba(229,231,235,.2)'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}

