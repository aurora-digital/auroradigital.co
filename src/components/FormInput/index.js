import React from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";

import "./index.css";

function FormInput({ title, id, multiline }) {
  const renderInput = () => {
    if (multiline) {
      return <textarea name={id} id={id} rows="5" />;
    }

    return <input type="text" name={id} id={id} />;
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
};

FormInput.defaultProps = {
  multiline: false,
};

export default FormInput;
