/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#343A40",
        light: "#F8F9FA",
        accent: "#4361EE",
        textLightPrimary: "#0B090A",
        textlightSecondary: "#161A1D",
        textDarkPrimary: "#FFFFFF",
        textDarkSecondary: "#F5F3F4",
      },
    },
  },
  plugins: [],
};
