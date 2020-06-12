import React from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import ParallaxEffect from "root/components/ParallaxEffect";
import WavyLink from "root/components/WavyLink";
import withQuery from "./withQuery";

import "./index.css";

function HomePortfolio({ data }) {
  const projectUrls = {
    siosLife: "https://sioslife.com/",
    oncostats: "https://oncostats.io/",
    lyftonomie: "https://lyftonomie.fr/",
  };

  const renderLink = (project, style) => (
    <>
      <div styleName={style}>
        <WavyLink
          url={projectUrls[project]}
          label={`View Project, ${project} `}
        >
          <Typography variant="small-body" weight="bold" color="klein-blue">
            View Project
          </Typography>
        </WavyLink>
      </div>
    </>
  );

  return (
    <Section>
      <div styleName="root">
        <Typography weight="medium" variant="h3" color="oxford-blue">
          Portfolio
        </Typography>

        <div styleName="project-row">
          <div styleName="image-row">
            <ParallaxEffect
              image={data.lyftonomie2.image.fluid}
              alt="another lyftonomie pill bottle"
            />
          </div>

          <div styleName="content-lyftonomie">
            <div styleName="title">
              <Typography color="oxford-blue" weight="medium">
                Lyftonomie
              </Typography>

              <div styleName="title-description">
                <Typography variant="small-body" color="oxford-blue">
                  Content Strategy
                  <br />
                  UX/UI Design
                </Typography>
              </div>
            </div>
          </div>

          <div styleName="link-row">
            {renderLink("lyftonomie", "wave-link-row")}
          </div>
        </div>

        <div styleName="project-grid">
          <div styleName="project-column-right">
            <div styleName="image-right">
              <ParallaxEffect
                image={data.oncostats2.image.fluid}
                alt="a doctor using oncostats"
              />
            </div>

            <div styleName="content-oncostats">
              <div styleName="title">
                <Typography color="oxford-blue" weight="medium">
                  Oncostats
                </Typography>

                <div styleName="title-description">
                  <Typography variant="small-body" color="oxford-blue">
                    Product Design
                    <br />
                    Technical Strategy
                    <br />
                    Full Stack
                    <br />
                    Development
                    <br />
                    Product Management
                    <br />
                    DevOps
                  </Typography>
                </div>
              </div>
            </div>

            <div styleName="link-right">
              {renderLink("lyftonomie", "wave-link-right")}
            </div>
          </div>

          <div styleName="project-column-left">
            <div styleName="image-left">
              <ParallaxEffect
                image={data.sioslife2.image.fluid}
                alt="elderly person using sioslife virtual reality software"
              />
            </div>

            <div styleName="content-sioslife">
              <div styleName="title">
                <Typography color="oxford-blue" weight="medium">
                  Sioslife
                </Typography>

                <div styleName="title-description">
                  <Typography variant="small-body" color="oxford-blue">
                    Content Strategy
                    <br />
                    UX/UI Design
                  </Typography>
                </div>
              </div>
            </div>

            <div styleName="link-left">
              {renderLink("siosLife", "wave-link-right")}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

HomePortfolio.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withQuery(HomePortfolio);
