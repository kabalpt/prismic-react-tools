const prismicOptions = require('./prismic-config');

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      options: prismicOptions,
      resolve: `gatsby-source-prismic-with-magic`
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
  siteMetadata: {
    author: `@kabalpt`,
    description: `Example of prismic-react-tools`,
    title: `Example: prismic-react-tools`
  }
};
