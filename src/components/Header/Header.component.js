import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/jamstack-paris.svg'
import StyledHeader from './Header.style'

const Header = ({ siteTitle }) => (
  <div>
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="JAMstack.paris logo" />
      </Link>
      <ul>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScYo0W4QAkRHLj0fS_TXZXFuSUJ_cRlmyJCeRTPDQVt9RBNog/viewform">Proposer un talk</a></li>
      </ul>
    </StyledHeader>
  </div>
)

export default Header
