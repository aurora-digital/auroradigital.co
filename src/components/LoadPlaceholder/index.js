import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { renderToStaticMarkup } from "react-dom/server";
import { useInView } from "react-intersection-observer";
import useDetectJavascript from "root/hooks/useDetectJavascript";

import "./index.css";

export default function LoadPlaceholder({ delay, children }) {
  const [loaded, setLoaded] = useState("");
  const [visible, setVisible] = useState(false);
  const [ref, inView] = useInView();

  useEffect(
    () => {
      if (inView) setVisible(true);
    },
    [inView],
  );

  const onLoad = () => setLoaded(true);

  const hasJavascript = useDetectJavascript();
  const loadedStyle = loaded ? "loaded" : "";

  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: renderToStaticMarkup(children(onLoad)).replace(
            /noscript/g,
            "div",
          ),
        }}
      />
      {hasJavascript ? (
        <div ref={ref} styleName="root">
          <div
            style={{ transitionDelay: `${delay}s` }}
            styleName={`placeholder  ${visible ? loadedStyle : ""}`}
          />
          {children(onLoad)}
        </div>
      ) : null}
    </>
  );
}

LoadPlaceholder.propTypes = {
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
};

LoadPlaceholder.defaultProps = {
  delay: 1,
};
