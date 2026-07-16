import React, { useId } from "react";
import "./CircularText.css";

/**
 * CircularText — decorative rotating text set along a circular path,
 * with a static gold center mark. Used as an ambient decorative element.
 */
export default function CircularText({
  text = "SHILPKAR FACTORY • ",
  diameter = 120,
  speed = 20,
  className = "",
}) {
  const id = useId().replace(/:/g, "");
  const r = diameter / 2 - 10;

  return (
    <div
      className={`circular-text ${className}`}
      style={{ width: diameter, height: diameter, animationDuration: `${speed}s` }}
    >
      <svg viewBox={`0 0 ${diameter} ${diameter}`} width={diameter} height={diameter}>
        <defs>
          <path
            id={`circPath-${id}`}
            d={`M ${diameter / 2}, ${diameter / 2} m -${r}, 0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
          />
        </defs>
        <text fontSize="10.5" letterSpacing="2.5" fill="var(--gold)">
          <textPath href={`#circPath-${id}`}>{text.repeat(2)}</textPath>
        </text>
      </svg>
      <div className="circular-text__center" />
    </div>
  );
}
