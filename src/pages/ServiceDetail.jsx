import { useParams , Link } from "react-router-dom";
import serviceDetails from "../data/serviceDetails";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { serviceSlug, categorySlug } = useParams();

  const service =
    serviceDetails?.[serviceSlug]?.[categorySlug];

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
      </div>
    );
  }

  return (
    <div className="service-detail-page">

      {/* ================= HERO ================= */}

<section
  className="service-detail-hero"
  style={
    service.hero?.image
      ? {
          backgroundImage: `url(${service.hero.image})`,
        }
      : undefined
  }
>
          <div className="container">

          {service.hero?.subtitle && (
            <span className="eyebrow">
              {service.hero.subtitle}
            </span>
          )}

          <h1 className="chisel hero-title">
            {service.hero?.title}
          </h1>

          {service.hero?.description && (
            <p>
              {service.hero.description}
            </p>
          )}

        </div>
      </section>


      {/* ================= INTRO ================= */}

      {service.sections?.length > 0 && (
        <section className="service-sections">
          <div className="container">

            {service.sections.map((item, index) => (

              <div
                key={`${item.title}-${index}`}
                className={`service-section ${
                  index % 2 !== 0 ? "reverse" : ""
                }`}
              >

                {item.image && (
                  <div className="section-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                )}

                <div className="section-content">

                  {item.tag && (
                    <span className="section-number">
                      {item.tag}
                    </span>
                  )}

                  <h2>{item.title}</h2>

                  {item.subtitle && (
                    <h3 className="section-subtitle">
                      {item.subtitle}
                    </h3>
                  )}

                  {item.description && (
                    <p className="section-description">
                      {item.description}
                    </p>
                  )}

                  {item.bestFor && (
                    <div className="section-best-for">
                      <span>BEST FOR</span>
                      <p>{item.bestFor}</p>
                    </div>
                  )}

                  {item.specs?.length > 0 && (
                    <div className="detail-specs">

                      {item.specs.map((spec) => (
                        <div
                          className="spec-card"
                          key={spec.label}
                        >
                          <span>{spec.label}</span>

                          <h4>{spec.value}</h4>
                        </div>
                      ))}

                    </div>
                  )}

                </div>

              </div>

            ))}

          </div>
        </section>
      )}


      {/* ================= WHY CHOOSE ================= */}

      {service.whyChoose?.items?.length > 0 && (
        <section className="fiber-why-choose">

          <div className="container">

            <div className="fiber-section-heading">

              <span className="fiber-eyebrow">
                {service.whyChoose.eyebrow}
              </span>

              <h2>
                {service.whyChoose.title}
              </h2>

            </div>

            <div className="fiber-features-grid">

              {service.whyChoose.items.map(
                (item, index) => (

                  <div
                    className="fiber-feature-card"
                    key={`${item.title}-${index}`}
                  >

                    <span className="feature-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="feature-line" />

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>
      )}


 {/* IDEAL APPLICATIONS */}

{service.applications && (

  <section className="fiber-applications">

    <div className="container">

      <div className="fiber-section-heading">

        <span className="fiber-eyebrow">
          {service.applications.eyebrow}
        </span>

        <h2>
          {service.applications.title}
        </h2>

      </div>

      <div className="applications-grid">

        {service.applications.items.map((item, index) => (

          <div
            className="application-card"
            key={item}
          >

            <span className="application-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>
              {item}
            </h3>

            <span className="application-arrow">
              ↗
            </span>

          </div>

        ))}

      </div>

    </div>

  </section>

)}


{/* CTA */}

{service.cta && (

  <section className="fiber-cta">

    <div className="fiber-cta-inner">

      <span className="fiber-eyebrow">
        {service.cta.eyebrow}
      </span>

      <h2>
        {service.cta.title}
      </h2>

      <p>
        {service.cta.description}
      </p>

      <div className="fiber-cta-buttons">

        {service.cta.primaryText && (
          <Link
            to={service.cta.primaryLink}
            className="fiber-btn fiber-btn-primary"
          >
            {service.cta.primaryText}
            <span>→</span>
          </Link>
        )}

        {service.cta.catalogueText && service.cta.catalogue && (
          <a
            href={service.cta.catalogue}
            className="fiber-btn fiber-btn-outline"
            download
          >
            {service.cta.catalogueText}
            <span>↓</span>
          </a>
        )}

      </div>

    </div>

  </section>

)}

    </div>
  );
}