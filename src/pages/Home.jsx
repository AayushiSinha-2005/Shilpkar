import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import Services from "../components/Services.jsx";
import OwnerSection from "../components/OwnerSection.jsx";
import OrbitImages from "../components/Effects/OrbitImages.jsx";
import SplitText from "../components/Effects/SplitText.jsx";
import AnimatedContent from "../components/Effects/AnimatedContent.jsx";
import images from "../data/images.js";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services preview />

      <section className="section home-gallery-preview">
        <div className="container home-gallery-preview__grid">
          <div className="home-gallery-preview__text">
            <span className="eyebrow">The Gallery</span>
            <SplitText as="h2" className="chisel" text="Every corner, considered" />
            <p>
              A running archive of finished rooms, material studies and
              details our team returns to for reference — texture, joinery,
              and the way light lands on a wall.
            </p>
            <AnimatedContent delay={0.15}>
              <Link to="/gallery" className="btn btn-dark" data-cursor="target">
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
          <SplitText as="h2" className="chisel" text="Have a space in mind?" />
          <p>Tell us about it — we reply within one business day.</p>
          <AnimatedContent delay={0.15}>
            <Link to="/contact" className="btn btn-dark" data-cursor="target">
              Start a Conversation
            </Link>
          </AnimatedContent>
        </div>
      </section>
    </>
  );
}
