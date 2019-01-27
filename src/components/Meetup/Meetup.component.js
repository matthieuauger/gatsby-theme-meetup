import React from 'react'
import StyledMeetup from './Meetup.style'

import PropTypes from "prop-types"

const Meetup = ({meetupInfo}) => (
  <div className="meetup-container">
    <StyledMeetup>
      <div className="meetup-name">
        <h2>JAMstack.paris #{meetupInfo.edition} – {meetupInfo.title}</h2>
      </div>
      <div className="meetup-informations">
        <div className="meetup-informations-basic">
          <div className="meetup-informations-basic-date">
            {/* TODO: hookup the real date with meetupInfo.date (needs parsing)*/}
            <div className="meetup-informations-basic-highlight">Mercredi 27 Février</div>
            <div>19h</div>
            <div>Entrée libre, sur inscription</div>
          </div>
          <div className="meetup-informations-basic-place">
            <div className="meetup-informations-basic-highlight">{meetupInfo.addressCompanyName}</div>
            <div>{meetupInfo.addressStreetAddress}</div>
            <div>{meetupInfo.addressCity}</div>
          </div>
        </div>
        <div
          className="meetup-informations-talks"
          dangerouslySetInnerHTML={{__html: meetupInfo.description.childContentfulRichText.html}}
        />
      </div>
      <div className="meetup-subscribe">
        <a href={meetupInfo.meetupUrl}>S'inscrire sur Meetup →</a>
      </div>
    </StyledMeetup>
  </div>
)

Meetup.propTypes = {
  meetupInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    edition: PropTypes.number.isRequired,
    addressCompanyName: PropTypes.string.isRequired,
    addressStreetAddress: PropTypes.string.isRequired,
    addressCity: PropTypes.string.isRequired,
    meetupUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.shape({
      childContentfulRichText: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }).isRequired
    }).isRequired,
  }).isRequired
}

export default Meetup
