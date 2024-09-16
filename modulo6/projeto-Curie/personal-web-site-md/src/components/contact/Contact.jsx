import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import {
  BsWhatsapps,
  ContactContainer,
  ContactOption,
  ContactOptions,
  Form,
  MdOutlineEmailS,
  RiMessengerLines,
} from "./styled";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zvgvnfj",
      "template_5wqkewc",
      form.current,
      "m2RtPykeZCewSIMKf"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <ContactContainer className="container ">
        <ContactOptions>
          <ContactOption>
            <MdOutlineEmailS className="contact__option-icon" />
            <h4>Email</h4>
            <h5>michaeldougls93@gmail.com</h5>
            <a href="mailto:michaeldougls93@gmail.com">Send a message</a>
          </ContactOption>
          <ContactOption>
            <RiMessengerLines className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Michael Douglas</h5>
            <a href="https://m.me/mdf18/">Send a message</a>
          </ContactOption>
          <ContactOption>
            <BsWhatsapps className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+351939511252</h5>
            <a
              href="https://api.whatsapp.com/send?phone=351939511252"
              target="_blank"
            >
              {" "}
              Send a message
            </a>
          </ContactOption>
        </ContactOptions>
        <Form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </Form>
      </ContactContainer>
    </section>
  );
};

export default Contact;
