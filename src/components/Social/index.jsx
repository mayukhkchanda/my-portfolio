import React from "react";
import { motion } from "framer-motion";
import "./style.scss";
import { useLocation } from "react-router";

const socialLinks = [
  {
    link: "https://github.com/mayukhkchanda",
    imgPath: "/assets/images/github-logo.png",
    alt: "github-icon",
    className: "github",
  },
  {
    link: "https://www.linkedin.com/in/mayukh-chanda-9a0080172/",
    imgPath: "/assets/images/Linkedin-Logo.png",
    alt: "linkedin-icon",
    className: "linkedin",
  },
  {
    link: "https://leetcode.com/M1yu11h/",
    imgPath: "/assets/images/leetcode.png",
    alt: "leetcode-icon",
    className: "leetcode",
  },
];

const Social = () => {
  const location = useLocation();
  const showLinks = location.pathname === "/";

  if (!showLinks) return;

  return (
    <div className="social">
      {socialLinks.map(({ alt, imgPath, link, className }) => (
        <motion.a
          className={`socio-link ${className}`}
          whileHover={{ x: -20 }}
          style={{ x: -40 }}
          href={link}
          target="_blank"
          key={link}
        >
          <img src={process.env.PUBLIC_URL + imgPath} alt={alt} />
        </motion.a>
      ))}
    </div>
  );
};

export default Social;
