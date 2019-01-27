import React from 'react'
import StyledMeetup from './Meetup.style'

const Meetup = ({ siteTitle }) => (
  <div className="meetup-container">
    <StyledMeetup>
      <div className="meetup-name">
        <h2>JAMstack.paris #2 - Getting Serious with JAMstack</h2>
      </div>
      <div className="meetup-informations">
        <div className="meetup-informations-basic">
          <div className="meetup-informations-basic-date">
            <div className="meetup-informations-basic-highlight">Mercredi 27 Février</div>
            <div>19h</div>
            <div>Entrée libre, sur inscription</div>
          </div>
          <div className="meetup-informations-basic-place">
            <div className="meetup-informations-basic-highlight">To be announced...</div>
            <div></div>
            <div>Paris</div>
          </div>
        </div>
        <div className="meetup-informations-talks">
          <div className="meetup-informations-talks-one">Haroen Viaene, JS Library Developper chez Algolia, nous présentera son plugin gatsby-plugin-algolia qui permet d'ajouter simplement la recherche Algolia à votre site Gatsby (talk en anglais 🇬🇧)</div>
          <div className="meetup-informations-talks-two">Matthieu Auger, Lead Developer chez Theodo nous expliquera pourquoi et comment migrer un (gros) blog Wordpress “legacy” vers un tout nouveau blog Gatsby !</div>
        </div>
      </div>
      <div className="meetup-subscribe">
        <a href="https://www.meetup.com/fr-FR/JAMstack-paris/events/257983707/">S'inscrire sur Meetup</a>
      </div>
    </StyledMeetup>
  </div>
)

export default Meetup
