import React from 'react'
import format from 'date-fns/format'
import frLocale from 'date-fns/locale/fr'

import capitalizeString from '../../utils/capitalizeString'
import StyledMeetupInfos from './MeetupInfos.style'

const MeetupInfos = ({ meetupEvent }) => (
  <StyledMeetupInfos>
    <h2>Prochain Meetup</h2>
    <p>
      {capitalizeString(format(Date.parse(meetupEvent.local_date), 'dddd Do MMMM YYYY', { locale: frLocale }))}
      &nbsp;—&nbsp;
      {meetupEvent.local_time}
    </p>
    <p>{meetupEvent.venue.name} — {meetupEvent.venue.address_1}, {meetupEvent.venue.city}</p>
    <a href={meetupEvent.link}>
      <p>S'inscrire sur meetup.com — il reste {meetupEvent.rsvp_limit - meetupEvent.yes_rsvp_count} places !</p>
    </a>
  </StyledMeetupInfos>
)

export default MeetupInfos
