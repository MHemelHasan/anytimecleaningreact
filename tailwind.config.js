/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        "action-color": "#FF9F1C",
      },
    },
  },
  daisyui: {
    themes: [
      {
        cleanyTheme: {
          primary: "#00ffe7",
          secondary: "#0069ab",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui", "@tailwindcss/forms")],
};
