import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/jamstack-paris.svg'

const Header = ({ siteTitle }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      <img src={logo} alt="JAMstack.paris logo" width="200" />
    </Link>
    </div>
  </div>
)

export default Header
