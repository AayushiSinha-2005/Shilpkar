import "./AssociateApplication.css";

export default function AssociateApplication() {
  return (
    <main className="associate-application-page">

      <div className="associate-application">


        {/* =====================================================
            LEFT — STATIC SHILPKAR ASSOCIATE INFORMATION
        ====================================================== */}

        <aside className="associate-application__sidebar">

          <div className="associate-application__brand">
            SHILPKAR FACTORY
          </div>


          <h1>
            Associate <span>Partner</span>
          </h1>


          <div className="associate-application__line" />


          <p>
            Partner with Shilpkar, bring project opportunities and
            grow your business with complete project support.
          </p>


          <div className="associate-application__divider" />


          <div className="associate-application__label">
            ASSOCIATE PROGRAM
          </div>


          <h2>
            Become A <span>Shilpkar Associate</span>
          </h2>


          <p>
            Tell us about yourself, your professional network and
            the type of projects you can bring to Shilpkar.
          </p>


          {/* BENEFITS */}

          <div className="associate-application__benefits">

            <div>
              <span>✓</span>
              <p>Dedicated Manager</p>
            </div>

            <div>
              <span>✓</span>
              <p>Fixed Price System</p>
            </div>

            <div>
              <span>✓</span>
              <p>Complete Project Support</p>
            </div>

            <div>
              <span>✓</span>
              <p>Zero Royalty</p>
            </div>

          </div>


          {/* STATIC FREE PROGRAM CARD */}

          <div className="associate-application__investment">

            <span>ASSOCIATE PROGRAM</span>

            <strong>
              FREE
            </strong>

            <div />

            <h3>
              Start With Shilpkar.
            </h3>

            <p>
              Join the Shilpkar Associate Program without any
              joining investment and build new business opportunities.
            </p>

          </div>


          <div className="associate-application__note">

            <span>✦</span>

            <p>
              Our team will review your application and contact
              you regarding the Associate Partner opportunity.
            </p>

          </div>

        </aside>



       <section className="associate-application__form-area">
  <form
    className="associate-application__form"
    onSubmit={(e) => e.preventDefault()}
  >
    {/* FORM HEADER */}
    <div className="associate-application__section">
      <div className="associate-application__section-number">
        01 — APPLICATION
      </div>

      <h2>
        Become A <span>Shilpkar Associate</span>
      </h2>

      <p>
        Share your basic details and our team will contact you
        regarding the Associate Partner Program.
      </p>

      {/* BASIC DETAILS */}
      <div className="associate-application__grid">

        {/* NAME */}
        <div className="associate-application__field">
          <label>Full Name *</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* MOBILE */}
        <div className="associate-application__field">
          <label>Mobile Number *</label>

          <input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        {/* CITY */}
        <div className="associate-application__field">
          <label>City *</label>

          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            required
          />
        </div>

      </div>
    </div>

   <div className="associate-application__contact-card">
  <div className="associate-application__contact-content">
    <span className="associate-application__contact-label">
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
    className="associate-application__submit"
  >
    BECOME AN ASSOCIATE PARTNER
    <span>→</span>
  </button>
</div>
  </form>
</section>

      </div>

    </main>
  );
}