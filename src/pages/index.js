import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import MeetupWidget from '../components/MeetupWidget'
import Footer from '../components/Footer'

const IndexPage = ({data}) => (
  <Layout>
    <h1>Le meetup bimensuel autour de la JAMstack</h1>
    <MeetupWidget meetupEvent={data.meetupGroup.childMeetupEvent}/>
    <h2>Qu'est-ce que JAMstack ?</h2>
    <p className="description">
      C'est du Javascript, des APIs, et du Markup.
    </p>
    <p className="description">
      Un mélange détonnant entre les sites statiques “à l'ancienne”
      et les technos récentes comme React et GraphQL qui permet
      de concevoir des sites super rapides, super rapidement !
    </p>
    <p className="description">Plus d'infos : <a href="https://jamstack.org">https://jamstack.org</a></p>
    <Footer />
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
