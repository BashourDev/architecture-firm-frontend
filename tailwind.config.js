const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      "dark-blue": "#002337",
      "dark-gold": "#986f25",
      "light-gold": "#f4c87b",
      light: "#f7f7f7",
      dark: "#434A54",
      // primary: "#2E9CCA",
      // light: "#F5F7FA",
      danger: "#E9573F",
      success: "#28C71A",
      info: "#E4E904",
    },
    extend: {
      backgroundImage: {
        building: "url('./assets/images/building-gray-2.jpg')",
      },
    },
  },
  plugins: [],
};
