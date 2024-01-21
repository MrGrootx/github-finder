/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.js",
  ],
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
        ctmred: "#BE3144",
        graydark: "#27374D",
        ctnblue2: "#1597BB",
      },
    },
  },
  plugins: [],
};
