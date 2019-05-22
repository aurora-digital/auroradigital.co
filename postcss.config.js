module.exports = {
  plugins: {
    "postcss-import": {},
    precss: {},
    autoprefixer: {},
    "postcss-color-function": {},
    "postcss-modules": {
      getJSON: () => {},
      generateScopedName: "[folder]__[local]__[hash]",
    },
    "postcss-responsive-type": {},
  },
};
