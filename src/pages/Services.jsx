import React from "react";
import SplitText from "../components/Effects/SplitText.jsx";
import services from "../data/services.js";
import "./Services.css";
import { Link } from "react-router-dom";

export default function Services({ preview = false }) {
  const items = preview ? services.slice(0, 3) : services;

  return (
    <section className="section services-section">
      <div className="container">

        <div className="services-section__head">
          <span className="eyebrow">What We Do</span>

          <SplitText
            as="h2"
            className="chisel"
            text="Crafted Solutions"
          />

          {preview && (
            <a href="/services" className="services-section__more">
              View All →
            </a>
          )}
        </div>

        <div className="services-list">

          {items.map((service, index) => (

            <div
              key={service.title}
              className={`service-row ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
            >

              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>

              <div className="service-content">

                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>{service.title}</h2>

                <p>{service.desc}</p>

               <div className="service-types">

  {service.types?.map((type) => (

    <a
      key={type.title}
      href={type.link}
      className="type-card"
    >
      <h4>{type.title}</h4>

      <p>{type.subtitle}</p>
    </a>

  ))}

</div>

                <div className="service-buttons">

                  <a
                    href={service.pdf}
                    className="btn-outline"
                    download
                  >
                    Download
                  </a>

                  <a
                    href={service.view}
                    className="btn-dark"
                  >
                    View
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}