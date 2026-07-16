import React, { useEffect, useRef, useState } from "react";
import "./Cursor.css";

/**
 * TargetCursor — replaces the native cursor with a gold crosshair ring.
 * On hover over interactive elements ([data-cursor="target"], a, button)
 * the ring snaps to frame the element like a camera focus target.
 * Disabled automatically on touch devices.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [locked, setLocked] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;
    let raf;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current && !ringRef.current.dataset.locked) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const overHandler = (e) => {
      const target = e.target.closest("[data-cursor], a, button, input, textarea");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const isTight = target.matches("a, button, [data-cursor='target']");
      setLabel(target.getAttribute("data-cursor-label") || "");
      if (ringRef.current) {
        ringRef.current.dataset.locked = "1";
        setLocked(true);
        const pad = isTight ? 10 : 0;
        ringRef.current.style.width = `${rect.width + pad * 2}px`;
        ringRef.current.style.height = `${rect.height + pad * 2}px`;
        ringRef.current.style.borderRadius = isTight ? "6px" : "50%";
        ringRef.current.style.transform = `translate(${rect.left + rect.width / 2}px, ${
          rect.top + rect.height / 2
        }px) translate(-50%, -50%)`;
      }
    };

    const outHandler = (e) => {
      const target = e.target.closest("[data-cursor], a, button, input, textarea");
      if (!target) return;
      if (ringRef.current) {
        delete ringRef.current.dataset.locked;
        ringRef.current.style.width = "";
        ringRef.current.style.height = "";
        ringRef.current.style.borderRadius = "50%";
      }
      setLocked(false);
      setLabel("");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", overHandler);
    document.addEventListener("mouseout", outHandler);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", overHandler);
      document.removeEventListener("mouseout", outHandler);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div className="tcursor-dot" ref={dotRef} />
      <div className={`tcursor-ring ${locked ? "is-locked" : ""}`} ref={ringRef}>
        <span className="tcursor-corner tl" />
        <span className="tcursor-corner tr" />
        <span className="tcursor-corner bl" />
        <span className="tcursor-corner br" />
        {label && <span className="tcursor-label">{label}</span>}
      </div>
    </>
  );
}
