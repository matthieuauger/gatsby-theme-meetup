module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-jamstack-meetup",
      options: {
        title: "JAMstack London",
        meetupCity: "London",
        meetupDotComGroupUrlName: "JAMstack-London",
        textBlockPath: `${__dirname}/src/text-blocks`
      }
    }
  ]
};
