import React, { Component } from "react";
import PartnerCard from "../components/PartnerCard";

export default showcasePartnersData => WrappedComponent => {
  class withPartnersShowcaser extends Component {
    state = {
      selectedPartner: showcasePartnersData[0],
    };

    handleSelect = event => {
      const partnerName = event.currentTarget.name;

      if (!partnerName) return;

      const selectedPartner = showcasePartnersData.find(
        partner => partner.name === partnerName,
      );

      this.setState({ selectedPartner });
    };

    renderPartners = () =>
      showcasePartnersData.map(partner => (
        <PartnerCard
          name={partner.name}
          partner={partner}
          selected={this.state.selectedPartner.name === partner.name}
          onClick={this.handleSelect}
        />
      ));

    render() {
      return (
        <WrappedComponent
          {...this.props}
          renderPartners={this.renderPartners}
          selectedPartner={this.state.selectedPartner}
        />
      );
    }
  }

  return withPartnersShowcaser;
};
