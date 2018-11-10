import React from 'react'
import format from 'date-fns/format'
import frLocale from 'date-fns/locale/fr'

import capitalizeString from '../../utils/capitalizeString'

const MeetupInfos = ({ meetupEvent }) => (
  <div>
    <div
      style={{
        textAlign: 'left',
      }}
    >
      <p className="meetup-infos">
        {capitalizeString(format(Date.parse(meetupEvent.local_date), 'dddd Do MMMM YYYY', { locale: frLocale }))}
        &nbsp;—&nbsp;
        {meetupEvent.local_time}
      </p>
      <p className="meetup-infos">{meetupEvent.venue.name} — {meetupEvent.venue.address_1}, {meetupEvent.venue.city}</p>
      <a
        href={meetupEvent.link}
        style={{
          color: '#F13A59',
          textDecoration: 'underline',
        }}
      >
        <p className="meetup-infos">S'inscrire sur meetup.com — il reste {meetupEvent.rsvp_limit - meetupEvent.yes_rsvp_count} places !</p>
      </a>
    </div>
  </div>
)

export default MeetupInfos
