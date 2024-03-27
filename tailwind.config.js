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
        "medium-gray": "#FAFAFA",
        "title-color": "#333333",
        "title-color-dark": "#262626",
        "dark-medium-gray": "#262626",
        "deep-medium-gray": "#B3B3B3",
        "text-white-dark": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
