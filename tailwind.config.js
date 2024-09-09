/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "4rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors:{
        mainColor:"#d4af37",
        secondColor:"#E3C965",
        navBG :"#525b6f"
      },
      fontFamily:{
        titleFont : ["DM Serif Text", "serif"],
        projectFont : ["Oswald", "sans-serif"]
      }
    },
    
  },
  plugins: [],
  darkMode:"class"
};
