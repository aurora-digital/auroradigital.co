import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    magicalPower: file(relativePath: { eq: "images/magicalPower.jpg" }) {
      image: childImageSharp {
        fluid(maxHeight: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
