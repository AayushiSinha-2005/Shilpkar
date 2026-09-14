import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import OwnerSection from "../components/OwnerSection.jsx";
import OrbitImages from "../components/Effects/OrbitImages.jsx";
import SplitText from "../components/Effects/SplitText.jsx";
import AnimatedContent from "../components/Effects/AnimatedContent.jsx";
import images from "../data/images.js";
import "./Home.css";

const homeServices = [
  {
    title: "SHILPKAR™ TRANSLUCENT",
    subtitle: "Translucent Stretch Ceiling",
    image: images.translucent.main,
    link: "/services#translucent",
  },
  {
    title: "SHILPKAR™ PRINT",
    subtitle: "Printed Stretch Ceiling",
    image: images.printed.main,
    link: "/services#print",
  },
  {
    title: "SHILPKAR™ GLOSS",
    subtitle: "Gloss Stretch Ceiling",
    image: images.gloss.main,
    link: "/services#gloss",
  },
  {
    title: "SHILPKAR™ PANEL",
    subtitle: "LED Panel Ceiling",
    image: images.panel.grid,
    link: "/services#panel",
  },
  {
    title: "FIBERSKY™",
    subtitle: "Fiber Optic Star Ceiling",
    image: images.fiberOptic.main,
    link: "/services#fibersky",
  },
  {
    title: "SHILPVIRTUAL™",
    subtitle: "Virtual Ceiling & Window",
    image: images.virtualCeiling.main,
    link: "/services#shilpvirtual",
  },
  {
    title: "SHILPKAR™ ARCHITECTURAL WALL ART™",
    subtitle: "Customized Architectural Wall Art",
    image: images.architecturalWallArt.main,
    link: "/services#architectural-wall-art",
  },
  {
    title: "SHILPKAR™ MIRRORA™",
    subtitle: "Premium Decorative Mirrors",
    image: images.mirrora.main,
    link: "/services#mirrora",
  },
  {
    title: "CLOUDWAVE™ TEXTILE CEILING",
    subtitle: "Textile Ceiling Systems",
    image: images.cloudwave.main,
    link: "/services#cloudwave",
  },
  {
    title: "SHILPKAR™ PRISM",
    subtitle: "Architectural Lighting & Ceiling",
    image: images.prism.main,
    link: "/services#prism",
  },
  {
    title: "SHILPKAR™ EXPOXY DECORS 3D EXPOXY FLOORINGS",
    subtitle: "3D Epoxy Flooring Solutions",
    image: images.epoxyDecors.main,
    link: "/services#epoxy-decors",
  },
  {
    title: "SHILPKAR™ MIRRORS",
    subtitle: "Decorative Mirror Solutions",
    image: images.mirrors.main,
    link: "/services#mirrors",
  },
  {
    title: "SHILPKAR™ PILLARS",
    subtitle: "Decorative Architectural Pillars",
    image: images.pillars.main,
    link: "/services#pillars",
  },
  {
    title: "SHILPKAR™ KITCHEN STRETCH CEILINGS",
    subtitle: "Stretch Ceiling Solutions for Kitchens",
    image: images.kitchenStretchCeilings.main,
    link: "/services#kitchen-stretch-ceilings",
  },
  {
    title: "SHILPKAR™ DOME STRETCH CEILINGS",
    subtitle: "Custom Dome Ceiling Solutions",
    image: images.domeStretchCeilings.main,
    link: "/services#dome-stretch-ceilings",
  },
  {
    title: "SHILPKAR™ RESTAURANT DECORS",
    subtitle: "Restaurant Interior & Ceiling Solutions",
    image: images.restaurantDecors.main,
    link: "/services#restaurant-decors",
  },
  {
    title: "SHILPKAR™ WALLSCULPT",
    subtitle: "Architectural Wall Sculptures",
    image: images.wallsculpt.main,
    link: "/services#wallsculpt",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />

      {/* HOME SERVICES */}
      <section className="section home-services">
        <div className="container">
          <div className="home-services__head">
            <span className="eyebrow">Our Expertise</span>

            <SplitText
              as="h2"
              className="chisel"
              text="Crafted for Extraordinary Spaces"
            />

            <p>
              Explore our collection of architectural ceiling, wall,
              flooring and interior solutions.
            </p>
          </div>

          <div className="home-services__grid">
            {homeServices.map((service, index) => (
              <Link
                key={service.title}
                to={service.link}
                className="home-service-card"
                data-cursor="target"
              >
                <div className="home-service-card__image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>

                <div className="home-service-card__overlay" />

                <div className="home-service-card__content">
                  <span className="home-service-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.subtitle}</p>

                  <span className="home-service-card__arrow">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-gallery-preview">
        <div className="container home-gallery-preview__grid">
          <div className="home-gallery-preview__text">
            <span className="eyebrow">The Gallery</span>

            <SplitText
              as="h2"
              className="chisel"
              text="Every corner, considered"
            />

            <p>
              A running archive of finished rooms, material studies and
              details our team returns to for reference — texture, joinery,
              and the way light lands on a wall.
            </p>

            <AnimatedContent delay={0.15}>
              <Link
                to="/gallery"
                className="btn btn-dark"
                data-cursor="target"
              >
                Open Gallery
              </Link>
            </AnimatedContent>
          </div>

          <div className="home-gallery-preview__orbit">
            <OrbitImages images={images.gallery.slice(0, 8)} size={440} />
          </div>
        </div>
      </section>

      <OwnerSection />

      <section className="section home-cta">
        <div className="container home-cta__inner">
          <SplitText
            as="h2"
            className="chisel"
            text="Have a space in mind?"
          />

          <p>Tell us about it — we reply within one business day.</p>

          <AnimatedContent delay={0.15}>
            <Link
              to="/contact"
              className="btn btn-dark"
              data-cursor="target"
            >
              Start a Conversation
            </Link>
          </AnimatedContent>
        </div>
      </section>
    </>
  );
}