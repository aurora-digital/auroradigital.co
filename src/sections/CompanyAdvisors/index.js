import React from "react";
import PropTypes from "prop-types";
import AdvisorElement from "root/components/AdvisorElement";
import Section from "root/components/Section";
import withQuery from "./withQuery";

import "./index.css";

const CompanyAdvisors = ({ data }) => (
  <Section verticalSpacing={false}>
    <div styleName="root">
      <div styleName="advisor-element">
        <AdvisorElement
          key="francisco"
          name="Francisco Baila"
          image={data.francisco.image.fluid}
          linkedin="franciscobaila"
          behance="fcbaila"
          nameMargin
        />
      </div>
      <div styleName="advisor-element">
        <AdvisorElement
          key="gabriel"
          name="Gabriel Poça"
          image={data.gabriel.image.fluid}
          linkedin="gabrielpoca"
          github="gabrielpoca"
        />
      </div>
      <div styleName="advisor-element">
        <AdvisorElement
          key="laura"
          name="Laura Esteves"
          image={data.laura.image.fluid}
          linkedin="lauraesteves"
          twitter="lauraeesteves"
          nameMargin
        />
      </div>
      <div styleName="advisor-element">
        <AdvisorElement
          key="roberto"
          name="Roberto Machado"
          image={data.roberto.image.fluid}
          linkedin="robertomachado"
          twitter="rmdgb"
        />
      </div>
    </div>
  </Section>
);

CompanyAdvisors.propTypes = {
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

export default withQuery(CompanyAdvisors);
