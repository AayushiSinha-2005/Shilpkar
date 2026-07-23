import React from "react";
import { Link } from "react-router-dom";
import SplitText from "./Effects/SplitText.jsx";
import AnimatedContent from "./Effects/AnimatedContent.jsx";
import images from "../data/images.js";
import "./AboutPreview.css";

export default function AboutPreview() {
  return (
    <section className="section about-preview">
      <div className="container about-preview__grid">
        <AnimatedContent direction="left" className="about-preview__image-wrap">
          <div className="about-preview__frame">
            <img src={images.aboutPreview} alt="MOHAMMAD ADIL reviewing a materials board in the Shilpkar Factory studio" />
          </div>
          <div className="about-preview__badge">
            <span>25+</span>
            <p>Years of Craft</p>
          </div>
        </AnimatedContent>

        <div className="about-preview__text">
          <span className="eyebrow">The Studio</span>
          <SplitText as="h2" className="chisel" text="Led by hand, not by trend" />
          <p className="about-preview__lede">
            Shilpkar Factory was founded & directed by <strong>MOHAMMAD ADIL</strong> on a
            simple conviction — that an interior should be built the way a
            good piece of furniture is built: joint by joint, material by
            material, with nothing hidden.
          </p>
          <p>
            What began as a small carpentry workshop has grown into a
            full-service interior solutions, but the instinct hasn't changed.
            Every project still passes through Asif's hands before it
            reaches yours — sketched, sourced, and signed off personally.
          </p>
          <AnimatedContent delay={0.2}>
            <Link to="/about" className="btn btn-dark about-preview__cta" data-cursor="target">
              Our Story
            </Link>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
