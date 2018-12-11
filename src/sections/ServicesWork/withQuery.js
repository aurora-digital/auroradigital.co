import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    heroMolecules: file(relativePath: { eq: "images/hero-molecules.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
