/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        'Beige': {
          DEFAULT: '#E2DFCA',
          light: '#DAD5B7',
          Medium: '#C2B79B',
          dark: '#8C8C8C'
        },
        'blue': {
          Teal: '#3A5F6F',
          dark: '#243757'
        }
      }
    },
    container: {
      center: true,
    },
    screens: {
      xsm: { 'max': '480px' }
    }
  },
  plugins: [],
}