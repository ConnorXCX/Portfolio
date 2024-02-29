/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#060417",
        secondary: "#fff",
        // navWrapperBackground: "rgba(0, 0, 0, 0.1)",
        // skillCardBackground: "rgba(22, 17, 47, 0.398)",
        // skillInfoCardBackground: "rgba(22, 17, 47, 0.398)",
        // experienceContainer: "#7c66e3",
        // arrowColor: "#130f2a",
        // experienceCardBackground: "rgba(22, 17, 47, 0.2)",
        // durationBackground: "rgba(103, 81, 185, 0.5)",
        // centerExperienceCardBackground: "rgba(22, 17, 47, 0.7)",
        // certificationCardBackground: "rgba(22, 17, 47, 0.4)",
        // contactDetailsCardBackground: "rgba(22, 17, 47, 0.4)",
        // contactDetailsCardIconBackground: "#3d3072",
        defaultLightBlurBackground: "rgba(0, 0, 0, 0.1)",
        defaultDarkBlurBackground: "rgba(0, 0, 0, 0.3)",
        defaultDarkerBlurBackground: "rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        // menuItemGradient: "linear-gradient(90deg, #a993fe 0%, #7e61e7 100%)",
        // mobileNavButtonGradient:
        //   "linear-gradient(90deg, #a993fe -0.13%, #7e61e7 99.87%",
        // contactButtonBackground:
        //   "linear-gradient(90deg, #a993fe 0%, #7e61e7 100%)",
        // contactButtonHoverBackground: "#000",
        // skillCardHoverBackground:
        //   "linear-gradient(100deg, #aa94fe 0%, #7c5fe6 100%)",
        // skillInfoCardHeaderBackground:
        //   "linear-gradient(180deg, #ac96ff 0%, #7c5fe6 100%)",
        // skillPercentageGradient:
        //   "linear-gradient(90deg, #aa94fe -50%, #7d60e6 50%)",
        // footerGradient: "linear-gradient(90deg, #3d3072 0%, #423477 100%)",
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
