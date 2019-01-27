import React from 'react'
import { graphql } from "gatsby"

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Meetup from '../components/Meetup'

const IndexPage = ({data}) => (
  <Layout>
    <h1>Le meetup bimensuel autour de la JAMstack</h1>
    <Meetup meetupInfo={data.contentfulUpcomingMeetup} />
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
  }
`

export default IndexPage
