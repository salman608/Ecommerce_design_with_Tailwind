/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px',
    },
    containers:{
      center:'true',
      padding:'1rem',
    },
    colors:{
      primary:'#FD3D57',
    },
    extend: {
      fontfamily:{
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      } 

    },
  },
  plugins: [],
}
