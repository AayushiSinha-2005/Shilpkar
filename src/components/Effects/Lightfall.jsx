import React from "react";
import "./Lightfall.css";

/**
 * Lightfall — soft diagonal beams of light drifting down a dark backdrop,
 * used behind the Owner section to give the quote/portrait weight.
 */
export default function Lightfall({ children, className = "" }) {
  return (
    <div className={`lightfall ${className}`}>
      <div className="lightfall__beams" aria-hidden="true">
        <span className="lightfall__beam b1" />
        <span className="lightfall__beam b2" />
        <span className="lightfall__beam b3" />
        <span className="lightfall__grain" />
      </div>
      <div className="lightfall__content">{children}</div>
    </div>
  );
}
