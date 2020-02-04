/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Chandu J S 💻 Full Stack Developer`,
    social: [
      {
        service: `DEV Community`,
        url: `https://dev.to/ctrleffive`,
      },
      {
        service: `GitHub`,
        url: `https://github.com/ctrleffive`,
      },
      {
        service: `Instagram`,
        url: `https://instagram.com/ctrleffive`,
      },
      {
        service: `LinkedIn`,
        url: `https://linkedin.com/in/ctrleffive`,
      },
      {
        service: `Twitter`,
        url: `https://twitter.com/ctrleffive`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:400,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: 'ctrleffive',
      },
    },
  ],
}
