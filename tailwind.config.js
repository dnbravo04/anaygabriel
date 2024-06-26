/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
        'gallery-image':"url('./img/image2.jpg')",
        'gold-border-with-roses':"url('./img/gold-border-with-roses.png')"
      }
    },
  },
  plugins: [],
};
