import React from 'react'
import format from 'date-fns/format'
import frLocale from 'date-fns/locale/fr'

const MeetupDate = ({ localDate }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        width: 60,
        height: 60,
        padding: 5,
        backgroundColor: '#F6F7F8',
        borderRadius: 15,
        border: '1px solid #979797',
        textAlign: 'center',
      }}
    >
      <span className="date date-day">{format(Date.parse(localDate), 'D', { locale: frLocale })}</span>
      <br />
      <span className="date date-month">{format(Date.parse(localDate), 'MMM', { locale: frLocale }).slice(0, 3).toUpperCase()}.</span>
    </div>
  </div>
)

export default MeetupDate
