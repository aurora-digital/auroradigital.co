import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
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
  { name: "Md", ariaLabel: "Medium", link: "#" },
  { name: "Git", ariaLabel: "Github", link: "#" },
  { name: "In", ariaLabel: "LinkedIn", link: "#" },
  { name: "Fb", ariaLabel: "Facebook", link: "#" },
  { name: "Tw", ariaLabel: "Twitter", link: "#" },
  { name: "Ins", ariaLabel: "Instagram", link: "#" },
];

const Footer = () => (
  <Section verticalSpacing={false}>
    <div styleName="root">
      <div styleName="logo">
        <Logo color="klein-blue" />
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
            <a href={link} key={name} aria-label={ariaLabel}>
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
