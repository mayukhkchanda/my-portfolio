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

const navbarBgVariant = {
  closed: {
    y: "-110%",
    transition: {
      duration: 0.2,
      type: "tween",
      delay: 0.6,
    },
  },
  open: {
    y: "0%",
    transition: {
      duration: 0.2,
      type: "tween",
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
