import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

export default function Gallery({ images = [] }) {
  return (
    <div className="gallery-grid">
      {images.map((src, i) => (
        <motion.figure
          className={`gallery-grid__item ${i % 5 === 0 ? "is-tall" : ""}`}
          key={i}
          data-cursor="target"
          data-cursor-label="View"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.65, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={src} alt={`Interior design reference ${i + 1}`} loading="lazy" />
          <span className="gallery-grid__overlay">
            <span className="gallery-grid__frame" />
            <span className="gallery-grid__label">{String(i + 1).padStart(2, "0")}</span>
          </span>
        </motion.figure>
      ))}
    </div>
  );
}
