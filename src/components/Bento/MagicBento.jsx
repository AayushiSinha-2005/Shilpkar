import { useRef } from 'react';
import './MagicBento.css';

function BentoCard({ item, span }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = x - rect.width / 2;
    const cy = y - rect.height / 2;

    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
    card.style.setProperty('--rx', `${(-cy / rect.height) * 8}deg`);
    card.style.setProperty('--ry', `${(cx / rect.width) * 8}deg`);
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--rx', `0deg`);
    card.style.setProperty('--ry', `0deg`);
  };

  return (
    <div
      ref={cardRef}
      className={`bento-card ${span || ''}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor={item.cursorLabel || 'View'}
    >
      <div className="bento-card__glow" />
      <img src={item.image} alt={item.title} className="bento-card__img" loading="lazy" />
      <div className="bento-card__scrim" />
      <div className="bento-card__body">
        <span className="bento-card__index">{item.index}</span>
        <h3 className="bento-card__title">{item.title}</h3>
        {item.desc && <p className="bento-card__desc">{item.desc}</p>}
      </div>
    </div>
  );
}

/**
 * MagicBento — an asymmetric grid of glass-glow cards that tilt and
 * spotlight toward the cursor. Used for the services showcase.
 */
export default function MagicBento({ items }) {
  const spans = ['bento-card--wide', '', '', '', 'bento-card--tall', ''];
  return (
    <div className="magic-bento">
      {items.map((item, i) => (
        <BentoCard key={item.title} item={item} span={spans[i % spans.length]} />
      ))}
    </div>
  );
}
