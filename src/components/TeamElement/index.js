import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";
import Img from "gatsby-image";
import classNames from "classnames";
import Social from "root/components/Social";

import "./index.css";

export default class TeamElement extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string,
    image: PropTypes.shape({}).isRequired,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    behance: PropTypes.string,
    nameMargin: PropTypes.bool,
  };

  static defaultProps = {
    position: null,
    linkedin: null,
    github: null,
    twitter: null,
    instagram: null,
    behance: null,
    nameMargin: false,
  };

  handleRef = element => {
    const { name } = this.props;

    this[name] = element;
  };

  render() {
    const {
      image,
      name,
      position,
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
      <button styleName="root" type="button">
        <Img
          fadeIn={false}
          styleName="image"
          alt={`${name.toLowerCase()} photo`}
          fluid={image}
          objectFit="cover"
        />
        <div styleName={descStyles}>
          <div styleName="name">
            <Typography weight="bold" variant="small-body" color="oxford-blue">
              {name}
            </Typography>
          </div>
          {position && (
            <div styleName="position">
              <Typography variant="small-body" color="oxford-blue">
                {position}
              </Typography>
            </div>
          )}
          <Social
            name={name}
            github={github}
            linkedin={linkedin}
            twitter={twitter}
            instagram={instagram}
            behance={behance}
          />
        </div>
      </button>
    );
  }
}
