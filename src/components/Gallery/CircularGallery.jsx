import { useRef, useState } from "react";
import "./CircularGallery.css";

export default function CircularGallery({ items, onSelect }) {
  const [rotation, setRotation] = useState(0);

  const dragging = useRef(false);
  const lastX = useRef(0);

  const count = items?.length || 0;

  if (!count) return null;

  const step = 360 / count;

  const onPointerDown = (e) => {
    dragging.current = true;
    lastX.current = e.clientX;
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;

    const delta = e.clientX - lastX.current;
    lastX.current = e.clientX;

    setRotation((r) => r + delta * 0.3);
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  return (
    <section
      className="circular-gallery"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDrag}
      onPointerCancel={stopDrag}
      onPointerLeave={stopDrag}
    >

      {/* =========================
          SECTION HEADING
      ========================== */}

      <div className="circular-gallery__header">

        <div className="circular-gallery__eyebrow">
          <span></span>
          IMMERSIVE VIEW
        </div>

        <h1 className="circular-gallery__heading">
          Walk through the collection
        </h1>

        <p className="circular-gallery__description">
          Drag, or use the arrows, to rotate the frame.
        </p>

      </div>


      {/* =========================
          3D GALLERY
      ========================== */}

      <div
        className="circular-gallery__stage"
        style={{
          transform: `rotateY(${rotation}deg)`,
        }}
      >

        {items.map((item, i) => (
          <button
            key={item.id || i}
            type="button"
            className="circular-gallery__frame"
            style={{
              transform: `
                rotateY(${step * i}deg)
                translateZ(680px)
              `,
            }}
            onClick={(e) => {
              e.stopPropagation();
              onSelect && onSelect(item);
            }}
            data-cursor="Open"
          >
            <img
              src={item.image}
              alt={item.title || "Shilpkar Factory Project"}
              loading="lazy"
              draggable="false"
            />

            <span className="circular-gallery__frame-title">
              {item.title}
            </span>
          </button>
        ))}

      </div>


      {/* =========================
          BOTTOM INSTRUCTION
      ========================== */}

      <div className="circular-gallery__instruction">
        <span className="circular-gallery__instruction-line"></span>

        <span>DRAG TO EXPLORE</span>

        <span className="circular-gallery__instruction-line"></span>
      </div>

      <div className="circular-gallery__floor"></div>

    </section>
  );
}