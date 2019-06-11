import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    sioslife1: file(relativePath: { eq: "images/sioslife1.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 700, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    sioslife2: file(relativePath: { eq: "images/sioslife2.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 700, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    oncostats1: file(relativePath: { eq: "images/oncostats1.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 700, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    oncostats2: file(relativePath: { eq: "images/oncostats2.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 700, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    lyftonomie1: file(relativePath: { eq: "images/lyftonomie1.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 700, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    lyftonomie2: file(relativePath: { eq: "images/lyftonomie2.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 700, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Component => () => (
  <StaticQuery query={query} render={data => <Component data={data} />} />
);
