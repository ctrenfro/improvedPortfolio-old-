import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navigation/Navbar";
import Socialbar from "./Navigation/Socialbar";

import "../Styles/Contacts.css";

function Contact() {
  const [showDiv, setShowDiv] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_spko48b",
        "template_u6b6hyo",
        form.current,
        "36Y2SwkdzTKtWo5E4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setShowDiv(true);
    let frm = document.getElementsByName("contact-form")[0];
    frm.reset();
  };

  return (
    <div className="contact-container">
      <Navbar
        href1={"/improvedPortfolio/"}
        href2={"/improvedPortfolio/aboutme"}
        href3={"/improvedPortfolio/projects"}
        link1={"Home"}
        link2={"About Me"}
        link3={"Projects"}
      />
      <Socialbar
        linkedin={require("../images/icons8-linkedin-2-32.png")}
        github={require("../images/GitHub_Logo.png")}
      />

      <form name="contact-form" className="cf" ref={form} onSubmit={sendEmail}>
        <div className="half left cf">
          <input type="text" placeholder="Name" name="name" id="name"></input>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            id="email"
          ></input>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            id="subject"
          ></input>
        </div>
        <div className="half right cf">
          <textarea
            name="message"
            type="text"
            placeholder="Message"
            id="message"
          ></textarea>
        </div>
        <button name="btn" type="submit" id="input-submit">
          Send
        </button>
      </form>

      {showDiv && (
        <div id="toast">
          <h2>Thank you for contacting me!</h2>
        </div>
      )}
    </div>
  );
}

export default Contact;
