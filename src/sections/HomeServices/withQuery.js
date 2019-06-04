import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    first: file(relativePath: { eq: "images/home-services-first-image.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 700, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    second: file(
      relativePath: { eq: "images/home-services-second-image.jpg" }
    ) {
      image: childImageSharp {
        fluid(maxWidth: 700, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
