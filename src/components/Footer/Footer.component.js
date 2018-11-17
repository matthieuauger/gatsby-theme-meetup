import React from 'react'
import StyledFooter from './Footer.style'

const Footer = ({ siteTitle }) => (
  <div>
    <StyledFooter>
      <p>Fait avec <span role="img" aria-label="cœur">❤️</span>par <a href="https://twitter.com/matthieuauger">@matthieuauger</a> et <a href="https://twitter.com/phacks">@phacks</a>.</p>
      <p>Construit avec <a href="https://gatsbyjs.org">GatsbyJS</a>. Voir le code source sur <a href="https://github.com/jamstack-paris/jamstack.paris">GitHub</a>.</p>
    </StyledFooter>
  </div>
)

export default Footer
