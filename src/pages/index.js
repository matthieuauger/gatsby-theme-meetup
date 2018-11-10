import React from 'react'

import Layout from '../components/Layout'
import MeetupWidget from '../components/MeetupWidget/MeetupWidget'

const IndexPage = () => (
  <Layout>
    <h1>Le meetup bimensuel autour de la JAMstack</h1>
    <MeetupWidget meetupEvent={{
      local_date: '2019-01-23',
      local_time: "19:00",
      duration: 10800000,
      rsvp_limit: 100,
      yes_rsvp_count: 52,
      venue: {
        name: 'Meilleurs Agents',
        address_1: "7 boulevard Haussmann",
        city: "Paris",
      },
      link: 'https://www.meetup.com/fr-FR/Paris-js/events/251642436/'
    }}/>
  </Layout>
)

export default IndexPage
