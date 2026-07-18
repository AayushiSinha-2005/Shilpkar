import React from "react";
import Lightfall from "./Effects/Lightfall.jsx";
import SplitText from "./Effects/SplitText.jsx";
import CircularText from "./Effects/CircularText.jsx";
import images from "../data/images.js";
import "./OwnerSection.css";

export default function OwnerSection() {
  return (
    <Lightfall className="owner-section">
      <div className="container owner-section__grid">
        <div className="owner-section__portrait">
          <img src={images.ownerPortrait} alt="MOHD ADIL,Founder & Principal Designer of Shilpkar Factory" />
          <div className="owner-section__circular">
            <CircularText text="Founder  • MOHD ADIL • " diameter={110} speed={18} />
          </div>
        </div>

        <div className="owner-section__text">
          <span className="eyebrow">In His Words</span>
          <SplitText
            as="h2"
            className="owner-section__quote chisel"
            text="“Good design should feel inevitable — as if the room could not have been any other way.”"
          />
          <p className="owner-section__name">MOHD ADIL</p>
          <p className="owner-section__role">Founder &amp; Director, Shilpkar Factory</p>
        </div>
      </div>
    </Lightfall>
  );
}
