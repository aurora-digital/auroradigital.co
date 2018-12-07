import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "gatsby-link";
import Modal from "react-modal";
import capitalize from "lodash/capitalize";
import Section from "root/components/Section";
import Button from "root/components/Button";
import Typography from "root/components/Typography";
import Logo from "root/components/Logo";

import "./index.css";

Modal.setAppElement(`#___gatsby`);

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

  state = {
    menuOpen: false,
  };

  componentDidUpdate() {
    const { menuOpen } = this.state;

    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }

  get colors() {
    const { menuOpen } = this.state;
    const { color, underlineColor, logoColor } = this.props;
    const finalColor = menuOpen ? "dark-blue" : color;
    const finalUnderlineColor = menuOpen ? "white" : underlineColor;
    const finalLogoColor = menuOpen ? "light-blue" : logoColor;

    return {
      color: finalColor,
      underlineColor: finalUnderlineColor,
      logoColor: finalLogoColor,
    };
  }

  handleMenuToggle = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  };

  renderBrand = () => {
    const { menuOpen } = this.state;
    const { logoColor } = this.props;
    const finalLogoColor = menuOpen ? "light-blue" : logoColor;

    return (
      <Link to="/">
        <Logo color={finalLogoColor} />
      </Link>
    );
  };

  renderPageLink = pageName => {
    const { currentPage } = this.props;
    const { color, underlineColor } = this.colors;
    const { menuOpen } = this.state;
    const url = pageName === "home" ? `/` : `/${pageName}`;

    return (
      <Link to={url} styleName="link">
        <Typography
          variant="body"
          color={color}
          weight={currentPage === pageName ? "bold" : "regular"}
          underline={currentPage === pageName && menuOpen}
          underlineColor={underlineColor}
        >
          {capitalize(pageName)}
        </Typography>
      </Link>
    );
  };

  renderInner() {
    const { color } = this.colors;
    const { menuOpen } = this.state;
    const rootStyles = classNames("root", {
      isOpen: menuOpen,
    });
    const navigationStyles = classNames("navigation", {
      isClosed: !menuOpen,
    });

    return (
      <header styleName={rootStyles}>
        {this.renderBrand()}

        <button
          styleName="menu-toggle"
          aria-expanded="false"
          aria-controls="main-menu"
          aria-label="Toggle navbar"
          onClick={this.handleMenuToggle}
        >
          {this.state.menuOpen ? (
            <div styleName="close-icon" />
          ) : (
            <Typography weight="bold" color={color}>
              Menu
            </Typography>
          )}
        </button>

        <nav
          styleName={navigationStyles}
          role="navigation"
          aria-expanded="false"
          aria-label="Navigation Menu"
        >
          {this.renderPageLink("home")}

          {this.renderPageLink("services")}

          {this.renderPageLink("company")}

          <div styleName="contact-us">
            <Button>
              <Typography weight="bold">Contact us</Typography>
            </Button>
          </div>
        </nav>
      </header>
    );
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <>
        {menuOpen ? <div style={{ height: "44px" }} /> : null}
        <Modal styleName="modal" isOpen={menuOpen}>
          {this.renderInner()}
        </Modal>
        {!menuOpen ? (
          <Section verticalSpacing={false}>{this.renderInner()}</Section>
        ) : null}
      </>
    );
  }
}
