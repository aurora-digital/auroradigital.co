import React, { useRef } from "react";
import PropTypes from "prop-types";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Helmet from "react-helmet";
import { motion } from "framer-motion";

import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";
import Footer from "root/components/Footer";
import ParallaxEffect from "root/components/ParallaxEffect";
import Comments from "root/components/Comments";
import ShareButtons from "root/components/ShareButtons";
import useScroll from "root/hooks/useScroll";
import updateDimensions from "root/hooks/useWindowDimensions";

import "./index.css";

const breakpointDesktop = 1268;
const navbarHeight = 133;
const bannerHeight = 352;

function BlogPost({ pageContext }) {
  const { frontmatter, body } = pageContext.blogPost;
  const author = frontmatter.author.childAuthorsJson;
  const scrollPos = useScroll();
  const articleRef = useRef();
  const dimensions = updateDimensions();

  const getAnimationConfig = () => {
    const maxScroll = articleRef.current ? articleRef.current.offsetHeight : 0;

    let animate =
      scrollPos > navbarHeight + bannerHeight * 0.5 ? "centered" : "initial";

    if (maxScroll > 0 && scrollPos >= maxScroll) {
      animate = "final";
    }

    return {
      animation: animate,
      variants: {
        initial: {
          position: "fixed",
          display: "flex",
          alignItems: "center",
          top: "-30px",
          height: `${window.innerHeight}px`,
          opacity: 0,
          transition: { duration: 0.8 },
        },
        centered: {
          height: `${window.innerHeight}px`,
          transition: { duration: 0.8 },
          opacity: 1,
          top: 0,
        },
        final: {
          top: "30px",
          opacity: 0,
          transition: {
            duration: 0.8,
          },
        },
      },
    };
  };

  const renderMobileShareButtons = () => {
    if (typeof window === "undefined") {
      return null;
    }

    return (
      <div styleName="mobile-share">
        <Typography color="oxford-blue" weight="bold">
          Share
        </Typography>
        <ShareButtons url={window.location.toString()} />
      </div>
    );
  };

  const renderAnimatedShareButtons = () => {
    if (typeof window === "undefined") {
      return null;
    }

    const { variants, animation } = getAnimationConfig();

    return (
      <motion.div
        key="share"
        initial="initial"
        animate={animation}
        variants={variants}
        styleName="share"
      >
        <ShareButtons url={window.location.toString()} />
      </motion.div>
    );
  };

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Helmet>
        <meta name="author" property="og:author" content={author.name} />
        <meta
          name="description"
          property="og:description"
          content={frontmatter.description}
        />
        <meta
          name="image"
          property="og:image"
          content={`http://auroradigital.co${frontmatter.featuredImage.image.fluid.src}`}
        />
        <meta
          name="image"
          property="og:image:secure_url"
          content={`https://auroradigital.co${frontmatter.featuredImage.image.fluid.src}`}
        />
        <meta name="title" property="og:title" content={frontmatter.title} />
        <meta name="type" property="og:type" content="article" />
        <meta
          name="url"
          property="og:url"
          content={`https://auroradigital.co${frontmatter.path}`}
        />
        <meta
          name="twitter:card"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:creator"
          property="twitter:creator"
          content={author.twitter}
        />
        <meta
          name="twitter:description"
          property="twitter:description"
          content={frontmatter.description}
        />
        <meta
          name="twitter:image"
          property="twitter:image"
          content={`https://auroradigital.co${frontmatter.featuredImage.image.fluid.src}`}
        />
        <meta
          name="twitter:image:alt"
          property="twitter:image:alt"
          content={`${frontmatter.title} preview`}
        />
        <meta
          name="twitter:site"
          property="twitter:site"
          content="@AuroraDigitalH1"
        />
        <meta
          name="twitter:title"
          property="twitter:title"
          content={frontmatter.title}
        />
        <meta
          name="twitter:url"
          property="twitter:url"
          content={`https://auroradigital.co${frontmatter.path}`}
        />
      </Helmet>

      <Navbar theme="primary" />

      <div styleName="banner">
        <ParallaxEffect
          image={frontmatter.featuredImage.image.fluid}
          parallaxAmount={0.1}
        />
      </div>

      <article styleName="root">
        <div styleName="author">
          <Typography variant="small-body" color="oxford-blue">
            {author.name} | {frontmatter.date}
          </Typography>
        </div>

        <Typography weight="medium" color="oxford-blue">
          {frontmatter.title}
        </Typography>

        <div styleName="content" ref={articleRef}>
          <MDXRenderer>{body}</MDXRenderer>
          {dimensions.width > breakpointDesktop
            ? renderAnimatedShareButtons()
            : renderMobileShareButtons()}
        </div>

        <Comments path={frontmatter.path} title={frontmatter.title} />
      </article>

      <Footer />
    </Layout>
  );
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    blogPost: PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        featuredImage: PropTypes.object.isRequired,
        author: PropTypes.shape({
          childAuthorsJson: PropTypes.shape({
            name: PropTypes.string.isRequired,
            twitter: PropTypes.string,
            twitterid: PropTypes.string,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      body: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default BlogPost;
