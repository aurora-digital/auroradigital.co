import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    servicesWorking: file(relativePath: { eq: "images/services-working.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 600, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery
    query={query}
    render={data => <Component image={data.servicesWorking.image.fluid} />}
  />
);
