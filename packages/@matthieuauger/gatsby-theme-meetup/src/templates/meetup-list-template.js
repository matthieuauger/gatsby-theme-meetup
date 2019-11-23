import React from 'react'
import { graphql } from 'gatsby'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Meetup from '../components/Meetup'
import TextBlock from '../components/TextBlock'

const MeetupList = ({ data }) => {
  return (
    <Layout>
      <h2>{data.site.siteMetadata.translations.LAST_MEETUPS}</h2>
      {data.pastMeetupEvents.edges.map((pastMeetup, index) => {
        return (
          <Meetup
            key={pastMeetup.node.id}
            meetupInfo={pastMeetup.node}
            meetupType="PAST"
            backgroundColor={
              data.site.siteMetadata.pastMeetupColors[
                // loop and cycle over configured colors
                index % data.site.siteMetadata.pastMeetupColors.length
              ]
            }
            displayVideosLink={data.site.siteMetadata.displayVideosLink}
            displayVideosTranslation={
              data.site.siteMetadata.translations.FETCH_VIDEOS
            }
            meetupVideosUrl={data.site.siteMetadata.meetupVideosUrl}
            registerOnMeetupTranslation={
              data.site.siteMetadata.translations.REGISTER_ON_MEETUP
            }
            dateFormat={data.site.siteMetadata.dateFormat}
          />
        )
      })}
      <TextBlock textBlockHTML={data.submitATalk.html} />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query MeetupListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        displayVideosLink
        meetupHomepageHeadline
        meetupVideosUrl
        translations {
          LAST_MEETUPS
          FETCH_VIDEOS
          REGISTER_ON_MEETUP
        }
        dateFormat
        currentMeetupColor
        pastMeetupColors
      }
    }
    pastMeetupEvents: allMeetupEvent(
      filter: { status: { eq: "past" } }
      sort: { fields: local_date, order: DESC }
      limit: $limit
      skip: $skip
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
    submitATalk: markdownRemark(
      frontmatter: { type: { eq: "submit-a-talk" } }
    ) {
      html
    }
  }
`

export default MeetupList
