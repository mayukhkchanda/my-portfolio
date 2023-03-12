import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadian } from "utils/commonUtils";
import { useLocation, useNavigate } from "react-router";
import Home from "components/Home";
import { LaptopModel } from "./SceneMinified";
import { useThree } from "@react-three/fiber";


const getTransformations = (pathname, animationDelay) => {
  let scenePos, sceneRot, camPos;
  if (["/my-portfolio", "/my-portfolio/", "/"].includes(pathname)) {
    scenePos = { x: 3.0, y: -8, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: angleToRadian(0),
      y: -1 * angleToRadian(0),
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 27, duration: 1, delay: animationDelay };
  } else if (pathname === "/about") {
    scenePos = { x: 0, y: -13, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: 0,
      y: 0,
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 10, duration: 1, delay: animationDelay };
  } else if (pathname === "/experience") {
    scenePos = { x: -18, y: -15, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: 0,
      y: 0,
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 23, duration: 1, delay: animationDelay };
  } else if (pathname === "/projects") {
    scenePos = { x: 0, y: -4, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: angleToRadian(90),
      y: 0,
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 17, duration: 1, delay: animationDelay };
  } else if (pathname === "/contacts") {
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
  const controlsRef = useRef(null);
  const groupRef = useRef(null);
  const location = useLocation();
  const { invalidate, camera, gl } = useThree()

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

    setTimeout(() => {
      invalidate(60);
    }, 800);

  }, [location?.pathname]);
  const isIconVisible = ["/my-portfolio", "/my-portfolio/", "/"].includes(location?.pathname)

  return (
    <>
      <PerspectiveCamera
        args={[45, window.innerWidth / window.innerHeight, 1, 250]}
        makeDefault
        position={[0, 5, 100]}

        ref={cameraRef}
      />
      <OrbitControls
        maxAzimuthAngle={angleToRadian(45)}
        minPolarAngle={angleToRadian(0)}
        maxPolarAngle={angleToRadian(120)}
        enablePan={false}
        args={[camera, gl.domElement]}
        ref={controlsRef}
      />
      <ambientLight intensity={1} color={0xffffff} />
      <pointLight color="#ee82ee" position={[0, 0, 5]} />
      <pointLight color="#18ffff" position={[-2, 4, 5]} />
      <group rotation={[0, angleToRadian(75), 0]} ref={groupRef}>
        <mesh>
          <Html
            className="content"
            position={[innerWidth < 600 ? -2 : -1, 5.5, -9]}
            scale={[1.5, 1.5, 1.5]}
            transform
            occlude
          >
            <div
              className="wrapper"
              onPointerDown={(e) => e.stopPropagation()}
              style={{ opacity: isIconVisible ? "1" : "0" }}
            >
              <Home invalidate={invalidate} navigate={useNavigate()} />
            </div>
          </Html>
        </mesh>

        <LaptopModel />
      </group>
    </>
  );
};

export default Model;
