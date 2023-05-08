/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: '#fff',
        'light-h': '#fff',
        'dark-h': '#000',
        'main': '#2192FF',
        'p': '#888'
      }
    },
  },
  plugins: [],
}

