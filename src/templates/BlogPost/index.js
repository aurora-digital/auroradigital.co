import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import Img from "gatsby-image/withIEPolyfill";

import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";
import Footer from "root/components/Footer";
import ParallaxEffect from "root/components/ParallaxEffect";

import "./index.css";

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      code {
        body
      }
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredImage {
          image: childImageSharp {
            fluid(maxWidth: 1024, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
              presentationHeight
            }
          }
        }
      }
    }
  }
`;

function Template({ data, pageContext }) {
  const {
    mdx: { code, frontmatter },
  } = data;
  const { author } = pageContext;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Navbar theme="primary" />

      <div styleName="banner">
        <ParallaxEffect parallaxAmount={0.1}>
          <Img
            fadeIn={false}
            style={{ height: "100%" }}
            fluid={frontmatter.featuredImage.image.fluid}
          />
        </ParallaxEffect>
      </div>

      <article styleName="root">
        <Typography weight="medium" color="oxford-blue">
          {frontmatter.title}
        </Typography>

        <div styleName="author">
          <Typography variant="small-body" color="oxford-blue">
            {author.name} | {frontmatter.date}
          </Typography>
        </div>

        <div styleName="content">
          <MDXRenderer>{code.body}</MDXRenderer>
        </div>
      </article>
      <Footer />
    </Layout>
  );
}

Template.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape(),
  }).isRequired,
  pageContext: PropTypes.shape({
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Template;
