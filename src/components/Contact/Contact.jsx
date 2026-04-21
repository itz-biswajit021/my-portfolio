import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const [done, setDone] = useState(false);
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field, value) => {
    setFocused({ ...focused, [field]: value !== "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w1um53e",
        "template_n2pf7op",
        form.current,
        "YMJ4drPBKlcG2b4SH"
      )
      .then(
        () => {
          setDone(true);
          form.current.reset();

          setTimeout(() => {
            setDone(false);
          }, 3000);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className={`contact-form ${darkMode ? "dark" : ""}`} id="contact">

      {/* LEFT */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            Get in Touch
          </span>
          <span>Contact me</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} className="form-card">

          {/* NAME */}
          <div className="input-group">
            <i className="icon">👤</i>
            <input
              type="text"
              name="user_name"
              required
              onFocus={() => handleFocus("name")}
              onBlur={(e) => handleBlur("name", e.target.value)}
            />
            <label className={focused.name ? "active" : ""}>Name</label>
          </div>

          {/* EMAIL */}
          <div className="input-group">
            <i className="icon">📧</i>
            <input
              type="email"
              name="user_email"
              required
              onFocus={() => handleFocus("email")}
              onBlur={(e) => handleBlur("email", e.target.value)}
            />
            <label className={focused.email ? "active" : ""}>Email</label>
          </div>

          {/* MESSAGE */}
          <div className="input-group textarea-group">
            <i className="icon">💬</i>
            <textarea
              name="message"
              required
              onFocus={() => handleFocus("message")}
              onBlur={(e) => handleBlur("message", e.target.value)}
            />
            <label className={focused.message ? "active" : ""}>
              Message
            </label>
          </div>

          {/* BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="button"
            type="submit"
          >
            Send
          </motion.button>

        </form>

        {/* SUCCESS ✔ */}
        <AnimatePresence>
          {done && (
            <motion.div
              className="success-popup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              ✔ Message Sent Successfully
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Contact;