import React, { Component } from "react";
import PropTypes from "prop-types";
import PartnerCard from "../components/PartnerCard";
import PartnerCardMobile from "../components/PartnerCardMobile";

export default WrappedComponent => {
  class withPartnersShowcaser extends Component {
    static propTypes = {
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          position: PropTypes.string.isRequired,
          image: PropTypes.shape({}).isRequired,
          linkedin: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    };

    constructor(props) {
      super(props);

      this.state = {
        currentIndex: 0,
        selectedPartner: props.data[0],
      };
    }

    componentDidMount() {
      const { data } = this.props;
      const { currentIndex } = this.state;

      this.interval = setInterval(() => {
        const newCurrentIndex =
          currentIndex === data.length - 1 ? 0 : currentIndex + 1;
        const newSelectedPartner = data[newCurrentIndex];

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

      const { data } = this.props;
      const partnerName = event.currentTarget.name;

      if (!partnerName) return;

      const selectedPartner = data.find(
        partner => partner.name === partnerName,
      );

      this.setState({ selectedPartner });
    };

    renderPartners = () => {
      const { data } = this.props;
      const { selectedPartner } = this.state;

      return data.map(partner => (
        <PartnerCard
          key={partner.name}
          name={partner.name}
          partner={partner}
          selected={selectedPartner.name === partner.name}
          onClick={this.handleSelect}
        />
      ));
    };

    renderMobileUnselectedPartners = () => {
      const { data } = this.props;
      const { selectedPartner } = this.state;
      const unselectedPartners = data.filter(
        partner => partner.name !== selectedPartner.name,
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
      const { selectedPartner } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          renderPartners={this.renderPartners}
          renderMobileUnselectedPartners={this.renderMobileUnselectedPartners}
          selectedPartner={selectedPartner}
        />
      );
    }
  }

  return withPartnersShowcaser;
};
