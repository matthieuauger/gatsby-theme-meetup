import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from '../../images/favicon-16x16.png'

import Header from '../Header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            meetupName
            displayVideosLink
            meetupVideosUrl
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.meetupName}
          meta={[
            { name: 'description', content: 'JAMstack.paris' },
            { name: 'keywords', content: 'JAMstack, paris' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          meetupName={data.site.siteMetadata.meetupName}
          displayVideosLink={data.site.siteMetadata.displayVideosLink}
          meetupVideosUrl={data.site.siteMetadata.meetupVideosUrl}
        />
        <div>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
