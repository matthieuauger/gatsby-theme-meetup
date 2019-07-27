require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = ({ title = 'JAMstack.paris' }) => ({
  siteMetadata: {
    title: title,
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
        name: 'JAMstack.paris',
        short_name: 'JAMstack.paris',
        start_url: '/',
        background_color: '#F8F9F4',
        theme_color: '#4A4A4A',
        display: 'minimal-ui',
        icon: `${__dirname}/src/images/jamstack-paris-square.png`, // This path is relative to the root of the site.
        gcm_sender_id: '482941778795',
        gcm_sender_id_comment: 'Do not change the GCM Sender ID',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Mono:400,700', 'IBM Plex Sans:400,700'],
        },
      },
    },
    {
      resolve: `gatsby-source-meetup`,
      options: {
        // Learn about environment variables: https://gatsby.app/env-vars
        // Your Meetup.com API key can be retrieved here: https://secure.meetup.com/fr-FR/meetup_api/key/
        key: process.env.MEETUP_API_KEY,
        // Mandatory: the URL name of a Meetup Group.
        // See the URL of the group page, e.g. https://www.meetup.com/fr-FR/jamstack-paris
        groupUrlName: "jamstack-paris",
        // Optional parameters for retrieving Events, see full documentation at
        // https://www.meetup.com/meetup_api/docs/:urlname/events/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F#list
        status: "upcoming,past",
        desc: "true",
        page: 10
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
})
