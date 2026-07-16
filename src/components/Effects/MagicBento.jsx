import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./MagicBento.css";

function BentoCard({ item, index }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);

    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", `0deg`);
    card.style.setProperty("--ry", `0deg`);
  };

  return (
    <motion.article
      ref={cardRef}
      className={`bento-card ${item.big ? "bento-card--big" : ""}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor="target"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bento-card__spotlight" />
      <div className="bento-card__media">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="bento-card__body">
        <span className="bento-card__icon">{item.icon}</span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </motion.article>
  );
}

export default function MagicBento({ items = [] }) {
  return (
    <div className="magic-bento">
      {items.map((item, i) => (
        <BentoCard item={item} index={i} key={item.title} />
      ))}
    </div>
  );
}
