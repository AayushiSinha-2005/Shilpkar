import React from "react";
import { motion } from "framer-motion";
import SplitText from "../Effects/SplitText.jsx";
import AnimatedContent from "../Effects/AnimatedContent.jsx";
import CircularText from "../Effects/CircularText.jsx";
import images from "../../data/images.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={images.hero} alt="Sunlit living room with sculptural furniture and natural textures" />
        <div className="hero__scrim" />
      </div>

      {/* organic floating overlay */}
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
        <CircularText text="EST. MUMBAI • HANDCRAFTED • " speed={22} diameter={132} />
      </div>

      <div className="container hero__content">
        <motion.span
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Shilpkar Factory — Interior Atelier
        </motion.span>

        <SplitText
          as="h1"
          className="hero__heading chisel"
          text="Transforming Spaces with Art & Texture"
          delay={0.25}
        />

        <motion.p
          className="hero__subtext"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          We design and build interiors that hold onto craft — hand-finished
          surfaces, honest material, and light treated as a design element,
          not an afterthought.
        </motion.p>

        <AnimatedContent delay={1.1} className="hero__cta-wrap">
          <a href="/contact" className="btn hero__cta" data-cursor="target" data-cursor-label="Enquire">
            Start Your Project
          </a>
          <a href="/projects" className="hero__link" data-cursor="target">
            View Projects →
          </a>
        </AnimatedContent>
      </div>

      <div className="hero__scroll">
        <span />
        <p>Scroll</p>
      </div>
    </section>
  );
}
