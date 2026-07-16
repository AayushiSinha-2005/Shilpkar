import React from "react";
import SplitText from "./Effects/SplitText.jsx";
import MagicBento from "./Effects/MagicBento.jsx";
import services from "../data/services.js";
import "./Services.css";

export default function Services({ preview = false }) {
  const items = preview ? services.slice(0, 3) : services;

  return (
    <section className="section services-section">
      <div className="container">
        <div className="services-section__head">
          <span className="eyebrow">What We Do</span>
          <SplitText as="h2" className="chisel" text="Services, built like a craft" />
          {preview && (
            <a href="/services" className="services-section__more" data-cursor="target">
              All Services →
            </a>
          )}
        </div>
        <MagicBento items={items} />
      </div>
    </section>
  );
}
