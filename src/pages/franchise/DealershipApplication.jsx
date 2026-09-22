import "./DealershipApplication.css";

export default function DealershipApplication() {
  return (
    <main className="dealership-application-page">

      <div className="dealership-application">

        {/* =========================================
            LEFT — STATIC SHILPKAR INFO CARD
        ========================================== */}
        <aside className="dealership-application__sidebar">

          <div className="dealership-application__brand">
            SHILPKAR FACTORY
          </div>

          <h1>
            Dealer <span>Application</span>
          </h1>

          <div className="dealership-application__line" />

          <p>
            Take the first step towards becoming an authorized
            Shilpkar dealer in your city.
          </p>

          <div className="dealership-application__divider" />

          <div className="dealership-application__label">
            DEALERSHIP PROGRAM
          </div>

          <h2>
            Become A <span>Shilpkar Dealer</span>
          </h2>

          <p>
            Fill in your details and our team will connect with you
            to discuss the dealership opportunity, territory and next steps.
          </p>

          {/* STATIC INVESTMENT CARD */}
          <div className="dealership-application__investment">

            <span>DEALERSHIP INVESTMENT</span>

            <strong>
              ₹1,00,000 <small>+ GST</small>
            </strong>

            <div />

            <h3>
              One City. One Dealership.
            </h3>

            <p>
              Build your Shilpkar business with premium products,
              training and dedicated support.
            </p>

          </div>

          <div className="dealership-application__note">
            <span>✦</span>
            <p>
              Our team will review your application and contact
              you regarding the dealership opportunity.
            </p>
          </div>

        </aside>


      <section className="dealership-application__form-area">

  <form
    className="dealership-application__form"
    onSubmit={(e) => e.preventDefault()}
  >

    {/* =========================================
        01 — APPLICATION
    ========================================== */}
    <div className="application-section">

      <div className="application-section__number">
        01 — APPLICATION
      </div>

      <h2>
        Become A <span>Shilpkar Dealer</span>
      </h2>

      <p className="application-intro">
        Share your basic details and our team will contact
        you regarding the Shilpkar Dealership Program.
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

      {/* =========================================
          CONTACT CTA
      ========================================== */}

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
          APPLY FOR DEALERSHIP
          <span>→</span>
        </button>

      </div>

      <p className="application-note">
        By submitting this form, you agree to be contacted
        regarding the Shilpkar Dealership Program.
      </p>

    </div>

  </form>

</section>

      </div>

    </main>
  );
}