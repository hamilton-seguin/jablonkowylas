/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      background: "#fff8e7",
      font: "#283618",
      primary: "#606c38",
      secondary: "#dda15e",
      tertiary: "#bc6c25",
    },
    fontFamily: {
      sans: ["Roboto Flex", "sans-serif"],
    },
  },
  plugins: [],
};
