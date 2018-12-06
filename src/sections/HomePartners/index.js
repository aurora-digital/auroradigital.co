import React, { Component } from "react";
import PropTypes from "prop-types";

import Section from "root/components/Section";
import Typography from "root/components/Typography";
import quotes from "root/assets/images/quotes.svg";

import withPartnersShowcaser from "../../containers/withPartnersShowcaser";
import partnersData from "./partnersData";

import "./index.css";

@withPartnersShowcaser(partnersData)
export default class HomePagePartners extends Component {
  static propTypes = {
    renderPartners: PropTypes.func.isRequired,
    selectedPartner: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { renderPartners, selectedPartner } = this.props;

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
          <Typography color="dark-blue" variant="h3">
            {selectedPartner.about}
          </Typography>
        </div>
        <div styleName="cards">{renderPartners()}</div>
      </Section>
    );
  }
}
