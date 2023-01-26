import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import "./style.scss";

const TypeWriter = (props) => {
  const { str } = props;
  const [writer, setWriter] = useState({ idx: 0, text: "", start: false });

  useEffect(() => {
    if (writer.start) return;
    let timeoutId;
    timeoutId = setTimeout(() => {
      setWriter((prevState) => ({ ...prevState, start: true }));
    }, 2000);
    return () => timeoutId && clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const { text, idx, start } = writer;

    if (!start) return;

    let timeoutId;
    if (text.length >= str[idx].length) {
      timeoutId = setTimeout(() => {
        setWriter((prevState) => ({
          ...prevState,
          idx: (idx + 1) % str.length,
          text: "",
        }));
      }, 2000);
    } else {
      timeoutId = setTimeout(() => {
        setWriter((prevState) => ({
          ...prevState,
          idx,
          text: str[idx].substr(0, text.length + 1),
        }));
      }, 100);
    }
    return () => timeoutId && clearTimeout(timeoutId);
  }, [writer.text, writer.start]);

  return (
    <p className="typewriter">
      {writer.text}
      <span className="caret" />
    </p>
  );
};

TypeWriter.propType = {
  str: PropType.arrayOf(PropType.string),
};

export default TypeWriter;
