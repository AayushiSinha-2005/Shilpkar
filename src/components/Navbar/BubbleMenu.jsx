import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './BubbleMenu.css';

/**
 * BubbleMenu — fullscreen mobile navigation where each link floats in
 * as an organic gold bubble, staggered on open.
 */
export default function BubbleMenu({ links, open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="bubble-menu"
          initial={{ clipPath: 'circle(0% at 92% 6%)' }}
          animate={{ clipPath: 'circle(150% at 92% 6%)' }}
          exit={{ clipPath: 'circle(0% at 92% 6%)' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <ul className="bubble-menu__list">
            {links.map((l, i) => (
              <motion.li
                key={l.to}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.07, type: 'spring', stiffness: 200, damping: 16 }}
              >
                <NavLink to={l.to} className="bubble-menu__bubble" onClick={onClose}>
                  {l.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <button className="bubble-menu__close" onClick={onClose} aria-label="Close menu">
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
