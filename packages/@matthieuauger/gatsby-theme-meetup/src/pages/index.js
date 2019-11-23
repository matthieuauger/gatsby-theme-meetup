import React from 'react'
import { graphql } from 'gatsby'

import Button from '../components/Button'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Meetup from '../components/Meetup'
import TextBlock from '../components/TextBlock'

const IndexPage = ({ data }) => {
  const upcomingMeetup = getUpcomingMeetup(data.upcomingMeetupEvents)
  return (
    <Layout>
      <h1>{data.site.siteMetadata.meetupHomepageHeadline}</h1>
      {upcomingMeetup && (
        <Meetup
          meetupInfo={upcomingMeetup}
          meetupType="UPCOMING"
          backgroundColor={data.site.siteMetadata.currentMeetupColor}
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
      )}
      <TextBlock textBlockHTML={data.whatIsJAMstackTextBlock.html} />

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

      <div class="meetup-list">
        <Button
          url="/meetup"
          text={data.site.siteMetadata.translations.ALL_MEETUPS}
          type="neutral"
          internal="true"
        />
      </div>
      <TextBlock textBlockHTML={data.submitATalk.html} />
      <Footer />
    </Layout>
  )
}

const getUpcomingMeetup = upcomingMeetupEventsData =>
  upcomingMeetupEventsData.edges.length === 0
    ? null
    : upcomingMeetupEventsData.edges[0].node

export const query = graphql`
  query {
    site {
      siteMetadata {
        displayVideosLink
        meetupHomepageHeadline
        meetupVideosUrl
        translations {
          LAST_MEETUPS
          ALL_MEETUPS
          FETCH_VIDEOS
          REGISTER_ON_MEETUP
        }
        dateFormat
        currentMeetupColor
        pastMeetupColors
      }
    }
    upcomingMeetupEvents: allMeetupEvent(
      filter: { status: { eq: "upcoming" } }
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
    pastMeetupEvents: allMeetupEvent(
      filter: { status: { eq: "past" } }
      sort: { fields: local_date, order: DESC }
      limit: 5
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
    whatIsJAMstackTextBlock: markdownRemark(
      frontmatter: { type: { eq: "what-is-jamstack" } }
    ) {
      html
    }
    submitATalk: markdownRemark(
      frontmatter: { type: { eq: "submit-a-talk" } }
    ) {
      html
    }
  }
`

export default IndexPage
