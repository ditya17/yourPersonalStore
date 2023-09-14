/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A31E9",
      },
      fontFamily: {
        DM_Sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
