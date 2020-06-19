import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    concept: file(relativePath: { eq: "images/home-services-concept.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    strategy: file(relativePath: { eq: "images/home-services-strategy.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    code: file(relativePath: { eq: "images/home-services-code.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    design: file(relativePath: { eq: "images/home-services-design.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    growth: file(relativePath: { eq: "images/home-services-growth.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
