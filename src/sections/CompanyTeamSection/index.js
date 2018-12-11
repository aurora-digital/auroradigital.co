import React from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import TeamElement from "root/components/TeamElement";
import withQuery from "./withQuery";

import "./index.css";

const CompanyTeamSection = ({ data }) => (
  <Section separator>
    <div styleName="left">
      <Typography variant="h2" color="dark-blue" fontFamily="meta-serif">
        A multidisciplinary team always ready to face new challenges
      </Typography>
    </div>
    <div styleName="right">
      <Typography color="dark-blue">
        Our team comes from vastly different backgrounds that work together to
        create amazing technology. From market research and web design to
        bioinformatics and IoT, we are ready to help you and your company create
        fantastic digital experiences.
      </Typography>
    </div>
    <div styleName="team">
      <TeamElement
        key="filipe"
        name="Filipe Fernandes"
        position="Software Developer"
        image={data.filipe.image.fluid}
      />
      <TeamElement
        key="francisco"
        name="Francisco Sousa"
        position="Software Developer"
        image={data.francisco.image.fluid}
      />
      <TeamElement
        key="ines"
        name="Inês Silva"
        position="Designer"
        image={data.ines.image.fluid}
      />
      <TeamElement
        key="joao"
        name="João Magalhães"
        position="CEO"
        image={data.joao.image.fluid}
      />
      <TeamElement
        key="tania"
        name="Tânia Rocha"
        position="Software Developer"
        image={data.tania.image.fluid}
      />
      <div styleName="challenge">
        <Typography variant="h3">Looking for a new challenge?</Typography>

        <div>
          <Typography variant="body">
            Send us your CV{" "}
            <span role="img" aria-label="finger-pointing-down">
              👇🏻
            </span>
          </Typography>

          <div styleName="challenge-email">
            <Typography variant="body">contact@svhealth.io</Typography>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

CompanyTeamSection.propTypes = {
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

export default withQuery(CompanyTeamSection);
