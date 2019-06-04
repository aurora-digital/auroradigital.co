import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";
import Img from "gatsby-image";
import classNames from "classnames";

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
    id: PropTypes.number.isRequired,
  };

  static defaultProps = {
    position: null,
    linkedin: null,
    github: null,
    twitter: null,
    instagram: null,
  };

  renderSocial = () => {
    const { github, linkedin, twitter, instagram } = this.props;

    if (!github && !linkedin && !twitter && !instagram) {
      return null;
    }

    return (
      <div styleName="social">
        {!linkedin ? null : (
          <a
            rel="noopener noreferrer"
            target="_blank"
            styleName="link"
            href={linkedin}
          >
            <Typography variant="small-body" color="klein-blue">
              In
            </Typography>
          </a>
        )}
        {!twitter ? null : (
          <a
            rel="noopener noreferrer"
            target="_blank"
            styleName="link"
            href={twitter}
          >
            <Typography variant="small-body" color="klein-blue">
              Tw
            </Typography>
          </a>
        )}
        {!github ? null : (
          <a
            rel="noopener noreferrer"
            target="_blank"
            styleName="link"
            href={github}
          >
            <Typography variant="small-body" color="klein-blue">
              Git
            </Typography>
          </a>
        )}

        {!instagram ? null : (
          <a
            rel="noopener noreferrer"
            target="_blank"
            styleName="link"
            href={instagram}
          >
            <Typography variant="small-body" color="klein-blue">
              Ins
            </Typography>
          </a>
        )}
      </div>
    );
  };

  handleRef = element => {
    const { name } = this.props;

    this[name] = element;
  };

  render() {
    const { image, name, position, id } = this.props;

    const rootStyles = classNames("root", {
      even: id % 2 === 0,
      odd: id % 2 !== 0,
    });

    return (
      <button styleName={rootStyles} type="button">
        <Img
          styleName="image"
          alt={`${name.toLowerCase()} photo`}
          fluid={image}
          objectFit="cover"
        />
        <div styleName="description">
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
          {this.renderSocial()}
        </div>
      </button>
    );
  }
}
