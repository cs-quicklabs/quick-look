const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      display: ['Lexend', ...defaultTheme.fontFamily.sans],
      fontFamily: {
        inter: ['Inter'],
      },
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar-hide')],
}
