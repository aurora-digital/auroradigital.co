import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Typography from "../Typography";
import linkedin from "../../assets/images/linkedin-darkBlue.svg";

import "./index.css";

const SelectedPartnerMobile = ({ partner }) => (
  <div styleName="root">
    <Img fluid={partner.image} alt="partner" styleName="image" />
    <div styleName="info">
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
        <img styleName="img" src={linkedin} alt="linkedin" />
      </a>
    </div>
  </div>
);

SelectedPartnerMobile.propTypes = {
  partner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.shape({}).isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

export default SelectedPartnerMobile;
