import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";

import "./index.css";

export default class Social extends Component {
  static propTypes = {
    github: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    behance: PropTypes.string,
    name: PropTypes.string.isRequired,
  };

  static defaultProps = {
    linkedin: null,
    github: null,
    twitter: null,
    instagram: null,
    behance: null,
  };

  render() {
    const { github, linkedin, twitter, instagram, behance, name } = this.props;

    if (!github && !linkedin && !twitter && !instagram && !behance) {
      return null;
    }

    return (
      <div styleName="root">
        {!linkedin ? null : (
          <a
            rel="noopener noreferrer"
            target="_blank"
            styleName="link"
            href={linkedin}
            aria-label={`${name}' Linkedin`}
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
            aria-label={`${name}' Twitter`}
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
            aria-label={`${name}' Github`}
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
            aria-label={`${name}' Instagram`}
          >
            <Typography variant="small-body" color="klein-blue">
              Ins
            </Typography>
          </a>
        )}

        {!behance ? null : (
          <a
            rel="noopener noreferrer"
            target="_blank"
            styleName="link"
            href={behance}
            aria-label={`${name}' Behance`}
          >
            <Typography variant="small-body" color="klein-blue">
              Be
            </Typography>
          </a>
        )}
      </div>
    );
  }
}
