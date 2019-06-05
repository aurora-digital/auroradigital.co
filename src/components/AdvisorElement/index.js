import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";
import Img from "gatsby-image";
import classNames from "classnames";
import Social from "root/components/Social";
import { findDOMNode } from "react-dom";

import "./index.css";

const gutter = 32;
const mobileBreakpoint = 800;

export default class AdvisorElement extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({}).isRequired,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    behance: PropTypes.string,
    id: PropTypes.number.isRequired,
  };

  static defaultProps = {
    linkedin: null,
    github: null,
    twitter: null,
    instagram: null,
    behance: null,
  };

  state = {
    width: null,
  };

  componentDidMount() {
    const { name } = this.props;

    if (this[name]) {
      const node = findDOMNode(this[name]);

      this.setState({ width: node.clientWidth });
    }
  }

  handleRef = element => {
    const { name } = this.props;

    this[name] = element;
  };

  render() {
    const {
      image,
      name,
      id,
      github,
      linkedin,
      twitter,
      instagram,
      behance,
    } = this.props;
    const { width } = this.state;

    const even = id % 2 === 0;
    const odd = id % 2 !== 0;

    const rootStyles = classNames("root", {
      even,
      odd,
    });

    const windowWidth = document.documentElement.clientWidth - 2 * gutter;

    let marginLeft = null;

    if (width && document.documentElement.clientWidth <= mobileBreakpoint) {
      marginLeft = odd ? windowWidth - width + gutter : 0;
    }

    return (
      <button styleName={rootStyles} type="button">
        <Img
          styleName="image"
          alt={`${name.toLowerCase()} photo`}
          fluid={image}
          objectFit="cover"
          ref={this.handleRef}
          style={{ marginLeft: `${marginLeft}px` }}
        />
        <div styleName="description" style={{ marginLeft: `${marginLeft}px` }}>
          <div styleName="name">
            <Typography weight="bold" variant="small-body" color="oxford-blue">
              {name}
            </Typography>
          </div>
          <Social
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
