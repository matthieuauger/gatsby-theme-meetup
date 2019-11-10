module.exports = {
  plugins: [
    {
      resolve: "@matthieuauger/gatsby-theme-meetup"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`
      }
    }
  ]
};
