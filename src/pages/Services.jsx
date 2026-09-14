import React, { useEffect } from "react";
import SplitText from "../components/Effects/SplitText.jsx";
import services from "../data/services.js";
import "./Services.css";
import { Link } from "react-router-dom";
import servicesBanner from "../assets/images/services/banner/services-stretch-ceiling-banner.webp";



export default function Services({ preview = false }) {
  const items = preview ? services.slice(0, 3) : services;

return (
  <>
    {!preview && (
      <section
        className="services-banner"
        style={{
          backgroundImage: `url(${servicesBanner})`,
        }}
      >
        <div className="services-banner__overlay">
          <div className="container services-banner__content">
            

            
          </div>
        </div>
      </section>
    )}

    <section className="section services-section">   
         <div className="container">

        {preview && (
  <div className="services-section__head">
    <a href="/services" className="services-section__more">
      View All →
    </a>
  </div>
)}
        <div className="services-list">

          {items.map((service, index) => (

            <div
               id={service.anchor}
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

<p>{service.desc || service.description}</p>
<div className="service-types">

  {(service.types || service.categories)?.map((type) => (

    <Link
      key={type.title}
      to={type.link}
      className="type-card"
    >
      <h4>{type.title}</h4>

      <p>{type.subtitle}</p>
    </Link>

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

                  <Link
  to={service.view}
  className="btn-dark"
>
  View
</Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
       </section>
  </>
  );
}