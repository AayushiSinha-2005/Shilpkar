import { Link } from 'react-router-dom';
import './AnimatedButton.css';

/**
 * AnimatedButton — gold outline button with a sweeping fill + glow on hover.
 * Renders a <Link> when `to` is provided, otherwise a <button>.
 */
export default function AnimatedButton({
  children,
  to,
  onClick,
  variant = 'primary', // 'primary' | 'ghost'
  type = 'button',
  className = '',
}) {
  const content = (
    <span className={`aBtn aBtn--${variant} ${className}`} data-cursor="View">
      <span className="aBtn__label">{children}</span>
      <span className="aBtn__fill" />
      <span className="aBtn__glow" />
    </span>
  );

  if (to) {
    return (
      <Link to={to} className="aBtn-wrap">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="aBtn-wrap">
      {content}
    </button>
  );
}
