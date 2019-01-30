import React from 'react'
import StyledMeetup from './Meetup.style'

import Button from '../Button'

import PropTypes from 'prop-types'

const Meetup = ({ meetupInfo, meetupType, backgroundColor }) => (
  <div className="meetup-container">
    <StyledMeetup backgroundColor={backgroundColor}>
      <div className="meetup-name">
        <h2>
          JAMstack.paris #{meetupInfo.edition} – {meetupInfo.title}
        </h2>
      </div>
      <div className="meetup-informations">
        <div className="meetup-informations-basic">
          <div className="meetup-informations-basic-date">
            {/* TODO: hookup the real date with meetupInfo.date (needs parsing)*/}
            <div className="meetup-informations-basic-highlight">
              {meetupType === 'UPCOMING'
                ? `Jeudi 7 Mars`
                : `Mardi 18 décembre 2018`}
            </div>
            <div>19h</div>
            <div>
              {meetupType === 'UPCOMING'
                ? `Entrée libre, sur inscription`
                : `47 participants`}
            </div>
          </div>
          <div className="meetup-informations-basic-place">
            <div className="meetup-informations-basic-highlight">
              {meetupInfo.addressCompanyName}
            </div>
            <div>{meetupInfo.addressStreetAddress}</div>
            <div>{meetupInfo.addressCity}</div>
          </div>
        </div>
        <div
          className="meetup-informations-talks"
          dangerouslySetInnerHTML={{
            __html: meetupInfo.description.childContentfulRichText.html,
          }}
        />
      </div>
      {meetupType === 'UPCOMING' && (
        <div className="meetup-subscribe">
          <Button
            url={meetupInfo.meetupUrl}
            text="S'inscrire sur Meetup →"
            type="primary"
          />
        </div>
      )}
      {meetupType === 'PAST' && (
        <div className="meetup-subscribe">
          <Button
            url="https://www.youtube.com/channel/UC66eQOycjMnaqzpbRUhEK2w"
            text="Voir les vidéos →"
            type="neutral"
          />
        </div>
      )}
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
      }).isRequired,
    }).isRequired,
  }).isRequired,
  meetupType: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}

export default Meetup
