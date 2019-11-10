import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Button from "@matthieuauger/gatsby-theme-meetup/src/components/Button";

const Menu = () => (
  <StaticQuery
    query={graphql`
      query JAMstackParisMenuQuery {
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
              text="Vidéos →"
              type="neutral"
            />
          </li>
        )}
        <li>
          <Button
            url="/gallery"
            text="Photos →"
            type="neutral"
            internal={true}
          />
        </li>
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
);

export default Menu;
