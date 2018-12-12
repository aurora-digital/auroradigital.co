import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import SelectedPartnerMobile from "root/components/SelectedPartnerMobile";
import quotes from "root/assets/images/quotes.svg";
import withPartnersShowcaser from "../../containers/withPartnersShowcaser";
import partnersData from "./partnersData";

import "./index.css";

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
          <ReactCSSTransitionGroup
            transitionName="fadein-opacity"
            transitionEnterTimeout={250}
            transitionLeave={false}
          >
            <Typography
              key={selectedPartner.fullName}
              color="dark-blue"
              variant="h3"
            >
              {selectedPartner.about}
            </Typography>
          </ReactCSSTransitionGroup>
        </div>
        <div styleName="cards-desktop">{renderPartners()}</div>
        <div styleName="partners-mobile">
          <ReactCSSTransitionGroup
            transitionName="fadein-opacity"
            transitionEnterTimeout={250}
            transitionLeave={false}
          >
            <SelectedPartnerMobile
              key={selectedPartner.fullName}
              partner={selectedPartner}
            />
          </ReactCSSTransitionGroup>
          <div styleName="cards-mobile">{renderMobileUnselectedPartners()}</div>
        </div>
      </Section>
    );
  }
}
