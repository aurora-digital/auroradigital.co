module.exports = {
  plugins: {
    "postcss-import": {},
    precss: {},
    "postcss-calc": {},
    "postcss-modules": {
      getJSON: () => {},
      generateScopedName: "[folder]__[local]__[hash]",
    },
  },
};
