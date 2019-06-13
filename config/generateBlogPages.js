const path = require("path");

const query = `
{
  allMdx {
    edges {
      node {
        id
        frontmatter {
          path
          author
        }
      }
    }
  }
}
`;

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(query);

  if (result.errors) {
    console.error(result.errors); //eslint-disable-line
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    console.log(node.frontmatter.path);

    createPage({
      path: `/blog/articles/${node.frontmatter.path}`,
      component: path.resolve(`./src/templates/BlogPost/index.js`),
      context: {
        id: node.id,
        author: require(`../blog/authors/${node.frontmatter.author}.json`), //eslint-disable-line
      },
    });
  });
};
