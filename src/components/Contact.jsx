import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navigation/Navbar";
import Socialbar from "./Navigation/Socialbar";

import "../Styles/Contacts.css";

function Contact() {
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
      <form class="cf" ref={form} onSubmit={sendEmail}>
        <div class="half left cf">
          <input type="text" placeholder="Name" name="name"></input>
          <input type="email" name="email" placeholder="Email address"></input>
          <input type="text" placeholder="Subject" name="subject"></input>
        </div>
        <div class="half right cf">
          <textarea name="message" type="text" placeholder="Message"></textarea>
        </div>
        <input type="submit" value="Send" id="input-submit"></input>
      </form>
    </div>
  );
}

export default Contact;
