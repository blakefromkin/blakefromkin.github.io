const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./**/*.html", "./**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        midnightblue: "#0a0440",
        grouparooblue: "#29abe2",
        airbytepurple: "#9579fd",
        maroon: "#800000",
        amanranth: "#B22649",
        pinklavender: "#D5AFC3",
        chinarose: "#AD4F74",
        link: {
          normal: "#4c74b9",
          decoration: "#d2dcee",
          hover: "#829dce",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
