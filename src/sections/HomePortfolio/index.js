import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image/withIEPolyfill";

import Section from "root/components/Section";
import Typography from "root/components/Typography";

import withQuery from "./withQuery";

import "./index.css";
import WavyLink from "../../components/WavyLink";

function HomePortfolio({ data }) {
  const renderLink = url => (
    <>
      <div styleName="link">
        <WavyLink url={url}>
          <Typography variant="small-body" weight="bold" color="klein-blue">
            View Project
          </Typography>
        </WavyLink>
      </div>

      <a styleName="link-mobile" href={url}>
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
              {renderLink()}

              <div styleName="right-image">
                <Img fluid={data.sioslife2.image.fluid} objectFit="cover" />
              </div>
            </div>
          </div>

          <div styleName="left-image">
            <Img fluid={data.sioslife1.image.fluid} objectFit="cover" />
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
              {renderLink()}

              <div styleName="right-image">
                <Img fluid={data.oncostats2.image.fluid} objectFit="cover" />
              </div>
            </div>
          </div>

          <div styleName="left-image">
            <Img fluid={data.oncostats1.image.fluid} objectFit="cover" />
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
              {renderLink()}

              <div styleName="right-image">
                <Img fluid={data.lyftonomie2.image.fluid} objectFit="cover" />
              </div>
            </div>
          </div>

          <div styleName="left-image">
            <Img fluid={data.lyftonomie1.image.fluid} objectFit="cover" />
          </div>
        </div>
      </div>
    </Section>
  );
}

HomePortfolio.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default withQuery(HomePortfolio);
