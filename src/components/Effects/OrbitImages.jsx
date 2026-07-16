import React from "react";
import "./OrbitImages.css";

/**
 * OrbitImages — a set of images arranged on a slow-rotating circular orbit
 * around a center anchor. Hovering the whole orbit pauses rotation so
 * individual frames can be viewed. Each image counter-rotates so it stays
 * upright.
 */
export default function OrbitImages({
  images = [],
  size = 460,
  centerLabel = "Our Work",
}) {
  const radius = size / 2 - 62;

  return (
    <div className="orbit" style={{ width: size, height: size }}>
      <div className="orbit__ring" style={{ width: size, height: size }} />
      <div className="orbit__spin" style={{ width: size, height: size }}>
        {images.map((src, i) => {
          const angle = (360 / images.length) * i;
          return (
            <div
              className="orbit__item"
              key={i}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
              }}
            >
              <div className="orbit__item-counter">
                <img src={src} alt={`Interior detail ${i + 1}`} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="orbit__center">
        <span>{centerLabel}</span>
      </div>
    </div>
  );
}
