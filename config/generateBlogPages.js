const path = require("path");

const query = `
  {
    allMdx {
      edges {
        node {
          id
          body
          frontmatter {
            author {
              childAuthorsJson {
                name
                twitter
                position
              }
            }
            path
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              image: childImageSharp {
                fluid(maxWidth: 1024, quality: 75) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
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
        blogPost: node,
      },
    });
  });
};
