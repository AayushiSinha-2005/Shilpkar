import React, { useEffect, useRef, useState } from "react";
import "./CircularGallery.css";

/**
 * CircularGallery — images arranged around a 3D ring that rotates
 * continuously and responds to drag / arrow controls. Active (front-facing)
 * item scales up and loses blur.
 */
export default function CircularGallery({ images = [], radius = 420 }) {
  const [rotation, setRotation] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const autoplay = useRef(true);
  const frame = useRef(null);

  const count = images.length;
  const step = 360 / count;

  useEffect(() => {
    const tick = () => {
      if (autoplay.current && !dragging.current) {
        setRotation((r) => r + 0.05);
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    autoplay.current = false;
    lastX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const delta = x - lastX.current;
    lastX.current = x;
    setRotation((r) => r + delta * 0.25);
  };
  const endDrag = () => {
    dragging.current = false;
  };

  const rotateBy = (dir) => {
    autoplay.current = false;
    setRotation((r) => r + dir * step);
  };

  return (
    <div className="circular-gallery">
      <div
        className="circular-gallery__stage"
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={endDrag}
      >
        <div
          className="circular-gallery__ring"
          style={{ transform: `translateZ(-${radius}px) rotateY(${-rotation}deg)` }}
        >
          {images.map((src, i) => {
            const angle = step * i;
            return (
              <div
                className="circular-gallery__item"
                key={i}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <img src={src} alt={`Circular gallery frame ${i + 1}`} draggable={false} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="circular-gallery__controls">
        <button onClick={() => rotateBy(-1)} data-cursor="target" aria-label="Previous">
          ‹
        </button>
        <span>Drag to rotate</span>
        <button onClick={() => rotateBy(1)} data-cursor="target" aria-label="Next">
          ›
        </button>
      </div>
    </div>
  );
}
