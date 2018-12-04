import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    oncostats: file(relativePath: { eq: "images/oncostats.png" }) {
      image: childImageSharp {
        fluid(maxHeight: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    sioslife: file(relativePath: { eq: "images/sioslife.png" }) {
      image: childImageSharp {
        fluid(maxHeight: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
