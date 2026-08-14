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


        {/* =========================================
            RIGHT — FORM
        ========================================== */}
        <section className="dealership-application__form-area">

          <form className="dealership-application__form">

            {/* 01 */}
            <div className="application-section">

              <div className="application-section__number">
                01 — PERSONAL DETAILS
              </div>

              <h2>Tell Us About Yourself</h2>

              <div className="application-grid">

                <div className="application-field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="application-field">
                  <label>Mobile Number *</label>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                  />
                </div>

                <div className="application-field">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="application-field">
                  <label>WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="Enter WhatsApp number"
                  />
                </div>

              </div>

            </div>


            {/* 02 */}
            <div className="application-section">

              <div className="application-section__number">
                02 — BUSINESS DETAILS
              </div>

              <h2>Your Business</h2>

              <div className="application-grid">

                <div className="application-field">
                  <label>Business / Company Name *</label>
                  <input
                    type="text"
                    placeholder="Enter business/company name"
                  />
                </div>

                <div className="application-field">
                  <label>Current Business Type *</label>

                  <select defaultValue="">
                    <option value="">Select an option</option>
                    <option>Interior Designer</option>
                    <option>Architect</option>
                    <option>Contractor</option>
                    <option>Builder</option>
                    <option>Retailer</option>
                    <option>Distributor</option>
                    <option>Manufacturer</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="application-field">
                  <label>Years In Business</label>
                  <input
                    type="text"
                    placeholder="Enter years in business"
                  />
                </div>

                <div className="application-field">
                  <label>Website / Instagram</label>
                  <input
                    type="text"
                    placeholder="Website or Instagram"
                  />
                </div>

              </div>

            </div>


            {/* 03 */}
            <div className="application-section">

              <div className="application-section__number">
                03 — LOCATION
              </div>

              <h2>Your Territory</h2>

              <div className="application-grid">

                <div className="application-field">
                  <label>State *</label>

                  <select defaultValue="">
                    <option value="">Select an option</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                    <option>Delhi</option>
                    <option>Jammu & Kashmir</option>
                    <option>Chandigarh</option>
                    <option>Puducherry</option>
                  </select>
                </div>

                <div className="application-field">
                  <label>Current City *</label>
                  <input
                    type="text"
                    placeholder="Enter current city"
                  />
                </div>

                <div className="application-field">
                  <label>Preferred Dealership City *</label>
                  <input
                    type="text"
                    placeholder="Enter preferred dealership city"
                  />
                </div>

              </div>

              <div className="application-field application-field--full">
                <label>Office / Showroom Address</label>

                <textarea
                  rows="4"
                  placeholder="Enter office/showroom address"
                />
              </div>

            </div>


            {/* 04 */}
            <div className="application-section">

              <div className="application-section__number">
                04 — BUSINESS PROFILE
              </div>

              <h2>Tell Us More</h2>

              <div className="application-grid">

                <div className="application-field">
                  <label>
                    Do You Have Interior / Architecture / Construction Experience?
                  </label>

                  <select defaultValue="">
                    <option value="">Select an option</option>
                    <option>Yes — More than 5 years</option>
                    <option>Yes — 2 to 5 years</option>
                    <option>Yes — Less than 2 years</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="application-field">
                  <label>Existing Client Network</label>

                  <input
                    type="text"
                    placeholder="Tell us about your client network"
                  />
                </div>

                <div className="application-field">
                  <label>Expected Monthly Business</label>

                  <select defaultValue="">
                    <option value="">Select an option</option>
                    <option>Below ₹5 Lakh</option>
                    <option>₹5–10 Lakh</option>
                    <option>₹10–25 Lakh</option>
                    <option>₹25 Lakh+</option>
                    <option>Not Sure</option>
                  </select>
                </div>

              </div>

              <div className="application-field application-field--full">
                <label>
                  Why Do You Want To Become A Shilpkar Dealer?
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us why you want to become a Shilpkar dealer..."
                />
              </div>

            </div>


            {/* 05 */}
            <div className="application-section">

              <div className="application-section__number">
                05 — NEXT STEP
              </div>

              <h2>Let's Connect</h2>

              <div className="application-grid">

                <div className="application-field">
                  <label>
                    Are You Ready For The Dealership Investment? *
                  </label>

                  <select defaultValue="">
                    <option value="">Select an option</option>
                    <option>Yes, I am ready</option>
                    <option>I would like to discuss first</option>
                    <option>I need more information</option>
                  </select>
                </div>

                <div className="application-field">
                  <label>Preferred Callback Time</label>

                  <select defaultValue="">
                    <option value="">Select an option</option>
                    <option>Morning — 9 AM to 12 PM</option>
                    <option>Afternoon — 12 PM to 4 PM</option>
                    <option>Evening — 4 PM to 7 PM</option>
                  </select>
                </div>

              </div>


              <label className="application-checkbox">

                <input type="checkbox" />

                <span>
                  I confirm that the information provided above is accurate
                  and I agree to be contacted by the Shilpkar team regarding
                  the dealership opportunity.
                </span>

              </label>


              <button
                type="submit"
                className="application-submit"
              >
                SUBMIT DEALER APPLICATION
                <span>→</span>
              </button>


              <p className="application-note">
                By submitting this form, you agree to be contacted regarding
                the Shilpkar Dealership Program.
              </p>

            </div>

          </form>

        </section>

      </div>

    </main>
  );
}