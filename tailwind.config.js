module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        104: "31rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
