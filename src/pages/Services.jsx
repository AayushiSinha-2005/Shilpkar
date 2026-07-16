import React from "react";
import { Link } from "react-router-dom";
import SplitText from "../components/Effects/SplitText.jsx";
import AnimatedContent from "../components/Effects/AnimatedContent.jsx";
import MagicBento from "../components/Effects/MagicBento.jsx";
import servicesData from "../data/services.js";
import images from "../data/images.js";
import "./ServicesPage.css";

const process = [
  { step: "Discovery", text: "A walkthrough of the space and a conversation about how you use it." },
  { step: "Concept", text: "Mood boards, layouts and material palettes tailored to the brief." },
  { step: "Detailing", text: "Working drawings, joinery details and vendor selection." },
  { step: "Execution", text: "On-site build, quality checks and weekly progress reviews." },
  { step: "Handover", text: "Styling, final walkthrough, and a maintenance guide for every finish." },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section
        className="section-dark services-hero"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(15,47,47,0.85), rgba(10,34,34,0.96)), url(${images.servicesCover})` }}
      >
        <div className="container">
         <span className="eyebrow">
Premium Interior Surface Solutions
</span>

<SplitText
as="h1"
className="chisel services-hero__title"
text="Crafting Extraordinary Ceilings, Walls & Floors"
/>

<p className="services-hero__lede">
Discover premium stretch ceilings, decorative walls, epoxy flooring,
textile finishes and custom architectural solutions designed and
manufactured by Shilpkar Factory.
</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <MagicBento items={servicesData} />
        </div>
      </section> 
      
      <section className="section-dark services-process">
        <div className="container"> 
          <span className="eyebrow">How We Work</span>
          <SplitText as="h2" className="chisel" text="A process built for trust" />
          <div className="services-process__list">
            {process.map((p, i) => (
              <AnimatedContent key={p.step} delay={i * 0.08} className="services-process__item">
                <span className="services-process__num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{p.step}</h3>
                  <p>{p.text}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="container services-cta__inner">
<SplitText
as="h2"
className="chisel"
text="Let's Build Something Extraordinary"
/>

<p className="services-cta__text">

Whether you're designing a luxury residence,
commercial space or hospitality project,
our team is ready to bring your vision to life.

</p>
          <AnimatedContent delay={0.15}>
            <Link to="/contact" className="btn btn-dark" data-cursor="target">
              Book a Consultation
            </Link>
          </AnimatedContent>
        </div>
        <div className="services-stats">

<div>
<h3>500+</h3>
<p>Projects Delivered</p>
</div>

<div>
<h3>21 Years</h3>
<p>Material Warranty</p>
</div>

<div>
<h3>100+</h3>
<p>Custom Designs</p>
</div>

<div>
<h3>India</h3>
<p>Installation Network</p>
</div>

</div>
      </section>
    </div>
  );
}
