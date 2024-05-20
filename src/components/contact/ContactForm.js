import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjvnwbda");

  return (
    <section className="contact-form-container" id="contact">
      {state.succeeded ? (
        <div className="success-message">
          <p>Thank you for reaching out! We appreciate your inquiry and will get back to you shortly.</p>
        </div>
      ) : (
        <>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="input-field"
            />
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="input-field"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="input-field"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="submit-button">
              Submit
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default ContactForm;
