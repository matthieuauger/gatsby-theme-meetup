import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Button from '../Button'

const Menu = () => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        site {
          siteMetadata {
            meetupName
            displayVideosLink
            meetupVideosUrl
            talkProposalUrl
            translations {
              FETCH_VIDEOS
              PROPOSE_A_TALK
            }
          }
        }
      }
    `}
    render={data => (
      <ul>
        {data.site.siteMetadata.displayVideosLink && (
          <li>
            <Button
              url={data.site.siteMetadata.meetupVideosUrl}
              text={data.site.siteMetadata.translations.FETCH_VIDEOS}
              type="neutral"
            />
          </li>
        )}
        <li>
          <Button
            url={data.site.siteMetadata.talkProposalUrl}
            text={data.site.siteMetadata.translations.PROPOSE_A_TALK}
            type="primary"
          />
        </li>
      </ul>
    )}
  />
)

export default Menu
