import { useParams, Link } from "react-router-dom";
import serviceDetails from "../data/serviceDetails";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { serviceSlug, categorySlug, typeSlug } = useParams();

  const service =
    serviceDetails?.[serviceSlug]?.[categorySlug];

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
      </div>
    );
  }

  /*
    ============================================================
    INDIVIDUAL TYPE PAGE
    Example:
    /services/stretch-ceiling/translucent/static-white
    ============================================================
  */

  let activeService = service;

  if (typeSlug) {
    const typeIndexMap = {
  /* ================= TRANSLUCENT ================= */

  "static-white": 0,
  "cct-white": 1,
  "rgbw-white": 2,

  // Support both existing URL versions
  "rgbw-pixel-dmx": 3,
  "rgbw-pixel-dmx-white": 3,


  /* ================= PRINT ================= */

  "static-print": 0,
  "cct-print": 1,
  "rgbw-print": 2,
  "rgbw-pixel-dmx-print": 3,


  /* ================= GLOSS ================= */

  "high-gloss": 0,


  /* ================= PANEL ================= */

  "panel-white": 0,
  "panel-tunable": 0,
  "panel-print": 1,
  "panel-rgbw": 1,
};

    const sectionIndex = typeIndexMap[typeSlug];

    if (
      sectionIndex === undefined ||
      !service.sections?.[sectionIndex]
    ) {
      return (
        <div className="service-not-found">
          <h2>Service Not Found</h2>
        </div>
      );
    }

    /*
      Keep the exact existing section data.
      We are only showing the selected section.
    */

    activeService = {
  ...service,
  sections: [service.sections[sectionIndex]],

  whyChoose: service.sections[sectionIndex].whyChoose,

  lightingTechnology:
    service.sections[sectionIndex].lightingTechnology,

  applications:
    service.sections[sectionIndex].applications,

  technicalSpecifications:
    service.sections[sectionIndex].technicalSpecifications,

  qualityAssurance:
    service.sections[sectionIndex].qualityAssurance,

  cta: service.cta,
};
  }
  const isIndividualTypePage = Boolean(typeSlug);

  return (
    <div className="service-detail-page">

      {/* ============================================================
          HERO
      ============================================================ */}

      <section
        className="service-detail-hero"
        style={
          activeService.hero?.image
            ? {
                backgroundImage: `url(${activeService.hero.image})`,
              }
            : undefined
        }
      >
        <div className="container">

          {activeService.hero?.subtitle && (
            <span className="eyebrow">
              {activeService.hero.subtitle}
            </span>
          )}

          <h1 className="chisel hero-title">
            {activeService.hero?.title}
          </h1>

          {activeService.hero?.description && (
            <p>
              {activeService.hero.description}
            </p>
          )}

        </div>
      </section>


      {/* ============================================================
          PRODUCT CATEGORIES
          Only on category overview page
      ============================================================ */}

      {!isIndividualTypePage &&
        activeService.categories?.length > 0 && (

        <section className="product-categories-section">

          <div className="container">

            <div className="product-categories-heading">
              <span>
                PRODUCT CATEGORIES
              </span>
            </div>


            <div className="product-categories-grid">

              {activeService.categories.map(
                (category, index) => (

                <Link
                  key={category.title}
                  to={category.link}
                  className="product-category-card"
                >

                  <span className="category-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="category-content">

                    <h3>
                      {category.title}
                    </h3>

                    <p>
                      {category.subtitle}
                    </p>

                  </div>

                  <span className="category-arrow">
                    →
                  </span>

                </Link>

              ))}

            </div>


            {/* ================= BUTTONS ================= */}

            <div className="product-category-buttons">

              {activeService.pdf && (
                <a
                  href={activeService.pdf}
                  download
                  className="product-download-btn"
                >
                  <span>↓</span>
                  DOWNLOAD
                </a>
              )}


              {activeService.categories?.[0]?.link && (
                <Link
                  to={activeService.categories[0].link}
                  className="product-view-btn"
                >
                  VIEW
                  <span>→</span>
                </Link>
              )}

            </div>

          </div>

        </section>

      )}


      {/* ============================================================
          INDIVIDUAL TYPE CONTENT / EXISTING SECTIONS
      ============================================================ */}

      {activeService.sections?.length > 0 && (

        <section className="service-sections">

          <div className="container">

            {activeService.sections.map(
              (item, index) => (

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

                  <h2>
                    {item.title}
                  </h2>


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

                      <span>
                        BEST FOR
                      </span>

                      <p>
                        {item.bestFor}
                      </p>

                    </div>
                  )}


                  {item.specs?.length > 0 && (

                    <div className="detail-specs">

                      {item.specs.map((spec) => (

                        <div
                          className="spec-card"
                          key={spec.label}
                        >

                          <span>
                            {spec.label}
                          </span>

                          <h4>
                            {spec.value}
                          </h4>

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


      {/* ============================================================
          WHY CHOOSE
          Existing content untouched
      ============================================================ */}

      {activeService.whyChoose?.items?.length > 0 && (

        <section className="fiber-why-choose">

          <div className="container">

            <div className="fiber-section-heading">

              <span className="fiber-eyebrow">
                {activeService.whyChoose.eyebrow}
              </span>

              <h2>
                {activeService.whyChoose.title}
              </h2>

            </div>


            <div className="fiber-features-grid">

              {activeService.whyChoose.items.map(
                (item, index) => (

                <div
                  className="fiber-feature-card"
                  key={`${item.title}-${index}`}
                >

                  <span className="feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="feature-line" />

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      )}


      {/* ============================================================
          APPLICATIONS
          Existing content untouched
      ============================================================ */}

      {activeService.applications && (

        <section className="fiber-applications">

          <div className="container">

            <div className="fiber-section-heading">

              <span className="fiber-eyebrow">
                {activeService.applications.eyebrow}
              </span>

              <h2>
                {activeService.applications.title}
              </h2>

            </div>


            <div className="applications-grid">

              {activeService.applications.items.map(
                (item, index) => (

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


      {/* ============================================================
    LIGHTING TECHNOLOGY
============================================================ */}

{activeService.lightingTechnology?.items?.length > 0 && (
  <section className="product-info-section lighting-technology-section">
    <div className="container">

      <div className="product-section-heading">
        <span className="eyebrow">
          {activeService.lightingTechnology.eyebrow}
        </span>

        <h2>
          {activeService.lightingTechnology.title}
        </h2>
      </div>

      <div className="lighting-technology-grid">

        {activeService.lightingTechnology.items.map(
          (item, index) => (
            <div
              className="lighting-technology-card"
              key={`${item.title}-${index}`}
            >

              <span className="lighting-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>

              {item.subtitle && (
                <h4>{item.subtitle}</h4>
              )}

              <p>{item.description}</p>

            </div>
          )
        )}

      </div>

    </div>
  </section>
)}


{/* ============================================================
    TECHNICAL SPECIFICATIONS
============================================================ */}

{activeService.technicalSpecifications?.items?.length > 0 && (
  <section className="product-info-section technical-specifications-section">
    <div className="container">

      <div className="product-section-heading">
        <span className="eyebrow">
          {activeService.technicalSpecifications.eyebrow}
        </span>

        <h2>
          {activeService.technicalSpecifications.title}
        </h2>
      </div>

      <div className="technical-specifications-list">

        {activeService.technicalSpecifications.items.map(
          (item, index) => (
            <div
              className="technical-specification-row"
              key={`${item.label}-${index}`}
            >

              <span>{item.label}</span>

              <strong>{item.value}</strong>

            </div>
          )
        )}

      </div>

    </div>
  </section>
)}


{/* ============================================================
    QUALITY ASSURANCE
============================================================ */}

{activeService.qualityAssurance?.items?.length > 0 && (
  <section className="product-info-section quality-assurance-section">
    <div className="container">

      <div className="quality-assurance-wrapper">

        <div className="product-section-heading">
          <span className="eyebrow">
            {activeService.qualityAssurance.eyebrow}
          </span>

          <h2>
            {activeService.qualityAssurance.title}
          </h2>
        </div>

        <div className="quality-assurance-grid">

          {activeService.qualityAssurance.items.map(
            (item, index) => (
              <div
                className="quality-assurance-card"
                key={`${item.label}-${index}`}
              >

                <span>{item.label}</span>

                <strong>{item.value}</strong>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  </section>
)}


      {/* ============================================================
          CTA
          Existing content untouched
      ============================================================ */}

      {activeService.cta && (

        <section className="fiber-cta">

          <div className="fiber-cta-inner">

            <span className="fiber-eyebrow">
              {activeService.cta.eyebrow}
            </span>

            <h2>
              {activeService.cta.title}
            </h2>

            <p>
              {activeService.cta.description}
            </p>


            <div className="fiber-cta-buttons">

              {activeService.cta.primaryText && (

                <Link
                  to={activeService.cta.primaryLink}
                  className="fiber-btn fiber-btn-primary"
                >

                  {activeService.cta.primaryText}

                  <span>
                    →
                  </span>

                </Link>

              )}


              {activeService.cta.catalogueText &&
                activeService.cta.catalogue && (

                <a
                  href={activeService.cta.catalogue}
                  className="fiber-btn fiber-btn-outline"
                  download
                >

                  {activeService.cta.catalogueText}

                  <span>
                    ↓
                  </span>

                </a>

              )}

            </div>

          </div>

        </section>

      )}

    </div>
  );
}