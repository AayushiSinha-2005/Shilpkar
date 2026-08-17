import { motion } from "framer-motion";
import images from "../../data/images";
import "./Associate.css";

export default function Associate() {
  return (
    <main className="associate-page">

      {/* =========================================================
          HERO — ASSOCIATE PROGRAM
      ========================================================= */}

      <section className="associate-hero">

        {/* Background Image */}
        <div className="associate-hero__image">
          <img
            src={images.associateCover}
            alt="Shilpkar Associate Program"
          />
        </div>

        {/* Dark Luxury Overlay */}
        <div className="associate-hero__overlay" />

        {/* Decorative Lines */}
        <div className="associate-hero__line associate-hero__line--left" />
        <div className="associate-hero__line associate-hero__line--right" />


        {/* Content */}
        <div className="container associate-hero__container">

          <motion.div
            className="associate-hero__content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Eyebrow */}
            <motion.div
              className="associate-hero__eyebrow"
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


            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Grow With{" "}
              <span>SHILPKAR</span>
            </motion.h1>


            {/* Gold Line */}
            <motion.div
              className="associate-hero__gold-line"
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
            />


            {/* Sub Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
            >
              Partner. Promote. Profit.
            </motion.h2>


            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
            >
              Partner with Shilpkar to offer premium interior solutions
              with complete project and technical support.
            </motion.p>


            {/* Buttons */}
            <motion.div
              className="associate-hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
              }}
            >

              <a
  href="/franchise/associate-application"
  className="associate-btn associate-btn--primary"
>
  BECOME AN ASSOCIATE
  <span>→</span>
</a>


              <a
                href="#download-pdf"
                className="associate-btn associate-btn--outline"
              >
                DOWNLOAD PDF
                <span>↓</span>
              </a>

            </motion.div>

          </motion.div>

        </div>


        {/* Scroll Indicator */}
        <div className="associate-hero__scroll">
          <span />
          <p>Scroll</p>
        </div>

      </section>

   
{/* =========================================================
    SECTION 2 — INVESTMENT
========================================================= */}

<section className="associate-investment" id="investment">
  <div className="container">
    {/* Section Heading */}
    <div className="associate-section-heading">

      <div className="associate-eyebrow">
        <span />
        PARTNERSHIP OPPORTUNITY
        <span />
      </div>

      <h2>
        Start With <span>Shilpkar</span>
      </h2>

      <div className="associate-heading-line" />

    </div>


    {/* Investment Box */}
    <div className="associate-investment__box">

      {/* Left Side */}
      <div className="associate-investment__main">

        <div className="associate-investment__label">
          ASSOCIATE INVESTMENT
        </div>

        <div className="associate-investment__price">
          FREE
        </div>

        <div className="associate-investment__line" />

        <p>
          Join the Shilpkar Associate Program absolutely FREE
          and start building new business opportunities with
          zero investment.
        </p>

      </div>


      {/* Right Side */}
      <div className="associate-investment__benefits">

        {/* Benefit 01 */}
        <div className="associate-investment__benefit">

          <div className="associate-icon">
            ✦
          </div>

          <div>
            <h3>Zero Investment</h3>

            <p>
              Start your journey with Shilpkar without any
              joining fee or initial investment.
            </p>
          </div>

        </div>


        {/* Benefit 02 */}
        <div className="associate-investment__benefit">

          <div className="associate-icon">
            ✦
          </div>

          <div>
            <h3>Zero Royalty</h3>

            <p>
              No recurring royalty or additional charges
              under the Associate Program.
            </p>
          </div>

        </div>


        {/* Benefit 03 */}
        <div className="associate-investment__benefit">

          <div className="associate-icon">
            ✦
          </div>

          <div>
            <h3>Dedicated Support</h3>

            <p>
              Get professional assistance for projects,
              quotations, coordination and technical support.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* =========================================================
    SECTION — ASSOCIATE RATE LIST
========================================================= */}

<section className="associate-rate-list" id="rate-list">

  <div className="container">

    {/* =====================================================
        SECTION HEADING
    ===================================================== */}

    <div className="associate-rate-list__heading">

      <div className="associate-eyebrow">
        <span />
        ASSOCIATE RATE LIST
        <span />
      </div>

      <h2>
        Stretch Ceiling <span>Rate List</span>
      </h2>

      <p>
        Premium solutions and exclusive pricing for
        Shilpkar Associates.
      </p>

      <div className="associate-rate-list__heading-line" />

    </div>


    {/* =====================================================
        RATE GRID
    ===================================================== */}

    <div className="associate-rate-list__grid">


      {/* =================================================
          A — TRANSLUCENT STRETCH CEILING
      ================================================= */}

      <div className="associate-rate-card">

        <div className="associate-rate-card__header">

          <div className="associate-rate-card__letter">
            A
          </div>

          <h3>
            Translucent Stretch Ceiling
          </h3>

        </div>


        <div className="associate-rate-card__body">

          <div className="associate-rate-row">
            <span className="associate-rate-row__number">01</span>

            <span className="associate-rate-row__name">
              FIX CCT TRANSLUCENT 3K/4K/6K/10K
            </span>

            <span className="associate-rate-row__price">
              ₹350 / SQFT
            </span>
          </div>


          <div className="associate-rate-row">
            <span className="associate-rate-row__number">02</span>

            <span className="associate-rate-row__name">
              D&T TRANSLUCENT WITH REMOTE AND APP
            </span>

            <span className="associate-rate-row__price">
              ₹450 / SQFT
            </span>
          </div>


          <div className="associate-rate-row">
            <span className="associate-rate-row__number">03</span>

            <span className="associate-rate-row__name">
              RGBW TRANSLUCENT WITH REMOTE AND APP
            </span>

            <span className="associate-rate-row__price">
              ₹550 / SQFT
            </span>
          </div>


          <div className="associate-rate-row">
            <span className="associate-rate-row__number">04</span>

            <span className="associate-rate-row__name">
              RGBW PIXEL TRANSLUCENT WITH REMOTE AND APP
            </span>

            <span className="associate-rate-row__price">
              ₹650 / SQFT
            </span>
          </div>


          <div className="associate-rate-row">
            <span className="associate-rate-row__number">05</span>

            <span className="associate-rate-row__name">
              WOODEN STRUCTURE WITH PRIMER
            </span>

            <span className="associate-rate-row__price">
              ₹350 / SQFT
            </span>
          </div>

        </div>

      </div>


      {/* =================================================
          B — UV PRINTED STRETCH CEILING
      ================================================= */}

      <div className="associate-rate-card">

        <div className="associate-rate-card__header">

          <div className="associate-rate-card__letter">
            B
          </div>

          <h3>
            UV Printed Stretch Ceiling
          </h3>

        </div>


        <div className="associate-rate-card__body">

          <div className="associate-rate-row">
            <span className="associate-rate-row__number">01</span>

            <span className="associate-rate-row__name">
              FIX CCT PRINTED 3K/4K/6K/10K
            </span>

            <span className="associate-rate-row__price">
              ₹450 / SQFT
            </span>
          </div>


          <div className="associate-rate-row">
            <span className="associate-rate-row__number">02</span>

            <span className="associate-rate-row__name">
              D&T PRINTED WITH REMOTE AND APP
            </span>

            <span className="associate-rate-row__price">
              ₹550 / SQFT
            </span>
          </div>


          <div className="associate-rate-row">
            <span className="associate-rate-row__number">03</span>

            <span className="associate-rate-row__name">
              RGBW PRINTED WITH REMOTE AND APP
            </span>

            <span className="associate-rate-row__price">
              ₹650 / SQFT
            </span>
          </div>


          <div className="associate-rate-row">
            <span className="associate-rate-row__number">04</span>

            <span className="associate-rate-row__name">
              RGBW PIXEL PRINTED WITH REMOTE AND APP
            </span>

            <span className="associate-rate-row__price">
              ₹650 / SQFT
            </span>
          </div>


          <div className="associate-rate-row">
            <span className="associate-rate-row__number">05</span>

            <span className="associate-rate-row__name">
              WOODEN STRUCTURE WITH PRIMER
            </span>

            <span className="associate-rate-row__price">
              ₹350 / SQFT
            </span>
          </div>

        </div>

      </div>


      {/* =================================================
          C — FIBER OPTIC CEILING
      ================================================= */}

      <div className="associate-rate-card">

        <div className="associate-rate-card__header">

          <div className="associate-rate-card__letter">
            C
          </div>

          <h3>
            Fiber Optic Ceiling
          </h3>

        </div>


        <div className="associate-rate-card__body">

          <div className="associate-rate-row">
            <span className="associate-rate-row__number">01</span>

            <span className="associate-rate-row__name">
              TWINKLE + STAR CEILING WITH REMOTE AND APP
            </span>

            <span className="associate-rate-row__price">
              ₹450 / SQFT
            </span>
          </div>


          <div className="associate-rate-row">
            <span className="associate-rate-row__number">02</span>

            <span className="associate-rate-row__name">
              TWINKLE + SHOOTING STAR CEILING WITH REMOTE / APP
            </span>

            <span className="associate-rate-row__price">
              ₹550 / SQFT
            </span>
          </div>


          <div className="associate-rate-row">
            <span className="associate-rate-row__number">03</span>

            <span className="associate-rate-row__name">
              GALAXY + TWINKLE + SHOOTING WITH REMOTE AND APP
            </span>

            <span className="associate-rate-row__price">
              ₹650 / SQFT
            </span>
          </div>


          <div className="associate-rate-row">
            <span className="associate-rate-row__number">04</span>

            <span className="associate-rate-row__name">
              PRINTED MURAL CEILING + TWINKLE + SHOOTING STAR
              WITH REMOTE AND APP
            </span>

            <span className="associate-rate-row__price">
              ₹750 / SQFT
            </span>
          </div>

        </div>

      </div>


      {/* =================================================
          D — EXCLUSIVE CEILING
      ================================================= */}

      <div className="associate-rate-card">

        <div className="associate-rate-card__header">

          <div className="associate-rate-card__letter">
            D
          </div>

          <h3>
            Exclusive Ceiling
          </h3>

        </div>


       <div className="associate-rate-card__body">

  <div className="associate-rate-row">
    <span className="associate-rate-row__number">01</span>

    <span className="associate-rate-row__name">
      CLOUDWAVE TEXTILE CEILING
      <span className="associate-rate-new">NEW</span>
    </span>

    <span className="associate-rate-row__price">
      ₹550 / SQFT
    </span>
  </div>


  <div className="associate-rate-row">
    <span className="associate-rate-row__number">02</span>

    <span className="associate-rate-row__name">
      CLOUDWAVE TEXTILE CEILING WITH TRANSLUCENT
      CEILING D&T
      <span className="associate-rate-new">NEW</span>
    </span>

    <span className="associate-rate-row__price">
      ₹950 / SQFT
    </span>
  </div>


  <div className="associate-rate-row">
    <span className="associate-rate-row__number">03</span>

    <span className="associate-rate-row__name">
      WINDFABRIC TEXTILE CEILING
      <span className="associate-rate-new">NEW</span>
    </span>

    <span className="associate-rate-row__price">
      ₹750 / RUNNING FEET
    </span>
  </div>


  <div className="associate-rate-row">
    <span className="associate-rate-row__number">04</span>

    <span className="associate-rate-row__name">
      SKYLUME 22×22 PANEL
      <span className="associate-rate-new">NEW</span>
    </span>

    <span className="associate-rate-row__price">
      ₹1850 / PCS
    </span>
  </div>


  <div className="associate-rate-row">
    <span className="associate-rate-row__number">05</span>

    <span className="associate-rate-row__name">
      SUNROOF CEILING AND WINDOW WITH WOODEN STRUCTURE
      <span className="associate-rate-new">NEW</span>
    </span>

    <span className="associate-rate-row__price">
      ₹2000 / SQFT
    </span>
  </div>


  <div className="associate-rate-row">
    <span className="associate-rate-row__number">06</span>

    <span className="associate-rate-row__name">
      SUNROOF CEILING AND WINDOW WITHOUT WOODEN STRUCTURE
      <span className="associate-rate-new">NEW</span>
    </span>

    <span className="associate-rate-row__price">
      ₹750 / SQFT
    </span>
  </div>

</div>

      </div>

    </div>


    {/* =====================================================
        NOTE
    ===================================================== */}

    <div className="associate-rate-note">

      <div className="associate-rate-note__label">
        NOTE
      </div>

      <p>
        Transport, team travelling and GST will be extra.
      </p>

    </div>

  </div>

</section>

    {/* =========================================================
    SECTION 3 — ASSOCIATE BENEFITS
========================================================= */}

<section className="associate-benefits" id="opportunity">

  <div className="container">

    {/* Heading */}
    <div className="associate-section-heading">

      <div className="associate-eyebrow">
        <span />
        WHAT YOU RECEIVE
        <span />
      </div>

      <h2>
        Associate <span>Benefits</span>
      </h2>

      <div className="associate-heading-line" />

      <p className="associate-section-description">
        Become a part of the Shilpkar network and get the support,
        flexibility and professional backing needed to grow your business.
      </p>

    </div>


    {/* Cards */}
    <div className="associate-benefits__grid">

      {/* 01 */}
      <div className="associate-benefit-card">

        <div className="associate-benefit-card__top">
          <span className="associate-card-number">01</span>

          <div className="associate-card-icon">
            ▣
          </div>
        </div>

        <div className="associate-card-line" />

        <h3>
          Fixed Price List of Services
        </h3>
  
        <p>
          Access a structured and transparent project pricing system for all Shilpkar solutions, 
          helping you plan your quotations and business margins with confidence.
        </p>

      </div>


      {/* 02 */}
      <div className="associate-benefit-card">

        <div className="associate-benefit-card__top">
          <span className="associate-card-number">02</span>

          <div className="associate-card-icon">
            ◆
          </div>
        </div>

        <div className="associate-card-line" />

        <h3>
          Transparent Pricing Structure
        </h3>

        <p>
          Get access to a clear and structured project pricing
          system, giving you the flexibility to plan your
          quotations and business margins.
        </p>

      </div>


      {/* 03 */}
      <div className="associate-benefit-card">

        <div className="associate-benefit-card__top">
          <span className="associate-card-number">03</span>

          <div className="associate-card-icon">
            ◉
          </div>
        </div>

        <div className="associate-card-line" />

        <h3>
          End-to-End Project Assistance
        </h3>

        <p>
          From client discussions and site surveys to design,
          material supply, installation and execution, our team
          supports you throughout the project journey.
        </p>

      </div>


      {/* 04 */}
      <div className="associate-benefit-card">

        <div className="associate-benefit-card__top">
          <span className="associate-card-number">04</span>

          <div className="associate-card-icon">
            ♙
          </div>
        </div>

        <div className="associate-card-line" />

        <h3>
          Personal Business Support
        </h3>

        <p>
          Get dedicated assistance for client handling, quotations,
          project coordination, technical guidance and smooth
          order management.
        </p>

      </div>


      {/* 05 */}
      <div className="associate-benefit-card">

        <div className="associate-benefit-card__top">
          <span className="associate-card-number">05</span>

          <div className="associate-card-icon">
            ▤
          </div>
        </div>

        <div className="associate-card-line" />

        <h3>
          Associate Certification
        </h3>

        <p>
          Receive an official Shilpkar Associate Certificate as
          recognition of your association with the Shilpkar
          Factory brand.
        </p>

      </div>

    </div>

  </div>

</section>
{/* =========================================================
    COMPLETE PROJECT SUPPORT
========================================================= */}

<section className="associate-project-support">

  <div className="container">

    <div className="associate-project-support__grid">

      {/* =====================================================
          LEFT SIDE
      ===================================================== */}
      <div className="associate-project-support__left">

        {/* IMAGE */}
        <div className="associate-project-support__image">
          <img
            src={images.associateProjectSupport}
            alt="Shilpkar Associate Complete Project Support"
          />
        </div>


        {/* LEFT CONTENT */}
        <div className="associate-project-support__intro">

          <div className="associate-project-support__intro-icon">
            ✦
          </div>

          <h2>
            Your Project.
            <br />
            <span>Our Support.</span>
          </h2>

          <div className="associate-project-support__line" />

          <p>
            From understanding your client's requirements to final
            installation, Shilpkar provides professional assistance
            so you can confidently manage projects and focus on
            growing your business.
          </p>

          <div className="associate-project-support__intro-divider" />

          


        </div>

      </div>


      {/* =====================================================
          RIGHT SIDE — CARDS
      ===================================================== */}
      <div className="associate-project-support__right">

        <div className="associate-project-support__eyebrow">
          <span />
          COMPLETE PROJECT SUPPORT
          <span />
        </div>

        <h2 className="associate-project-support__main-heading">
          Support That Helps You
          <br />
          <span>Move Projects Forward.</span>
        </h2>

        <p className="associate-project-support__main-description">
          Shilpkar supports you across key stages of the project,
          helping you deliver a smoother and more professional
          experience to your clients.
        </p>


        {/* CARDS */}
        <div className="associate-project-support__cards">


          {/* 01 */}
          <div className="associate-project-support__card">

            <div className="associate-project-support__card-number">
              01
            </div>

            <div>
              <h3>Client Consultation</h3>

              <p>
                Assistance in understanding client requirements,
                product suitability and overall project expectations.
              </p>
            </div>

          </div>


          {/* 02 */}
          <div className="associate-project-support__card">

            <div className="associate-project-support__card-number">
              02
            </div>

            <div>
              <h3>Site Assessment</h3>

              <p>
                Guidance regarding site conditions, measurements
                and installation requirements.
              </p>
            </div>

          </div>


          {/* 03 */}
          <div className="associate-project-support__card">

            <div className="associate-project-support__card-number">
              03
            </div>

            <div>
              <h3>Design Guidance</h3>

              <p>
                Product and design support to help you present
                suitable Shilpkar solutions to your clients.
              </p>
            </div>

          </div>


          {/* 04 */}
          <div className="associate-project-support__card">

            <div className="associate-project-support__card-number">
              04
            </div>

            <div>
              <h3>Material Coordination</h3>

              <p>
                Access to required materials with coordinated
                order processing and supply support.
              </p>
            </div>

          </div>


          {/* 05 */}
          <div className="associate-project-support__card">

            <div className="associate-project-support__card-number">
              05
            </div>

            <div>
              <h3>Installation Assistance</h3>

              <p>
                Professional installation support and technical
                guidance throughout project execution.
              </p>
            </div>

          </div>


          {/* 06 */}
          <div className="associate-project-support__card">

            <div className="associate-project-support__card-number">
              06
            </div>

            <div>
              <h3>Execution Coordination</h3>

              <p>
                Coordination support to help ensure smooth
                execution and professional project delivery.
              </p>
            </div>

          </div>


          {/* 07 — FULL WIDTH */}
          <div className="associate-project-support__card associate-project-support__card--full">

            <div className="associate-project-support__card-number">
              07
            </div>

            <div>
              <h3>Technical Support</h3>

              <p>
                Get expert guidance whenever required for product
                understanding, installation and project-related
                requirements.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>




 {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="associate-how-it-works">

        <div className="associate-container">

          {/* Section Heading */}
          <div className="associate-section-heading">

            <div className="associate-eyebrow">
              <span></span>
              HOW IT WORKS
              <span></span>
            </div>

            <h2>
              A Simple Path To <strong>Success</strong>
            </h2>

            <div className="associate-heading-line"></div>

            <p>
              Bring the opportunity to Shilpkar and let our team handle
              the project journey from quotation to execution.
            </p>

          </div>


          {/* Steps */}
          <div className="associate-steps">

            {/* 01 */}
            <div className="associate-step">

              <div className="associate-step-number">
                01
              </div>

              <div className="associate-step-card">

                <div className="associate-step-icon">
                  ✦
                </div>

                <h3>
                  You Refer
                </h3>

                <div className="associate-card-line"></div>

                <p>
                  Bring a potential client or project opportunity
                  to Shilpkar.
                </p>

              </div>

            </div>


            {/* 02 */}
            <div className="associate-step">

              <div className="associate-step-number">
                02
              </div>

              <div className="associate-step-card">

                <div className="associate-step-icon">
                  ✦
                </div>

                <h3>
                  We Quote
                </h3>

                <div className="associate-card-line"></div>

                <p>
                  Our team prepares a structured quotation based
                  on the project requirements.
                </p>

              </div>

            </div>


            {/* 03 */}
            <div className="associate-step">

              <div className="associate-step-number">
                03
              </div>

              <div className="associate-step-card">

                <div className="associate-step-icon">
                  ✦
                </div>

                <h3>
                  We Execute
                </h3>

                <div className="associate-card-line"></div>

                <p>
                  Shilpkar handles the technical coordination
                  and project execution.
                </p>

              </div>

            </div>


            {/* 04 */}
            <div className="associate-step">

              <div className="associate-step-number">
                04
              </div>

              <div className="associate-step-card">

                <div className="associate-step-icon">
                  ✦
                </div>

                <h3>
                  Client Satisfied
                </h3>

                <div className="associate-card-line"></div>

                <p>
                  The project is completed professionally
                  for your client.
                </p>

              </div>

            </div>


            {/* 05 */}
            <div className="associate-step">

              <div className="associate-step-number">
                05
              </div>

              <div className="associate-step-card">

                <div className="associate-step-icon">
                  ✦
                </div>

                <h3>
                  You Earn
                </h3>

                <div className="associate-card-line"></div>

                <p>
                  Earn from the successful project you bring
                  to Shilpkar.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
    ASSOCIATE MODEL
===================================================== */}

<section className="associate-model">

  <div className="associate-container">

    <div className="associate-model__layout">

      {/* LEFT — VISUAL */}
      <div className="associate-model__visual">

        <div className="associate-model__visual-inner">

          <div className="associate-model__visual-label">
            SHILPKAR ASSOCIATE
          </div>

          <h3>
            Refer.
            <span>Connect.</span>
            Grow.
          </h3>

          <div className="associate-model__visual-line"></div>

          <p>
            Bring the opportunity.
            <br />
            Build the relationship.
          </p>

        </div>

      </div>


      {/* RIGHT — CONTENT */}
      <div className="associate-model__content">

        <div className="associate-eyebrow associate-model__eyebrow">
          <span></span>
          BUSINESS OPPORTUNITY
          <span></span>
        </div>


        <h2>
          Your Network.
          <br />
          Your <strong>Opportunity.</strong>
        </h2>


        <div className="associate-heading-line associate-model__line"></div>


        <p className="associate-model__description">
          The Shilpkar Associate Program allows you to connect
          customers and projects with our premium interior
          solutions while our team manages quotation,
          technical coordination and execution.
        </p>


        {/* BENEFITS */}

        <div className="associate-model__benefits">

          <div className="associate-model__benefit">

            <div className="associate-model__check">
              ✓
            </div>

            <div>
              <h3>No Recurring Royalty</h3>
              <p>
                Build your association without recurring
                royalty obligations.
              </p>
            </div>

          </div>


          <div className="associate-model__benefit">

            <div className="associate-model__check">
              ✓
            </div>

            <div>
              <h3>Dedicated Project Support</h3>
              <p>
                Get professional support throughout the
                project journey.
              </p>
            </div>

          </div>


          <div className="associate-model__benefit">

            <div className="associate-model__check">
              ✓
            </div>

            <div>
              <h3>Structured Pricing</h3>
              <p>
                Work with a clear pricing system for easier
                project discussions.
              </p>
            </div>

          </div>


          <div className="associate-model__benefit">

            <div className="associate-model__check">
              ✓
            </div>

            <div>
              <h3>Professional Execution</h3>
              <p>
                Shilpkar manages technical coordination and
                project execution.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* =====================================================
    WHO CAN BECOME AN ASSOCIATE
===================================================== */}

<section className="associate-who">

  <div className="associate-container">

    <div className="associate-who__layout">

      {/* LEFT CONTENT */}
      <div className="associate-who__content">

        <div className="associate-eyebrow associate-who__eyebrow">
          <span></span>
          WHO CAN BECOME AN ASSOCIATE
        </div>

        <h2>
          Turn Your <strong>Network</strong>
          <br />
          Into An <strong>Opportunity</strong>
        </h2>

        <div className="associate-heading-line associate-who__line"></div>

        <p>
          The Shilpkar Associate Program is designed for
          professionals and business networks who can connect
          customers with premium interior and architectural
          solutions.
        </p>


        {/* Highlight Box */}
        <div className="associate-who__highlight">

          <h3>
            Bring The Client.
          </h3>

          <h4>
            Let Shilpkar Handle The Project.
          </h4>

          <p>
            Build your business network with Shilpkar without
            managing the complete project execution yourself.
          </p>

        </div>

      </div>


      {/* RIGHT — CATEGORIES */}
      <div className="associate-who__categories">

        <div className="associate-who-card">

          <div className="associate-who-card__icon">
            ✦
          </div>

          <h3>Interior Designers</h3>

          <span>
            01
          </span>

        </div>


        <div className="associate-who-card">

          <div className="associate-who-card__icon">
            ◇
          </div>

          <h3>Architects</h3>

          <span>
            02
          </span>

        </div>


        <div className="associate-who-card">

          <div className="associate-who-card__icon">
            ▣
          </div>

          <h3>Contractors</h3>

          <span>
            03
          </span>

        </div>


        <div className="associate-who-card">

          <div className="associate-who-card__icon">
            ◈
          </div>

          <h3>Consultants</h3>

          <span>
            04
          </span>

        </div>


        <div className="associate-who-card">

          <div className="associate-who-card__icon">
            ◆
          </div>

          <h3>Sales Professionals</h3>

          <span>
            05
          </span>

        </div>


        <div className="associate-who-card">

          <div className="associate-who-card__icon">
            ⌂
          </div>

          <h3>Business Networks</h3>

          <span>
            06
          </span>

        </div>

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    ASSOCIATE BENEFITS
===================================================== */}

<section className="associate-benefits">

  <div className="associate-container">

    {/* Section Heading */}
    <div className="associate-section-heading">

      <div className="associate-eyebrow">
        <span></span>
        ASSOCIATE BENEFITS
        <span></span>
      </div>

      <h2>
        Why Become A <strong>Shilpkar Associate?</strong>
      </h2>

      <div className="associate-heading-line"></div>

    </div>


    {/* Benefits Grid */}
    <div className="associate-benefits__grid">


      {/* 01 */}
      <div className="associate-benefit-card">

        <div className="associate-benefit-card__top">

          <span className="associate-card-number">
            01
          </span>

          <div className="associate-card-icon">
            ✦
          </div>

        </div>

        <div className="associate-card-line"></div>

        <h3>
          Low Entry Investment
        </h3>

        <p>
          Start your association with a one-time investment
          of ₹50,000 + GST.
        </p>

      </div>


      {/* 02 */}
      <div className="associate-benefit-card">

        <div className="associate-benefit-card__top">

          <span className="associate-card-number">
            02
          </span>

          <div className="associate-card-icon">
            ✦
          </div>

        </div>

        <div className="associate-card-line"></div>

        <h3>
          Zero Royalty
        </h3>

        <p>
          No recurring royalty requirement under the
          Associate Program.
        </p>

      </div>


      {/* 03 */}
      <div className="associate-benefit-card">

        <div className="associate-benefit-card__top">

          <span className="associate-card-number">
            03
          </span>

          <div className="associate-card-icon">
            ✦
          </div>

        </div>

        <div className="associate-card-line"></div>

        <h3>
          Dedicated Manager
        </h3>

        <p>
          Get dedicated support for your projects
          and coordination.
        </p>

      </div>


      {/* 04 */}
      <div className="associate-benefit-card">

        <div className="associate-benefit-card__top">

          <span className="associate-card-number">
            04
          </span>

          <div className="associate-card-icon">
            ✦
          </div>

        </div>

        <div className="associate-card-line"></div>

        <h3>
          Fixed Price System
        </h3>

        <p>
          A structured pricing system makes quotation
          and project discussions easier.
        </p>

      </div>


      {/* 05 */}
      <div className="associate-benefit-card">

        <div className="associate-benefit-card__top">

          <span className="associate-card-number">
            05
          </span>

          <div className="associate-card-icon">
            ✦
          </div>

        </div>

        <div className="associate-card-line"></div>

        <h3>
          Project Execution Support
        </h3>

        <p>
          Shilpkar supports technical coordination
          and execution of the project.
        </p>

      </div>


      {/* 06 */}
      <div className="associate-benefit-card">

        <div className="associate-benefit-card__top">

          <span className="associate-card-number">
            06
          </span>

          <div className="associate-card-icon">
            ✦
          </div>

        </div>

        <div className="associate-card-line"></div>

        <h3>
          Earn From Referrals
        </h3>

        <p>
          Generate business opportunities by referring
          suitable projects to Shilpkar.
        </p>

      </div>

    </div>


    {/* =================================================
        ASSOCIATE PROMISE
    ================================================= */}

    <div className="associate-promise">

      <div className="associate-promise__content">

        <div className="associate-promise__eyebrow">
          THE SHILPKAR ASSOCIATE PROMISE
        </div>

        <h2>
          You Focus On <strong>Relationships.</strong>
          <br />
          We Focus On <strong>Projects.</strong>
        </h2>

        <div className="associate-promise__line"></div>

        <p>
          Together, we create a professional experience
          for your clients while creating new business
          opportunities through the Shilpkar Associate Program.
        </p>

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    ASSOCIATE FAQ
===================================================== */}

<section className="associate-faq">

  <div className="associate-container">

    {/* Heading */}
    <div className="associate-section-heading">

      <div className="associate-eyebrow">
        <span></span>
        FREQUENTLY ASKED QUESTIONS
        <span></span>
      </div>

      <h2>
        Associate <strong>FAQ</strong>
      </h2>

      <div className="associate-heading-line"></div>

    </div>


    {/* FAQ List */}
    <div className="associate-faq__list">


      {/* FAQ 01 */}
      <details className="associate-faq__item">

        <summary>
          <span>What is the Associate Program?</span>

          <b>+</b>
        </summary>

        <div className="associate-faq__answer">
          <p>
            The Shilpkar Associate Program allows you to bring
            project opportunities to Shilpkar while our team
            supports the quotation, technical coordination
            and project execution.
          </p>
        </div>

      </details>


      {/* FAQ 02 */}
      <details className="associate-faq__item">

        <summary>
          <span>What is the investment?</span>

          <b>+</b>
        </summary>

        <div className="associate-faq__answer">
          <p>
            The Associate Program requires a one-time investment
            of ₹50,000 + GST.
          </p>
        </div>

      </details>


      {/* FAQ 03 */}
      <details className="associate-faq__item">

        <summary>
          <span>Is there any royalty?</span>

          <b>+</b>
        </summary>

        <div className="associate-faq__answer">
          <p>
            No. The Associate Program is offered with
            zero royalty.
          </p>
        </div>

      </details>


      {/* FAQ 04 */}
      <details className="associate-faq__item">

        <summary>
          <span>Will I get project support?</span>

          <b>+</b>
        </summary>

        <div className="associate-faq__answer">
          <p>
            Yes. Shilpkar provides project and technical support,
            along with dedicated coordination.
          </p>
        </div>

      </details>


      {/* FAQ 05 */}
      <details className="associate-faq__item">

        <summary>
          <span>How does the referral process work?</span>

          <b>+</b>
        </summary>

        <div className="associate-faq__answer">
          <p>
            You refer a suitable customer or project opportunity
            to Shilpkar. Shilpkar handles the quotation and
            project execution, and you earn from the successful
            project.
          </p>
        </div>

      </details>

    </div>

  </div>

</section>


{/* =====================================================
    FINAL CTA
===================================================== */}

<section className="associate-final-cta">

  <div className="associate-container">

    <div className="associate-final-cta__box">

      <div className="associate-final-cta__eyebrow">
        PARTNER WITH SHILPKAR
      </div>

      <h2>
        Build Connections.
        <br />
        <strong>Grow With Shilpkar.</strong>
      </h2>

      <div className="associate-final-cta__line"></div>

      <p>
        Bring your next opportunity to Shilpkar and become
        part of our growing Associate network.
      </p>

      <div className="associate-final-cta__actions">

        <a
          href="/franchise/associate"
          className="associate-btn associate-btn--primary"
        >
          Become An Associate
          <span>→</span>
        </a>

        <a
          href="/franchise"
          className="associate-btn associate-btn--secondary"
        >
          Back To Opportunities
          <span>→</span>
        </a>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}
