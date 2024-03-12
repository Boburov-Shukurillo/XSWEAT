/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkenBlack: "#121214",
        ligthGray: "#8C8F96",
        blue: "#49D0FF",
        textGray: "#3C3C3C80",
        opacityWhite: "#FFFFFF1C",
      },
      fontSize: {
        51: "51px",
        19: "19px",
        17: "17px",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/HeroSlideImg.jpeg')",
        "hero-patern2": "url('./src/assets/xSweat.png')",
      },
      lineHeight: {
        "05": "0.9",
      },
    },
  },
  plugins: [],
};
