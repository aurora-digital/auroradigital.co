import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Img from "gatsby-image";
import Typography from "../Typography";
import linkedin from "../../assets/images/linkedin.svg";

import "./index.css";

const PartnerCard = ({ name, onClick, selected, partner }) => {
  const rootStyles = classNames("root", {
    selected,
  });

  return (
    <button styleName={rootStyles} onClick={onClick} name={name} type="button">
      <div styleName="content">
        <Img fluid={partner.image} alt="partner" styleName="image" />
        <Typography weight="bold" color="dark-blue">
          {partner.fullName}
        </Typography>
        <Typography color="dark-blue">{partner.position}</Typography>
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
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  partner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.shape({}).isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

PartnerCard.defaultProps = {
  onClick: null,
  selected: false,
};

export default PartnerCard;
