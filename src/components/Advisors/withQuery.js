import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    francisco: file(relativePath: { eq: "images/francisco-baila.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    gabriel: file(relativePath: { eq: "images/gabriel-poca.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    laura: file(relativePath: { eq: "images/laura-esteves.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    roberto: file(relativePath: { eq: "images/roberto-machado.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
