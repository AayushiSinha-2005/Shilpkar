import { motion } from "framer-motion";
import images from "../../data/images";
import { Link } from "react-router-dom";
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
      path: "/franchise/dealership-application",
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

      {/* APPLY CARD — CLICKABLE */}
      {step.path ? (
        <Link
          to={step.path}
          className="join-step__card join-step__card--clickable"
        >
          <h3>{step.title}</h3>

          <div className="join-step__line" />

          <p>{step.description}</p>

          <span className="join-step__apply">
            APPLY NOW →
          </span>
        </Link>
      ) : (
        <div className="join-step__card">
          <h3>{step.title}</h3>

          <div className="join-step__line" />

          <p>{step.description}</p>
        </div>
      )}

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
{/* Floating Side Apply Button */}
<Link
  to="/franchise/dealership-application"
  className="dealership-floating-apply"
>
  <span>Apply for</span>
  <strong>Dealership</strong>
  <i>→</i>
</Link>

    </main>
  );
}