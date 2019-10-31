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

// Replace absolute paths from Forestry with relative paths
exports.onCreateNode = ({ node }) => {
  if (node.frontmatter) {
    // eslint-disable-next-line no-param-reassign
    node.frontmatter.featuredImage = node.frontmatter.featuredImage.replace(
      /^\/{0,1}blog\//,
      "../",
    );

    // eslint-disable-next-line no-param-reassign
    node.frontmatter.author = node.frontmatter.author.replace(
      /^\/{0,1}blog\//,
      "../",
    );
  }
};

exports.createPages = async ({ graphql, actions }) => {
  await generateBlogPages(graphql, actions);
};
