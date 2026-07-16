import React from "react";
import { motion, useInView } from "framer-motion";

/**
 * SplitText — splits a heading into words (default) or characters and
 * reveals them with a staggered rise + fade as they enter the viewport.
 *
 * Usage:
 *   <SplitText as="h2" text="Transforming Spaces with Art & Texture" />
 */
export default function SplitText({
  text = "",
  as = "h2",
  className = "",
  splitBy = "word",
  delay = 0,
  stagger = 0.045,
  once = true,
}) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const Tag = motion[as] || motion.h2;

  const pieces = splitBy === "char" ? Array.from(text) : text.split(" ");

  return (
    <Tag ref={ref} className={`split-text ${className}`} aria-label={text}>
      {pieces.map((piece, i) => (
        <span
          key={i}
          className="split-text__mask"
          style={{ display: "inline-block", overflow: "hidden" }}
          aria-hidden="true"
        >
          <motion.span
            style={{ display: "inline-block", willChange: "transform" }}
            initial={{ y: "110%", opacity: 0, rotate: 2 }}
            animate={inView ? { y: "0%", opacity: 1, rotate: 0 } : {}}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * stagger,
            }}
          >
            {piece}
            {splitBy === "word" ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
