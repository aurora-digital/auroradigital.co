import React, { useState } from "react";
import PropTypes from "prop-types";
import { capitalize } from "lodash-es";

import Section from "root/components/Section";
import Typography from "root/components/Typography";
import Logo from "root/components/Logo";
import Link from "root/components/Link";

import "./index.css";

const Navbar = ({ currentPage, theme }) => {
  const colors = () => {
    const COLOR_THEME_PRIMARY = {
      color: "klein-blue",
      underlineColor: "klein-blue",
      logoColor: "klein-blue",
    };

    const COLOR_THEME_SECONDARY = {
      color: "baby-blue",
      underlineColor: "baby-blue",
      logoColor: "white",
    };

    return theme === "primary" ? COLOR_THEME_PRIMARY : COLOR_THEME_SECONDARY;
  };

  const { color, underlineColor, logoColor } = colors();
  const [open, openMenu] = useState(false);

  const renderBrand = () => {
    return (
      <div styleName="brand">
        <Link to="/" label="Aurora's homepage">
          <Logo color={logoColor} />
        </Link>
      </div>
    );
  };

  const renderPageLink = (pageName, mobile) => {
    const url = pageName === "home" ? `/` : `/${pageName}`;

    return (
      <Link
        to={url}
        underlineColor={underlineColor}
        isActive={currentPage === pageName}
        hover
        label={`Aurora's ${pageName}`}
      >
        <Typography variant="small-body" color={mobile ? "white" : color}>
          {capitalize(pageName)}
        </Typography>
      </Link>
    );
  };

  const handleMenu = () => {
    return open ? openMenu(false) : openMenu(true);
  };

  return (
    <div styleName="root">
      <Section verticalSpacing={false}>
        <header styleName="container-desktop-and-tablet">
          <nav
            styleName="navigation-left"
            role="navigation"
            aria-expanded="false"
            aria-label="Navigation Menu"
          >
            <div styleName="content">{renderPageLink("careers")}</div>
          </nav>
          {renderBrand()}
          <nav
            styleName="navigation-right"
            role="navigation"
            aria-expanded="false"
            aria-label="Navigation Menu"
          >
            <div styleName="content">
              {renderPageLink("company")}
              {renderPageLink("blog")}
            </div>
          </nav>
        </header>
        <div
          styleName="container-mobile"
          style={open ? { height: "100vh" } : null}
        >
          <header>
            {renderBrand()}
            <button type="button" onClick={handleMenu}>
              <Typography variant="small-body" color={color}>
                {open ? "Close" : "Menu"}
              </Typography>
            </button>
          </header>
          {open ? (
            <nav
              role="navigation"
              aria-expanded="false"
              aria-label="Navigation Menu"
            >
              {renderPageLink("careers", true)}
              {renderPageLink("company", true)}
              {renderPageLink("blog", true)}
            </nav>
          ) : null}
        </div>
      </Section>
    </div>
  );
};

Navbar.propTypes = {
  currentPage: PropTypes.oneOf(["home", "company", "blog", "careers"]),
  theme: PropTypes.oneOf(["primary", "secondary"]),
};

Navbar.defaultProps = {
  currentPage: "home",
  theme: "primary",
};

export default Navbar;
