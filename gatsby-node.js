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

    console.log(node.frontmatter)
  }
  /* eslint-enable no-param-reassign */
};

exports.createPages = async ({ graphql, actions }) => {
  await generateBlogPages(graphql, actions);
};
