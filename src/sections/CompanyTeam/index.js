import React from "react";
import Section from "root/components/Section";
import TeamElement from "root/components/TeamElement";
import PropTypes from "prop-types";
import withQuery from "./withQuery";

import "./index.css";

function CompanyTeam({ data }) {
  return (
    <Section verticalSpacing={false}>
      <div styleName="root">
        <div styleName="element">
          <TeamElement
            image={data.filipe.image.fluid}
            name="Filipe Fernandes"
            position="Software Developer"
            linkedin="https://www.linkedin.com/in/filipe-fernandes-946398ab"
            instagram="https://www.instagram.com/filipe.b.fernandes"
            nameMargin
          />
        </div>
        <div styleName="element">
          <TeamElement
            image={data.francisco.image.fluid}
            name="Francisco Sousa"
            position="Software Developer"
            linkedin="https://www.linkedin.com/in/jfranciscosousa"
            github="https://github.com/jfranciscosousa"
          />
        </div>
        <div styleName="element">
          <TeamElement
            image={data.ines.image.fluid}
            name="Inês Silva"
            position="Designer"
            linkedin="https://www.linkedin.com/in/inês-silva-a64210121"
            twitter="https://twitter.com/trocadefilme"
            nameMargin
          />
        </div>
        <div styleName="element">
          <TeamElement
            image={data.joao.image.fluid}
            name="João Magalhães"
            position="CEO"
            linkedin="https://www.linkedin.com/in/joão-magalhães-b6b81032"
            twitter="https://twitter.com/joaomamag"
          />
        </div>
        <div styleName="element">
          <TeamElement
            image={data.tania.image.fluid}
            name="Tânia Rocha"
            position="Software Developer"
            linkedin="https://www.linkedin.com/in/tanisharocha"
            twitter="https://twitter.com/tanishaprocha"
            nameMargin
          />
        </div>
      </div>
    </Section>
  );
}

CompanyTeam.propTypes = {
  data: PropTypes.shape({
    filipe: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    francisco: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    ines: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    joao: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    tania: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
export default withQuery(CompanyTeam);
