module.exports = {
  plugins: [
    {
      resolve: "@matthieuauger/gatsby-theme-meetup",
      options: {
        meetupName: "JAMstack London",
        meetupDotComGroupUrlName: "JAMstack-London",
        textBlockPath: `${__dirname}/src/text-blocks`
      }
    }
  ]
};
