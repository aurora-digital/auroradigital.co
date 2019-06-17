import React, { Component } from "react";
import PropTypes from "prop-types";
import capitalize from "lodash/capitalize";

import Section from "root/components/Section";
import Typography from "root/components/Typography";
import Logo from "root/components/Logo";
import Link from "root/components/Link";

import "./index.css";

const COLOR_THEME_PRIMARY = {
  color: "klein-blue",
  underlineColor: "klein-blue",
  logoColor: "klein-blue",
};

const COLOR_THEME_SECONDARY = {
  color: "white",
  underlineColor: "white",
  logoColor: "white",
};

export default class Navbar extends Component {
  static propTypes = {
    currentPage: PropTypes.oneOf(["home", "company", "blog"]),
    theme: PropTypes.oneOf(["primary", "secondary"]),
  };

  static defaultProps = {
    currentPage: "home",
    theme: "primary",
  };

  get colors() {
    const { theme } = this.props;

    return theme === "primary" ? COLOR_THEME_PRIMARY : COLOR_THEME_SECONDARY;
  }

  renderBrand = () => {
    const { logoColor } = this.colors;

    return (
      <div styleName="brand">
        <Link to="/" label="Aurora's homepage">
          <Logo color={logoColor} />
        </Link>
      </div>
    );
  };

  renderPageLink = pageName => {
    const { currentPage } = this.props;
    const { color, underlineColor } = this.colors;
    const url = pageName === "home" ? `/` : `/${pageName}`;

    return (
      <Link
        to={url}
        underlineColor={underlineColor}
        isActive={currentPage === pageName}
        hover
        label={`Aurora's ${pageName}`}
      >
        <Typography variant="small-body" color={color}>
          {capitalize(pageName)}
        </Typography>
      </Link>
    );
  };

  render() {
    return (
      <Section verticalSpacing={false}>
        <header styleName="root">
          {this.renderBrand()}

          <nav
            styleName="navigation"
            role="navigation"
            aria-expanded="false"
            aria-label="Navigation Menu"
          >
            {this.renderPageLink("company")}

            {/* his.renderPageLink("blog") */}
          </nav>
        </header>
      </Section>
    );
  }
}
