import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "../Effects/SplitText.jsx";
import CircularText from "../Effects/CircularText.jsx";
import {
  FaWhatsapp,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import "./Hero.css";

import collection from "../../assets/images/home/hero/collection.webp";
import translucent from "../../assets/images/home/hero/translucent.webp";
import print from "../../assets/images/home/hero/print.webp";
import gloss from "../../assets/images/home/hero/gloss.webp";
import panel from "../../assets/images/home/hero/panel.webp";
import rgb from "../../assets/images/home/hero/rgb.webp";
import virtual from "../../assets/images/home/hero/virtual.webp";
import mirrora from "../../assets/images/home/hero/mirrora.webp";
import textile from "../../assets/images/home/hero/textile.webp";
import wall from "../../assets/images/home/hero/wall.webp";
import floor from "../../assets/images/home/hero/floor.webp";
import pillar from "../../assets/images/home/hero/pillar.webp";
import dome from "../../assets/images/home/hero/dome.webp";
import fiberoptics from "../../assets/images/home/hero/fiberoptics.webp";
import kitchen from "../../assets/images/home/hero/kitchen.webp";
import mirrors from "../../assets/images/home/hero/mirrors.webp";
import prism from "../../assets/images/home/hero/prism.webp";
import wallsculpt from "../../assets/images/home/hero/wallsculpture.webp";
import restaurant from "../../assets/images/home/hero/restaurantdecor.webp";

const heroSlides = [
  {
    image: collection,
    title: "SHILPKAR™ FACTORY",
    subtitle: "Architectural Interior Solutions",
    description:
      "Premium ceilings, walls, lighting, flooring and architectural solutions crafted for extraordinary spaces.",
  },
  {
    image: translucent,
    title: "SHILPKAR™ TRANSLUCENT",
    subtitle: "Translucent Stretch Ceiling",
    description:
      "Seamless illuminated ceiling systems designed for elegant, soft and uniform architectural lighting.",
  },
  {
    image: print,
    title: "SHILPKAR™ PRINT",
    subtitle: "Printed Stretch Ceiling",
    description:
      "Custom printed stretch ceilings that transform architectural surfaces into immersive visual experiences.",
  },
  {
    image: gloss,
    title: "SHILPKAR™ GLOSS",
    subtitle: "Reflective Stretch Ceiling",
    description:
      "Mirror-like stretch ceiling surfaces designed to add depth, reflection and contemporary luxury.",
  },
  {
    image: panel,
    title: "SHILPKAR™ PANEL",
    subtitle: "LED Panel Lighting",
    description:
      "Slim architectural LED panel systems delivering seamless illumination with a refined modern finish.",
  },
  {
    image: rgb,
    title: "SHILPKAR™ RGB",
    subtitle: "RGB Stretch Ceiling",
    description:
      "Dynamic illuminated ceiling systems that transform interiors with colour and intelligent lighting effects.",
  },
  {
    image: virtual,
    title: "SHILPKAR™ VIRTUAL",
    subtitle: "Virtual Ceiling & Window",
    description:
      "Immersive virtual skylights and windows designed to bring the feeling of natural light and open skies indoors.",
  },
  {
    image: mirrora,
    title: "SHILPKAR™ MIRRORA",
    subtitle: "Illuminated Architectural Surfaces",
    description:
      "Flexible illuminated architectural surfaces combining translucent materials, custom forms and integrated lighting.",
  },
  {
    image: textile,
    title: "SHILPKAR™ CLOUDWAVE",
    subtitle: "Textile Ceiling System",
    description:
      "Sculptural textile ceiling solutions featuring flowing forms, soft illumination and architectural depth.",
  },
  {
    image: wall,
    title: "SHILPKAR™ WALL ART",
    subtitle: "Customized Architectural Wall Art",
    description:
      "Bespoke wall systems, murals and decorative surfaces designed around the character of every space.",
  },
  {
    image: floor,
    title: "3D EPOXY FLOORING",
    subtitle: "Luxury Seamless Flooring",
    description:
      "Artistic seamless flooring solutions combining durability, depth and premium decorative finishes.",
  },
  {
    image: pillar,
    title: "SHILPKAR™ PILLARS",
    subtitle: "Decorative Architectural Pillars",
    description:
      "Transforming structural elements into distinctive architectural features through sculptural design and lighting.",
  },
  {
  image: dome,
  title: "SHILPKAR™ DOME",
  subtitle: "Dome Stretch Ceiling",
  description:
    "Sculptural stretch ceiling solutions designed to create distinctive architectural forms and immersive interiors.",
},

{
  image: fiberoptics,
  title: "SHILPKAR™ FIBER OPTICS",
  subtitle: "Starry Sky Lighting",
  description:
    "Precision fiber optic lighting systems creating immersive starry skies and atmospheric architectural environments.",
},

{
  image: kitchen,
  title: "SHILPKAR™ KITCHEN",
  subtitle: "Kitchen Stretch Ceiling",
  description:
    "Elegant stretch ceiling solutions designed for refined, practical and easy-to-maintain kitchen interiors.",
},

{
  image: mirrors,
  title: "SHILPKAR™ MIRRORS",
  subtitle: "Luxury Decorative Mirrors",
  description:
    "Premium decorative mirror solutions designed to add depth, light and sophisticated character to interiors.",
},

{
  image: prism,
  title: "SHILPKAR™ PRISM",
  subtitle: "Architectural Lighting & Ceiling",
  description:
    "Sculptural illuminated ceiling systems designed to create distinctive architectural interiors.",
},

{
  image: wallsculpt,
  title: "SHILPKAR™ WALLSCULPT",
  subtitle: "Architectural Wall Sculptures",
  description:
    "Dimensional sculptural wall solutions that transform feature walls into refined architectural statements.",
},

{
  image: restaurant,
  title: "SHILPKAR™ RESTAURANT DECOR",
  subtitle: "Restaurant Interior & Ceiling Solutions",
  description:
    "Premium ceiling and interior solutions designed to create memorable restaurant environments.",
},

];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = heroSlides.length;
  const slide = heroSlides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  /* ================= PRELOAD IMAGES ================= */

  useEffect(() => {
    heroSlides.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  return (
    <section className="hero">

      {/* ================= BACKGROUND SLIDER ================= */}

      <div className="hero__bg">

        <AnimatePresence mode="wait">

          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            className="hero__image"
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration: 1.3,
              },
              scale: {
                duration: 7,
                ease: "easeOut",
              },
            }}
            loading="eager"
            fetchPriority="high"
          />

        </AnimatePresence>

        <div className="hero__scrim" />

      </div>


      {/* ================= DECORATIVE SHAPES ================= */}

      <div
        className="hero__florals"
        aria-hidden="true"
      >

        <svg
          className="hero__leaf hero__leaf--1"
          viewBox="0 0 200 200"
        >
          <path d="M100 10 C160 40 180 110 130 160 C80 200 20 170 10 110 C0 50 40 -20 100 10Z" />
        </svg>

        <svg
          className="hero__leaf hero__leaf--2"
          viewBox="0 0 200 200"
        >
          <path d="M100 10 C160 40 180 110 130 160 C80 200 20 170 10 110 C0 50 40 -20 100 10Z" />
        </svg>

        <svg
          className="hero__leaf hero__leaf--3"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
          />
        </svg>

      </div>


      {/* ================= CIRCULAR TEXT ================= */}

      <div className="hero__circular">

      <CircularText
  text="EST. • SHILPKAR FACTORY • LUXURY INTERIORS • "
  speed={18}
  diameter={132}
/>
      </div>


    {/* ================= CONTENT ================= */}

{currentSlide !== 0 && (
  <div className="container hero__content">

    <motion.span
      className="eyebrow hero__eyebrow"
      key={`eyebrow-${currentSlide}`}
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      Luxury Interior Solutions
    </motion.span>

    <AnimatePresence mode="wait">

      <motion.div
        key={currentSlide}
        className="hero__text-block"
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -25,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >

        <SplitText
          as="h1"
          className="hero__heading chisel"
          text={slide.title}
        />

        <motion.div
          className="hero__product-subtitle"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
        >
          {slide.subtitle}
        </motion.div>

        <motion.div
          className="hero__gold-line"
          initial={{
            width: 0,
          }}
          animate={{
            width: 90,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
        />

        <motion.p
          className="hero__subtext"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.35,
            duration: 0.6,
          }}
        >
          {slide.description}
        </motion.p>

      </motion.div>

    </AnimatePresence>

  </div>
)}


      {/* ================= ARROWS ================= */}

      <button
        className="hero__arrow hero__arrow--left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>

      <button
        className="hero__arrow hero__arrow--right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>


      {/* ================= SLIDER DOTS ================= */}

      <div className="hero__dots">

        {heroSlides.map((item, index) => (

          <button
            key={item.title}
            className={`hero__dot ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to ${item.title}`}
          />

        ))}

      </div>


      {/* ================= COUNTER ================= */}

      <div className="hero__counter">

        <span>
          {String(currentSlide + 1).padStart(2, "0")}
        </span>

        <div className="hero__progress">

          <motion.div
            key={currentSlide}
            className="hero__progressFill"
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 7,
              ease: "linear",
            }}
          />

        </div>

        <span>
          {String(totalSlides).padStart(2, "0")}
        </span>

      </div>


      {/* ================= SOCIAL ICONS ================= */}

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


      {/* ================= SCROLL ================= */}

      <div className="hero__scroll">

        <span />

        <p>Scroll</p>

      </div>

    </section>
  );
}