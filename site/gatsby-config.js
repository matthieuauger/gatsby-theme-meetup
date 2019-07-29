module.exports = {
  plugins: [
    {
      resolve: "@matthieuauger/gatsby-theme-meetup",
      options: {
        meetupName: "JAMstack London",
        meetupHomepageHeadline: "The JAMstack meetup with a cup of tea 🍵",
        meetupDotComGroupUrlName: "JAMstack-London",
        displayVideosLink: false,
        textBlocksPath: `${__dirname}/src/text-blocks`
      }
    }
  ]
};
