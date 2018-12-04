import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import capitalize from "lodash/capitalize";
import Section from "root/components/Section";
import Button from "root/components/Button";
import Typography from "root/components/Typography";
import brandLogo from "root/assets/images/brand.svg";

import "./index.css";

export default class Navbar extends Component {
  static propTypes = {
    currentPage: PropTypes.oneOf(["home", "services", "company"]).isRequired,
  };

  renderPageLink = pageName => {
    const { currentPage } = this.props;

    return (
      <Link to={`/${pageName}`} styleName="link">
        <Typography
          variant="body"
          color="white"
          weight={currentPage === pageName ? "bold" : "regular"}
          underline={currentPage === pageName}
        >
          {capitalize(pageName)}
        </Typography>
      </Link>
    );
  };

  render() {
    return (
      <Section verticalSpacing={false}>
        <nav styleName="root">
          <Link to="/" styleName="brand">
            <img src={brandLogo} alt="brand-logo" />
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
