const path = require("path");

const query = `
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            path
            author {
              childAuthorsJson {
                name
                twitter
                position
              }
            }
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
    createPage({
      path: `/blog/articles/${node.frontmatter.path}`,
      component: path.resolve(`./src/templates/BlogPost/index.js`),
      context: {
        id: node.id,
        author: node.frontmatter.author.childAuthorsJson,
      },
    });
  });
};
