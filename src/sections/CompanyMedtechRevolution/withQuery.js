import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    teamwork: file(relativePath: { eq: "images/team-work.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    teamtalk: file(relativePath: { eq: "images/team-talk.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
