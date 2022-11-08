/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        dark: "#1A1A1D",
        grey: "#4E4E50",
        brightRed: "#C3073F",
        darkRed: "#6F2232",
        pink: "#950740",
        darkPink: "#7a0634",
      },
    },
  },
  plugins: [],
};
