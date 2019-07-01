import React from "react";
import PropTypes from "prop-types";
import { DiscussionEmbed } from "disqus-react";
import useDetectJavascript from "root/hooks/useDetectJavascript";

function Comments({ path, title }) {
  const hasJavascript = useDetectJavascript();

  if (!hasJavascript) return null;

  const disqusShortname = "auroradigital";
  const disqusConfig = {
    url:
      process.env.NODE_ENV === "development"
        ? `http://${disqusShortname}.disqus.com/${path}`
        : window.location.toString(),
    identifier: path,
    title,
  };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
}

Comments.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Comments;
