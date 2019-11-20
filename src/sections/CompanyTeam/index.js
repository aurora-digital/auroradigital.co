import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Section from "root/components/Section";
import TeamElement from "root/components/TeamElement";

import "./index.css";

const query = graphql`
  query AuthorsQuery {
    allAuthorsJson(filter: { showOnTeam: { eq: "true" } }) {
      edges {
        author: node {
          name
          photo {
            childImageSharp {
              fluid(maxWidth: 700, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          position
          linkedin
          instagram
          github
          twitter
        }
      }
    }
  }
`;

export default function CompanyTeam() {
  const data = useStaticQuery(query);

  return (
    <Section verticalSpacing={false}>
      <div styleName="root">
        {data.allAuthorsJson.edges.map(({ author }) => (
          <div styleName="element">
            <TeamElement
              image={author.photo.childImageSharp.fluid}
              name={author.name}
              position={author.position}
              instagram={author.instagram}
              twitter={author.twitter}
              linkedin={author.linkedin}
              github={author.github}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
