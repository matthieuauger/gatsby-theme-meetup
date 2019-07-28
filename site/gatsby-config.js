module.exports = {
  plugins: [
    {
      resolve: "@matthieuauger/gatsby-theme-meetup",
      options: {
        title: "JAMstack London",
        meetupCity: "London",
        meetupDotComGroupUrlName: "JAMstack-London",
        textBlockPath: `${__dirname}/src/text-blocks`
      }
    }
  ]
};
