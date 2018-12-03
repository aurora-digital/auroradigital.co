module.exports = {
  siteMetadata: {
    siteUrl: "https://example.com",
    title: "Gatsby base starter",
    author: "José Francisco",
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "trackingIDhere",
        head: true,
        anonymize: true,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap"
  ],
};
