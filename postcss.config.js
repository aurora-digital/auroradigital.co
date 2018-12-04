module.exports = {
  plugins: {
    "postcss-import": {},
    precss: {},
    "postcss-color-function": {},
    "postcss-modules": {
      getJSON: () => {},
      generateScopedName: "[folder]__[local]__[hash]",
    },
  },
};
