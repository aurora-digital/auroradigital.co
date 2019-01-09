module.exports = {
  plugins: {
    "postcss-import": {},
    precss: {},
    autoprefixer: { grid: true },
    "postcss-color-function": {},
    "postcss-modules": {
      getJSON: () => {},
      generateScopedName: "[folder]__[local]__[hash]",
    },
  },
};
