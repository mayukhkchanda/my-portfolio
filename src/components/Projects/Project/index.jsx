import React, { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";
import PropTypes from "prop-types";
import LaunchIcon from "@mui/icons-material/Launch";
import "./style.scss";

const techVariants = {
  hide: {
    opacity: 0,
    y: "-50%",
  },
  show: {
    opacity: 1,
    y: "0%",
  },
};

const overlayVariant = {
  hide: {
    y: "-110%",
    transition: {
      duration: 0.1,
      delay: 0.2,
    },
  },
  show: {
    y: "0%",
    transition: {
      duration: 0.2,
    },
  },
};

const nameVariant = {
  hide: {
    y: "-150%",
    transition: {
      duration: 0.1,
      delay: 0.2,
    },
  },
  show: {
    y: "0%",
    transition: {
      duration: 0.2,
    },
  },
};

const Index = (props) => {
  const { backgroundUrl, descBrief, urlLink, techs, githubLink, linkTxt } =
    props;
  const [isHover, toggleHover] = useCycle(false, true);
  const [isMobile, setMobile] = useState(false);
  const inlineStyle = { backgroundImage: `url(${backgroundUrl})` };

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  }, []);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <a
      href={urlLink}
      className="project-item-wrapper"
      target="_blank"
      rel="noreferrer"
    >
      <motion.div
        className="project-item"
        initial={false}
        animate={isHover ? "show" : "hide"}
        onHoverStart={toggleHover}
        onHoverEnd={toggleHover}
      >
        <motion.div className="description">
          <motion.div
            className="tech-used"
            variants={{
              hide: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {techs.map((tech) => (
              <motion.div className="tech" key={tech} variants={techVariants}>
                {tech}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={techVariants} className="tech proj-link">
            {linkTxt}
            <LaunchIcon className="launch-icon" />
          </motion.div>
        </motion.div>
        <motion.div className="overlay" variants={overlayVariant} />
        <div className="image" style={inlineStyle} />
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="github-link"
          onClick={stopPropagation}
        >
          GITHUB
        </a>
      </motion.div>
      <motion.div
        initial={false}
        animate={isHover || isMobile ? "show" : "hide"}
        variants={nameVariant}
        className="proj-name"
      >
        {descBrief}
      </motion.div>
    </a>
  );
};

Index.propTypes = {
  descBrief: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
  backgroundUrl: PropTypes.string,
  urlLink: PropTypes.string,
  linkTxt: PropTypes.string,
  githubLink: PropTypes.string,
};

export default Index;
