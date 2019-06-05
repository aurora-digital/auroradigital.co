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
          linkedin="https://www.linkedin.com/in/franciscobaila"
          behance="https://www.behance.net/fcbaila"
          nameMargin
        />
      </div>
      <div styleName="advisor-element">
        <AdvisorElement
          key="gabriel"
          name="Gabriel Poça"
          image={data.gabriel.image.fluid}
          linkedin="https://www.linkedin.com/in/gabrielpoca"
          github="https://github.com/gabrielpoca"
        />
      </div>
      <div styleName="advisor-element">
        <AdvisorElement
          key="laura"
          name="Laura Esteves"
          image={data.laura.image.fluid}
          linkedin="https://www.linkedin.com/in/lauraesteves"
          twitter="https://twitter.com/lauraeesteves"
          nameMargin
        />
      </div>
      <div styleName="advisor-element">
        <AdvisorElement
          key="roberto"
          name="Roberto Machado"
          image={data.roberto.image.fluid}
          linkedin="https://www.linkedin.com/in/robertomachado"
          twitter="https://twitter.com/rmdgb"
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
