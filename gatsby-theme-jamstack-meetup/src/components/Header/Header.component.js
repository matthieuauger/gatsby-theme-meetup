import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/jamstack-paris-community.svg'
import StyledHeader from './Header.style'
import Button from '../Button'

const Header = ({ siteTitle }) => (
  <div className="header-container">
    <StyledHeader>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="JAMstack.paris logo" />
        </Link>
        <div className="app-name">
          <div className="app-name-classic">JAMstack</div>
          <div className="app-name-classic">Paris</div>
          <div className="app-name-highlight">Meetup</div>
        </div>
      </div>
      <ul>
        <li>
          <Button
            url="https://www.youtube.com/channel/UC66eQOycjMnaqzpbRUhEK2w"
            text="Parcourir les vidéos →"
            type="neutral"
          />
        </li>
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
