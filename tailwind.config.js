const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./**/*.html", "./**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        midnightblue: "#25384D",
        grouparooblue: "#29abe2",
        airbytepurple: "#9579fd",
        maroon: "#800000",
        amanranth: "#B22649",
        pinklavender: "#D5AFC3",
        turquoise: "#00E9CA",
        darkturquoise: "#02a690",
        link: {
          normal: "#4c74b9",
          decoration: "#d2dcee",
          hover: "#829dce",
        },
      },
      boxShadow: {
        "dark-lg": "0 2px 4px rgba(0, 0, 0, 0.6)",
        "dark-xl": "4px 4px 6px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
