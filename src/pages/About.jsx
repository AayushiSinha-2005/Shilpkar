import React from "react";
import SplitText from "../components/Effects/SplitText.jsx";
import AnimatedContent from "../components/Effects/AnimatedContent.jsx";
import OwnerSection from "../components/OwnerSection.jsx";
import images from "../data/images.js";
import "./About.css";

const values = [
  { title: "Material Honesty", text: "We show the wood grain, the stone vein, the metal seam. Nothing is disguised as something it isn't." },
  { title: "Considered Light", text: "Every layout begins with where the light falls, and how it will move through the day." },
  { title: "Hand-Finished", text: "Machines rough it out; our craftsmen finish it. That last 10% is where the quality lives." },
  { title: "One Point of Contact", text: "A single design lead follows your project from first sketch to final handover." },
];

export default function About() {
  return (
    <div className="about-page">
      <section className="section-dark about-hero">
        <div className="container">
          <span className="eyebrow">
About Shilpkar Factory
</span>

<SplitText
as="h1"
className="chisel about-hero__title"
text="Craftsmanship Meets Modern Innovation"
/>

<p className="about-hero__lede">

Shilpkar Factory is a premium manufacturer of stretch ceilings,
decorative wall systems, epoxy flooring and bespoke architectural
solutions crafted for luxury residential and commercial interiors.

</p>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__image">
            <img src={images.ownerBackdrop} alt="Shilpkar Factory workshop with timber and material samples" />
          </div>
          <div className="about-story__text">
            <SplitText as="h2" className="chisel" text="From workshop floor to design studio" />
            <p>
              Shilpkar — a Hindi word for craftsman — is not a name we chose
              lightly. It's a promise that no matter how large the studio
              grows, the work stays rooted in the workshop: measured,
              hand-checked, and built to be lived in for decades, not
              photographed for a season.
            </p>
            <p>
              Today the studio runs residential, commercial and turnkey
              projects across Mumbai and beyond, but every brief still opens
              the same way it did on day one — with a conversation about how
              you actually want to live.
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark about-values">
        <div className="container">
          <span className="eyebrow">What Guides Us</span>
          <SplitText as="h2" className="chisel" text="Principles, not trends" />
          <div className="about-values__grid">
            {values.map((v, i) => (
              <AnimatedContent key={v.title} delay={i * 0.08} className="about-values__item">
                <span className="about-values__mark" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <OwnerSection />
    </div>
  );
}
