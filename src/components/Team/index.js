import React from "react";
import PropTypes from "prop-types";
import TeamElement from "root/components/TeamElement";
import withQuery from "./withQuery";

import "./index.css";

const Team = ({ data }) => (
  <div styleName="root">
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
      position="Design"
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
  </div>
);

Team.propTypes = {
  data: PropTypes.shape({
    filipe: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(Team);
