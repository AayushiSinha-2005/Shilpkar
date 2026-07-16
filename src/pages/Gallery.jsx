import React from "react";
import { Link } from "react-router-dom";
import SplitText from "../components/Effects/SplitText.jsx";
import AnimatedContent from "../components/Effects/AnimatedContent.jsx";
import GalleryGrid from "../components/Gallery.jsx";
import images from "../data/images.js";
import "./GalleryPage.css";


export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <section className="section-dark gallery-hero">
        <div className="container">
<span className="eyebrow">
Curated Luxury Interior Portfolio
</span>
          <SplitText as="h1" className="chisel gallery-hero__title" text="A visual record of the work" />
          <p className="gallery-hero__lede">
            Finished rooms, material studies, and the small details our team
            keeps coming back to.
          </p>
          <AnimatedContent delay={0.15}>
            <Link to="/gallery/circular" className="btn gallery-hero__cta" data-cursor="target">
              View Circular Gallery
            </Link>
          </AnimatedContent>
        </div>
      </section>

      <section className="section gallery-page__grid-section">
        <div className="container">
          <GalleryGrid images={images.gallery} />
        </div>
      </section>
    </div>
  );
}




