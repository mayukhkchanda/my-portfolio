import React, { useRef, useState, useEffect } from "react";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";
import { Text, Image } from "@react-three/drei";
import { useNavigate } from "react-router";
const color = new Color();
const fontProps = {
  fontSize: 0.6,
  letterSpacing: -0.05,
  lineHeight: 1,
  color: 0x333,
  anchorX: "left",
  anchorY: "bottom",
  maxWidth: 2.5,
  "material-toneMapped": false,
};
function Icon({ iconPos, textPos, text, link, url }) {
  const textRef = useRef();
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => {
    e.stopPropagation();
    setHovered(true);
  };
  const out = () => setHovered(false);
  const navigate = useNavigate();

  const navigateTo = () => {
    setTimeout(() => {
      navigate(link, { state: { animationDelay: 1.2, longFade: true } });
    }, 800);
  };

  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);

  useFrame(() => {
    textRef.current.material.color.lerp(
      color.set(hovered ? "#fff" : "#333"),
      0.05
    );
  });
  return (
    <group ref={groupRef}>
      <Image
        scale={[1.8, 1.8]}
        raycast={() => null}
        position={iconPos}
        url={url}
      />
      <Text
        ref={textRef}
        onPointerOver={over}
        onPointerOut={out}
        onClick={navigateTo}
        position={textPos}
        {...fontProps}
        children={text}
      />
    </group>
  );
}

export default Icon;
