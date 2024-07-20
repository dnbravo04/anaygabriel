/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'xs':'451px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'

    
    },
    extend: {
      fontFamily:{
        "italianno":['Italianno','serif'],
        "handlee":['Handlee','sans-serif']
      },
      colors:{
        'whitesmoke': '#f7f4f3',
        'oldrose' : '#be7679',
        'blackolive': '#2b2a1a',
        'auburn': '#a6202d',
      },
      backgroundImage:{
        'header-image': "url('./img/image1.jpg')",
        'gallery-image':"url('./img/image2.jpeg')",
        'gold-border-with-roses':"url('./img/gold-border-with-roses.png')",
        'final-image':"url(./img/image3.jpg)"
      }
    },
  },
  plugins: [],
};
