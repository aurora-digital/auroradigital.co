import React, { useRef, useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "root/hooks/useWindowDimensions";
import Typography from "root/components/Typography";

import "./index.css";

const breakpointMobile = 768;

function BackgroundVideoText(props) {
  const { label, poster, video } = props;

  const [videoSize, setVideoSize] = useState(null);
  const { width } = useWindowDimensions();
  const textRef = useRef(null);

  useLayoutEffect(() => {
    setVideoSize({
      width: `${textRef.current.clientWidth}px`,
      height: `${textRef.current.clientHeight}px`,
    });
  }, []);

  if (width >= breakpointMobile) {
    return (
      <div styleName="root" style={videoSize}>
        <div styleName="title" ref={textRef}>
          <Typography weight="bold" variant="h1" fontFamily="meta-serif">
            {label}
          </Typography>
        </div>
        <video
          src={video}
          poster={poster}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          type="video/mp4"
        />
      </div>
    );
  }

  return (
    <div styleName="root">
      <div
        styleName="title"
        style={{
          backgroundImage: `url(${poster})`,
        }}
        ref={textRef}
      >
        <Typography weight="bold" variant="h1" fontFamily="meta-serif">
          {label}
        </Typography>
      </div>
    </div>
  );
}

BackgroundVideoText.propTypes = {
  label: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

BackgroundVideoText.defaultProps = {
  poster: "",
};

export default BackgroundVideoText;
