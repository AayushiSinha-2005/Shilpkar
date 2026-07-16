import { motion } from 'framer-motion';
import './SplitText.css';

/**
 * SplitText — breaks a heading into words/characters and staggers them in.
 * Usage: <SplitText text="Crafting Timeless Interiors" as="h1" splitBy="word" />
 */
export default function SplitText({
  text,
  as: Tag = 'h2',
  splitBy = 'word',
  className = '',
  delay = 0,
  duration = 0.9,
  stagger = 0.055,
}) {
  const pieces = splitBy === 'char' ? text.split('') : text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { y: '110%', opacity: 0, rotate: 2 },
    visible: {
      y: '0%',
      opacity: 1,
      rotate: 0,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Tag className={`split-text ${className}`}>
      <motion.span
        className="split-text__row"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        {pieces.map((piece, i) => (
          <span className="split-text__mask" key={i}>
            <motion.span className="split-text__piece" variants={child}>
              {piece === '' ? '\u00A0' : piece}
              {splitBy === 'word' && i !== pieces.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
