import React from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";

import "./index.css";

function FormInput({ title, id, multiline, type }) {
  const renderInput = () => {
    if (multiline) {
      return <textarea name={id} id={id} rows="5" data-name={title} />;
    }

    return <input type={type} name={id} id={id} data-name={title} />;
  };

  return (
    <label htmlFor={id} styleName="root">
      <Typography variant="small-body" color="oxford-blue">
        {title}
      </Typography>
      {renderInput()}
    </label>
  );
}

FormInput.propTypes = {
  multiline: PropTypes.bool,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["email", "text"]),
};

FormInput.defaultProps = {
  multiline: false,
  type: "text",
};

export default FormInput;
