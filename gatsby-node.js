exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-react-css-modules`,
    options: {
      generateScopedName: `[folder]__[local]__[hash]`,
      webpackHotModuleReloading: process.env.NODE_ENV !== `production`,
    },
  });
};
