import React, { Component } from "react";
import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import SelectedPartnerMobile from "root/components/SelectedPartnerMobile";
import quotes from "root/assets/images/quotes.svg";
import withPartnersShowcaser from "../../containers/withPartnersShowcaser";
import partnersData from "./partnersData";

import "./index.css";

const fadeAnimation = {
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0, transition: { duration: 200 } },
};
const FadeDiv = posed.div(fadeAnimation);

@withPartnersShowcaser(partnersData)
export default class HomePagePartners extends Component {
  static propTypes = {
    renderPartners: PropTypes.func.isRequired,
    renderMobileUnselectedPartners: PropTypes.func.isRequired,
    selectedPartner: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const {
      renderPartners,
      selectedPartner,
      renderMobileUnselectedPartners,
    } = this.props;

    return (
      <Section>
        <div styleName="title">
          <Typography variant="h2" color="dark-blue" fontFamily="meta-serif">
            What our partners say about us
          </Typography>
        </div>
        <div styleName="quotes">
          <img src={quotes} alt="quotes" />
        </div>
        <div styleName="about">
          <PoseGroup
            transitionName="fadein-opacity"
            transitionEnterTimeout={250}
            transitionLeave={false}
          >
            <FadeDiv key={selectedPartner.fullName}>
              <Typography color="dark-blue" variant="h3">
                {selectedPartner.about}
              </Typography>
            </FadeDiv>
          </PoseGroup>
        </div>
        <div styleName="cards-desktop">{renderPartners()}</div>
        <div styleName="partners-mobile">
          <PoseGroup
            transitionName="fadein-opacity"
            transitionEnterTimeout={250}
            transitionLeave={false}
          >
            <FadeDiv key={selectedPartner.fullName} styleName="fade-div">
              <SelectedPartnerMobile partner={selectedPartner} />
            </FadeDiv>
          </PoseGroup>
          <div styleName="cards-mobile">{renderMobileUnselectedPartners()}</div>
        </div>
      </Section>
    );
  }
}
