import React from "react";
import { Link } from "react-router-dom";
import SplitText from "../components/Effects/SplitText.jsx";
import CircularGallery from "../components/Effects/CircularGallery.jsx";
import images from "../data/images.js";
import "./CircularGalleryPage.css";

export default function CircularGalleryPage() {
  return (
    <div className="circular-gallery-page section-dark">
      <div className="container circular-gallery-page__head">
        <span className="eyebrow">Immersive View</span>
        <SplitText as="h1" className="chisel" text="Walk through the collection" />
        <p>Drag, or use the arrows, to rotate the frame.</p>
      </div>

      <CircularGallery images={images.gallery} radius={420} />

      <div className="container circular-gallery-page__foot">
        <Link to="/gallery" className="circular-gallery-page__back" data-cursor="target">
          ← Back to Grid Gallery
        </Link>
      </div>
    </div>
  );
}
