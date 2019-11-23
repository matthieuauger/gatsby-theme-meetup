const path = require('path')
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMeetupEvent(
          filter: { status: { eq: "past" } }
          sort: { fields: local_date, order: DESC }
        ) {
          edges {
            node {
              id
              name
              description
              local_date
              venue {
                name
                address_1
                city
              }
              link
              status
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // ...
  // Create meetup-list pages
  const meetups = result.data.allMeetupEvent.edges
  const meetupsPerPage = 1000 // will configure it later
  const numPages = Math.ceil(meetups.length / meetupsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/meetup` : `/meetup/${i + 1}`,
      component: path.resolve(
        `${__dirname}/src/templates/meetup-list-template.js`
      ),
      context: {
        limit: meetupsPerPage,
        skip: i * meetupsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
