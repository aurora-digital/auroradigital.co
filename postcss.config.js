module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-import": {},
    precss: {},
    "postcss-color-function": {},
    "postcss-modules": {
      getJSON: () => {},
      generateScopedName: "[folder]__[local]__[hash]",
    },
  },
};
