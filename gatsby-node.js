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

// Suppress warnings order from MiniCssExtractPlugin
// We are using CSS Modules so CSS order should not matter
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript") {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin",
    );

    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);
  }
};

function makeRelative(string) {
  return string.replace(/^\/{0,1}data\//, "../");
}

// Replace absolute paths from Forestry with relative paths
exports.onCreateNode = ({ node }) => {
  /* eslint-disable no-param-reassign */
  if (node.photo) {
    node.photo = makeRelative(node.photo);
  }

  if (node.frontmatter) {
    node.frontmatter.featuredImage = makeRelative(
      node.frontmatter.featuredImage,
    );

    node.frontmatter.author = makeRelative(node.frontmatter.author);
  }
  /* eslint-enable no-param-reassign */
};

exports.createPages = async ({ graphql, actions }) => {
  await generateBlogPages(graphql, actions);
};
