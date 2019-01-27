import React from 'react'
import { graphql } from "gatsby"

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

const IndexPage = ({data}) => (
  <Layout>
    <h1>Le meetup bimensuel autour de la JAMstack</h1>
    <Meetup meetupInfo={data.contentfulUpcomingMeetup} />
    <TextBlock textBlockInfo={
      data.allContentfulTextBlock.edges
      .filter((edge) => edge.node.type === ALL_TEXT_BLOCK_TYPES.WHAT_IS_JAMSTACK)
      [0]
      .node
    }/>
    <TextBlock textBlockInfo={
      data.allContentfulTextBlock.edges
      .filter((edge) => edge.node.type === ALL_TEXT_BLOCK_TYPES.SUBMIT_A_TALK)
      [0]
      .node
    }/>
    <Footer />
  </Layout>
)


export const query = graphql`
  query {
    contentfulUpcomingMeetup {
      title
      date
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
    }
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
  }
`

export default IndexPage
