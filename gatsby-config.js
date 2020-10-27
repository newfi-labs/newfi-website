/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-antd",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Newfi - Net Worth Experts",
        short_name: "Newfi",
        start_url: "/",
        icon: "src/images/newfi-logo.svg",
      },
    },
  ],
}
