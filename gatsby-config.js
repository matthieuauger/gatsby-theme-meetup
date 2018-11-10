module.exports = {
  siteMetadata: {
    title: 'JAMstack.paris website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'JAMstack.paris Website',
        short_name: 'JAMstack.paris',
        start_url: '/',
        background_color: '#F8F9F4',
        theme_color: '#4A4A4A',
        display: 'minimal-ui',
        icon: 'src/images/jamstack-paris.svg', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
