import React from 'react'

import Layout from '../components/Layout'
import Footer from '../components/Footer'

const IndexPage = () => (
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
            <div className="next-meetup-informations-basic-highlight">Algolia</div>
            <div>55 rue d'Amsterdam</div>
            <div>Paris</div>
          </div>
        </div>
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

export default IndexPage
