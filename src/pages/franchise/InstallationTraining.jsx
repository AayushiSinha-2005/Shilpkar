import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageBanner from "../../components/Hero/PageBanner";
import images from "../../data/images";
import "./InstallationTraining.css";

const trainingProducts = [
  {
    id: "stretch-ceiling",
    number: "01",
    title: "Stretch Ceiling Installation",
    short:
      "Complete practical training in stretch ceiling systems, membrane handling, profiling, tensioning, lighting integration and final finishing.",
    days: [
      {
        day: "DAY 01",
        title: "Material & System Knowledge",
        points: [
          "Understanding stretch ceiling membrane types and applications",
          "PVC membrane properties, thickness, flexibility and finish",
          "Understanding profiles, harpoon systems and accessories",
          "Room measurement and area calculation",
          "Ceiling preparation and substrate inspection",
          "Understanding lighting cavity and service requirements",
        ],
      },
      {
        day: "DAY 02",
        title: "Professional Installation",
        points: [
          "Profile marking, cutting and fixing techniques",
          "Inside and outside corner treatment",
          "Membrane preparation and safe handling",
          "Heating and controlled stretching techniques",
          "Harpoon insertion and proper tensioning",
          "Cut-outs for lights, AC and other services",
        ],
      },
      {
        day: "DAY 03",
        title: "Finishing & Quality Control",
        points: [
          "Wrinkle and wave correction",
          "Edge finishing and detailing",
          "Lighting alignment and diffuser positioning",
          "Final surface inspection",
          "Common installation mistakes and solutions",
          "Professional handover and maintenance guidance",
        ],
      },
    ],
  },

  {
    id: "cloudwave",
    number: "02",
    title: "CloudWave Ceiling",
    short:
      "Learn how to create premium textile ceiling forms including wave, curve and suspended visual effects with proper structural planning.",
    days: [
      {
        day: "DAY 01",
        title: "Design & Material Understanding",
        points: [
          "Understanding CloudWave textile systems",
          "Textile behaviour, flexibility and visual characteristics",
          "Understanding wave, curve and custom formations",
          "Ceiling dimensions and structural planning",
          "Support points and fixing requirements",
          "Lighting integration planning",
        ],
      },
      {
        day: "DAY 02",
        title: "Form Creation & Installation",
        points: [
          "Profile and support preparation",
          "Creating controlled wave formations",
          "Textile positioning and tension management",
          "Joint and edge detailing",
          "Maintaining symmetry and design proportions",
          "Working safely at height during installation",
        ],
      },
      {
        day: "DAY 03",
        title: "Finishing & Lighting",
        points: [
          "Final textile alignment",
          "Lighting placement and diffusion",
          "Correction of uneven formations",
          "Visual quality inspection",
          "Cleaning and maintenance process",
          "Professional project finishing standards",
        ],
      },
    ],
  },

  {
    id: "fiber-optic",
    number: "03",
    title: "Fiber Optic Ceiling",
    short:
      "Master star-field and custom fiber optic ceiling installation with fiber routing, light-engine integration and precise finishing.",
    days: [
      {
        day: "DAY 01",
        title: "Fiber Optic Technology",
        points: [
          "Understanding fiber optic ceiling systems",
          "Fiber types, light engines and components",
          "Planning star-field patterns",
          "Fiber density and visual distribution",
          "Ceiling preparation and mounting requirements",
          "Electrical and lighting planning",
        ],
      },
      {
        day: "DAY 02",
        title: "Fiber Installation",
        points: [
          "Fiber routing and positioning",
          "Creating random and programmed star patterns",
          "Fiber fixing and securing techniques",
          "Light engine placement and connection",
          "Avoiding fiber damage during installation",
          "Working with stretch and other ceiling surfaces",
        ],
      },
      {
        day: "DAY 03",
        title: "Activation & Finishing",
        points: [
          "Fiber trimming and finishing",
          "Light engine testing",
          "Brightness and pattern inspection",
          "Troubleshooting common fiber issues",
          "Final ceiling cleaning",
          "Professional quality-control checklist",
        ],
      },
    ],
  },

  {
    id: "epoxy",
    number: "04",
    title: "3D Epoxy Flooring",
    short:
      "Learn the complete 3D epoxy flooring process from substrate preparation and artwork placement to resin application and final finishing.",
    days: [
      {
        day: "DAY 01",
        title: "Surface & Material Science",
        points: [
          "Understanding epoxy resin systems",
          "Resin and hardener relationship",
          "Surface moisture and substrate inspection",
          "Floor preparation and cleaning",
          "Crack and surface treatment",
          "Primer and base-coat requirements",
        ],
      },
      {
        day: "DAY 02",
        title: "3D Application Process",
        points: [
          "Artwork selection and positioning",
          "Base preparation and levelling",
          "Image installation and alignment",
          "Resin mixing methodology",
          "Controlled pouring and spreading",
          "Bubble removal and surface control",
        ],
      },
      {
        day: "DAY 03",
        title: "Final Coat & Finishing",
        points: [
          "Clear protective coat application",
          "Gloss and depth control",
          "Edge finishing",
          "Surface inspection",
          "Common epoxy defects and corrections",
          "Maintenance and care instructions",
        ],
      },
    ],
  },

  {
    id: "skylume",
    number: "05",
    title: "SKYLUME Ceiling Installation",
    short:
      "Learn the installation of illuminated architectural ceiling systems designed to create realistic daylight, sky and premium backlit environments.",
    days: [
      {
        day: "DAY 01",
        title: "Lighting & System Knowledge",
        points: [
          "Understanding SKYLUME architectural lighting systems",
          "Backlit panel construction and components",
          "Light distribution and diffuser principles",
          "Panel sizing and ceiling planning",
          "LED placement and spacing",
          "Electrical load and power planning",
        ],
      },
      {
        day: "DAY 02",
        title: "Panel & Lighting Installation",
        points: [
          "Frame and support preparation",
          "Panel positioning and alignment",
          "LED installation and spacing",
          "Diffuser and backlit surface handling",
          "Electrical connections and testing",
          "Maintaining uniform illumination",
        ],
      },
      {
        day: "DAY 03",
        title: "Calibration & Finishing",
        points: [
          "Light uniformity inspection",
          "Dark-spot and hotspot correction",
          "Panel alignment and edge finishing",
          "Brightness calibration",
          "Final electrical testing",
          "Professional project handover",
        ],
      },
    ],
  },

  {
    id: "wall-mural",
    number: "06",
    title: "Wall Mural Installation",
    short:
      "Learn professional architectural wall mural installation including surface preparation, artwork alignment, application and seamless finishing.",
    days: [
      {
        day: "DAY 01",
        title: "Surface & Print Preparation",
        points: [
          "Understanding architectural wall mural materials",
          "Wall condition assessment",
          "Surface preparation requirements",
          "Artwork dimensions and scaling",
          "Print quality and colour considerations",
          "Planning seams and panel orientation",
        ],
      },
      {
        day: "DAY 02",
        title: "Professional Application",
        points: [
          "Panel marking and positioning",
          "Correct installation sequence",
          "Alignment of printed artwork",
          "Seam management",
          "Avoiding bubbles and wrinkles",
          "Working around corners and openings",
        ],
      },
      {
        day: "DAY 03",
        title: "Detailing & Handover",
        points: [
          "Seam inspection and correction",
          "Edge finishing",
          "Corner detailing",
          "Surface cleaning",
          "Final artwork inspection",
          "Client handover and maintenance guidance",
        ],
      },
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

      {/* HERO */}
      <PageBanner
        eyebrow="SHILPKAR SKILL ACADEMY"
        title="Professional Installation Training"
        image={images.projects[2].img}
        height="68vh"
      />

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

      {/* PRODUCT TRAINING */}
      <section className="product-training">
        <div className="training-container">

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

          <div className="product-training-grid">
            {trainingProducts.map((product, index) => {
              const isOpen = activeProduct === product.id;

              return (
                <motion.div
                  className={`training-product-card ${
                    isOpen ? "is-open" : ""
                  }`}
                  key={product.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                  }}
                >
                  <button
                    className="training-product-card__head"
                    onClick={() =>
                      setActiveProduct(isOpen ? null : product.id)
                    }
                    type="button"
                  >
                    <div className="training-product-card__number">
                      {product.number}
                    </div>

                    <div className="training-product-card__icon">
                      ✦
                    </div>

                    <div className="training-product-card__title">
                      <span>PRODUCT TRAINING</span>
                      <h3>{product.title}</h3>
                    </div>

                    <div className="training-product-card__arrow">
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  <div className="training-product-card__body">
                    <p>{product.short}</p>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="product-days"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.45 }}
                        >
                          {product.days.map((day) => (
                            <div className="product-day" key={day.day}>
                              <div className="product-day__number">
                                {day.day}
                              </div>

                              <div className="product-day__content">
                                <h4>{day.title}</h4>

                                <ul>
                                  {day.points.map((point) => (
                                    <li key={point}>
                                      <span>◆</span>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="training-products-note">
            <span>+</span>
            <p>
              Product modules can be combined according to the participant's
              training requirement and professional objective.
            </p>
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