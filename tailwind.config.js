module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-900": "#001731",
        "primary-700": "#004493",
        "primary-600": "#005BC4",
        black: "#09090A",
        white: "#F4F4F5",
        grey: "#52525B",
        primary: "",
        secondary: "#F5A524",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
