/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        basic: {
          50: "#f9e5ff",
          100: "#e4b6fd",
          200: "#d087f8",
          300: "#bd57f4",
          400: "#aa29f0",
          500: "#9112d7",
          600: "#710ca8",
          700: "#510778",
          800: "#300349",
          900: "#12001c",
        },
      },
    },
  },
  plugins: [],
};
