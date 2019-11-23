require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = ({
  meetupName = 'JAMstack Paris',
  meetupHomepageHeadline = 'Le meetup bimestriel autour de la JAMstack',
  meetupDotComGroupUrlName = 'jamstack-paris',
  displayVideosLink = true,
  meetupVideosUrl = 'https://www.youtube.com/channel/UC66eQOycjMnaqzpbRUhEK2w',
  displayTalkProposalLink = true,
  talkProposalUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScYo0W4QAkRHLj0fS_TXZXFuSUJ_cRlmyJCeRTPDQVt9RBNog/viewform',
  textBlocksPath = `${__dirname}/src/text-blocks`,
  dateFormat = `DD/MM/YYYY`, //TODO manage locales
  translations = {
    PROPOSE_A_TALK: 'Proposer un talk  →',
    FETCH_VIDEOS: 'Parcourir les vidéos →',
    LAST_MEETUPS: 'Meetup précédents',
    ALL_MEETUPS: 'Tous les meetups →',
    REGISTER_ON_MEETUP: "S'inscrire sur Meetup →",
  },
  currentMeetupColor = '#F3DBD1',
  pastMeetupColors = ['#DDDEC4', '#E6BB91', '#EFCC74'],
}) => ({
  siteMetadata: {
    /* custom metadata to be injected into pages */
    meetupName: meetupName,
    meetupHomepageHeadline: meetupHomepageHeadline,
    meetupDotComGroupUrlName: meetupDotComGroupUrlName,
    displayVideosLink: displayVideosLink,
    meetupVideosUrl: meetupVideosUrl,
    displayTalkProposalLink: displayTalkProposalLink,
    talkProposalUrl: talkProposalUrl,
    dateFormat: dateFormat,
    translations: translations,
    currentMeetupColor: currentMeetupColor,
    pastMeetupColors: pastMeetupColors,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `text-blocks`,
        path: textBlocksPath,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: meetupName,
        short_name: meetupName,
        start_url: '/',
        background_color: '#F8F9F4',
        theme_color: '#4A4A4A',
        display: 'minimal-ui',
        icon: `${__dirname}/src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
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
        groupUrlName: meetupDotComGroupUrlName,
        // Optional parameters for retrieving Events, see full documentation at
        // https://www.meetup.com/meetup_api/docs/:urlname/events/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F#list
        status: 'upcoming,past',
        desc: 'true',
        page: 10,
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
