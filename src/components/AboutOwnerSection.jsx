import React from "react";
import Lightfall from "./Effects/Lightfall.jsx";
import SplitText from "./Effects/SplitText.jsx";
import CircularText from "./Effects/CircularText.jsx";
import images from "../data/images.js";
import "./OwnerSection.css";

export default function AboutOwnerSection() {
  return (
    <Lightfall className="owner-section">
      <div className="container owner-section__grid">
        <div className="owner-section__portrait">
          <img
            src={images.creativeDirector}
            alt="Mohammad AAMIR, Creative Director of Shilpkar Factory"
          />

          <div className="owner-section__circular">
            <CircularText
              text="Creative Director • Mohammad AAMIR • "
              diameter={110}
              speed={18}
            />
          </div>
        </div>

        <div className="owner-section__text">
          <span className="eyebrow">In His Words</span>

          <SplitText
            as="h2"
            className="owner-section__quote chisel"
        text="“Creativity transforms ordinary spaces into unforgettable experiences through thoughtful design and innovation.”"
          />

          <p className="owner-section__name">
            Mohammad Aamir
          </p>

          <p className="owner-section__role">
            Creative Director, Shilpkar Factory
          </p>
        </div>
      </div>
    </Lightfall>
  );
}