import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './SilkTransition.css';

const veilVariants = {
  initial: { scaleY: 1 },
  animate: { scaleY: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  exit: { scaleY: 1, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } },
};

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3 } },
};

/**
 * SilkTransition — wraps route content. On navigation, a silk-smooth
 * gold veil sweeps down and back up while the outgoing page fades,
 * masking the swap between pages.
 */
export default function SilkTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="silk-page"
      >
        <motion.div className="silk-veil silk-veil--top" variants={veilVariants} />
        <motion.div className="silk-veil silk-veil--bottom" variants={veilVariants} />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
