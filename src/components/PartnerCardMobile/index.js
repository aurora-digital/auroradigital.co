import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const PartnerCardMobile = ({ name, onClick, partner }) => (
  <button styleName="root" onClick={onClick} name={name}>
    <div styleName="content">
      <img alt="partner" styleName="image" src={partner.image} />
    </div>
  </button>
);

PartnerCardMobile.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  partner: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

PartnerCardMobile.defaultProps = {
  onClick: null,
};

export default PartnerCardMobile;
