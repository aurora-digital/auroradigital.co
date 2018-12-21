import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    oncostats: file(relativePath: { eq: "images/oncostats.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 800, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    sioslife: file(relativePath: { eq: "images/sioslife.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
