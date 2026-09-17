import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import "./InstallationTraining.css";

import stretchCeilingTraining from "../../assets/images/stretch-ceiling-training.webp";
import cloudwaveTraining from "../../assets/images/cloudwave-training.webp";
import fabricCeilingTraining from "../../assets/images/fabric-ceiling-training.webp";
import skylumeTraining from "../../assets/images/skylume-training.webp";
import epoxyFlooringTraining from "../../assets/images/epoxy-flooring-training.webp";
import architecturalWallpaperTraining from "../../assets/images/architectural-wallpaper-training1.webp";
const trainingProducts = [
  {
    id: "stretch-ceiling",
    number: "01",
    category: "INSTALLATION",
    title: "Stretch Ceiling Installation",
    image: stretchCeilingTraining,
    short:
      "Professional training in stretch ceiling technology, installation, lighting integration and practical site execution.",
    highlights: [
      "Hands-on Installation",
      "Lighting Integration",
      "Live Site Training",
    ],
  },

  {
    id: "cloudwave",
    number: "02",
    category: "DESIGN & BUSINESS",
    title: "3D Cloudwave™ Ceiling",
    image: cloudwaveTraining,
    short:
      "Professional training in 3D Cloudwave™ textile ceiling design, fabric shaping, framework preparation, lighting integration, installation and business development.",
    highlights: [
      "3D Design & Fabric Shaping",
      "Lighting Integration",
      "Business Development",
    ],
  },

  {
    id: "fabric-ceiling",
    number: "03",
    category: "DESIGN & BUSINESS",
    title: "3D Fabric Ceiling",
    image: fabricCeilingTraining,
    short:
      "Professional training in 3D Fabric Ceiling design, frame preparation, fabric shaping, lighting integration, installation and business development.",
    highlights: [
      "3D Design & Fabric Shaping",
      "Lighting Integration",
      "Business Development",
    ],
  },

  {
    id: "skylume",
    number: "04",
    category: "VIRTUAL DESIGN & BUSINESS",
    title: "3D SkyLume™ Virtual Window & Ceiling",
    image: skylumeTraining,
    short:
      "Professional training in 3D SkyLume™ virtual window and ceiling design, frame fabrication, image and panel integration, installation and business development.",
    highlights: [
      "Virtual Design",
      "Panel & Lighting Integration",
      "Business Development",
    ],
  },

  {
    id: "epoxy-flooring",
    number: "05",
    category: "FLOORING & BUSINESS",
    title: "3D Epoxy Flooring",
    image: epoxyFlooringTraining,
    short:
      "Professional training in 3D epoxy flooring design, surface preparation, epoxy application, 3D graphics, finishing techniques and business development.",
    highlights: [
      "3D Design & Application",
      "Surface Preparation",
      "Business Development",
    ],
  },

  {
    id: "architectural-wallpaper",
    number: "06",
    category: "DESIGN & BUSINESS",
    title: "Architectural Wallpaper",
    image: architecturalWallpaperTraining,
    short:
      "Professional training in architectural wallpaper selection, surface preparation, measurement, cutting, installation, finishing techniques and business development.",
    highlights: [
      "Design & Material Selection",
      "Professional Installation",
      "Business Development",
    ],
  },
];

const benefits = [
  {
    number: "01",
    title: "Scientific Material Knowledge",
    text:
      "Understand how materials behave, why installation methods matter and how to select the right system for different site conditions.",
  },
  {
    number: "02",
    title: "Hands-On Practical Training",
    text:
      "Learn by doing. Training focuses on actual tools, materials, installation techniques and practical problem solving.",
  },
  {
    number: "03",
    title: "Live Site Exposure",
    text:
      "Get exposure to real project conditions and understand how professional installation is executed on an active site.",
  },
  {
    number: "04",
    title: "Professional Tools & Techniques",
    text:
      "Learn the correct use of installation tools, measuring equipment, heating systems, cutting tools and finishing equipment.",
  },
  {
    number: "05",
    title: "Quality & Finishing Standards",
    text:
      "Understand the difference between basic installation and professional finishing, including inspection and defect correction.",
  },
  {
    number: "06",
    title: "Build Your Own Business",
    text:
      "Develop the practical skills required to independently execute projects and create your own installation or contracting business.",
  },
];

const journey = [
  {
    number: "01",
    title: "Learn",
    text: "Understand the product, material, tools and installation science.",
  },
  {
    number: "02",
    title: "Practice",
    text: "Work hands-on under guidance using professional installation methods.",
  },
  {
    number: "03",
    title: "Execute",
    text: "Apply your skills on practical exercises and real project environments.",
  },
  {
    number: "04",
    title: "Certify",
    text: "Complete the training and receive your professional certification.",
  },
];

const faqs = [
  {
    q: "Who can join the Installation Training Program?",
    a:
      "The program is suitable for installers, technicians, interior professionals, contractors, architects, entrepreneurs and individuals who want to develop professional installation skills.",
  },
  {
    q: "Is the training only theoretical?",
    a:
      "No. The training is designed around practical learning. Participants work with actual products, tools, installation methods and project-oriented exercises.",
  },
  {
    q: "Will I get practical knowledge of different products?",
    a:
      "Yes. Product-specific modules cover material understanding, installation sequence, tools, finishing, troubleshooting and quality-control practices.",
  },
  {
    q: "Is site training included?",
    a:
      "Where applicable, participants can receive practical exposure to live project environments so they understand how installation works under real site conditions.",
  },
  {
    q: "Will I receive a certificate?",
    a:
      "Participants who successfully complete the training program receive a Shilpkar Factory professional training certification.",
  },
  {
    q: "Can this training help me start my own work?",
    a:
      "Yes. The objective is to build practical technical capability so trained professionals can independently undertake suitable installation work and develop their own business opportunities.",
  },
];

export default function InstallationTraining() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="installation-training-page">

{/* =========================
    TRAINING HERO
========================= */}
<section className="training-hero">

  <div className="training-hero-image">
    <img
      src={architecturalWallpaperTraining}
      alt="SHILPKAR Factory Training Program"
    />
  </div>

  <div className="training-hero-overlay"></div>

  <div className="training-hero-content">

    <div className="training-hero-eyebrow">
      <span></span>
      SHILPKAR FACTORY
      <span></span>
    </div>

    <div className="training-hero-label">
      TRAINING PROGRAM
    </div>

    <h1>
      Learn The Skills.
      <br />
      <em>Build The Business.</em>
    </h1>

    <div className="training-hero-line"></div>

    <p>
      SHILPKAR provides practical learning across premium interior
      technologies, installation techniques and business development.
    </p>

    {/* =========================
        HERO BUTTONS
    ========================== */}
    <div className="training-hero-buttons">

      <Link
        to="/franchise/training-application"
        className="training-btn training-btn-primary"
      >
        APPLY FOR TRAINING
        <span>→</span>
      </Link>

      <a
        href="/pdf/shilpkar-training-program.pdf"
        download
        className="training-btn training-btn-secondary"
      >
        DOWNLOAD PDF
        <span>→</span>
      </a>

    </div>

    <div className="training-hero-meta">
      THEORY
      <span>•</span>
      WORKSHOP
      <span>•</span>
      LIVE SITE
      <span>•</span>
      CERTIFICATE PROGRAMS
    </div>

  </div>

</section>
      {/* INTRO */}
      <section className="training-intro">
        <div className="training-container">
          <motion.div
            className="training-intro__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="training-eyebrow">
              <span />
              LEARN • PRACTICE • MASTER
              <span />
            </div>

            <h2>
              Become a <em>Certified</em>
              <br />
              Installation Professional
            </h2>

            <div className="training-line" />

            <p>
              Shilpkar Factory Installation Training is designed for
              professionals who want more than theoretical knowledge.
              We teach you how premium architectural products are understood,
              handled, installed and finished — practically.
            </p>

            <p>
              From material science and measurement to tools, installation
              techniques, lighting integration, finishing and troubleshooting,
              every stage is designed to build real technical confidence.
            </p>
          </motion.div>

          <motion.div
            className="training-intro__statement"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span>THE OBJECTIVE</span>
            <strong>
              Don't just know
              <br />
              <em>how it works.</em>
              <br />
              Know how to
              <br />
              <em>make it work.</em>
            </strong>
          </motion.div>
        </div>
      </section>

      {/* WHY TRAINING */}
      <section className="training-benefits">
        <div className="training-container">
          <div className="training-section-heading">
            <div className="training-eyebrow">
              <span />
              WHAT YOU WILL GAIN
              <span />
            </div>

            <h2>
              Training Built For
              <br />
              <em>Real-World Execution</em>
            </h2>

            <div className="training-line" />
          </div>

          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <motion.div
                className="benefit-card"
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
              >
                <div className="benefit-card__top">
                  <span>{item.number}</span>
                  <i>✦</i>
                </div>

                <div className="benefit-card__line" />

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* =========================================================
    PRODUCT TRAINING
========================================================= */}

<section className="product-training">
  <div className="training-container">

    {/* SECTION HEADING */}
    <div className="training-section-heading">
      <div className="training-eyebrow">
        <span />
        PRODUCT SPECIALISATION
        <span />
      </div>

      <h2>
        Choose Your
        <br />
        <em>Training Module</em>
      </h2>

      <div className="training-line" />

      <p>
        Select a product below to explore what you will learn during
        the practical training program.
      </p>
    </div>


    {/* PRODUCT CARDS */}
    <div className="product-training-grid">

      {trainingProducts.map((product, index) => (

        <motion.article
          className="training-product-card"
          key={product.id}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.65,
            delay: index * 0.08,
          }}
        >

          {/* IMAGE */}
          <div className="training-product-card__image">

            <img
              src={product.image}
              alt={product.title}
            />

            <div className="training-product-card__number">
              {product.number}
            </div>

          </div>


          {/* CONTENT */}
          <div className="training-product-card__content">

            {/* CATEGORY */}
            <div className="training-product-card__category">
              <span />
              {product.category}
            </div>


            {/* TITLE */}
            <h3>
              {product.title}
            </h3>


            {/* DESCRIPTION */}
            <p className="training-product-card__description">
              {product.short}
            </p>


            {/* FEATURES */}
            <div className="training-product-card__features">

              {product.features?.map((feature) => (

                <div
                  className="training-product-card__feature"
                  key={feature}
                >
                  <span />
                  {feature}
                </div>

              ))}

            </div>


            {/* FOOTER */}
            <div className="training-product-card__footer">

              <span>
                EXPLORE PROGRAM
              </span>

              <a
                href={`/franchise/installation-training/${product.id}`}
                className="training-product-card__explore"
              >
                →
              </a>

            </div>

          </div>

        </motion.article>

      ))}

    </div>

  </div>
</section>

      {/* PRACTICAL TRAINING */}
      <section className="practical-training">
        <div className="training-container practical-training__grid">

          <motion.div
            className="practical-training__visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="practical-training__visual-inner">
              <span className="visual-number">03</span>
              <span className="visual-label">PRACTICAL LEARNING</span>

              <h3>
                From
                <br />
                <em>Classroom</em>
                <br />
                to Site.
              </h3>

              <div className="visual-cross">+</div>
            </div>
          </motion.div>

          <motion.div
            className="practical-training__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="training-eyebrow">
              <span />
              PRACTICAL SITE EXPOSURE
              <span />
            </div>

            <h2>
              Learn Where
              <br />
              <em>Work Happens</em>
            </h2>

            <div className="training-line" />

            <p>
              Installation is not learned only from manuals. Our training
              approach focuses on practical execution so participants
              understand how professional teams actually work at site.
            </p>

            <div className="practical-points">
              <div>
                <strong>01</strong>
                <span>
                  Site measurement & condition assessment
                </span>
              </div>

              <div>
                <strong>02</strong>
                <span>
                  Material handling & preparation
                </span>
              </div>

              <div>
                <strong>03</strong>
                <span>
                  Tools, safety & installation sequence
                </span>
              </div>

              <div>
                <strong>04</strong>
                <span>
                  Finishing, inspection & troubleshooting
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* KNOWLEDGE */}
      <section className="knowledge-section">
        <div className="training-container">

          <div className="training-section-heading">
            <div className="training-eyebrow">
              <span />
              BEYOND INSTALLATION
              <span />
            </div>

            <h2>
              Understand The
              <br />
              <em>Science Behind The Finish</em>
            </h2>

            <div className="training-line" />
          </div>

          <div className="knowledge-grid">

            <div className="knowledge-card">
              <span>01</span>
              <h3>Material Behaviour</h3>
              <p>
                Learn how different materials respond to heat, tension,
                moisture, pressure, adhesives, resin and lighting conditions.
              </p>
            </div>

            <div className="knowledge-card">
              <span>02</span>
              <h3>Measurement & Calculation</h3>
              <p>
                Understand dimensions, area calculations, material planning,
                wastage considerations and installation requirements.
              </p>
            </div>

            <div className="knowledge-card">
              <span>03</span>
              <h3>Lighting Integration</h3>
              <p>
                Learn how LED systems, diffusers, light engines and
                illumination layouts interact with architectural surfaces.
              </p>
            </div>

            <div className="knowledge-card">
              <span>04</span>
              <h3>Problem Solving</h3>
              <p>
                Identify common installation defects, understand their causes
                and learn professional methods to correct them.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="training-journey">
        <div className="training-container">

          <div className="training-section-heading">
            <div className="training-eyebrow">
              <span />
              YOUR TRAINING JOURNEY
              <span />
            </div>

            <h2>
              Learn.
              <em> Practice.</em>
              <br />
              Execute.
              <em> Grow.</em>
            </h2>

            <div className="training-line" />

            <p>
              A structured learning journey designed to take you from
              understanding to independent execution.
            </p>
          </div>

          <div className="journey-grid">
            {journey.map((item, index) => (
              <motion.div
                className="journey-card"
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="journey-card__circle">
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <div className="journey-card__line" />

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="certification-section">
        <div className="training-container certification-box">

          <div className="certification-box__left">
            <div className="training-eyebrow">
              <span />
              PROFESSIONAL RECOGNITION
              <span />
            </div>

            <h2>
              Earn Your
              <br />
              <em>Certification</em>
            </h2>

            <div className="training-line" />

            <p>
              Complete the relevant training modules, demonstrate your
              practical understanding and receive professional certification
              from Shilpkar Factory.
            </p>
          </div>

          <div className="certificate-mark">
            <div className="certificate-mark__inner">
              <span>SHILPKAR</span>
              <strong>CERTIFIED</strong>
              <small>INSTALLATION PROFESSIONAL</small>
              <i>✦</i>
            </div>
          </div>

        </div>
      </section>

      {/* BUSINESS */}
      <section className="business-section">
        <div className="training-container">

          <div className="business-section__content">
            <div className="training-eyebrow">
              <span />
              BUILD YOUR FUTURE
              <span />
            </div>

            <h2>
              Turn Your
              <br />
              <em>Skill Into Opportunity</em>
            </h2>

            <div className="training-line" />

            <p>
              Professional installation is a valuable technical skill.
              With the right knowledge and practical experience, you can
              execute projects independently, work with contractors and
              interior professionals, build a technical team or develop
              your own installation business.
            </p>

            <div className="business-points">
              <span>Independent project execution</span>
              <span>Installation contracting opportunities</span>
              <span>Technical team development</span>
              <span>Professional industry networking</span>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="training-faq">
        <div className="training-container">

          <div className="training-section-heading">
            <div className="training-eyebrow">
              <span />
              FREQUENTLY ASKED QUESTIONS
              <span />
            </div>

            <h2>
              Training
              <em> FAQ</em>
            </h2>

            <div className="training-line" />
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "is-open" : ""}`}
                  key={faq.q}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                  >
                    <span>{faq.q}</span>
                    <strong>{isOpen ? "−" : "+"}</strong>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="training-cta">
        <div className="training-container">
          <div className="training-cta__content">

            <div className="training-eyebrow">
              <span />
              SHILPKAR SKILL ACADEMY
              <span />
            </div>

            <h2>
              Ready to
              <br />
              <em>Master the Craft?</em>
            </h2>

            <p>
              Start your journey towards professional installation expertise
              and build skills that can create opportunities beyond training.
            </p>

            <div className="training-cta__buttons">
              <Link
                to="/franchise/installation-training-application"
                className="training-btn training-btn--primary"
              >
                APPLY FOR TRAINING <span>→</span>
              </Link>

              <a
                href="/installation-training-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="training-btn training-btn--secondary"
              >
                DOWNLOAD TRAINING PDF <span>↓</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}