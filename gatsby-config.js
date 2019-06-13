const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://example.com",
    title: "SV Health",
    author: "SV Health",
    description:
      "A gatsby starter with ESLint, Prettier, Stylelint, Postcss modules and analytics",
    keywords: "gatsby, starter, eslint, postcss, analytics",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "blog-posts",
      },
    },

    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 824,
              linkImagesToOriginal: false,
              wrapperStyle: "margin: 56px 0;",
              withWebp: true,
              quality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-131231943-1",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        root: path.join(__dirname, "src"),
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
