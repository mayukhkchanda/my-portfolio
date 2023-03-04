import React from "react";
import { Color } from "three";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";
import { Text, Image } from "@react-three/drei";
import { useNavigate } from "react-router";

function Icon({ iconPos, textPos, text, textureMap, link, visible, url }) {
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
  const planeGeometryArgs = [2, 2, 1, 1];

  const meshRef = useRef();
  const imageRef = useRef();
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
    // imageRef.current.color.lerp(color.set(hovered ? "#999" : "#777"), 0.05);
    // meshRef.current.color.lerp(color.set(hovered ? "#999" : "#777"), 0.05);
    textRef.current.material.color.lerp(
      color.set(hovered ? "#fff" : "#333"),
      0.05
    );
  });
  console.log(imageRef.current);
  return (
    <group ref={groupRef} visible={visible}>
      <Image
        scale={[1.8, 1.8]}
        ref={imageRef}
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
