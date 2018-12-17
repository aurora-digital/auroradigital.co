import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import "./index.css";

const PartnerCardMobile = ({ name, onClick, partner }) => (
  <button styleName="root" onClick={onClick} name={name}>
    <div styleName="content">
      <Img fluid={partner.image} alt="partner" styleName="image" />
    </div>
  </button>
);

PartnerCardMobile.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  partner: PropTypes.shape({
    image: PropTypes.shape({}).isRequired,
  }).isRequired,
};

PartnerCardMobile.defaultProps = {
  onClick: null,
};

export default PartnerCardMobile;
