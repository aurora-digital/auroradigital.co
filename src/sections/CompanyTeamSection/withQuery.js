import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    filipe: file(relativePath: { eq: "images/filipe.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    francisco: file(relativePath: { eq: "images/francisco.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    ines: file(relativePath: { eq: "images/ines.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    joao: file(relativePath: { eq: "images/joao.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    tania: file(relativePath: { eq: "images/tania.jpg" }) {
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
