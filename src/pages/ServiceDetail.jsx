import { useParams, Link } from "react-router-dom";
import serviceDetails from "../data/serviceDetails";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { serviceSlug, categorySlug, typeSlug } = useParams();

  const service =
    serviceDetails?.[serviceSlug]?.[categorySlug];

  /*
  ============================================================
  SERVICE NOT FOUND
  ============================================================
  */

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <Link to="/services">Back to Services</Link>
      </div>
    );
  }

  /*
  ============================================================
  INDIVIDUAL TYPE PAGE
  Existing products:
  /services/stretch-ceiling/translucent/static-white
  /services/stretch-ceiling/print/static-print
  etc.
  ============================================================
  */

  let activeService = service;

  if (typeSlug) {
    const typeIndexMap = {
      /* TRANSLUCENT */
      "static-white": 0,
      "cct-white": 1,
      "rgbw-white": 2,
      "rgbw-pixel-dmx": 3,
      "rgbw-pixel-dmx-white": 3,

      /* PRINT */
      "static-print": 0,
      "cct-print": 1,
      "rgbw-print": 2,
      "rgbw-pixel-dmx-print": 3,

      /* GLOSS */
      "high-gloss": 0,

      /* PANEL */
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
          <Link to="/services">Back to Services</Link>
        </div>
      );
    }

    const selectedSection = service.sections[sectionIndex];

    activeService = {
      ...service,

      sections: [selectedSection],

      whyChoose:
        selectedSection.whyChoose ||
        service.whyChoose,

      lightingTechnology:
        selectedSection.lightingTechnology ||
        service.lightingTechnology,

      applications:
        selectedSection.applications ||
        service.applications,

      technicalSpecifications:
        selectedSection.technicalSpecifications ||
        service.technicalSpecifications,

      qualityAssurance:
        selectedSection.qualityAssurance ||
        service.qualityAssurance,

      cta: selectedSection.cta || service.cta,
    };
  }

  const isIndividualTypePage = Boolean(typeSlug);

  /*
  ============================================================
  HELPER DATA
  ============================================================
  */

  const collections =
    activeService.collections ||
    activeService.collection ||
    [];

  const materials =
    activeService.materials ||
    activeService.finishes ||
    [];

  const gallery =
    activeService.gallery ||
    activeService.images ||
    [];

  /*
  ============================================================
  RENDER
  ============================================================
  */

  return (
    <div className="service-detail-page">

      {/* ======================================================
          HERO BANNER
      ====================================================== */}

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

          {activeService.hero?.title && (
            <h1 className="chisel hero-title">
              {activeService.hero.title}
            </h1>
          )}

          {activeService.hero?.tagline && (
            <h2 className="hero-tagline">
              {activeService.hero.tagline}
            </h2>
          )}

          {activeService.hero?.description && (
            <p>
              {activeService.hero.description}
            </p>
          )}

          {activeService.hero?.highlights?.length > 0 && (
            <div className="hero-highlights">
              {activeService.hero.highlights.map(
                (item, index) => (
                  <span key={index}>
                    {item}
                  </span>
                )
              )}
            </div>
          )}

        </div>
      </section>


      {/* ======================================================
          PRODUCT CATEGORIES
          ONLY CATEGORY OVERVIEW
      ====================================================== */}

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

                    {category.subtitle && (
                      <p>
                        {category.subtitle}
                      </p>
                    )}

                  </div>

                  <span className="category-arrow">
                    →
                  </span>

                </Link>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* ======================================================
          INTRO / MAIN CONTENT SECTIONS
      ====================================================== */}

      {activeService.sections?.length > 0 && (

        <section className="service-sections">

          <div className="container">

            {activeService.sections.map(
              (item, index) => (

              <div
                key={`${item.title}-${index}`}
                className={`service-section ${
                  index % 2 !== 0
                    ? "reverse"
                    : ""
                }`}
              >

                {/* IMAGE */}

                {item.image && (
                  <div className="section-image">

                    <img
                      src={item.image}
                      alt={
                        item.imageAlt ||
                        item.title ||
                        "SHILPKAR product"
                      }
                    />

                  </div>
                )}


                {/* CONTENT */}

                <div className="section-content">

                  {item.tag && (
                    <span className="section-number">
                      {item.tag}
                    </span>
                  )}

                  {item.eyebrow && (
                    <span className="eyebrow">
                      {item.eyebrow}
                    </span>
                  )}

                  {item.title && (
                    <h2>
                      {item.title}
                    </h2>
                  )}

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

                  {item.description2 && (
                    <p className="section-description">
                      {item.description2}
                    </p>
                  )}

                  {/* BEST FOR */}

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

                  {/* SPECS */}

                  {item.specs?.length > 0 && (

                    <div className="detail-specs">

                      {item.specs.map(
                        (spec, specIndex) => (

                        <div
                          className="spec-card"
                          key={
                            `${spec.label}-${specIndex}`
                          }
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


      {/* ======================================================
          WHY CHOOSE
      ====================================================== */}

      {activeService.whyChoose?.items?.length > 0 && (

        <section className="fiber-why-choose">

          <div className="container">

            <div className="fiber-section-heading">

              {activeService.whyChoose.eyebrow && (
                <span className="fiber-eyebrow">
                  {activeService.whyChoose.eyebrow}
                </span>
              )}

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


      {/* ======================================================
          COLLECTIONS
          For BESPOKEWALL / future products
      ====================================================== */}

      {collections.length > 0 && (

        <section className="product-info-section product-collections-section">

          <div className="container">

            <div className="product-section-heading">

              {activeService.collectionsEyebrow && (
                <span className="eyebrow">
                  {activeService.collectionsEyebrow}
                </span>
              )}

              {!activeService.collectionsEyebrow && (
                <span className="eyebrow">
                  COLLECTION
                </span>
              )}

              <h2>
                {activeService.collectionsTitle ||
                  "EXPLORE COLLECTION"}
              </h2>

              {activeService.collectionsDescription && (
                <p>
                  {activeService.collectionsDescription}
                </p>
              )}

            </div>


            <div className="product-collections-grid">

              {collections.map(
                (item, index) => (

                <div
                  className="product-collection-card"
                  key={`${item.title}-${index}`}
                >

                  {item.image && (
                    <div className="product-collection-image">

                      <img
                        src={item.image}
                        alt={item.title}
                      />

                    </div>
                  )}

                  <div className="product-collection-content">

                    {item.number && (
                      <span>
                        {item.number}
                      </span>
                    )}

                    <h3>
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <h4>
                        {item.subtitle}
                      </h4>
                    )}

                    {item.description && (
                      <p>
                        {item.description}
                      </p>
                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* ======================================================
          MATERIALS / FINISHES
      ====================================================== */}

      {materials.length > 0 && (

        <section className="product-info-section materials-section">

          <div className="container">

            <div className="product-section-heading">

              <span className="eyebrow">
                {activeService.materialsEyebrow ||
                  "MATERIALS & FINISH"}
              </span>

              <h2>
                {activeService.materialsTitle ||
                  "SELECT YOUR FINISH"}
              </h2>

              {activeService.materialsDescription && (
                <p>
                  {activeService.materialsDescription}
                </p>
              )}

            </div>


            <div className="materials-grid">

              {materials.map(
                (item, index) => (

                <div
                  className="material-card"
                  key={`${item.title}-${index}`}
                >

                  <span className="material-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item.image && (
                    <div className="material-image">

                      <img
                        src={item.image}
                        alt={item.title}
                      />

                    </div>
                  )}

                  <h3>
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <h4>
                      {item.subtitle}
                    </h4>
                  )}

                  {item.description && (
                    <p>
                      {item.description}
                    </p>
                  )}

                </div>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* ======================================================
          APPLICATIONS
      ====================================================== */}

      {activeService.applications?.items?.length > 0 && (

        <section className="fiber-applications">

          <div className="container">

            <div className="fiber-section-heading">

              {activeService.applications.eyebrow && (
                <span className="fiber-eyebrow">
                  {activeService.applications.eyebrow}
                </span>
              )}

              <h2>
                {activeService.applications.title}
              </h2>

              {activeService.applications.description && (
                <p>
                  {activeService.applications.description}
                </p>
              )}

            </div>


            <div className="applications-grid">

              {activeService.applications.items.map(
                (item, index) => {

                  const application =
                    typeof item === "string"
                      ? {
                          title: item,
                        }
                      : item;

                  return (
                    <div
                      className="application-card"
                      key={`${application.title}-${index}`}
                    >

                      <span className="application-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {application.image && (
                        <img
                          src={application.image}
                          alt={application.title}
                        />
                      )}

                      <h3>
                        {application.title}
                      </h3>

                      {application.description && (
                        <p>
                          {application.description}
                        </p>
                      )}

                      <span className="application-arrow">
                        ↗
                      </span>

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </section>
      )}


      {/* ======================================================
          LIGHTING TECHNOLOGY
      ====================================================== */}

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

              {activeService.lightingTechnology.description && (
                <p>
                  {activeService.lightingTechnology.description}
                </p>
              )}

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

                  <h3>
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <h4>
                      {item.subtitle}
                    </h4>
                  )}

                  {item.description && (
                    <p>
                      {item.description}
                    </p>
                  )}

                </div>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* ======================================================
          TECHNICAL SPECIFICATIONS
      ====================================================== */}

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

              {activeService.technicalSpecifications.description && (
                <p>
                  {activeService.technicalSpecifications.description}
                </p>
              )}

            </div>


            <div className="technical-specifications-list">

              {activeService.technicalSpecifications.items.map(
                (item, index) => (

                <div
                  className="technical-specification-row"
                  key={`${item.label}-${index}`}
                >

                  <span>
                    {item.label}
                  </span>

                  <strong>
                    {item.value}
                  </strong>

                </div>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* ======================================================
          QUALITY ASSURANCE
      ====================================================== */}

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

                {activeService.qualityAssurance.description && (
                  <p>
                    {activeService.qualityAssurance.description}
                  </p>
                )}

              </div>


              <div className="quality-assurance-grid">

                {activeService.qualityAssurance.items.map(
                  (item, index) => (

                  <div
                    className="quality-assurance-card"
                    key={`${item.label}-${index}`}
                  >

                    <span>
                      {item.label}
                    </span>

                    <strong>
                      {item.value}
                    </strong>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>
      )}


      {/* ======================================================
          GALLERY
      ====================================================== */}

      {gallery.length > 0 && (

        <section className="product-gallery-section">

          <div className="container">

            <div className="product-gallery-grid">

              {gallery.map(
                (item, index) => {

                  const image =
                    typeof item === "string"
                      ? item
                      : item.image;

                  const alt =
                    typeof item === "string"
                      ? activeService.hero?.title ||
                        "SHILPKAR product"
                      : item.alt ||
                        item.title ||
                        activeService.hero?.title ||
                        "SHILPKAR product";

                  return (
                    <div
                      className="product-gallery-item"
                      key={`${image}-${index}`}
                    >

                      <img
                        src={image}
                        alt={alt}
                      />

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </section>
      )}


      {/* ======================================================
          CTA
      ====================================================== */}

      {activeService.cta && (

        <section className="fiber-cta">

          <div className="fiber-cta-inner">

            {activeService.cta.eyebrow && (
              <span className="fiber-eyebrow">
                {activeService.cta.eyebrow}
              </span>
            )}

            <h2>
              {activeService.cta.title}
            </h2>

            {activeService.cta.description && (
              <p>
                {activeService.cta.description}
              </p>
            )}


            <div className="fiber-cta-buttons">

              {activeService.cta.primaryText && (
                <Link
                  to={
                    activeService.cta.primaryLink ||
                    "/contact"
                  }
                  className="fiber-btn fiber-btn-primary"
                >

                  {activeService.cta.primaryText}

                  <span>
                    →
                  </span>

                </Link>
              )}


              {activeService.cta.secondaryText &&
                activeService.cta.secondaryLink && (

                <Link
                  to={activeService.cta.secondaryLink}
                  className="fiber-btn fiber-btn-outline"
                >

                  {activeService.cta.secondaryText}

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