const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
        pacifico: ["Pacifico"],
        lora: ["Lora"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
