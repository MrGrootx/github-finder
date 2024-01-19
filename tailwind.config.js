/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto Mono", "monospace"],
      },
      colors: {
        darkgray: "#222831",
        graywhite: "#EEEEEE",
        lightgray: "#393E46",
        ctmblue: "#00ADB5",
        graywhite: "#EEEEEE",
      },
    },
  },
  plugins: [],
};