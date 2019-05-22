import React from "react";
import capitalize from "lodash/capitalize";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import Link from "root/components/Link";
import Button from "root/components/Button";
import Logo from "root/components/Logo";
import Contact from "root/components/Contact";
import socialLinks from "./socialLinks";

import "./index.css";

const renderLink = link => {
  const linkUrl = link === "home" ? "/" : `/${link}`;

  return (
    <div styleName="link">
      <Link to={linkUrl} underlineColor="oxford-blue" hover>
        <Typography color="oxford-blue">{capitalize(link)}</Typography>
      </Link>
    </div>
  );
};

const Footer = () => (
  <Section verticalSpacing={false}>
    <div styleName="root">
      <div styleName="sitemap">
        <div styleName="lets-work">
          <Typography variant="h3" color="oxford-blue">
            Let’s work together
          </Typography>
          <div styleName="lets-work-button">
            <Contact>
              <Button>
                <Typography weight="bold">Tell us everything</Typography>
              </Button>
            </Contact>
          </div>
        </div>

        <div styleName="links">
          <div styleName="links-group">
            {renderLink("home")}
            {renderLink("services")}
            {renderLink("company")}
          </div>

          <div styleName="links-group">
            <div styleName="link">
              <Contact underlineColor="oxford-blue" hover>
                <Typography color="oxford-blue">
                  {capitalize("contact")}
                </Typography>
              </Contact>
            </div>
          </div>
        </div>
      </div>

      <div styleName="contacts">
        <div styleName="logo">
          <Logo color="klein-blue" />
        </div>

        <div styleName="address first ">
          <Typography weight="bold" color="klein-blue">
            Braga, Portugal
          </Typography>

          <div styleName="address-copy">
            <Typography color="klein-blue">
              Polo de Negócios de Braga, Avenida D. João II 404, 4º andar, Sala
              45 4715-275 Braga
            </Typography>
          </div>
        </div>

        <div styleName="address second">
          <Typography weight="bold" color="klein-blue">
            Boston, USA
          </Typography>

          <div styleName="address-copy">
            <Typography color="klein-blue">
              CIC Cambridge, 1 Broadway, Cambridge, MA 02142, USA
            </Typography>
          </div>
        </div>

        <div styleName="social-icons">
          {socialLinks.map(socialIcon => (
            <a
              key={socialIcon.name}
              styleName="social-icon"
              href={socialIcon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialIcon.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default Footer;
