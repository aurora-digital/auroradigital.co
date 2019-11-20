const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://auroradigital.co",
    title: "Aurora Digital's Website",
    author: "Aurora Digital's Website",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/`,
        name: "assets",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: "cms",
      },
    },

    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener",
            },
          },
          "gatsby-remark-relative-images",
          "gatsby-remark-unwrap-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 824,
              linkImagesToOriginal: false,
              withWebp: true,
              quality: 75,
              showCaptions: true,
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
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true,
      },
    },
  ],
};
