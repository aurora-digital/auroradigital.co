const generateBlogPages = require("./config/generateBlogPages");

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-react-css-modules`,
    options: {
      generateScopedName: `[folder]__[local]__[hash]`,
    },
  });

  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-decorators",
    options: { legacy: true },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await generateBlogPages(graphql, actions);
};
