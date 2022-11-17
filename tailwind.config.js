/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontfamily:{
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      } 

    },
  },
  plugins: [],
}
