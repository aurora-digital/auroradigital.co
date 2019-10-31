import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    left: file(relativePath: { eq: "images/home-services-left-image.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    right: file(relativePath: { eq: "images/home-services-right-image.jpg" }) {
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
