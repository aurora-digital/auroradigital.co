import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    servicesHero: file(relativePath: { eq: "images/services-hero.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 1400, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery
    query={query}
    render={data => <Component image={data.servicesHero.image.fluid} />}
  />
);
