import React from "react";
import "./Silk.css";

/**
 * Silk — an ambient animated silk-like flowing gradient mesh, used as a
 * soft moving backdrop behind the Projects masonry. Pure CSS, GPU-friendly.
 */
export default function Silk({ className = "" }) {
  return (
    <div className={`silk ${className}`} aria-hidden="true">
      <span className="silk__layer l1" />
      <span className="silk__layer l2" />
      <span className="silk__layer l3" />
    </div>
  );
}
