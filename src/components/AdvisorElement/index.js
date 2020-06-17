import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";
import Social from "root/components/Social";
import classNames from "classnames";
import ParallaxEffect from "root/components/ParallaxEffect";

import "./index.css";

export default class AdvisorElement extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({}).isRequired,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    behance: PropTypes.string,
    nameMargin: PropTypes.bool,
  };

  static defaultProps = {
    linkedin: null,
    github: null,
    twitter: null,
    instagram: null,
    behance: null,
    nameMargin: false,
  };

  render() {
    const {
      image,
      name,
      github,
      linkedin,
      twitter,
      instagram,
      behance,
      nameMargin,
    } = this.props;

    const descStyles = classNames("description", {
      margin: !!nameMargin,
    });

    return (
      <div styleName="root">
        <div styleName="image">
          <ParallaxEffect image={image} alt={`${name.toLowerCase()} photo`} />
        </div>
        <div styleName={descStyles}>
          <div styleName="name">
            <Typography weight="bold" variant="small-body" color="oxford-blue">
              {name}
            </Typography>
          </div>
          <Social
            name={name}
            github={github}
            linkedin={linkedin}
            twitter={twitter}
            instagram={instagram}
            behance={behance}
          />
        </div>
      </div>
    );
  }
}
