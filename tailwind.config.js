/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      font: "#1b311e",
      background: "#f3fcf3",
      grass1: "#fbfefb",
      grass2: "#f3fcf3",
      grass3: "#ebf9eb",
      grass4: "#dff3df", // Hovered UI element background
      grass5: "#ceebcf", // Active / Selected UI element background
      grass6: "#b7dfba",
      grass7: "#97cf9c",
      grass8: "#65ba75",
      grass9: "#46a758", // Solid backgrounds
      grass10: "#3d9a50", // Hovered solid backgrounds
      grass11: "#297c3b", // Low-contrast text
      grass12: "#1b311e", // High-contrast text
    },
    fontFamily: {
      sans: ["Roboto Flex", "sans-serif"],
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
