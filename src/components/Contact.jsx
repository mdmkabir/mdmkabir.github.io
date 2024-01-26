import React from "react";
import { useState } from "react";

const Contact = () => {
  const [formsubmitted, setSubmitted] = useState(false);
  function sentMail() {
    setSubmitted(true);
  }
  return (
    <div>
      <header>
        <h2 class="h2 article-title">Contact</h2>
      </header>
      <section class="mapbox" data-mapbox>
        <figure>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.81552291984!2d19.03339887689871!3d47.512983771181325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc03232679ff%3A0x6163e3448f100f36!2sBudapest%2C%20T%C3%B6lgyfa%20u.%2014%2C%201027%20Hungary!5e0!3m2!1sen!2sbd!4v1705732724196!5m2!1sen!2sbd" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </figure>
      </section>
      <section class="contact-form">
        {formsubmitted ? (
          <div class="alert" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            <p>Your message has been sent successfully.</p>
            <p class="mb-0">Thank you for contacting me.</p>
          </div>
        ) : null}
        <div>
          <h3 class="h3 form-title">Contact Form</h3>

          {/* entry.427038658=Kabir&entry.475499993=test@gmail.com&entry.1442825963=Test&entry.1555716452=Hello */}

          <form name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSfaBbktKp96_kiVZtnXh6ZnGNZDBG4wmnOxDKgx3Kv2d0NIFA/formResponse?" target="hidden_iframe" onSubmit={sentMail} onsubmit="submitted=true;">
            <div class="input-wrapper">
              <input type="text" name="entry.427038658" id="entry.427038658" class="form-input" placeholder="Full name" required data-form-input />

              <input type="email" name="entry.475499993" id="entry.1705901201" class="form-input" placeholder="Email address" required data-form-input />
            </div>
            <input type="text" name="entry.1442825963" id="entry.1442825963" class="form-input" style={{ marginBottom: "25px" }} placeholder="Subject" required data-form-input />

            <textarea name="entry.1555716452" id="entry.1555716452" class="form-input" placeholder="Your Message" required data-form-input></textarea>

            <button class="form-btn" type="submit" data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
          </form>
          <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} onload="if(submitted) {}"></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
