/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily:{
        poppin: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],

      },
      
      colors:{
        'header':'#466170',
        'search':'#94A3B8',
        'text-c':'#F3F4F6',
        'nav':'#EDECEC',
        'hero':'#D9D9D9',
        'button':'#EE874E'
      },
    },
  },
  plugins: [],
}

