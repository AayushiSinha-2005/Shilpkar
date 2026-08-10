import { motion } from "framer-motion";
import images from "../../data/images";
import "./Dealership.css";

export default function Dealership() {
  return (
    <main className="dealership-page">

      {/* =========================
          SECTION 1 — HERO
      ========================== */}
      <section className="dealership-hero">

        {/* Background Image */}
        <div className="dealership-hero__image">
          <img
            src={images.servicesCover}
            alt="Shilpkar premium interior solutions"
          />
        </div>

        {/* Dark Luxury Overlay */}
        <div className="dealership-hero__overlay" />

        {/* Decorative Gold Line */}
        <div className="dealership-hero__line dealership-hero__line--left" />
        <div className="dealership-hero__line dealership-hero__line--right" />

        {/* Content */}
        <div className="container dealership-hero__container">

          <motion.div
            className="dealership-hero__content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <motion.div
              className="dealership-hero__eyebrow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >
              <span />
              SHILPKAR FACTORY
              <span />
            </motion.div>

            <motion.h1
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    delay: 0.25,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <span className="dealership-title-light">Dealership</span>{" "}
  <span className="dealership-title-gold">Program</span>
</motion.h1>
            <motion.div
              className="dealership-hero__gold-line"
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
            >
              One City. One Dealership.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
            >
              Build your own Shilpkar business with premium interior
              solutions, professional training and dedicated business support.
            </motion.p>

            <motion.div
              className="dealership-hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
              }}
            >
              <a
  href="#investment"
  className="dealership-btn dealership-btn--primary"
>
  Explore Investment
  <span>→</span>
</a>

<a
  href="#how-to-join"
  className="dealership-btn dealership-btn--outline"
>
  How To Join
  <span>→</span>
</a>
            </motion.div>

          </motion.div>

        </div>

        {/* Bottom Scroll Indicator */}
        <div className="dealership-hero__scroll">
          <span />
          <p>Scroll</p>
        </div>

      </section>

      {/* =========================
    SECTION 2 — DEALERSHIP ADVANTAGES
========================== */}
<section className="dealership-advantages">

  <div className="container">

    <motion.div
      className="dealership-advantages__header"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="dealership-section-label">
        <span />
        THE DEALERSHIP ADVANTAGE
        <span />
      </div>

      <h2>
        Built for <em>Growth.</em>
        <br />
        Designed for <em>Success.</em>
      </h2>

      <p>
        Partner with Shilpkar Factory and gain access to premium
        interior solutions, dedicated business support and an
        exclusive opportunity to build your market.
      </p>
    </motion.div>


    <div className="dealership-advantages__grid">

  {/* CARD 01 */}
  <motion.div
    className="advantage-card"
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: 0.05 }}
  >
    <div className="advantage-card__number">01</div>

    <div className="advantage-card__icon">✦</div>

    <h3>Trusted Brand</h3>

    <p>
      High-quality products with proven market demand.
    </p>

    <div className="advantage-card__line" />
  </motion.div>


  {/* CARD 02 */}
  <motion.div
    className="advantage-card"
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: 0.12 }}
  >
    <div className="advantage-card__number">02</div>

    <div className="advantage-card__icon">↗</div>

    <h3>High Profit Potential</h3>

    <p>
      Excellent margins and recurring business opportunities.
    </p>

    <div className="advantage-card__line" />
  </motion.div>


  {/* CARD 03 */}
  <motion.div
    className="advantage-card"
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: 0.19 }}
  >
    <div className="advantage-card__number">03</div>

    <div className="advantage-card__icon">✦</div>

    <h3>Complete Support</h3>

    <p>
      Training, marketing, installation guidance and
      after-sales support.
    </p>

    <div className="advantage-card__line" />
  </motion.div>


  {/* CARD 04 */}
  <motion.div
    className="advantage-card"
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: 0.26 }}
  >
    <div className="advantage-card__number">04</div>

    <div className="advantage-card__icon">◎</div>

    <h3>Exclusive Territory</h3>

    <p>
      One City, One Dealership — you are the only one.
    </p>

    <div className="advantage-card__line" />
  </motion.div>


  {/* CARD 05 */}
  <motion.div
    className="advantage-card"
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: 0.33 }}
  >
    <div className="advantage-card__number">05</div>

    <div className="advantage-card__icon">◈</div>

    <h3>Timely Supply</h3>

    <p>
      Consistent product availability and fast delivery.
    </p>

    <div className="advantage-card__line" />
  </motion.div>

</div>

  </div>

</section>

{/* =========================
    SECTION 2 — INVESTMENT
========================= */}
<section className="dealership-investment" id="investment">

  <div className="container">

    {/* Section Heading */}
    <motion.div
      className="investment-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >

      <div className="investment-eyebrow">
        <span></span>
        INVESTMENT
        <span></span>
      </div>

      <h2>
        Start Your <span>Shilpkar Business</span>
      </h2>

      <div className="investment-heading-line"></div>

      <p>
        A complete dealership package designed to help you start
        your Shilpkar business with the essential resources required
        to get started.
      </p>

    </motion.div>


    {/* Investment Main Grid */}
    <motion.div
      className="investment-grid"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9 }}
    >

      {/* =====================
          TOTAL INVESTMENT
      ====================== */}
      <div className="investment-total">

        <div className="investment-label">
          TOTAL INVESTMENT
        </div>

        <div className="investment-price">
          ₹1,00,000
          <small> + GST</small>
        </div>

        {/* Requested small line */}
        <div className="investment-note">
          <span></span>
          Investment: ₹1,00,000 + GST
          <span></span>
        </div>

        <div className="investment-divider"></div>

        <p>
          The dealership program requires a one-time investment of
          ₹1,00,000 + GST.
        </p>

      </div>


      {/* =====================
          RAW MATERIAL
      ====================== */}
      <div className="investment-card">

        <div className="investment-number">
          01
        </div>

        <div className="investment-icon">
          ◈
        </div>

        <div className="investment-card-price">
          ₹50,000
        </div>

        <h3>RAW MATERIAL</h3>

        <div className="investment-card-line"></div>

        <p>
          Initial raw material included as part of the dealership
          package.
        </p>

      </div>


      {/* =====================
          TOOL KIT
      ====================== */}
      <div className="investment-card">

        <div className="investment-number">
          02
        </div>

        <div className="investment-icon">
          ⚒
        </div>

        <div className="investment-card-price">
          ₹25,000
        </div>

        <h3>TOOL KIT</h3>

        <div className="investment-card-line"></div>

        <p>
          Professional tool kit included to support dealership
          operations.
        </p>

      </div>


      {/* =====================
          DISPLAY KIT
      ====================== */}
      <div className="investment-card">

        <div className="investment-number">
          03
        </div>

        <div className="investment-icon">
          ▣
        </div>

        <div className="investment-card-price">
          ₹5,000
        </div>

        <h3>DISPLAY KIT</h3>

        <div className="investment-card-line"></div>

        <p>
          Display kit included to help showcase Shilpkar products
          professionally.
        </p>

      </div>

    </motion.div>


    {/* =====================
        BOTTOM SUMMARY BAR
    ====================== */}
    <motion.div
      className="investment-summary"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >

      <div>
        <span>01</span>
        <strong>RAW MATERIAL</strong>
        <b>₹50,000</b>
      </div>

      <div>
        <span>02</span>
        <strong>TOOL KIT</strong>
        <b>₹25,000</b>
      </div>

      <div>
        <span>03</span>
        <strong>DISPLAY KIT</strong>
        <b>₹5,000</b>
      </div>

    </motion.div>

  </div>

</section>

{/* =========================
    SECTION 3 — WHAT YOU GET
========================= */}
<section className="dealership-benefits" id="how-to-join">

  <div className="container">

    {/* Section Heading */}
    <motion.div
      className="benefits-heading"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >

      <div className="benefits-eyebrow">
        <span></span>
        WHAT YOU GET
        <span></span>
      </div>

      <h2>
        Everything You Need <span>To Begin</span>
      </h2>

      <div className="benefits-heading-line"></div>

    </motion.div>


    {/* Benefits Cards */}
    <div className="benefits-grid">

      {/* 01 */}
      <motion.div
        className="benefit-card"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.05 }}
      >

        <div className="benefit-top">
          <span className="benefit-number">01</span>

          <div className="benefit-icon">
            ✦
          </div>
        </div>

        <div className="benefit-line"></div>

        <h3>High Quality Products</h3>

        <p>
          Access high-quality Shilpkar products designed to meet
          market demand.
        </p>

      </motion.div>


      {/* 02 */}
      <motion.div
        className="benefit-card"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.12 }}
      >

        <div className="benefit-top">
          <span className="benefit-number">02</span>

          <div className="benefit-icon">
            ✦
          </div>
        </div>

        <div className="benefit-line"></div>

        <h3>Training & Installation Support</h3>

        <p>
          Receive training and installation guidance to help you
          and your team get started.
        </p>

      </motion.div>


      {/* 03 */}
      <motion.div
        className="benefit-card"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.19 }}
      >

        <div className="benefit-top">
          <span className="benefit-number">03</span>

          <div className="benefit-icon">
            ✦
          </div>
        </div>

        <div className="benefit-line"></div>

        <h3>Marketing & Promotional Support</h3>

        <p>
          Get marketing and promotional support to help build
          your local Shilpkar presence.
        </p>

      </motion.div>


      {/* 04 */}
      <motion.div
        className="benefit-card"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.26 }}
      >

        <div className="benefit-top">
          <span className="benefit-number">04</span>

          <div className="benefit-icon">
            ✦
          </div>
        </div>

        <div className="benefit-line"></div>

        <h3>Best Price Advantage</h3>

        <p>
          Benefit from the best price advantage available through
          the dealership program.
        </p>

      </motion.div>


      {/* 05 */}
      <motion.div
        className="benefit-card"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.33 }}
      >

        <div className="benefit-top">
          <span className="benefit-number">05</span>

          <div className="benefit-icon">
            ✦
          </div>
        </div>

        <div className="benefit-line"></div>

        <h3>Dedicated Support</h3>

        <p>
          Receive dedicated support from the Shilpkar team
          throughout your business journey.
        </p>

      </motion.div>

    </div>

  </div>

</section>

{/* =========================================================
    SECTION 4 — EXCLUSIVE TERRITORY
========================================================= */}

<section className="dealership-territory">

  <div className="container">

    <div className="territory-grid">

      {/* =========================
          LEFT CONTENT
      ========================== */}

      <motion.div
        className="territory-content"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* Eyebrow */}

        <div className="territory-eyebrow">
          <span />
          EXCLUSIVE TERRITORY
          <span />
        </div>


        {/* Heading */}

        <h2>
          One City.
          <br />
          <span>One Dealership.</span>
        </h2>


        {/* Gold line */}

        <div className="territory-line" />


        {/* Description */}

        <p className="territory-description">
          Operate exclusively in your assigned city and become
          the sole Shilpkar representative in your territory.
        </p>


        {/* Highlight Card */}

        <div className="territory-card">

          <div className="territory-card__icon">
            ✦
          </div>

          <div className="territory-card__content">

            <h3>
              Your City. Your Territory.
            </h3>

            <p>
              Build your local presence with the Shilpkar brand
              and grow your business within your assigned city.
            </p>

          </div>

        </div>

      </motion.div>


      {/* =========================
          RIGHT IMAGE
      ========================== */}

      <motion.div
        className="territory-image"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.9,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <div className="territory-image__frame">

          <img
            src={images.territory}
            alt="Shilpkar Factory authorised dealership"
          />

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