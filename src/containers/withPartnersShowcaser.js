import React, { Component } from "react";
import PartnerCard from "../components/PartnerCard";
import PartnerCardMobile from "../components/PartnerCardMobile";

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
          key={partner.name}
          name={partner.name}
          partner={partner}
          selected={this.state.selectedPartner.name === partner.name}
          onClick={this.handleSelect}
        />
      ));

    renderMobileUnselectedPartners = () => {
      const unselectedPartners = showcasePartnersData.filter(
        partner => partner.name !== this.state.selectedPartner.name,
      );

      return unselectedPartners.map(partner => (
        <PartnerCardMobile
          key={partner.name}
          name={partner.name}
          partner={partner}
          onClick={this.handleSelect}
        />
      ));
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          renderPartners={this.renderPartners}
          renderMobileUnselectedPartners={this.renderMobileUnselectedPartners}
          selectedPartner={this.state.selectedPartner}
        />
      );
    }
  }

  return withPartnersShowcaser;
};
