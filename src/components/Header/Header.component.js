import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/jamstack-paris-community.svg'
import StyledHeader from './Header.style'

const Header = ({ siteTitle }) => (
  <div className="header-container">
    <StyledHeader>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="JAMstack.paris logo" />
        </Link>
      </div>
      <div className="app-name">
        <div className="app-name-classic">JAMstack</div>
        <div className="app-name-classic">Paris</div>
        <div className="app-name-highlight">Meetup</div>
      </div>
      <ul>
        <li><a href="https://www.youtube.com/channel/UC66eQOycjMnaqzpbRUhEK2w">Parcourir les vidéos →</a></li>
        <li className="menu-item-highlight"><a href="https://docs.google.com/forms/d/e/1FAIpQLScYo0W4QAkRHLj0fS_TXZXFuSUJ_cRlmyJCeRTPDQVt9RBNog/viewform">Proposer un talk →</a></li>
      </ul>
    </StyledHeader>
  </div>
)

export default Header
