import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./BubbleMenu.css";

const bubbleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: (i) => ({
    opacity: 0,
    scale: 0,
    transition: { delay: 0.03 * i, duration: 0.3, ease: "easeIn" },
  }),
};

export default function BubbleMenu({ links, open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="bubble-menu"
          initial={{ clipPath: "circle(0% at 92% 6%)" }}
          animate={{ clipPath: "circle(150% at 92% 6%)" }}
          exit={{ clipPath: "circle(0% at 92% 6%)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="bubble-menu__list">
            {links.map((link, i) => (
              <motion.li
                key={link.to}
                custom={i}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={bubbleVariants}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `bubble-menu__link ${isActive ? "is-active" : ""}`
                  }
                  onClick={onClose}
                  data-cursor="target"
                >
                  <span className="bubble-menu__index">0{i + 1}</span>
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <div className="bubble-menu__footer">
            <span>Shilpkar Factory</span>
            <span>Crafted Interiors</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
