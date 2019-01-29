import React from 'react'
import StyledFooter from './Footer.style'

const Footer = ({ siteTitle }) => (
  <div>
    <StyledFooter>
      <p>
        Meetup organisé avec{' '}
        <span role="img" aria-label="cœur">
          ❤️
        </span>
        par <a href="https://twitter.com/matthieuauger">Matthieu Auger</a> et{' '}
        <a href="https://twitter.com/phacks">Nicolas Goutay</a>.
      </p>
      <br />
      <p>
        Site construit avec <a href="https://gatsbyjs.org">GatsbyJS</a>,{' '}
        <a href="https://contentful.com">Contentful</a> et{' '}
        <a href="https://netlify.com">Netlify</a>.
      </p>
      <p>
        Voir le code source sur{' '}
        <a href="https://github.com/jamstack-paris/jamstack.paris">GitHub</a>.
      </p>
    </StyledFooter>
  </div>
)

export default Footer
