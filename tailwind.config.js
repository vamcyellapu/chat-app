/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "hsl(293, 100%, 63%)",
        secondary: "hsl(264, 100%, 61%)",
        moderateViolet: "hsl(276, 55%, 52%)",
        paleViolet: "hsl(276, 100%, 81%)",
        desaturatedDV: "hsl(271, 15%, 43%)",
        grayishBlue: "hsl(206, 6%, 79%)",
        veryDarkDV: "hsl(271, 36%, 24%)",
        darkGayishViolet: "hsl(270, 7%, 64%)",
        lightGV: "hsl(270, 20%, 96%)",
        veryDDV: "hsl(271, 36%, 24%)",
        veryLM: "hsl(289, 100%, 72%)",
      },
    },
  },
  plugins: [],
};
