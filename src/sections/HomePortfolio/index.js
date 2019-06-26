import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image/withIEPolyfill";
import { ParallaxBanner } from "react-scroll-parallax";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import FadeUpOnScroll from "root/components/FadeUpOnScroll";
import LoadPlaceholder from "root/components/LoadPlaceholder";
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
    <div>
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
    </div>
  );

  const renderParallaxImage = ({ image, parallaxAmount }) => (
    <ParallaxBanner
      styleName="parallax"
      layers={[
        {
          children: (
            <Img fadeIn={false} fluid={image} style={{ height: "100%" }} />
          ),
          amount: parallaxAmount,
        },
      ]}
      style={{
        height: "100%",
      }}
    />
  );

  return (
    <Section>
      <div styleName="root">
        <FadeUpOnScroll>
          <Typography weight="medium" variant="h3" color="oxford-blue">
            Portfolio
          </Typography>
        </FadeUpOnScroll>

        <div styleName="project sioslife">
          <div styleName="title-image">
            <div styleName="title">
              <FadeUpOnScroll>
                <Typography color="oxford-blue" weight="medium">
                  siosLIFE
                </Typography>
              </FadeUpOnScroll>
              <FadeUpOnScroll>
                <Typography color="oxford-blue">For younger spirits</Typography>
              </FadeUpOnScroll>
            </div>

            <div styleName="right-image-wrapper">
              {renderLink("siosLife")}

              <div styleName="right-image">
                {renderParallaxImage({
                  image: data.sioslife2.image.fluid,
                  parallaxAmount: 0.2,
                })}
              </div>
            </div>
          </div>

          <FadeUpOnScroll>
            <div styleName="left-image">
              <Img fluid={data.sioslife1.image.fluid} objectFit="cover" />
            </div>
          </FadeUpOnScroll>
        </div>

        <div styleName="project oncostats">
          <div styleName="title-image">
            <div styleName="title">
              <FadeUpOnScroll>
                <Typography color="oxford-blue" weight="medium">
                  Oncostats
                </Typography>
              </FadeUpOnScroll>
              <FadeUpOnScroll>
                <Typography color="oxford-blue">
                  Defeating a common enemy, cancer
                </Typography>
              </FadeUpOnScroll>
            </div>

            <FadeUpOnScroll styleName="right-image-wrapper">
              {renderLink("oncostats")}

              <div styleName="right-image">
                <Img fluid={data.oncostats2.image.fluid} objectFit="cover" />
              </div>
            </FadeUpOnScroll>
          </div>

          <FadeUpOnScroll>
            <div styleName="left-image">
              <Img fluid={data.oncostats1.image.fluid} objectFit="cover" />
            </div>
          </FadeUpOnScroll>
        </div>

        <div styleName="project lyftonomie">
          <div styleName="title-image">
            <div styleName="title">
              <FadeUpOnScroll>
                <Typography color="oxford-blue" weight="medium">
                  Lyftonomie
                </Typography>
              </FadeUpOnScroll>
              <FadeUpOnScroll>
                <Typography color="oxford-blue">
                  Vitamins. Done right
                </Typography>
              </FadeUpOnScroll>
            </div>

            <FadeUpOnScroll styleName="right-image-wrapper">
              {renderLink("lyftonomie")}
              <div styleName="right-image">
                <Img fluid={data.lyftonomie2.image.fluid} objectFit="cover" />
              </div>
            </FadeUpOnScroll>
          </div>
          <FadeUpOnScroll>
            <div styleName="left-image">
              <Img fluid={data.lyftonomie1.image.fluid} objectFit="cover" />
            </div>
          </FadeUpOnScroll>
        </div>
      </div>
    </Section>
  );
}

HomePortfolio.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default withQuery(HomePortfolio);
