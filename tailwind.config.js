/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  /*theme: {
    extend: {},
  },*/
  plugins: [],
  theme: {
      extend: {
          transitionDuration: {
            2000: '2000ms'
          },
          animation: {
            'spin-slow': 'spin 3s linear infinite'
          }
      }
  }
}

