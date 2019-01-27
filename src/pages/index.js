import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import MeetupWidget from '../components/MeetupWidget'
import Footer from '../components/Footer'

const IndexPage = ({data}) => (
  <Layout>
    <h1>Le meetup bimensuel autour de la JAMstack</h1>
    <div className="next-meetup">
      <div className="next-meetup-name">
        <h2>JAMstack.paris #2 - Getting Serious with JAMstack</h2>
      </div>
      <div className="next-meetup-informations">
        <div className="next-meetup-informations-basic">
          <div className="next-meetup-informations-basic-date">
            <div className="next-meetup-informations-basic-highlight">Mercredi 27 Février</div>
            <div>19h</div>
            <div>Entrée libre, sur inscription</div>
          </div>
          <div className="next-meetup-informations-basic-place">
            <div className="next-meetup-informations-basic-highlight">To be announced...</div>
            <div></div>
            <div>Paris</div>
          </div>
        </div>
        <div className="next-meetup-informations-talks">
          <div className="next-meetup-informations-talks-one">Haroen Viaene, JS Library Developper chez Algolia, nous présentera son plugin gatsby-plugin-algolia qui permet d'ajouter simplement la recherche Algolia à votre site Gatsby (talk en anglais 🇬🇧)</div>
          <div className="next-meetup-informations-talks-two">Matthieu Auger, Lead Developer chez Theodo nous expliquera pourquoi et comment migrer un (gros) blog Wordpress “legacy” vers un tout nouveau blog Gatsby !</div>
        </div>
      </div>
      <div className="next-meetup-subscribe">
        <a href="#">S'inscrire sur Meetup</a>
      </div>
    </div>
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
