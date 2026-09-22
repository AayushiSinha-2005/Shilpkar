import "./DealershipApplication.css";

export default function TrainingApplication() {
  return (
    <main className="dealership-application-page">

      <div className="dealership-application">

        {/* =========================================
            LEFT — STATIC SHILPKAR TRAINING INFO
        ========================================== */}
        <aside className="dealership-application__sidebar">

          <div className="dealership-application__brand">
            SHILPKAR FACTORY
          </div>

          <h1>
            Training <span>Application</span>
          </h1>

          <div className="dealership-application__line" />

          <p>
            Learn, master and grow with complete product,
            technical, design and business training from
            SHILPKAR.
          </p>

          <div className="dealership-application__divider" />

          <div className="dealership-application__label">
            TRAINING PROGRAM
          </div>

          <h2>
            Apply For <span>SHILPKAR Training</span>
          </h2>

          <p>
            Fill in your details to apply for SHILPKAR training
            and develop the product, technical and business
            skills required to grow with the brand.
          </p>

          {/* TRAINING FOCUS */}
          <div className="dealership-application__investment">

            <span>TRAINING FOCUS</span>

            <strong>
              Learn. <small>Master. Grow.</small>
            </strong>

            <div />

            <h3>
              Complete Learning.
            </h3>

            <p>
              Product knowledge, technical skills, design,
              sales and business growth training.
            </p>

            <ul className="training-focus-list">
              <li>✓ Product Knowledge</li>
              <li>✓ Technical Training</li>
              <li>✓ Design & Visualization</li>
              <li>✓ Sales & Business Training</li>
              <li>✓ Ongoing Support</li>
            </ul>

          </div>

          <div className="dealership-application__note">
            <span>✦</span>

            <p>
              Our team will review your application and contact
              you regarding the SHILPKAR Training Program.
            </p>
          </div>

        </aside>


      {/* =========================================
    RIGHT — TRAINING FORM
========================================== */}
<section className="dealership-application__form-area">

  <form
    className="dealership-application__form"
    onSubmit={(e) => e.preventDefault()}
  >

    <div className="application-section">

      <div className="application-section__number">
        01 — APPLICATION
      </div>

      <h2>
        Apply For <span>SHILPKAR Training</span>
      </h2>

      <p className="application-intro">
        Share your basic details and our team will contact
        you regarding the SHILPKAR Training Program.
      </p>

      <div className="application-grid">

        {/* NAME */}
        <div className="application-field">
          <label>Full Name *</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* MOBILE */}
        <div className="application-field">
          <label>Mobile Number *</label>

          <input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        {/* CITY */}
        <div className="application-field">
          <label>City *</label>

          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            required
          />
        </div>

      </div>

      {/* CONTACT + CTA */}
      <div className="application-contact-card">

        <div className="application-contact-content">

          <span className="application-contact-label">
            NEED MORE INFORMATION?
          </span>

          <p>
            Speak directly with our Shilpkar team
          </p>

          <a href="tel:+918171771229">
            +91 8171771229
          </a>

        </div>

        <button
          type="submit"
          className="application-submit"
        >
          APPLY FOR TRAINING
          <span>→</span>
        </button>

      </div>

      <p className="application-note">
        By submitting this form, you agree to be contacted
        regarding the SHILPKAR Training Program.
      </p>

    </div>

  </form>

</section>

      </div>

    </main>
  );
}