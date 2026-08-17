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



        {/* =====================================================
            RIGHT — ASSOCIATE APPLICATION FORM
        ====================================================== */}

        <section className="associate-application__form-area">

          <form className="associate-application__form">


            {/* =================================================
                01 — PERSONAL DETAILS
            ================================================= */}

            <div className="associate-application__section">

              <div className="associate-application__section-number">
                01 — PERSONAL DETAILS
              </div>

              <h2>
                Tell Us About Yourself
              </h2>


              <div className="associate-application__grid">

                <div className="associate-application__field">
                  <label>Full Name *</label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>


                <div className="associate-application__field">
                  <label>Mobile Number *</label>

                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                  />
                </div>


                <div className="associate-application__field">
                  <label>Email Address *</label>

                  <input
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>


                <div className="associate-application__field">
                  <label>WhatsApp Number</label>

                  <input
                    type="tel"
                    placeholder="Enter WhatsApp number"
                  />
                </div>

              </div>

            </div>



            {/* =================================================
                02 — PROFESSIONAL DETAILS
            ================================================= */}

            <div className="associate-application__section">

              <div className="associate-application__section-number">
                02 — PROFESSIONAL DETAILS
              </div>

              <h2>
                Your Professional Profile
              </h2>


              <div className="associate-application__grid">

                <div className="associate-application__field">

                  <label>
                    Your Profession *
                  </label>

                  <select defaultValue="">
                    <option value="">
                      Select an option
                    </option>

                    <option>Interior Designer</option>
                    <option>Architect</option>
                    <option>Contractor</option>
                    <option>Builder</option>
                    <option>Consultant</option>
                    <option>Sales Professional</option>
                    <option>Business Owner</option>
                    <option>Other</option>
                  </select>

                </div>


                <div className="associate-application__field">

                  <label>
                    Company / Firm Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter company or firm name"
                  />

                </div>


                <div className="associate-application__field">

                  <label>
                    Professional Experience
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. 5 years"
                  />

                </div>


                <div className="associate-application__field">

                  <label>
                    Website / Instagram
                  </label>

                  <input
                    type="text"
                    placeholder="Website or Instagram URL"
                  />

                </div>

              </div>

            </div>



            {/* =================================================
                03 — LOCATION
            ================================================= */}

            <div className="associate-application__section">

              <div className="associate-application__section-number">
                03 — LOCATION
              </div>

              <h2>
                Where Do You Operate?
              </h2>


              <div className="associate-application__grid">

                <div className="associate-application__field">

                  <label>
                    State *
                  </label>

                  <select defaultValue="">
                    <option value="">
                      Select an option
                    </option>

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


                <div className="associate-application__field">

                  <label>
                    City *
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your city"
                  />

                </div>

              </div>

            </div>



            {/* =================================================
                04 — PROJECT NETWORK
            ================================================= */}

            <div className="associate-application__section">

              <div className="associate-application__section-number">
                04 — PROJECT NETWORK
              </div>

              <h2>
                Tell Us About Your Network
              </h2>


              <div className="associate-application__grid">

                <div className="associate-application__field">

                  <label>
                    Who Are Your Typical Clients?
                  </label>

                  <select defaultValue="">
                    <option value="">
                      Select an option
                    </option>

                    <option>Residential Clients</option>
                    <option>Commercial Clients</option>
                    <option>Architects & Designers</option>
                    <option>Builders & Contractors</option>
                    <option>Corporate Clients</option>
                    <option>Mixed Client Base</option>
                  </select>

                </div>


                <div className="associate-application__field">

                  <label>
                    What Type Of Projects Do You Handle?
                  </label>

                  <select defaultValue="">
                    <option value="">
                      Select an option
                    </option>

                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Hotels / Hospitality</option>
                    <option>Retail</option>
                    <option>Office</option>
                    <option>Mixed Projects</option>
                  </select>

                </div>

              </div>


              <div className="associate-application__field associate-application__field--full">

                <label>
                  Tell Us About Your Project Network
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about the projects, clients and professional network you work with..."
                />

              </div>

            </div>



            {/* =================================================
                05 — ASSOCIATION
            ================================================= */}

            <div className="associate-application__section">

              <div className="associate-application__section-number">
                05 — ASSOCIATION
              </div>

              <h2>
                Let's Understand Your Interest
              </h2>


              <div className="associate-application__grid">

                <div className="associate-application__field">

                  <label>
                    Are You Ready To Start As A Shilpkar Associate? *
                  </label>

                  <select defaultValue="">
                    <option value="">
                      Select an option
                    </option>

                    <option>
                      Yes, I am ready
                    </option>

                    <option>
                      I would like to discuss first
                    </option>

                    <option>
                      I need more information
                    </option>

                  </select>

                </div>


                <div className="associate-application__field">

                  <label>
                    Preferred Callback Time
                  </label>

                  <select defaultValue="">
                    <option value="">
                      Select an option
                    </option>

                    <option>
                      Morning — 9 AM to 12 PM
                    </option>

                    <option>
                      Afternoon — 12 PM to 4 PM
                    </option>

                    <option>
                      Evening — 4 PM to 7 PM
                    </option>

                  </select>

                </div>

              </div>


              <div className="associate-application__field associate-application__field--full">

                <label>
                  Why Do You Want To Become A Shilpkar Associate?
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us why you are interested in the Shilpkar Associate Program..."
                />

              </div>



              {/* AGREEMENT */}

              <label className="associate-application__checkbox">

                <input type="checkbox" />

                <span>
                  I confirm that the information provided above is accurate
                  and I agree to be contacted by the Shilpkar team regarding
                  the Associate Partner Program.
                </span>

              </label>


              {/* SUBMIT */}

              <button
                type="submit"
                className="associate-application__submit"
              >
                BECOME AN ASSOCIATE PARTNER
                <span>→</span>
              </button>


              <p className="associate-application__note">
                By submitting this form, you agree to be contacted regarding
                the Shilpkar Associate Partner Program.
              </p>

            </div>

          </form>

        </section>

      </div>

    </main>
  );
}