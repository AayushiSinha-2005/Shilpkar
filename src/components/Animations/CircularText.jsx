import './CircularText.css';

/**
 * CircularText — text set on a circular SVG path that rotates continuously.
 * Used around hero CTA, gallery badges, and section markers.
 */
export default function CircularText({
  text = 'SHILPKAR FACTORY • INTERIOR DESIGN • ',
  size = 180,
  duration = 18,
  reverse = false,
  fill = 'var(--gold)',
  className = '',
  id,
}) {
  const pathId = id || `circular-text-path-${Math.round(Math.random() * 100000)}`;
  const radius = size / 2 - 14;

  return (
    <div
      className={`circular-text ${className}`}
      style={{
        width: size,
        height: size,
        animationDuration: `${duration}s`,
        animationDirection: reverse ? 'reverse' : 'normal',
      }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <defs>
          <path
            id={pathId}
            d={`M ${size / 2},${size / 2} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text fill={fill} fontSize={size * 0.068} letterSpacing="2.5">
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
