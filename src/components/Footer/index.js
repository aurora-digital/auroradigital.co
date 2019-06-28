import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import Link from "root/components/Link";
import Logo from "root/components/Logo";
import Wave from "root/assets/images/footer-wave.inline.svg";

import "./index.css";

const Arrow = () => (
  <svg
    height="1em"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="8.74228e-08"
      y1="7"
      x2="12"
      y2="7"
      stroke="#002FA7"
      strokeWidth="2"
    />
    <path d="M7 1L13 7L7 13" stroke="#002FA7" strokeWidth="2" />
  </svg>
);

const renderAddress = (name, address) => (
  <address styleName="titled-links">
    <Typography variant="small-body" color="oxford-blue" weight="bold">
      {name}
    </Typography>
    <a
      styleName="address-link"
      rel="noopener noreferrer"
      target="_blank"
      href={address}
      aria-label={`Directions for ${name}, office`}
    >
      <Typography variant="small-body" color="klein-blue">
        Directions
      </Typography>
      <Arrow />
    </a>
  </address>
);

const SOCIAL_LINKS = [
  {
    name: "Md",
    ariaLabel: "Medium",
    link: "https://medium.com/@auroradigitalhealth",
  },
  {
    name: "Git",
    ariaLabel: "Github",
    link: "https://github.com/aurora-digital",
  },
  {
    name: "In",
    ariaLabel: "LinkedIn",
    link: "https://linkedin.com/company/auroradigitalhealth",
  },

  {
    name: "Fb",
    ariaLabel: "Facebook",
    link: "https://www.facebook.com/Aurora-Digital-Health-481479605955769/",
  },
  {
    name: "Tw",
    ariaLabel: "Twitter",
    link: "https://twitter.com/AuroraDigitalH1",
  },
  {
    name: "Ins",
    ariaLabel: "Instagram",
    link: "https://www.instagram.com/aurora_digital_health/",
  },
];

const Footer = () => (
  <Section verticalSpacing={false}>
    <div styleName="root">
      <div styleName="logo">
        <Link to="/" label="Aurora's homepage">
          <Logo color="klein-blue" />
        </Link>
      </div>

      <div styleName="addresses">
        {renderAddress("Braga, Portugal", "https://goo.gl/maps/ddvtn1Ez8N72")}
        {renderAddress("Boston, USA", "https://goo.gl/maps/iapQCSPFSrZaJ5qn9")}
      </div>

      <div styleName="titled-links">
        <Typography variant="small-body" color="oxford-blue" weight="bold">
          Follow Us
        </Typography>

        <div styleName="social-links">
          {SOCIAL_LINKS.map(({ name, ariaLabel, link }) => (
            <a
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              key={name}
              aria-label={`Aurora's, ${ariaLabel}`}
            >
              <Typography variant="small-body" color="klein-blue">
                {name}
              </Typography>
            </a>
          ))}
        </div>
      </div>
      <div styleName="wave">
        <Wave />
      </div>
    </div>
  </Section>
);

export default Footer;
