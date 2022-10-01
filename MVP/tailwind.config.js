module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_801: "#2d2d61",
        bluegray_800: "#2c2d60",
        gray_901: "#17171b",
        gray_902: "#16171a",
        gray_900: "#212228",
        white_A700: "#ffffff",
      },
      fontFamily: { inter: "Inter" },
      borderRadius: { radius50: "50%" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
