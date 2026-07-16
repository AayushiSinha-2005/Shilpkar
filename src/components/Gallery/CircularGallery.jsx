import { useRef, useState } from 'react';
import './CircularGallery.css';

/**
 * CircularGallery — a large drag-to-rotate circular carousel of project
 * images. Click any frame to trigger onSelect (opens the detail modal).
 */
export default function CircularGallery({ items, onSelect }) {
  const [rotation, setRotation] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const count = items.length;
  const step = 360 / count;

  const onPointerDown = (e) => {
    dragging.current = true;
    lastX.current = e.clientX;
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const delta = e.clientX - lastX.current;
    lastX.current = e.clientX;
    setRotation((r) => r + delta * 0.35);
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  return (
    <div
      className="circular-gallery"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDrag}
      onPointerLeave={stopDrag}
    >
      <div className="circular-gallery__stage" style={{ transform: `rotateY(${rotation}deg)` }}>
        {items.map((item, i) => (
          <button
            key={item.id || i}
            className="circular-gallery__frame"
            style={{ transform: `rotateY(${step * i}deg) translateZ(420px)` }}
            onClick={() => onSelect && onSelect(item)}
            data-cursor="Open"
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <span className="circular-gallery__frame-title">{item.title}</span>
          </button>
        ))}
      </div>
      <p className="circular-gallery__hint">Drag to rotate</p>
    </div>
  );
}
