import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Button from "../Button";

const Menu = () => (
  <StaticQuery
    query={graphql`
      query ShadowMenuQuery {
        site {
          siteMetadata {
            meetupName
            displayVideosLink
            meetupVideosUrl
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
        <li>
          <Button
            url="https://www.royal.uk/contact"
            text="Say hi to the Queen 🇬🇧"
            type="neutral"
          />
        </li>
        <li>
          <Button
            url="#"
            text={data.site.siteMetadata.translations.PROPOSE_A_TALK}
            type="primary"
          />
        </li>
      </ul>
    )}
  />
);

export default Menu;
