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
      grass3: "#dff3df",
      grass4: "#dff3df", // Hovered UI element background
      grass5: "#ceebcf", // Active / Selected UI element background
      grass6: "#b7dfba",
      grass7: "#97cf9c",
      grass8: "#65ba75",
      grass9: "#46a758", // Solid backgrounds
      grass10: "#3d9a50", // Hovered solid backgrounds
      grass11: "#297c3b", // Low-contrast text
      grass12: "#1b311e", // High-contrast text
      // background: "#fff8e7",
      // font: "#283618",
      // primary: "#606c38",
      // secondary: "#46a758",
      // tertiary: "#bc6c25",
    },
    fontFamily: {
      sans: ["Roboto Flex", "sans-serif"],
    },
  },
  plugins: [],
};
