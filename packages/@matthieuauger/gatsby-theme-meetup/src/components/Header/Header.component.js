import React from 'react'
import { Link } from 'gatsby'
import MeetupLogo from './MeetupLogo.component.js'
import StyledHeader from './Header.style'
import Button from '../Button'

const Header = ({ meetupName, displayVideosLink, meetupVideosUrl }) => (
  <div className="header-container">
    <StyledHeader>
      <div className="logo">
        <Link to="/">
          <MeetupLogo />
        </Link>
        <div className="app-name">
          <div className="app-name-classic">{meetupName}</div>
          <div className="app-name-highlight">Meetup</div>
        </div>
      </div>
      <ul>
        {displayVideosLink && (
          <li>
            <Button
              url={meetupVideosUrl}
              text="Parcourir les vidéos →"
              type="neutral"
            />
          </li>
        )}
        <li>
          <Button
            url="https://docs.google.com/forms/d/e/1FAIpQLScYo0W4QAkRHLj0fS_TXZXFuSUJ_cRlmyJCeRTPDQVt9RBNog/viewform"
            text="Proposer un talk →"
            type="primary"
          />
        </li>
      </ul>
    </StyledHeader>
  </div>
)

export default Header
