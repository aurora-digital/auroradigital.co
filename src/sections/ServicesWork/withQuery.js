import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    heroMolecules: file(relativePath: { eq: "images/section-services.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
