const { colors } = require("tailwind/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "100": "#9cdbdd",
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
