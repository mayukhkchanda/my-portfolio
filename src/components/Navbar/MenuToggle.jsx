import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

const pathVariants = [
  {
    closed: { d: "M 2 2.5 L 20 2.5" },
    open: { d: "M 3 16.5 L 17 2.5" },
  },
  {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  },
  {
    closed: { d: "M 2 16.346 L 20 16.346" },
    open: { d: "M 3 2.5 L 17 16.346" },
  },
];

export const MenuToggle = ({ toggle }) => (
  <div>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={pathVariants[0]}
        transition={{ duration: 0.5, type: "tween" }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={pathVariants[1]}
        transition={{ duration: 0.4 }}
      />
      <Path
        variants={pathVariants[2]}
        transition={{ duration: 0.5, type: "tween" }}
      />
    </svg>
  </div>
);
