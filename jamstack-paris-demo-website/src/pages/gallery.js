import React from "react";
import { graphql } from "gatsby";
import Layout from "@matthieuauger/gatsby-theme-meetup/src/components/Layout";
import Footer from "@matthieuauger/gatsby-theme-meetup/src/components/Footer";

import Img from "gatsby-image";

const GalleryPage = ({ data }) => {
  return (
    <Layout>
      <div class="gallery">
        {data.gallery.edges.map((picture, index) => {
          if (picture.node.childImageSharp === null) {
            return null;
          }
          return (
            <Img
              className="gallery__picture"
              fixed={picture.node.childImageSharp.fixed}
              alt="JAMstack Paris Gallery Picture"
              key={index}
            />
          );
        })}
      </div>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        displayVideosLink
        meetupHomepageHeadline
        meetupVideosUrl
        translations {
          LAST_MEETUPS
          FETCH_VIDEOS
          REGISTER_ON_MEETUP
        }
        dateFormat
        currentMeetupColor
        pastMeetupColors
      }
    }
    gallery: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default GalleryPage;
