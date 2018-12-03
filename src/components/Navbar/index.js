import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import capitalize from "lodash/capitalize";
import Section from "root/components/Section";
import Button from "root/components/Button";
import Typography from "root/components/Typography";
import Logo from "./Logo";

import "./index.css";

export default class Navbar extends Component {
  static propTypes = {
    currentPage: PropTypes.oneOf(["home", "services", "company"]).isRequired,
    color: PropTypes.oneOf(["white", "dark-blue"]),
    underlineColor: PropTypes.oneOf(["white", "light-blue"]),
    logoColor: PropTypes.oneOf(["white", "light-blue"]),
  };

  static defaultProps = {
    color: "white",
    underlineColor: "white",
    logoColor: "white",
  };

  renderPageLink = pageName => {
    const { currentPage, color, underlineColor } = this.props;
    const url = pageName === "home" ? `/` : `/${pageName}`;

    return (
      <Link to={url} styleName="link">
        <Typography
          variant="body"
          color={color}
          weight={currentPage === pageName ? "bold" : "regular"}
          underline={currentPage === pageName}
          underlineColor={underlineColor}
        >
          {capitalize(pageName)}
        </Typography>
      </Link>
    );
  };

  render() {
    const { logoColor } = this.props;

    return (
      <Section verticalSpacing={false}>
        <nav styleName="root">
          <Link styleName="link-logo" to="/">
            <Logo color={logoColor} />
          </Link>
          <div styleName="links">
            {this.renderPageLink("home")}
            {this.renderPageLink("services")}
            {this.renderPageLink("company")}
            <div styleName="contact-us">
              <Button>
                <Typography weight="bold">Contact us</Typography>
              </Button>
            </div>
          </div>
        </nav>
      </Section>
    );
  }
}
