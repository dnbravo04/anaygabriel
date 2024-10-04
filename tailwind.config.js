/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "451px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        italianno: ["Italianno", "serif"],
        handlee: ["Handlee", "sans-serif"],
      },
      colors: {
        whitesmoke: "#f7f4f3",
        oldrose: "#be7679",
        blackolive: "#2b2a1a",
        auburn: "#a6202d",
        pakistangreen: "#26300D",
        mossgreen:"#576C1E",
        platinum:"#D3DBDE",
      },
      backgroundImage: {
        "header-image": "url('./img/image1.webp')",
        "gallery-image": "url('./img/image2.webp')",
        "gold-border-with-roses": "url('./img/gold-border-with-roses.png')",
        "final-image": "url(./img/image3.webp)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        scaleIn: "scaleIn 0.3s ease-in-out",
      },
      transitionProperty: {
        opacity: "opacity",
        transform: 'transform',
      },
    },
  },
  plugins: [],
};
