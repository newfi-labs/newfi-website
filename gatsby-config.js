/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
      "gatsby-plugin-antd",
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: `Newfi - Net Worth Experts`,
              short_name: `Newfi`,
              start_url: `/`,
              icon: `src/images/newfi-logo.svg`
          }
      }
  ],
};
