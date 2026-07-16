import React from "react";
import { motion, useInView } from "framer-motion";

/**
 * AnimatedContent — wraps any content (buttons, cards, blocks) with a
 * configurable rise/fade/scale entrance triggered on view.
 */
export default function AnimatedContent({
  children,
  delay = 0,
  duration = 0.8,
  distance = 30,
  direction = "up",
  scale = true,
  once = true,
  className = "",
}) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once, margin: "-8% 0px -8% 0px" });

  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign = direction === "up" || direction === "left" ? 1 : -1;

  const initial = {
    opacity: 0,
    [axis]: sign * distance,
    ...(scale ? { scale: 0.96 } : {}),
  };
  const animate = inView
    ? { opacity: 1, [axis]: 0, ...(scale ? { scale: 1 } : {}) }
    : initial;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
