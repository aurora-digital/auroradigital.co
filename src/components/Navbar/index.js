import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Modal from "react-modal";
import capitalize from "lodash/capitalize";
import Section from "root/components/Section";
import Button from "root/components/Button";
import Typography from "root/components/Typography";
import Logo from "root/components/Logo";
import Link from "root/components/Link";
import Contact from "root/components/Contact";

import "./index.css";

Modal.setAppElement(`#___gatsby`);

const COLOR_THEME_PRIMARY = {
  color: "dark-blue",
  underlineColor: "light-blue",
  logoColor: "light-blue",
};

const COLOR_THEME_SECONDARY = {
  color: "white",
  underlineColor: "white",
  logoColor: "white",
};

export default class Navbar extends Component {
  static propTypes = {
    currentPage: PropTypes.oneOf(["home", "services", "company"]).isRequired,
    theme: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  };

  state = {
    menuOpen: false,
    showFixedNavbar: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, {
      capture: true,
      passive: true,
    });
  }

  componentDidUpdate() {
    const { menuOpen } = this.state;

    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = null;
  }

  componentWillUnmount() {
    document.body.style.overflow = null;

    window.removeEventListener("scroll", this.handleScroll, {
      capture: true,
      passive: true,
    });
  }

  get colors() {
    const { theme } = this.props;
    const { showFixedNavbar, menuOpen } = this.state;

    if (showFixedNavbar || menuOpen) {
      return COLOR_THEME_PRIMARY;
    }

    return theme === "primary" ? COLOR_THEME_PRIMARY : COLOR_THEME_SECONDARY;
  }

  handleScroll = () => {
    const newScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (newScroll < 200) {
      this.setState({ showFixedNavbar: false });
    } else {
      this.setState({ showFixedNavbar: true });
    }
  };

  handleMenuToggle = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  };

  renderBrand = () => {
    const { menuOpen } = this.state;
    const { logoColor } = this.colors;
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
    const url = pageName === "home" ? `/` : `/${pageName}`;

    return (
      <Link
        to={url}
        underlineColor={underlineColor}
        isActive={currentPage === pageName}
        hover
      >
        <Typography
          variant="body"
          color={color}
          weight={currentPage === pageName ? "bold" : "regular"}
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
          type="button"
        >
          {menuOpen ? (
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
            <Contact>
              <Button>
                <Typography weight="bold">Contact us</Typography>
              </Button>
            </Contact>
          </div>
        </nav>
      </header>
    );
  }

  renderFixedNavbar() {
    const { menuOpen, showFixedNavbar } = this.state;
    const fixedStyles = classNames("fixed", {
      isOpen: menuOpen,
      hidden: !showFixedNavbar,
    });

    return (
      <div styleName={fixedStyles}>
        <Section verticalSpacing={false}>{this.renderInner()}</Section>
      </div>
    );
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <>
        <Modal
          styleName="modal-fixed"
          overlayClassName="FixedNavbarModal__Overlay"
          isOpen={!menuOpen}
        >
          {this.renderFixedNavbar()}
        </Modal>
        <Modal styleName="modal-menu" isOpen={menuOpen}>
          {this.renderInner()}
        </Modal>
        {menuOpen ? (
          <div styleName="placeholder" />
        ) : (
          <Section verticalSpacing={false}>{this.renderInner()}</Section>
        )}
      </>
    );
  }
}
