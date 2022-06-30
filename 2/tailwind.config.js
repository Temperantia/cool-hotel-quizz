const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      blue: "#1779db",
      "blue-light": "#629de5",
      "grey-light": "#dde1e4",
      white: "white",
    },
  },
  plugins: [],
};
