/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./partials/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        display: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
