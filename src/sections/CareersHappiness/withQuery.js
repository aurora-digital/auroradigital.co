import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    catarinaFilipe: file(
      relativePath: { eq: "images/catarina_filipe_sofa.png" }
    ) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    tania: file(relativePath: { eq: "images/tania_meeting_room.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
