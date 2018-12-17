import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    magicalPower: file(relativePath: { eq: "images/magic-company.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 1400, maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
