import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image/withIEPolyfill";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import ParallaxEffect from "root/components/ParallaxEffect";
import withQuery from "./withQuery";

import "./index.css";
import WavyLink from "../../components/WavyLink";

function HomePortfolio({ data }) {
  const projectUrls = {
    siosLife: "https://sioslife.com/",
    oncostats: "https://oncostats.io/",
    lyftonomie: "https://lyftonomie.fr/",
  };

  const renderLink = project => (
    <>
      <div styleName="link">
        <WavyLink
          url={projectUrls[project]}
          label={`View Project, ${project} `}
        >
          <span role="img" aria-label="finger-pointing-right">
            👉
          </span>
          <Typography variant="small-body" weight="bold" color="klein-blue">
            View Project
          </Typography>
        </WavyLink>
      </div>

      <a styleName="link-mobile" href={projectUrls[project]}>
        <span role="img" aria-label="finger-pointing-right">
          👉
        </span>
        <Typography variant="small-body" weight="bold" color="klein-blue">
          View Project
        </Typography>
      </a>
    </>
  );

  return (
    <Section>
      <div styleName="root">
        <Typography weight="medium" variant="h3" color="oxford-blue">
          Portfolio
        </Typography>

        <div styleName="project sioslife">
          <div styleName="title-image">
            <div styleName="title">
              <Typography color="oxford-blue" weight="medium">
                siosLIFE
              </Typography>

              <Typography color="oxford-blue">For younger spirits</Typography>
            </div>

            <div styleName="right-image-wrapper">
              {renderLink("siosLife")}

              <div styleName="right-image">
                <ParallaxEffect image={data.sioslife2.image.fluid} />
              </div>
            </div>
          </div>

          <div styleName="left-image">
            <ParallaxEffect image={data.sioslife1.image.fluid} />
          </div>
        </div>

        <div styleName="project oncostats">
          <div styleName="title-image">
            <div styleName="title">
              <Typography color="oxford-blue" weight="medium">
                Oncostats
              </Typography>

              <Typography color="oxford-blue">
                Defeating a common enemy, cancer
              </Typography>
            </div>

            <div styleName="right-image-wrapper">
              {renderLink("oncostats")}

              <div styleName="right-image">
                <ParallaxEffect image={data.oncostats2.image.fluid} />
              </div>
            </div>
          </div>

          <div styleName="left-image">
            <ParallaxEffect image={data.oncostats1.image.fluid} />
          </div>
        </div>

        <div styleName="project lyftonomie">
          <div styleName="title-image">
            <div styleName="title">
              <Typography color="oxford-blue" weight="medium">
                Lyftonomie
              </Typography>

              <Typography color="oxford-blue">Vitamins. Done right</Typography>
            </div>

            <div styleName="right-image-wrapper">
              {renderLink("lyftonomie")}
              <div styleName="right-image">
                <ParallaxEffect image={data.lyftonomie2.image.fluid} />
              </div>
            </div>
          </div>

          <div styleName="left-image">
            <Img
              fadeIn={false}
              fluid={data.lyftonomie1.image.fluid}
              objectFit="cover"
            />
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
