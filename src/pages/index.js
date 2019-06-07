import React from 'react'
import { graphql } from 'gatsby'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Meetup from '../components/Meetup'
import TextBlock from '../components/TextBlock'

/**
 * TextBlock types come from Contentful
 */
const ALL_TEXT_BLOCK_TYPES = {
  WHAT_IS_JAMSTACK: 'what-is-jamstack',
  SUBMIT_A_TALK: 'submit-a-talk',
}

let currentMeetupColor = '#F3DBD1'

let pastMeetupColors = ['#DDDEC4', '#E6BB91', '#EFCC74']

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Le meetup bimestriel autour de la JAMstack</h1>
    {data.contentfulUpcomingMeetup &&
      <>
        <h2>Prochain Meetup</h2>
        <Meetup
          meetupInfo={data.contentfulUpcomingMeetup}
          meetupType="UPCOMING"
          backgroundColor={currentMeetupColor}
        />
      </>
    }
    <TextBlock
      textBlockInfo={
        data.allContentfulTextBlock.edges.filter(
          edge => edge.node.type === ALL_TEXT_BLOCK_TYPES.WHAT_IS_JAMSTACK
        )[0].node
      }
    />
    <h2>Meetups précédents</h2>
    {data.allContentfulPastMeetup.edges.map((pastMeetupEdge, index) => {
      let pastMeetupInfo = pastMeetupEdge.node
      return (
        <Meetup
          key={pastMeetupInfo.slug}
          meetupInfo={pastMeetupInfo}
          meetupType="PAST"
          backgroundColor={pastMeetupColors[index]}
        />
      )
    })}
    <TextBlock
      textBlockInfo={
        data.allContentfulTextBlock.edges.filter(
          edge => edge.node.type === ALL_TEXT_BLOCK_TYPES.SUBMIT_A_TALK
        )[0].node
      }
    />
    <Footer />
  </Layout>
)

/**
 * Because there are currently no upcoming meetup, I had to remove the following
 * query:
 * 
 *  contentfulUpcomingMeetup {
 *    title
 *    date
 *    dateFrenchFormat
 *    edition
 *    addressCompanyName
 *    addressStreetAddress
 *    addressCity
 *    meetupUrl
 *    description {
 *      childContentfulRichText {
 *        html
 *      }
 *    }  
 *  }
 *
 * It must be added back for the next meetup.
 */
export const query = graphql`
  query {
    allContentfulTextBlock {
      edges {
        node {
          type
          title
          content {
            childContentfulRichText {
              html
            }
          }
          callToActionText
          isLinkInternal
          callToActionUrl
        }
      }
    }
    allContentfulPastMeetup(sort: {fields: edition, order: DESC}) {
      edges {
        node {
          title
          date
          dateFrenchFormat
          edition
          addressCompanyName
          addressStreetAddress
          addressCity
          meetupUrl
          description {
            childContentfulRichText {
              html
            }
          }
          slug
        }
      }
    }
  }
`

export default IndexPage
