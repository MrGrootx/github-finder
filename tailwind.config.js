/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./assets/js/main.js",
    "./assets/js/iziToast.min.js.js",
    "./assets/js/notification.js",
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
