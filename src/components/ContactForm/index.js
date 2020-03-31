import React, { useState } from "react";
import Typography from "root/components/Typography";
import Button from "root/components/Button";
import classNames from "classnames";

import "./index.css";

function useForm() {
  const [formValues, setFormValues] = useState({});
  const handleChange = event => {
    event.persist();

    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return {
    handleChange,
    formValues,
  };
}

const ContactForm = () => {
  const { handleChange, formValues } = useForm();
  const [showErrors, setShowErrors] = useState(false);

  const validEmail = value => {
    return value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const onChangeName = event => {
    handleChange(event);
  };
  const onChangeEmail = event => {
    handleChange(event);
  };
  const onChangeMessage = event => {
    handleChange(event);
  };

  const renderInput = (title, id, error, onChange) => {
    const styles = classNames("input", {
      border: error,
    });

    return (
      <>
        <Typography weight="medium" variant="small-body" color="oxford-blue">
          {title}
        </Typography>
        <input
          onChange={onChange}
          type="text"
          name={id}
          id={id}
          data-name={title}
          styleName={styles}
        />
      </>
    );
  };

  const renderName = () => {
    const error = !formValues.name && showErrors;
    const errorStyles = classNames("error", {
      visible: error,
    });

    return (
      <label htmlFor="name" styleName="label">
        {renderInput("Name", "name", error, onChangeName)}
        <div styleName={errorStyles}>
          <Typography variant="xsmall-body" color="klein-blue">
            Please enter your name
          </Typography>
        </div>
      </label>
    );
  };

  const renderEmail = () => {
    const error = !validEmail(formValues.email) && showErrors;
    const errorStyles = classNames("error", {
      visible: error,
    });

    return (
      <label htmlFor="email" styleName="label">
        {renderInput("Email", "email", error, onChangeEmail)}
        <div styleName={errorStyles}>
          <Typography variant="xsmall-body" color="klein-blue">
            Please enter a valid email address
          </Typography>
        </div>
      </label>
    );
  };

  const renderMessage = () => {
    const error = !formValues.message && showErrors;
    const styles = classNames("textarea", {
      border: error,
    });
    const errorStyles = classNames("error", {
      visible: error,
    });

    return (
      <label htmlFor="message" styleName="message">
        <Typography weight="medium" variant="small-body" color="oxford-blue">
          Message
        </Typography>
        <textarea
          onChange={onChangeMessage}
          name="message"
          id="message"
          rows="5"
          data-name="Message"
          styleName={styles}
        />
        <div styleName={errorStyles}>
          <Typography variant="xsmall-body" color="klein-blue">
            Please write your message
          </Typography>
        </div>
      </label>
    );
  };

  const checkFormValidity = () => {
    return (
      validEmail(formValues.email) && formValues.message && formValues.name
    );
  };

  const handleSubmit = event => {
    const isFormValid = checkFormValidity();

    if (!isFormValid) {
      event.preventDefault();

      setShowErrors(true);

      return false;
    }

    return true;
  };

  return (
    <form
      id="contact-form"
      name="contact-form"
      data-name="Contact Form"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
      action="/form-received"
    >
      <input type="hidden" name="bot-field" />
      {renderName()}
      {renderEmail()}
      {renderMessage()}
      <div styleName="button">
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};

export default ContactForm;
