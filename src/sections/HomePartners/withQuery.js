import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    roberto: file(relativePath: { eq: "images/roberto.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 300, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    miguel: file(relativePath: { eq: "images/miguel.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    murta: file(relativePath: { eq: "images/murta.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const partnersData = [
  {
    name: "roberto",
    fullName: "Roberto Machado",
    about: "Roberto Machado's saying about SV Health",
    position: "CEO @ Subvisual",
    imageName: "roberto",
    linkedin: "https://www.linkedin.com/in/robertomachado/",
  },
  {
    name: "miguel",
    fullName: "Miguel Silva",
    about:
      "A flexible and talented team that can adapt to any circumstance. Building software for healthcare is extremely challenging, but they are doing an impressive work.",
    position: "CEO @ OncoStats",
    imageName: "miguel",
    linkedin: "https://www.linkedin.com/in/miguel-borges-62a8802b/",
  },
  {
    name: "murta",
    fullName: "António Murta",
    about: "Antonio Murta's saying about SV Health",
    position: "MP @ Pathena",
    imageName: "murta",
    linkedin: "https://www.linkedin.com/in/ant%C3%B3nio-murta-18358243/",
  },
  {
    name: "alexandre",
    fullName: "Alexandre Something",
    about: "Alexandre Something saying about SV Health",
    position: "? @ Something",
    imageName: "roberto",
    linkedin: "https://www.linkedin.com",
  },
];

export default Component => () => (
  <StaticQuery
    query={query}
    render={imageQuery => {
      const data = partnersData.map(partner => {
        const newPartner = partner;

        newPartner.image = imageQuery[partner.imageName].image.fluid;

        return newPartner;
      });

      return <Component data={data} />;
    }}
  />
);
