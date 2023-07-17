/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "360px",
      md: "640px",
      lg: "840px",
      xl: "1024px",
      "2xl": "1230px",
    },

    extend: {},
  },
  plugins: [],
};