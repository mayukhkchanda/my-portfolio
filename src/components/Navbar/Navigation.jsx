import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.6, delay: 0.55 },
    display: "flex",
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.4 },
    display: "none",
  },
};

const links = [
  { link: "/my-portfolio", text: "home" },
  { link: "/my-portfolio/about", text: "about" },
  { link: "/my-portfolio/experience", text: "experience" },
  { link: "/my-portfolio/projects", text: "projects" },
  { link: "/my-portfolio/contacts", text: "contact" },
];

export const Navigation = (props) => (
  <motion.ul className="links-container" variants={variants}>
    {links.map(({ link, text }) => (
      <MenuItem link={link} text={text} key={link} toggle={props?.toggle} />
    ))}
  </motion.ul>
);
