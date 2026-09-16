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

          <form className="dealership-application__form">

            {/* =========================================
                01 — PERSONAL DETAILS
            ========================================== */}
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


            {/* =========================================
                02 — PROFESSIONAL DETAILS
            ========================================== */}
            <div className="application-section">

              <div className="application-section__number">
                02 — PROFESSIONAL DETAILS
              </div>

              <h2>Your Professional Profile</h2>

              <div className="application-grid">

                <div className="application-field">
                  <label>Your Profession *</label>

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
                    <option>Student</option>
                    <option>Other</option>
                  </select>
                </div>


                <div className="application-field">
                  <label>Company / Firm Name</label>

                  <input
                    type="text"
                    placeholder="Enter company / firm name"
                  />
                </div>


                <div className="application-field">
                  <label>Professional Experience</label>

                  <input
                    type="text"
                    placeholder="Enter professional experience"
                  />
                </div>


                <div className="application-field">
                  <label>Experience Level</label>

                  <select defaultValue="">
                    <option value="">
                      Select an option
                    </option>

                    <option>Beginner</option>
                    <option>1–3 Years</option>
                    <option>3–5 Years</option>
                    <option>5–10 Years</option>
                    <option>10+ Years</option>
                  </select>
                </div>

              </div>

            </div>


            {/* =========================================
                03 — LOCATION
            ========================================== */}
            <div className="application-section">

              <div className="application-section__number">
                03 — LOCATION
              </div>

              <h2>Where Are You Based?</h2>

              <div className="application-grid">

                <div className="application-field">
                  <label>City *</label>

                  <input
                    type="text"
                    placeholder="Enter your city"
                  />
                </div>


                <div className="application-field">
                  <label>State *</label>

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

              </div>

            </div>


            {/* =========================================
                04 — TRAINING DETAILS
            ========================================== */}
            <div className="application-section">

              <div className="application-section__number">
                04 — TRAINING DETAILS
              </div>

              <h2>Tell Us About Your Training Needs</h2>

              <div className="application-grid">

                <div className="application-field">
                  <label>
                    What Are You Interested In? *
                  </label>

                  <select defaultValue="">
                    <option value="">
                      Select an option
                    </option>

                    <option>Product Knowledge</option>
                    <option>
                      Technical & Installation Training
                    </option>
                    <option>
                      Design & Visualization
                    </option>
                    <option>Sales Training</option>
                    <option>Business Training</option>
                    <option>
                      Complete Training Program
                    </option>
                  </select>
                </div>


                <div className="application-field">
                  <label>
                    Preferred Training Mode *
                  </label>

                  <select defaultValue="">
                    <option value="">
                      Select an option
                    </option>

                    <option>Offline Training</option>
                    <option>Online Training</option>
                    <option>Hybrid Training</option>
                  </select>
                </div>


                <div className="application-field">
                  <label>
                    Preferred Training
                  </label>

                  <select defaultValue="">
                    <option value="">
                      Select an option
                    </option>

                    <option>Product Training</option>
                    <option>Technical Training</option>
                    <option>Design Training</option>
                    <option>
                      Sales & Business Training
                    </option>
                    <option>Complete Training</option>
                  </select>
                </div>

              </div>


              <div className="application-field application-field--full">

                <label>
                  What Do You Expect From The Training?
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us what you expect from the training..."
                />

              </div>

            </div>


            {/* =========================================
                05 — CONTACT PREFERENCE
            ========================================== */}
            <div className="application-section">

              <div className="application-section__number">
                05 — CONTACT PREFERENCE
              </div>

              <h2>Let's Connect</h2>

              <div className="application-grid">

                <div className="application-field">

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


              {/* CONFIRMATION */}

              <label className="application-checkbox">

                <input type="checkbox" />

                <span>
                  I confirm that the information provided above
                  is accurate and I agree to be contacted by the
                  SHILPKAR team regarding the Training Program.
                </span>

              </label>


              {/* SUBMIT */}

              <button
                type="submit"
                className="application-submit"
              >
                APPLY FOR TRAINING
                <span>→</span>
              </button>


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