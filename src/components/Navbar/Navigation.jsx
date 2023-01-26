import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.6 },
    display: "flex",
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.4 },
    display: "none",
  },
};

const links = [
  { link: "/", text: "home" },
  { link: "about", text: "about" },
  { link: "experience", text: "experience" },
  { link: "projects", text: "projects" },
  { link: "contacts", text: "contact" },
];

export const Navigation = (props) => (
  <motion.ul className="links-container" variants={variants}>
    {links.map(({ link, text }) => (
      <MenuItem link={link} text={text} key={link} toggle={props?.toggle} />
    ))}
  </motion.ul>
);
