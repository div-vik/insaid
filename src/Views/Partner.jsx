import React, { useRef, useState } from "react";
import email from "@emailjs/browser";
import { Typography } from "antd";

import ".//Partner.css";

const Partner = () => {
  const { Text } = Typography;

  const form = useRef();
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    email
      .sendForm(
        "service_cefvc4s",
        "template_yesxwtk",
        form.current,
        "mwxlUUuj8evA8VhOR"
      )
      .then(
        (result) => {
          showAlert(true, "Message has been sent successfully", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="become-a-partner" id="business">
      <div className="become-a-partner-left-part">
        <div className="become-a-partner-heading">
          <p>Contact Us</p>
        </div>
        <div className="become-a-partner-content">
          <p>
            Want to contact with us?
            <br />
            Fill the form. We’d love to hear from you!
          </p>
        </div>
      </div>
      <div className="blank-div"></div>
      <div className="become-a-partner-form">
        <p className="become-a-partner-form-title">Send us a Message</p>
        <form ref={form} onSubmit={sendEmail}>
          <label className="label-name">Full Name</label>
          <input
            className="input-name"
            type="text"
            name="name"
            autoComplete="off"
          />
          <label className="label-email">e-mail</label>
          <input
            className="input-email"
            type="text"
            name="email"
            autoComplete="off"
          />
          <label className="label-number">Phone Number</label>
          <input
            className="input-number"
            type="tel"
            name="phone_number"
            autoComplete="off"
          />
          <label className="label-message">Queries</label>
          <textarea className="textarea-message" name="message" />
          {alert.show && <Text type={alert.type}>{alert.msg}</Text>}
          <input className="input-send" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Partner;
