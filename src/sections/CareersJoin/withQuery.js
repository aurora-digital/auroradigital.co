import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    meeting: file(relativePath: { eq: "images/meeting.png" }) {
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
