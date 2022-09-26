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
        gray_901: "#17171b",
        gray_902: "#16171a",
        gray_900: "#212228",
        bluegray_100: "#cccccc",
        teal_50: "#dee7ee",
        bluegray_801: "#2d2d61",
        bluegray_800: "#2c2d60",
        bluegray_700: "#48485c",
        black_900: "#000000",
        bluegray_400: "#89969f",
        bluegray_200: "#b8c5d0",
        white_A700: "#ffffff",
        purple_300: "#bd57c7",
      },
      fontFamily: { inter: "Inter" },
      borderRadius: {
        radius50: "50%",
        radius305: "30.5px",
        radius2582: "25.82px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
