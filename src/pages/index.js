import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import MeetupWidget from '../components/MeetupWidget/MeetupWidget'

const IndexPage = ({data}) => (
  <Layout>
    <h1>Le meetup bimensuel autour de la JAMstack</h1>
    <MeetupWidget meetupEvent={data.meetupGroup.childMeetupEvent}/>
  </Layout>
)

export const query = graphql`
  query {
    meetupGroup {
      childMeetupEvent {
        rsvp_limit
        local_date
        local_time
        yes_rsvp_count
        venue {
          name
          repinned
          address_1
          city
        }
        link
      }
    }
  }
`

export default IndexPage
