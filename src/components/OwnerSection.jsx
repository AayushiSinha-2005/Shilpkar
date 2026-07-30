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
  src={images.ownerPhoto}
  alt="Mohammad Adil, Founder & Managing Director of Shilpkar Factory"/>          <div className="owner-section__circular">
<CircularText
  text="Founder • Director • Mohammad Adil • "
  diameter={110}
  speed={18}
/>         </div>
        </div>

        <div className="owner-section__text">
          <span className="eyebrow">In His Words</span>
          <SplitText
            as="h2"
            className="owner-section__quote chisel"
  text="“Vision is not just about building beautiful spaces—it's about creating experiences that inspire every day.”"
         />
          <p className="owner-section__name">Mohammad Adil</p>
<p className="owner-section__role">
  Founder &amp; Managing Director, Shilpkar Factory
</p>
        </div>
      </div>
    </Lightfall>
  );
}
