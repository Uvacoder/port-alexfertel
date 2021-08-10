const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors,
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
