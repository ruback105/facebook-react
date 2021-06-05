const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  node: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xsm: "480px",
      ...screens,
    },
    extend: {
      maxWidth: {
        xsm: "14rem",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["active"],
      borderColor: ["active"],
      brightness: ["hover"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
