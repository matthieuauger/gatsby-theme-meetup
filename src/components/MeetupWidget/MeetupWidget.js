import React from 'react'

import MeetupDate from './MeetupDate'
import MeetupInfos from './MeetupInfos'

const MeetupWidget = ({meetupEvent}) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 480,
        padding: '10px 40px 30px 40px',
        backgroundColor: 'white',
        borderRadius: 15,
        border: '1px solid #979797',
      }}
    >
      <h2 style={{color: '#43933E'}}>Prochain Meetup</h2>
      <div
        style={{
          display: 'flex',
          direction: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <MeetupDate localDate={meetupEvent.local_date}/>
        <MeetupInfos meetupEvent={meetupEvent}/>
      </div>
    </div>
  </div>
)

export default MeetupWidget
