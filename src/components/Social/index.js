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
  };

  static defaultProps = {
    linkedin: null,
    github: null,
    twitter: null,
    instagram: null,
    behance: null,
  };

  render() {
    const { github, linkedin, twitter, instagram, behance } = this.props;

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

        {!behance ? null : (
          <a
            rel="noopener noreferrer"
            target="_blank"
            styleName="link"
            href={behance}
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
