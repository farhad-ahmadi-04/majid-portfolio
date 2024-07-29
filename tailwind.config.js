/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-pattern': "url('/images/Circle Blues Pattern.png')",
      },
      colors: {
        'Beige': {
          DEFAULT: '#E2DFCA',
          light: '#DAD5B7',
          Medium: '#C2B79B',
          dark: '#CCCBC3',
          semiDark: '#BCBCBC',
          darker: '#8C8C8C'
        },
        'blue': {
          Teal: '#3A5F6F',
          dark: '#243757',
          light: "#586882"
        },
        'gray': {
          DEFAULT: '#B6B6B6'
        },
        'cards': {
          yellow: "#D7D971",
          blue: "#71CCD9",
          brown: "#D9C271",
          pink: "#EF9DE7",
          text: "#535353",
          darkText: '#505050'
        }
      }
    },
    container: {
      center: true,
    },
    screens: {
      xsm: { 'max': '480px' },
      sm: { 'max': '640px' },
      md: { 'max': '768px' },
      mdl: { 'max': '900px' },
      lg: { 'max': '1024px' },
      xl: { 'max': '1280px' },
      "2xl": { 'max': '1535px' },
      "3xl": '1536px',
    },
    plugins: [],
  }
}