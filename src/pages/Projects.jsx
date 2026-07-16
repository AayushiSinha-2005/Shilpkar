import React from "react";
import SplitText from "../components/Effects/SplitText.jsx";
import Silk from "../components/Effects/Silk.jsx";
import images from "../data/images.js";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="section-dark projects-hero">
        <Silk />
        <div className="container projects-hero__inner">
          <span className="eyebrow">Selected Work</span>
          <SplitText as="h1" className="chisel projects-hero__title" text="Projects, room by room" />
          <p>
            A cross-section of homes and commercial spaces the studio has
            designed and built end to end.
          </p>
        </div>
      </section>

      <div className="section-head">

<span className="eyebrow">
Featured Portfolio
</span>

<h2 className="section-title">
Craftsmanship Across Every Space
</h2>

<p>
Explore our residential, hospitality and commercial
projects completed with premium finishes.
</p>

</div>

      <section className="section projects-masonry-section">
        <div className="container">
          <div className="masonry">
            {images.projects.map((p, i) => (
              <figure className="masonry__item silk-wipe-trigger" key={p.title} data-cursor="target" data-cursor-label="View Project">
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className="silk-wipe" />
                <figcaption>
                  <span className="masonry__tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>


      </section>
    </div>
  );
}
