import React from "react";
import PropTypes from "prop-types";

import Typography from "root/components/Typography";
import capitalize from "lodash/capitalize";
import asterisk from "root/assets/images/asterisk.svg";

import "./index.css";

const Service = ({ serviceName, image, specificServices }) => (
  <div styleName="services">
    <div styleName="service-type">
      <img styleName="asterisk" src={asterisk} alt="asterisk" />
      <div styleName="type">
        <Typography variant="h3" color="dark-blue">
          {capitalize(serviceName)}
        </Typography>
      </div>
    </div>
    <div styleName="service-description">
      <div>
        <img src={image} alt={serviceName} />
      </div>
      <div styleName="description">
        {specificServices.map(specificService => (
          <Typography variant="body" color="dark-blue" key={specificService}>
            {specificService}
          </Typography>
        ))}
      </div>
    </div>
  </div>
);

Service.propTypes = {
  serviceName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  specificServices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Service;
