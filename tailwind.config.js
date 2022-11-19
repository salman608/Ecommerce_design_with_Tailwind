/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontfamily:{
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      } ,
      screens:{
        sm:'576px',
        md:'768px',
        lg:'992px',
        xl:'1200px',
      },
      container:{
        center:true,
        padding:'3rem',
      },
      colors:{
        primary:'#FD3D57',
      },

    },
  },
  vaiants:{
   extend:{
    display:['group-hover'],
    visibility:['group-hover']
   },
  },
  plugins: [],
}
