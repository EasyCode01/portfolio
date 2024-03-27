/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        "primary-color": "#fff",
        "dark-primary-color": "#0D0D0D",
        "title-color": "#333333",
        "dark-title-color": "#FFFFFF",
        "tertiary-color": "#FAFAFA",
        "dark-tertiary": "#262626",
        "text-color": "#000",
        "dark-text-color": "#F2F2F2",
        "dark-modifier": "#B3B3B3",
      },
    },
  },
  plugins: [],
};
