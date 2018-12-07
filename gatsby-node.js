exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-react-css-modules`,
    options: {
      generateScopedName: `[folder]__[local]__[hash]`,
      webpackHotModuleReloading: true,
      handleMissingStyleName: "warn",
    },
  });

  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-decorators",
    options: { legacy: true },
  });
};
