require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
        icon: 'src/images/jamstack-paris-square.png', // This path is relative to the root of the site.
        gcm_sender_id: "482941778795",
        gcm_sender_id_comment: "Do not change the GCM Sender ID"
      },
    },
    {
      resolve: `gatsby-source-meetup`,
      options: {
        groupUrlName: "jamstack-paris",
        status: "upcoming",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/components/Layout/typography',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
  ],
}
