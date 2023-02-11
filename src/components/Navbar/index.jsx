import React from "react";
import { MenuToggle } from "./MenuToggle";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Navigation";
import "./style.scss";

const navbarVariant = {
  closed: {
    height: "0%",
    transition: {
      delay: 0.4,
      duration: 0.2,
      type: "tween",
    },
  },
  open: {
    height: "100%",
    transition: {
      duration: 0.2,
      type: "tween",
      delay: 0.4,
    },
  },
};

// const navbarBgVariant = {
//   closed: {
//     y: "-110%",
//     transition: {
//       duration: 0.2,
//       type: "tween",
//       delay: 0.42,
//     },
//   },
//   open: {
//     y: "0%",
//     transition: {
//       duration: 0.2,
//       type: "tween",
//     },
//   },
// };

const height = window.innerHeight;

const navbarBgVariant = {
  open: {
    clipPath: `circle(${height * 2 + 200}px at 230px 60px)`,
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(20px at 230px 60px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav
      className="navbar"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={navbarVariant}
    >
      <motion.div className="menu">
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>

      <Navigation toggle={() => toggleOpen()} />
      <motion.div className="nav-bg" variants={navbarBgVariant}></motion.div>
    </motion.nav>
  );
};

export default Navbar;
