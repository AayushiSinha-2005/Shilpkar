import React, { useState } from "react";
import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SplitText from "../components/Effects/SplitText.jsx";
import AnimatedContent from "../components/Effects/AnimatedContent.jsx";
import images from "../data/images.js";
import "./Contact.css";

const FIELDS = [
  { name: "name", label: "Full Name", type: "text" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "phone", label: "Phone Number", type: "tel" },
  { name: "budget", label: "Project Budget (optional)", type: "text" },
];

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", budget: "", message: "" });
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section
        className="section-dark contact-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,47,47,0.88), rgba(10,34,34,0.96)), url(${images.contactBackdrop})`,
        }}
      >
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <SplitText as="h1" className="chisel contact-hero__title" text="Let's design your next space" />
          <p className="contact-hero__lede">
            Tell us a little about the project and we'll set up a
            walkthrough — in person or over a call.
          </p>

          <div className="contact-hero__quick">
  <a
    href="tel:+918171771229"
    className="contact-hero__quick-btn"
    data-cursor="target"
  >
    <FiPhoneCall />
    +91 8171771229
  </a>

  <a
    href="https://wa.me/918171771229"
    target="_blank"
    rel="noreferrer"
    className="contact-hero__quick-btn contact-hero__quick-btn--whatsapp"
    data-cursor="target"
  >
    <FaWhatsapp />
    WhatsApp Us
  </a>
</div>

        </div>
      </section>

      <section className="section contact-body">
        <div className="container contact-body__grid">
          <form className="contact-form" onSubmit={onSubmit}>
            <h2>Request a Consultation</h2>
            {FIELDS.map((f) => (
              <div
                className={`contact-form__field ${focused === f.name || values[f.name] ? "is-active" : ""}`}
                key={f.name}
              >
                <label htmlFor={f.name}>{f.label}</label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  value={values[f.name]}
                  onChange={onChange}
                  onFocus={() => setFocused(f.name)}
                  onBlur={() => setFocused("")}
                  required={f.name !== "budget"}
                />
                <span className="contact-form__underline" />
              </div>
            ))}

            <div
              className={`contact-form__field ${focused === "message" || values.message ? "is-active" : ""}`}
            >
              <label htmlFor="message">Tell us about the space</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={values.message}
                onChange={onChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                required
              />
              <span className="contact-form__underline" />
            </div>

            <AnimatedContent>
              <button type="submit" className="btn btn-dark" data-cursor="target">
                {submitted ? "Message Sent" : "Send Enquiry"}
              </button>
            </AnimatedContent>
            {submitted && (
              <p className="contact-form__success">
                Thank you — our design team will reach out within one
                business day.
              </p>
            )}
          </form>

          <div className="contact-info">
            <h2>Visit Our Experience Center</h2>
            <ul className="contact-info__list">

<li>
<FiMapPin />
<span>
D-166, First Floor, Sector 10<br/>
Noida - 201301, India
</span>
</li>

<li>
<FiPhoneCall />
<span>
+91 8171771229
</span>
</li>

<li>
<FiMail />
<span>
shilpkarfactory@gmail.com
</span>
</li>

</ul>

            <div className="contact-map">
              <iframe
title="Shilpkar Factory"
src="https://www.google.com/maps?q=D-166+Sector+10+Noida&output=embed"
loading="lazy"
/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
