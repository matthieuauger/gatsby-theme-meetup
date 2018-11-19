import React from 'react'

import StyledMeetupWidget from './MeetupWidget.style'
import MeetupDate from './MeetupDate.component'
import MeetupInfos from './MeetupInfos.component'

const MeetupWidget = ({ meetupEvent }) => (
  <StyledMeetupWidget>
    <div className="widget-contents">
      <MeetupDate localDate={meetupEvent.local_date}/>
      <MeetupInfos meetupEvent={meetupEvent}/>
    </div>
  </StyledMeetupWidget>
)

export default MeetupWidget
