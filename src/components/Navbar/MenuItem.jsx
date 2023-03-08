import * as React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ link, text, toggle }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    setTimeout(() => {
      navigate(link, { state: { animationDelay: 1.2, longFade: true } });
    }, 800);
    toggle();
  };

  return (
    <motion.div variants={variants} className="link-div" onClick={navigateTo}>
      <p className="nav-link">{text}</p>
    </motion.div>
  );
};

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};
