import React, { useState, useEffect } from "react";
import Typography from "root/components/Typography";

import "./index.css";

function HeroCopyElement() {
  const [seconds, setSeconds] = useState(0);
  const [position, setPosition] = useState(0);
  const textPlaceholder = [
    { message: "For founders", title: "We materialize ideas" },
    { message: "For companies", title: "We are advisors" },
    { message: "For everyone", title: "We scale solutions" },
  ];

  function getClassName(place) {
    if (place === position) {
      return "line-klein-blue";
    }

    return "line-baby-blue";
  }

  function reset(value) {
    setSeconds(value);
    setPosition(value);
  }

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setSeconds(secs => secs + 1);
      setPosition((seconds + 1) % 3);
    }, 2500);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div styleName="copy-section">
      <div styleName="lines">
        <button
          type="button"
          aria-label="clickable info 1"
          styleName={getClassName(0)}
          style={{ "--top": "0" }}
          onClick={() => reset(0)}
        />
        <button
          type="button"
          aria-label="clickable info 2"
          styleName={getClassName(1)}
          style={{ "--top": "1" }}
          onClick={() => reset(1)}
        />
        <button
          type="button"
          aria-label="clickable info 3"
          styleName={getClassName(2)}
          style={{ "--top": "2" }}
          onClick={() => reset(2)}
        />
      </div>
      <div styleName="message">
        <Typography color="oxford-blue">
          {textPlaceholder[position].message}
        </Typography>
        <Typography color="klein-blue" weight="bold" variant="h2">
          {textPlaceholder[position].title}
        </Typography>
      </div>
    </div>
  );
}

export default HeroCopyElement;
