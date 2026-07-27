import React from "react";
import Lightfall from "./Effects/Lightfall.jsx";
import SplitText from "./Effects/SplitText.jsx";
import CircularText from "./Effects/CircularText.jsx";
import images from "../data/images.js";
import "./OwnerSection.css";

export default function OwnerSection( ) {
  return (
    <Lightfall className="owner-section">
      <div className="container owner-section__grid">
        <div className="owner-section__portrait">
<img
  src={images.creativeDirector}
  alt="Mohammad AMIR, Creative Director of Shilpkar Factory"/>          <div className="owner-section__circular">
<CircularText
  text="Creative Director • Mohammad AMIR • "
  diameter={110}
  speed={18}
/>          </div>
        </div>

        <div className="owner-section__text">
          <span className="eyebrow">In His Words</span>
          <SplitText
            as="h2"
            className="owner-section__quote chisel"
text="“Every great space begins with a creative idea and comes alive through thoughtful design.”"          />
          <p className="owner-section__name">Mohammad AMIR</p>
<p className="owner-section__role">
  Creative Director, Shilpkar Factory
</p>
        </div>
      </div>
    </Lightfall>
  );
}
