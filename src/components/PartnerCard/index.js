import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Typography from "../Typography";

import roberto from "../../assets/images/roberto.png";
import "./index.css";

const PartnerCard = ({ name, onClick, selected }) => {
  const rootStyles = classNames("root", {
    selected,
  });

  return (
    <button styleName={rootStyles} onClick={onClick} name={name}>
      <div styleName="content">
        <img alt="partner" styleName="image" src={roberto} />
        <Typography weight="bold">Roberto Machado</Typography>
        <Typography>CEO @Subvisual</Typography>

        <div styleName="linkedin">in</div>
      </div>
    </button>
  );
};

PartnerCard.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  partner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

PartnerCard.defaultProps = {
  onClick: null,
  selected: false,
};

export default PartnerCard;
