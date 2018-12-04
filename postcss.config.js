module.exports = {
  plugins: {
    "postcss-import": {},
    precss: {},
    "postcss-modules": {
      getJSON: () => {},
      generateScopedName: "[folder]__[local]__[hash]",
    },
  },
};
