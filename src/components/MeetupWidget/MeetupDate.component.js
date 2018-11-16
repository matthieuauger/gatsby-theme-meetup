import React from 'react'
import format from 'date-fns/format'
import frLocale from 'date-fns/locale/fr'

import StyledMeetupDate from './MeetupDate.style'

const MeetupDate = ({ localDate }) => (
  <StyledMeetupDate>
    <span className="date-day">{format(Date.parse(localDate), 'D', { locale: frLocale })}</span>
    <br />
    <span className="date-month">{format(Date.parse(localDate), 'MMM', { locale: frLocale }).slice(0, 3).toUpperCase()}.</span>
  </StyledMeetupDate>
)

export default MeetupDate
