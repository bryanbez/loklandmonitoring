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
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
