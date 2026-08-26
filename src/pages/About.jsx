import React, { useState } from "react";
import SplitText from "../components/Effects/SplitText.jsx";
import AnimatedContent from "../components/Effects/AnimatedContent.jsx";
import AboutOwnerSection from "../components/AboutOwnerSection.jsx";import images from "../data/images.js";
import "./About.css";

const values = [
  { title: "Material Honesty", text: "We show the wood grain, the stone vein, the metal seam. Nothing is disguised as something it isn't." },
  { title: "Considered Light", text: "Every layout begins with where the light falls, and how it will move through the day." },
  { title: "Hand-Finished", text: "Machines rough it out; our craftsmen finish it. That last 10% is where the quality lives." },
  { title: "One Point of Contact", text: "A single design lead follows your project from first sketch to final handover." },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="about-page">
    {/* ================= ABOUT HERO ================= */}

<section className="section-dark about-hero">

  <div className="about-hero__background">
    <img
      src={images.aboutHero}
      alt="Shilpkar Factory premium architectural solutions"
    />
  </div>

</section>

      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__image">
  <img
    src={images.aboutStory}
    alt="Luxury Shilpkar Factory interior featuring premium ceiling and architectural wall design"
  />
</div>
          <div className="about-story__text">

  <SplitText
    as="h2"
    className="chisel"
    text="About Shilpkar Factory"
  />

  <p>
    <strong>Creative Design • Premium Printing • Innovative Interiors • Pan-India Execution</strong>
  </p>

  <p>
    Shilpkar Factory is a multidisciplinary creative design,
    premium printing, interior innovation and project execution
    company with over 10 years of experience, delivering
    innovative solutions for commercial, retail, hospitality
    and luxury interior spaces across India.
  </p>

  <p>
    Built on the philosophy that every surface can become an
    experience, we combine creative design, advanced printing,
    international materials and expert craftsmanship to transform
    ceilings, walls, floors and complete interiors into visually
    stunning environments.
  </p>

  <p>
    From concept development and design to production,
    installation and turnkey execution, our team delivers
    complete end-to-end solutions with reliable Pan-India
    execution.
  </p>

  <button
    className="read-more-btn"
    onClick={() => setExpanded(!expanded)}
  >
    {expanded ? "Read Less ↑" : "Read More ↓"}
  </button>

  {expanded && (

    <div className="about-more-content">

      <h3>Leadership</h3>

      <p>
        <strong>Mohammad Adil</strong> brings over 15 years of
        experience across India and the Gulf in advertising,
        branding, exhibition design and premium project execution,
        combining international quality standards with practical
        execution expertise.
      </p>

      <blockquote>
        “We don't just decorate spaces — we create experiences
        people remember.”
      </blockquote>

      <p>
        <strong>Mohammad AAMIR</strong>, Creative Director and
        Mass Communication graduate from Jamia Millia Islamia,
        leads the company's creative vision through innovative
        design concepts and impactful visual communication.
      </p>

      <h3>Our Expertise</h3>

      <ul>
        <li>Stretch Ceiling Systems</li>
        <li>Textile Ceiling Systems</li>
        <li>Luxury Interior Designing</li>
        <li>Wall & Ceiling Murals</li>
        <li>Virtual Ceiling & Virtual Windows</li>
        <li>Retail Branding & Store Design</li>
        <li>3D Epoxy Flooring</li>
        <li>Restaurant & Hospitality Design</li>
        <li>Game Zone & Entertainment Spaces</li>
      </ul>

      <h3>Why Shilpkar Factory?</h3>

      <ul>
        <li>10+ Years of Industry Experience</li>
        <li>15+ Years of Gulf Expertise</li>
        <li>International Material Options</li>
        <li>Creative + Technical Execution</li>
        <li>Pan-India Installation</li>
        <li>Customized Design Solutions</li>
      </ul>

      <p>
        We don't simply supply products—we develop complete
        creative environments where design, materials,
        lighting and execution work together to create
        extraordinary spaces.
      </p>

    </div>

  )}

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

<AboutOwnerSection />
    </div>
  );
}
