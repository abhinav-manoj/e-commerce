/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
        'button':'#EE874E',
        'button2':'#BD5012',
      },
    },
  },
  plugins: [],
}

