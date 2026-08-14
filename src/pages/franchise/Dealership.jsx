import { motion } from "framer-motion";
import images from "../../data/images";
import "./Dealership.css";

export default function Dealership() {
  return (
    <main className="dealership-page">

      {/* =========================
    SECTION 1 — HERO
========================= */}
<section className="dealership-hero">

  {/* Background Image */}
  <div className="dealership-hero__image">
    <img
      src={images.shilpkarDealershipHero}
      alt="Shilpkar Dealership"
    />
  </div>

  {/* Dark Overlay */}
  <div className="dealership-hero__overlay" />

  {/* Center Buttons */}
  <div className="dealership-hero__actions">
  <a
  href="/franchise/dealership-application"
  className="dealership-btn dealership-btn--primary"
>
  BECOME A DEALER
  <span>→</span>
</a>

  <a
    href="/dealership-brochure.pdf"
    className="dealership-btn dealership-btn--secondary"
    target="_blank"
    rel="noopener noreferrer"
  >
    DOWNLOAD PDF
    <span>↓</span>
  </a>
</div>

  {/* Bottom Scroll Indicator */}
  <div className="dealership-hero__scroll">
    <span />
    <p>Scroll</p>
  </div>
</section>
{/* =========================
    DEALER APPLICATION FORM
========================= */}

<section id="dealer-form" className="dealer-form-section">
  <div className="dealer-form-wrapper">

    {/* LEFT SIDE */}
    <aside className="dealer-form-info">

      <div className="dealer-form-brand">
        NOOH ELEVATED LIVING LLP
      </div>

      <h2>
        Dealer <span>Application</span>
      </h2>

      <div className="dealer-form-gold-line" />

      <p className="dealer-form-intro">
        Take the first step towards becoming an authorized NOOH dealer
        in your city.
      </p>


      <div className="dealer-info-divider" />


      <span className="dealer-info-label">
        DEALERSHIP PROGRAM
      </span>

      <h3>
        Become A <span>NOOH</span> Dealer
      </h3>

      <p>
        Fill in your details and our team will connect with you to
        discuss the dealership opportunity, territory and next steps.
      </p>


      {/* INVESTMENT BOX */}

      <div className="dealer-investment-box">

        <span>DEALERSHIP INVESTMENT</span>

        <h4>
          ₹1,00,000 <small>+ GST</small>
        </h4>

        <div className="dealer-investment-line" />

        <h5>
          One City. One Dealership.
        </h5>

        <p>
          Build your NOOH business with premium products,
          training and dedicated support.
        </p>

      </div>


      <div className="dealer-review-note">
        <span>✦</span>

        <p>
          Our team will review your application and contact you
          regarding the dealership opportunity.
        </p>
      </div>

    </aside>


    {/* RIGHT SIDE FORM */}

    <div className="dealer-form-content">

      <form className="dealer-application-form">


        {/* =====================
            01 PERSONAL DETAILS
        ====================== */}

        <div className="dealer-form-block">

          <span className="dealer-section-number">
            01 — PERSONAL DETAILS
          </span>

          <h2>Tell Us About Yourself</h2>


          <div className="dealer-form-grid">

            <div className="dealer-field">
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="dealer-field">
              <label>Mobile Number *</label>
              <input
                type="tel"
                placeholder="Enter mobile number"
              />
            </div>

            <div className="dealer-field">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="Enter email address"
              />
            </div>

            <div className="dealer-field">
              <label>WhatsApp Number</label>
              <input
                type="tel"
                placeholder="Enter WhatsApp number"
              />
            </div>

          </div>

        </div>



        {/* =====================
            02 BUSINESS DETAILS
        ====================== */}

        <div className="dealer-form-block">

          <span className="dealer-section-number">
            02 — BUSINESS DETAILS
          </span>

          <h2>Your Business</h2>


          <div className="dealer-form-grid">

            <div className="dealer-field">
              <label>Business / Company Name *</label>

              <input
                type="text"
                placeholder="Enter business name"
              />
            </div>


            <div className="dealer-field">
              <label>Current Business Type *</label>

              <select>
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


            <div className="dealer-field">
              <label>Years In Business</label>

              <input
                type="text"
                placeholder="e.g. 5 years"
              />
            </div>


            <div className="dealer-field">
              <label>Website / Instagram</label>

              <input
                type="text"
                placeholder="Website or Instagram URL"
              />
            </div>

          </div>

        </div>



        {/* =====================
            03 LOCATION
        ====================== */}

        <div className="dealer-form-block">

          <span className="dealer-section-number">
            03 — LOCATION
          </span>

          <h2>Your Territory</h2>


          <div className="dealer-form-grid">

            <div className="dealer-field">
              <label>State *</label>

              <select>
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


            <div className="dealer-field">
              <label>Current City *</label>

              <input
                type="text"
                placeholder="Enter your current city"
              />
            </div>


            <div className="dealer-field">
              <label>Preferred Dealership City *</label>

              <input
                type="text"
                placeholder="Enter preferred city"
              />
            </div>

          </div>


          <div className="dealer-field dealer-field--full">

            <label>Office / Showroom Address</label>

            <textarea
              placeholder="Enter your office or showroom address"
              rows="4"
            />

          </div>

        </div>



        {/* =====================
            04 BUSINESS PROFILE
        ====================== */}

        <div className="dealer-form-block">

          <span className="dealer-section-number">
            04 — BUSINESS PROFILE
          </span>

          <h2>Tell Us More</h2>


          <div className="dealer-form-grid">

            <div className="dealer-field">
              <label>
                Do You Have Interior / Architecture / Construction Experience?
              </label>

              <select>
                <option value="">Select an option</option>
                <option>Yes — More than 5 years</option>
                <option>Yes — 2 to 5 years</option>
                <option>Yes — Less than 2 years</option>
                <option>No</option>
              </select>
            </div>


            <div className="dealer-field">
              <label>Existing Client Network</label>

              <input
                type="text"
                placeholder="Tell us about your client network"
              />
            </div>


            <div className="dealer-field">
              <label>Expected Monthly Business</label>

              <select>
                <option value="">Select an option</option>
                <option>Below ₹5 Lakh</option>
                <option>₹5–10 Lakh</option>
                <option>₹10–25 Lakh</option>
                <option>₹25 Lakh+</option>
                <option>Not Sure</option>
              </select>
            </div>

          </div>


          <div className="dealer-field dealer-field--full">

            <label>
              Why Do You Want To Become A NOOH Dealer?
            </label>

            <textarea
              rows="5"
              placeholder="Tell us why you are interested in becoming a NOOH dealer..."
            />

          </div>

        </div>



        {/* =====================
            05 NEXT STEP
        ====================== */}

        <div className="dealer-form-block">

          <span className="dealer-section-number">
            05 — NEXT STEP
          </span>

          <h2>Let's Connect</h2>


          <div className="dealer-form-grid">

            <div className="dealer-field">
              <label>
                Are You Ready For The Dealership Investment? *
              </label>

              <select>
                <option value="">Select an option</option>
                <option>Yes, I am ready</option>
                <option>I would like to discuss first</option>
                <option>I need more information</option>
              </select>
            </div>


            <div className="dealer-field">
              <label>Preferred Callback Time</label>

              <select>
                <option value="">Select an option</option>
                <option>Morning — 9 AM to 12 PM</option>
                <option>Afternoon — 12 PM to 4 PM</option>
                <option>Evening — 4 PM to 7 PM</option>
              </select>
            </div>

          </div>


          <label className="dealer-checkbox">

            <input type="checkbox" />

            <span>
              I confirm that the information provided above is accurate
              and I agree to be contacted by the NOOH team regarding
              the dealership opportunity.
            </span>

          </label>


          <button
            type="submit"
            className="dealer-submit-btn"
          >
            SUBMIT DEALER APPLICATION
            <span>→</span>
          </button>


          <p className="dealer-submit-note">
            By submitting this form, you agree to be contacted regarding
            the NOOH Dealership Program.
          </p>

        </div>

      </form>

    </div>

  </div>
</section>

{/* =========================
    SECTION 3 — WHAT YOU RECEIVE
========================= */}
<section className="dealership-benefits" id="how-to-join">

  <div className="container">

    {/* =========================
        SECTION HEADING
    ========================= */}
    <motion.div
      className="benefits-heading"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >

      <div className="benefits-eyebrow">
        <span></span>
        WHAT YOU RECEIVE
        <span></span>
      </div>

      <h2>
        Dealership <span>Benefits</span>
      </h2>

      <div className="benefits-heading-line"></div>

    </motion.div>


    {/* =========================
        BENEFITS GRID
    ========================= */}
    <div className="benefits-grid">

      {[
        {
          number: "01",
          icon: "◈",
          title: "Raw Material",
          value: "₹50,000",
          description:
            "Worth of raw material included in the dealership package.",
        },
        {
          number: "02",
          icon: "⚒",
          title: "Professional Tool Kit",
          value: "₹25,000",
          description:
            "Professional installation tool kit worth ₹25,000.",
        },
        {
          number: "03",
          icon: "▣",
          title: "Display Kit",
          value: "₹5,000",
          description:
            "Stretch Ceiling Display Kit worth ₹5,000.",
        },
        {
          number: "04",
          icon: "✦",
          title: "Professional Training",
          value: "₹20,000 Worth",
          description:
            "One person — Complete Installation Training. One person — Business Development & Sales Training.",
        },
        {
          number: "05",
          icon: "◉",
          title: "Dedicated Manager",
          value: "",
          description:
            "Every dealer receives a dedicated relationship manager for technical support, project queries, material guidance, order processing, business assistance and customer support.",
        },
        {
          number: "06",
          icon: "✦",
          title: "Official Authorization",
          value: "",
          description:
            "Dealers receive Authorized Dealership Certificate, Raw Material Price List and Dealer Support Documents.",
        },
        {
          number: "07",
          icon: "◇",
          title: "Material Purchase",
          value: "",
          description:
            "Dealers can purchase raw materials at dealer prices according to the official company price list.",
        },
        {
          number: "08",
          icon: "⌖",
          title: "Exclusive Territory",
          value: "",
          description:
            "One City — One Authorized Dealership. Exclusive dealership rights are provided city-wise, subject to company approval.",
        },
        {
          number: "09",
          icon: "◎",
          title: "Company Website Visibility",
          value: "",
          description:
            "Your dealer name and city will be showcased on the official Shilpkar company website.",
        },
        {
          number: "10",
          icon: "↗",
          title: "100% Profit & Margin",
          value: "",
          description:
            "Associates and dealers can earn 100% profit and margin on material and services.",
        },
        {
          number: "11",
          icon: "◫",
          title: "Product Training & Upgradation",
          value: "",
          description:
            "Receive regular product training and timely updates on new products, technologies and solutions.",
        },
        {
          number: "12",
          icon: "◇",
          title: "Business Development",
          value: "",
          description:
            "Get access to regular business development guidance and training programs designed.",
        },
        {
          number: "13",
          icon: "⚒",
          title: "Installation Support",
          value: "",
          description:
            "Get professional installation support from experienced company technicians whenever required.",
        },
        {
          number: "14",
          icon: "◈",
          title: "Skilled Technician Training",
          value: "",
          description:
            "Professional training to develop skilled technicians for Shilpkar product installation, technical execution and on-site project requirements.",
        },
      ].map((benefit, index) => (

        <motion.div
          className="benefit-card"
          key={benefit.number}
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: index * 0.06,
          }}
        >

          <div className="benefit-top">

            <span className="benefit-number">
              {benefit.number}
            </span>

            <div className="benefit-icon">
              {benefit.icon}
            </div>

          </div>


          <div className="benefit-line"></div>


          <h3>
            {benefit.title}
          </h3>


          {benefit.value && (
            <div className="benefit-value">
              {benefit.value}
            </div>
          )}


          <p>
            {benefit.description}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* =========================================================
    SECTION 4 — DEALER MATERIALS
========================================================= */}

<section className="dealer-materials">

  <div className="container">

    {/* =========================
        HEADING
    ========================== */}

    <motion.div
      className="dealer-materials__heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >

      <div className="dealer-materials__eyebrow">
        <span />
        DEALER MATERIALS
        <span />
      </div>

      <h2>
        Stretch Ceiling <span>Material & Pricing</span>
      </h2>

      <div className="dealer-materials__line" />

    </motion.div>


    {/* =========================
        MAIN MATERIALS LAYOUT
    ========================== */}

    <div className="dealer-materials__layout">

      {/* =========================
          LEFT — PRICE LIST
      ========================== */}

      <motion.div
        className="dealer-materials__price-panel"
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
      >

        <div className="dealer-materials__panel-label">
          PRODUCT LIST & PRICING
        </div>

        <h3>
          Dealer Price List
        </h3>

        <div className="dealer-materials__small-line" />


        {/* FABRIC MATERIALS */}

        <div className="material-group">

          <div className="material-group__title">
            <span>◈</span>
            FABRIC MATERIALS
          </div>

          <div className="material-row">
            <span>White Fabric 120 Inch</span>
            <strong>₹35 – 45 <small>/ Sqft</small></strong>
          </div>

          <div className="material-row">
            <span>White Fabric 196 Inch</span>
            <strong>₹45 – 55 <small>/ Sqft</small></strong>
          </div>

          <div className="material-row">
            <span>UV Printed Fabric 120 Inch</span>
            <strong>₹55 – 65 <small>/ Sqft</small></strong>
          </div>

          <div className="material-row">

            <span>
              <b className="material-new">NEW</b>
              UV Printed Fabric 196 Inch
            </span>

            <strong>₹80 – 90 <small>/ Sqft</small></strong>

          </div>

          <div className="material-row">

            <span>
              <b className="material-new">NEW</b>
              UV Printed Fabric 196 Inch
            </span>

            <strong>₹120 <small>/ Sqft</small></strong>

          </div>

        </div>


        {/* LED COMPONENTS */}

        <div className="material-group">

          <div className="material-group__title">
            <span>◉</span>
            LED COMPONENTS
          </div>

          <div className="material-row">
            <span>LED Direct Block Light</span>
            <strong>₹35 <small>/ Pcs</small></strong>
          </div>

          <div className="material-row">
            <span>LED 8 Eye Block Light (Dimmable & Tunable)</span>
            <strong>₹75 <small>/ Pcs</small></strong>
          </div>

          <div className="material-row">
            <span>RGBW 6 Eye Block LED <b className="material-new">NEW</b></span>
            <strong>₹75 <small>/ Pcs</small></strong>
          </div>

          <div className="material-row">
            <span>LED Block Light Controller</span>
            <strong>₹1250 <small>/ Pcs</small></strong>
          </div>

          <div className="material-row">
            <span>LED Block Light Remote</span>
            <strong>₹850 <small>/ Pcs</small></strong>
          </div>

        </div>


        {/* INSTALLATION ACCESSORIES */}

        <div className="material-group">

          <div className="material-group__title">
            <span>⚒</span>
            INSTALLATION ACCESSORIES
          </div>

          <div className="material-row">
            <span>Profile PVC 48 Inch</span>
            <strong>₹50 <small>/ Running Foot</small></strong>
          </div>

          <div className="material-row">
            <span>Harpoon</span>
            <strong>₹15 <small>/ Running Foot</small></strong>
          </div>

        </div>


        {/* PREMIUM PRODUCT */}

        <div className="material-group">

          <div className="material-group__title">
            <span>◆</span>
            PREMIUM PRODUCT
          </div>

          <div className="material-row">
            <span>2×2 Backlit Printed Panel</span>
            <strong>₹1800 <small>/ Panel</small></strong>
          </div>

        </div>

      </motion.div>


      {/* =========================
          RIGHT — WHY CHOOSE US
      ========================== */}

      <motion.div
        className="dealer-materials__why-panel"
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >

        <div className="dealer-materials__panel-label">
          WHY CHOOSE US
        </div>

        <h3>
          Why Choose Our <span>Materials?</span>
        </h3>

        <div className="dealer-materials__small-line" />


        {[
          ["✦", "Premium Quality Guaranteed",
            "Quality-focused materials for premium projects."],

          ["▣", "Factory Direct Pricing",
            "Competitive dealer pricing directly from the source."],

          ["◈", "Consistent Stock Supply",
            "Reliable availability to support your ongoing projects."],

          ["➜", "Fast & Safe Delivery",
            "Efficient and secure material delivery."],

          ["◉", "Technical Support",
            "Professional technical assistance whenever required."],
        ].map(([icon, title, description]) => (

          <div className="material-benefit" key={title}>

            <div className="material-benefit__icon">
              {icon}
            </div>

            <div>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>

          </div>

        ))}


        {/* BOTTOM MINI HIGHLIGHTS */}

        <div className="dealer-materials__highlights">

          <div>
            <span>⚒</span>
            <strong>
              Professional<br />
              Installation Support
            </strong>
          </div>

          <div>
            <span>◉</span>
            <strong>
              Training &<br />
              Workshop
            </strong>
          </div>

          <div>
            <span>▣</span>
            <strong>
              Free<br />
              Dealers
            </strong>
          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>
{/* =========================================================
    SECTION 5 — COMPLETE SUPPORT
========================================================= */}

<section className="dealership-support">

  <div className="container">

    {/* Section Heading */}

    <motion.div
      className="dealership-section-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >

      <div className="dealership-section-eyebrow">
        <span />
        COMPLETE SUPPORT
        <span />
      </div>

      <h2>
        Support At <span>Every Step</span>
      </h2>

      <div className="dealership-section-line" />

      <p>
        From training and installation to marketing and after-sales
        support, Shilpkar stands with you throughout your dealership journey.
      </p>

    </motion.div>


    {/* Support Cards */}

    <div className="support-grid">

      {[
        {
          number: "01",
          title: "Training & Knowledge",
          description:
            "Product, installation and business training to help you confidently represent Shilpkar.",
        },
        {
          number: "02",
          title: "Installation Support",
          description:
            "Installation guidance and technical assistance to support smooth project execution.",
        },
        {
          number: "03",
          title: "Marketing Support",
          description:
            "Marketing and promotional support to help build awareness and establish your local presence.",
        },
        {
          number: "04",
          title: "Supply Chain Support",
          description:
            "Consistent product availability and timely supply to support your customer projects.",
        },
        {
          number: "05",
          title: "After-Sales Support",
          description:
            "Continued assistance and customer support even after project installation.",
        },
        {
          number: "06",
          title: "Business Growth",
          description:
            "Guidance and brand support to help you build and grow your Shilpkar dealership.",
        },
      ].map((card, index) => (

        <motion.div
          className="support-card"
          key={card.number}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="support-card__top">

            <span className="support-card__number">
              {card.number}
            </span>

            <span className="support-card__icon">
              ✦
            </span>

          </div>

          <div className="support-card__line" />

          <h3>{card.title}</h3>

          <p>{card.description}</p>

        </motion.div>

      ))}

    </div>

  </div>

</section>


{/* =========================================================
    SECTION 6 — WHO CAN JOIN
========================================================= */}

<section className="dealership-who">

  <div className="container">

    <div className="who-grid">

      {/* LEFT */}

      <motion.div
        className="who-content"
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >

        <div className="dealership-section-eyebrow">
          <span />
          WHO CAN JOIN
        </div>

        <h2>
          Is Shilpkar Dealership
          <br />
          <span>Right For You?</span>
        </h2>

        <div className="dealership-section-line" />

        <p>
          The Shilpkar Dealership opportunity is designed for
          entrepreneurs and professionals who are passionate about
          quality products and customer satisfaction.
        </p>


        {/* Highlight */}

        <div className="who-highlight">

          <h3>
            Build. Represent. Grow.
          </h3>

          <p>
            Become part of the Shilpkar business network and build
            your presence in your city.
          </p>

        </div>

      </motion.div>


      {/* RIGHT — CATEGORIES */}

      <div className="who-categories">

        {[
          {
            icon: "◈",
            title: "Retailers",
          },
          {
            icon: "✦",
            title: "Interior Designers",
          },
          {
            icon: "◇",
            title: "Architects",
          },
          {
            icon: "⌂",
            title: "Civil Engineers",
          },
          {
            icon: "▣",
            title: "Contractors",
          },
          {
            icon: "◆",
            title: "Entrepreneurs",
          },
        ].map((item, index) => (

          <motion.div
            className="who-card"
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: index * 0.07,
            }}
          >

            <div className="who-card__icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</section>

{/* =========================================================
    SECTION 7 — HOW TO JOIN
========================================================= */}

<section className="dealership-how">

  <div className="container">

    {/* Heading */}
    <motion.div
      className="dealership-section-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >

      <div className="dealership-section-eyebrow">
        <span />
        HOW TO JOIN
        <span />
      </div>

      <h2>
        Your Journey With <span>Shilpkar</span>
      </h2>

      <div className="dealership-section-line" />

      <p>
        Four simple steps to begin your dealership journey with Shilpkar.
      </p>

    </motion.div>


    {/* Journey */}
    <div className="join-journey">

      {[
        {
          number: "01",
          title: "Apply",
          description:
            "Submit your interest and basic details to begin your dealership journey with Shilpkar.",
        },
        {
          number: "02",
          title: "Discussion",
          description:
            "Connect with the Shilpkar team and discuss the dealership opportunity and your business requirements.",
        },
        {
          number: "03",
          title: "Agreement",
          description:
            "Complete the agreement and investment process to officially begin your association with Shilpkar.",
        },
        {
          number: "04",
          title: "Get Started",
          description:
            "Receive your setup and training and start building your Shilpkar dealership business.",
        },
      ].map((step, index) => (

        <motion.div
          className="join-step"
          key={step.number}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Number */}
          <div className="join-step__number">
            {step.number}
          </div>

          {/* Card */}
          <div className="join-step__card">

            <h3>{step.title}</h3>

            <div className="join-step__line" />

            <p>{step.description}</p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* =========================================================
    SECTION 8 — DEALERSHIP FAQ
========================================================= */}

<section className="dealership-faq">

  <div className="container">

    {/* Heading */}

    <motion.div
      className="dealership-section-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >

      <div className="dealership-section-eyebrow">
        <span />
        FREQUENTLY ASKED QUESTIONS
        <span />
      </div>

      <h2>
        Dealership <span>FAQ</span>
      </h2>

      <div className="dealership-section-line" />

    </motion.div>


    {/* FAQ */}

    <div className="faq-list">

      {[
        {
          question: "Is there any renewal fee?",
          answer:
            "The dealership program is presented as a one-time investment, with no renewal fee mentioned in the program information.",
        },
        {
          question: "Will I get exclusive rights?",
          answer:
            "Yes. The dealership program follows the One City, One Dealership model, providing an exclusive territory for the assigned city.",
        },
        {
          question: "Do you provide training?",
          answer:
            "Yes. Shilpkar provides product, installation and business training to help you and your team get started.",
        },
        {
          question: "What support will I receive?",
          answer:
            "The dealership program includes marketing, installation, supply and after-sales support.",
        },
        {
          question: "Who can become a Shilpkar dealer?",
          answer:
            "The opportunity is designed for entrepreneurs and professionals interested in building a Shilpkar business and serving customers with quality products.",
        },
      ].map((faq, index) => (

        <motion.details
          className="faq-item"
          key={faq.question}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
        >

          <summary className="faq-question">

            <h3>
              {faq.question}
            </h3>

            <span className="faq-icon">
              +
            </span>

          </summary>

          <div className="faq-answer">

            <p>
              {faq.answer}
            </p>

          </div>

        </motion.details>

      ))}

    </div>

  </div>

</section>

    </main>
  );
}