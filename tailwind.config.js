/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#060417",
        secondary: "#fff",
        // dimWhite: "rgba(255, 255, 255, 0.7)",
        // dimBlue: "rgba(9, 151, 124, 0.1)",
        // footerColor: "linear-gradient(90deg, #3d3072 0%, #423477 100%)",
        certificationCardBackground: "rgba(22, 17, 47, 0.4)",
        contactButtonBackground:
          "linear-gradient(90deg, #a993fe 0%, #7e61e7 100%)",
        // footerGradient: "linear-gradient(90deg, #3d3072 0%, #423477 100%)",
      },
      backgroundImage: {
        footerGradient: "linear-gradient(90deg, #3d3072 0%, #423477 100%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xl: { max: "1350px" },
      lg: { max: "1025px" },
      md: { max: "768px" },
      sm: { max: "600px" },
      ss: { max: "450px" },
      xs: { max: "425px" },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
