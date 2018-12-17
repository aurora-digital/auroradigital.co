import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    svhealthteam: file(
      relativePath: { eq: "images/team-photo-conversation.jpg" }
    ) {
      image: childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
