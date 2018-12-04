import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Typography from "../Typography";
import linkedin from "../../assets/images/in.svg";

import "./index.css";

const PartnerCard = ({ onClick, selected, partner }) => {
  const rootStyles = classNames("root", {
    selected,
  });

  return (
    <button styleName={rootStyles} onClick={onClick}>
      <div styleName="content">
        <img alt="partner" styleName="image" src={partner.image} />
        <Typography weight="bold">{partner.name}</Typography>
        <Typography>{partner.position}</Typography>
        <a
          styleName="linkedin"
          href={partner.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </button>
  );
};

PartnerCard.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  partner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

PartnerCard.defaultProps = {
  onClick: null,
  selected: false,
};

export default PartnerCard;
