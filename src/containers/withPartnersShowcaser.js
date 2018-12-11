import React, { Component } from "react";
import PartnerCard from "../components/PartnerCard";
import PartnerCardMobile from "../components/PartnerCardMobile";

export default showcasePartnersData => WrappedComponent => {
  class withPartnersShowcaser extends Component {
    state = {
      currentIndex: 0,
      selectedPartner: showcasePartnersData[0],
    };

    componentDidMount() {
      this.interval = setInterval(() => {
        const newCurrentIndex =
          this.state.currentIndex === showcasePartnersData.length - 1
            ? 0
            : this.state.currentIndex + 1;
        const newSelectedPartner = showcasePartnersData[newCurrentIndex];

        this.setState({
          currentIndex: newCurrentIndex,
          selectedPartner: newSelectedPartner,
        });
      }, 7000);
    }

    componentWillUnmount() {
      this.clearComponentInterval();
    }

    clearComponentInterval = () => {
      clearInterval(this.interval);

      this.interval = null;
    };

    handleSelect = event => {
      this.clearComponentInterval();

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
