import React from "react";
import PropTypes from "prop-types";
import TeamElement from "root/components/TeamElement";
import withQuery from "./withQuery";

import "./index.css";

const Advisors = ({ data }) => (
  <div styleName="root">
    <TeamElement
      key="francisco"
      name="Francisco Baila"
      image={data.francisco.image.fluid}
    />
    <TeamElement
      key="gabriel"
      name="Gabriel Poça"
      image={data.gabriel.image.fluid}
    />
    <TeamElement
      key="laura"
      name="Laura Esteves"
      image={data.laura.image.fluid}
    />
    <TeamElement
      key="roberto"
      name="Roberto Machado"
      image={data.roberto.image.fluid}
    />
  </div>
);

Advisors.propTypes = {
  data: PropTypes.shape({
    francisco: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    gabriel: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    laura: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    roberto: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(Advisors);
