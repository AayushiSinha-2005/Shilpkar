import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "../Effects/SplitText.jsx";
import AnimatedContent from "../Effects/AnimatedContent.jsx";
import CircularText from "../Effects/CircularText.jsx";
import images from "../../data/images.js";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import "./Hero.css";

const heroContent = [
  {
    title1: "Transforming Spaces",
    title2: "with Art & Texture",
    description:
      "Premium stretch ceilings, luxury wall systems and architectural interior solutions crafted for homes, villas and commercial spaces.",
  },
  {
    title1: "Luxury Ceiling",
    title2: "Solutions",
    description:
      "Innovative stretch ceiling systems engineered with flawless finishes, premium lighting and timeless aesthetics.",
  },
  {
    title1: "Architectural",
    title2: "Interior Innovation",
    description:
      "Designed to elevate every project through craftsmanship, premium materials and modern engineering.",
  },
  {
    title1: "Designed For",
    title2: "Extraordinary Spaces",
    description:
      "Creating luxury interiors where design, lighting and craftsmanship come together beautifully.",
  },
];

export default function Hero() {
  const slides = images.heroSlides;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
  slides.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, [slides]);

  return (
    <section className="hero">

      {/* Background Slider */}

      <div className="hero__bg">

        <div className="hero__image-wrapper">
  {slides.map((slide, index) => (
    <img
      key={index}
      src={slide}
      alt={`Luxury Interior ${index + 1}`}
      className={`hero__image ${currentSlide === index ? "active" : ""}`}
      loading="eager"
      fetchPriority="high"
    />
  ))}
</div>
        <div className="hero__scrim" />

      </div>
      {/* Decorative Shapes */}

      <div className="hero__florals" aria-hidden="true">

        <svg className="hero__leaf hero__leaf--1" viewBox="0 0 200 200">
          <path d="M100 10 C160 40 180 110 130 160 C80 200 20 170 10 110 C0 50 40 -20 100 10Z" />
        </svg>

        <svg className="hero__leaf hero__leaf--2" viewBox="0 0 200 200">
          <path d="M100 10 C160 40 180 110 130 160 C80 200 20 170 10 110 C0 50 40 -20 100 10Z" />
        </svg>

        <svg className="hero__leaf hero__leaf--3" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" />
        </svg>


      </div>
      <div className="hero__circular">
        <CircularText
          text="EST. SHILPKAR FACTORY • LUXURY INTERIORS • "
          speed={22}
          diameter={132}
        />
      </div>

      <div className="container hero__content">

        <motion.span
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
        >
          Luxury Interior Solutions
        </motion.span>

        <AnimatePresence mode="wait">

          <motion.div
  key={currentSlide}
  initial={{
    opacity: 0,
    y: 40,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  exit={{
    opacity: 0,
    y: -30,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
>

            <SplitText
              as="h1"
              className="hero__heading chisel"
              text={heroContent[currentSlide].title1}
            />

            <SplitText
              as="h1"
              className="hero__heading chisel"
              text={heroContent[currentSlide].title2}
            />

            <motion.p
              className="hero__subtext"
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:.25 }}
            >
              {heroContent[currentSlide].description}
            </motion.p>

          </motion.div>

        </AnimatePresence>

        <motion.div
  className="hero__cta-wrap"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
>

</motion.div>
      </div>

      {/* Slide Counter */}

      <div className="hero__counter">
        <span>
          {String(currentSlide + 1).padStart(2, "0")}
        </span>

        <div className="hero__progress">

          <motion.div
            key={currentSlide}
            className="hero__progressFill"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5,
              ease: "linear",
            }}
          />

        </div>

        <span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Floating Social Icons */}

      <div className="hero__socials">

        <a
          href="https://www.instagram.com/shilpkar_factory/"
          target="_blank"
          rel="noreferrer"
          className="hero__social"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/918171771229"
          target="_blank"
          rel="noreferrer"
          className="hero__social"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="tel:+918171771229"
          className="hero__social"
          aria-label="Call"
        >
          <FiPhoneCall />
        </a>

      </div>

      {/* Scroll Indicator */}

      <div className="hero__scroll">
        <span />
        <p>Scroll</p>
      </div>

    </section>
  );
}