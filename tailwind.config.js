/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},

  theme: {
    extend: {
      colors: {
        orange: "#FDA214",
        lightGrey: "#BCCED9",
        lightGrey2: "#DFE7EC",
        darkGrey: "#304859",
        darkBlue: "#152938",
        veryLightGray: "#F2F2F2",
        grey: "#7191A5",
        lightBlue: "#6395B8",
        white: "#FCFCFC",
        hoverOrange: "#FFB84A",
      },
    },

    // theme: {
    //   extend: {
    //     animation: {
    //       spin: "spin 10000s linear",
    //     },
    //     keyframes: {
    //       "spin-x": {
    //         "0%": { transform: "rotateY(90deg)" },
    //         "100%": { transform: "rotateY(90deg)" },
    //       },
    //     },
    //   },
    // },
    fontFamily: {
      atkinsonHyperlegible: ["Atkinson Hyperlegible", "sans-serif"],
    },
    // fontSize: {
    //   "3.2xl": "32px",
    // },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [],
};
