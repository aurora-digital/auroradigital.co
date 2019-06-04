import React from "react";

import Section from "root/components/Section";
import Typography from "root/components/Typography";

import "./index.css";

const CompanyValues = () => (
  <div styleName="root">
    <div styleName="wave-tablet-above">
      <svg
        viewBox="0 0 1440 1060"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M445.23 914C309.271 837.863 150.78 796.083 0 796.916V0.00983926C190.643 -0.821413 388.967 51.0393 560.87 147.305C832.104 299.198 1170.64 301.953 1440.57 147.765L1558 913.495C1215.92 1108.89 788.956 1106.49 445.23 914Z"
          fill="#001F54"
        />
      </svg>
    </div>

    <div styleName="wave-mobile">
      <svg viewBox="0 0 320 781" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M99.1622 748C68.8813 730.858 33.5818 721.452 0 721.639L0 0.00221525C42.4602 -0.184936 86.6313 11.4912 124.918 33.1649C185.327 67.3625 260.726 67.9829 320.846 33.2684L347 747.886C270.811 791.879 175.717 791.337 99.1622 748Z"
          fill="#001F54"
        />
      </svg>
    </div>

    <div styleName="values">
      <Section verticalSpacing={false}>
        <div styleName="title">
          <Typography variant="h3">Honesty Transparency Commitment</Typography>
        </div>
        <div styleName="copy">
          <div>
            <Typography>
              Our team comes from vastly different backgrounds that work
              together to create amazing technology.
            </Typography>
          </div>
          <div>
            <Typography>
              From market research and web design to bioinformatics and IoT, we
              are ready to help you and your company create fantastic digital
              experiences.
            </Typography>
          </div>
        </div>
      </Section>
    </div>
  </div>
);

export default CompanyValues;
