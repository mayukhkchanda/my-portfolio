import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadian } from "utils/commonUtils";
import { useLocation } from "react-router";
import Icon from "./Icons";
import Home from "components/Home";
import { LaptopModel } from "./SceneMinified";

const getTransformations = (pathname, animationDelay) => {
  let scenePos, sceneRot, camPos;
  if (pathname === "/my-portfolio" || pathname === "/my-portfolio/") {
    scenePos = { x: 3.0, y: -8, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: angleToRadian(0),
      y: -1 * angleToRadian(0),
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 27, duration: 1, delay: animationDelay };
  } else if (pathname === "/my-portfolio/about") {
    scenePos = { x: 0, y: -13, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: 0,
      y: 0,
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 10, duration: 1, delay: animationDelay };
  } else if (pathname === "/my-portfolio/experience") {
    scenePos = { x: -18, y: -15, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: 0,
      y: 0,
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 23, duration: 1, delay: animationDelay };
  } else if (pathname === "/my-portfolio/projects") {
    scenePos = { x: 0, y: -4, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: angleToRadian(90),
      y: 0,
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 17, duration: 1, delay: animationDelay };
  } else if (pathname === "/my-portfolio/contacts") {
    scenePos = { x: -24.5, y: -3, z: 22, duration: 1, delay: animationDelay };
    sceneRot = {
      x: angleToRadian(90),
      y: 0,
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 30, duration: 1, delay: animationDelay };
  }
  return { scenePos, sceneRot, camPos };
};

const innerWidth = window.innerWidth;

const Model = () => {
  const cameraRef = useRef(null);
  const groupRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!location?.pathname) return;

    const { state, pathname } = location;
    const animationDelay = state?.animationDelay ? state?.animationDelay : 0.25;

    const { scenePos, camPos, sceneRot } = getTransformations(
      pathname,
      animationDelay
    );
    if (!scenePos || !camPos || !sceneRot) return;
    gsap.to(groupRef.current.position, scenePos);
    gsap.to(groupRef.current.rotation, sceneRot);
    gsap.to(cameraRef.current.position, camPos);
  }, [location?.pathname]);
  const isIconVisible =
    location?.pathname === "/my-portfolio" ||
    location?.pathname === "/my-portfolio/";

  return (
    <>
      <PerspectiveCamera
        args={[45, window.innerWidth / window.innerHeight, 1, 250]}
        makeDefault
        position={[0, 5, 50]}
        ref={cameraRef}
      />
      {innerWidth < 600 ? null : (
        <OrbitControls
          maxAzimuthAngle={angleToRadian(45)}
          minPolarAngle={angleToRadian(0)}
          maxPolarAngle={angleToRadian(120)}
          enablePan={false}
        />
      )}
      <ambientLight intensity={1} color={0xffffff} />
      <pointLight color="#ee82ee" position={[0, 0, 5]} />
      <pointLight color="#18ffff" position={[-2, 4, 5]} />
      <group ref={groupRef}>
        <mesh>
          <Html
            className="content"
            position={[-2, 11, -8.5]}
            scale={[1.5, 1.5, 1.5]}
            transform
            occlude
          >
            <div
              className="wrapper"
              onPointerDown={(e) => e.stopPropagation()}
              style={{ opacity: isIconVisible ? "1" : "0" }}
            >
              <Home />
            </div>
          </Html>
        </mesh>

        <group visible={isIconVisible}>
          <Icon
            iconPos={[-8, 8, -8.5]}
            textPos={[-9.1, 6.0, -8.5]}
            text="About Me"
            link={"/my-portfolio/about"}
            url={process.env.PUBLIC_URL + "/assets/images/about-me.png"}
          />
          <Icon
            iconPos={[-4, 8, -8.5]}
            textPos={[-5.1, 6.0, -8.5]}
            text="Experience"
            link={"/my-portfolio/experience"}
            url={process.env.PUBLIC_URL + "/assets/images/office-icon.jpg"}
          />

          <Icon
            iconPos={[0, 8, -8.5]}
            textPos={[-1.1, 6.0, -8.5]}
            text="Projects"
            link={"/my-portfolio/projects"}
            url={process.env.PUBLIC_URL + "/assets/images/projects-icons.jpg"}
          />
          <Icon
            iconPos={[4, 8, -8.5]}
            textPos={[3.1, 6.0, -8.5]}
            text="Contact"
            link={"/my-portfolio/contacts"}
            url={process.env.PUBLIC_URL + "/assets/images/email.jpg"}
          />
        </group>
        <LaptopModel />
      </group>
    </>
  );
};

export default Model;
