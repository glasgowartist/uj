const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      './layouts/**/*.html',
      './content/**/*.md',
      './content/**/*.html',
      './content/**/*.js',
      './_vendor/**/*.html'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
   extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
