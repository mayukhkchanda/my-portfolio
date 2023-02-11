import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadian } from "utils/commonUtils";
import { useLocation } from "react-router";

const getTransformations = (pathname, animationDelay) => {
  let scenePos, sceneRot, camPos;
  if (pathname === "/my-portfolio" || pathname === "/my-portfolio/") {
    scenePos = { x: 3.0, y: -12, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: angleToRadian(3),
      y: -1 * angleToRadian(90),
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 26, duration: 1, delay: animationDelay };
  } else if (pathname === "/my-portfolio/about") {
    scenePos = { x: 0, y: -12, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: 0,
      y: -1 * angleToRadian(90),
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 10, duration: 1, delay: animationDelay };
  } else if (pathname === "/my-portfolio/experience") {
    scenePos = { x: -18, y: -15, z: -10, duration: 1, delay: animationDelay };
    sceneRot = {
      x: 0,
      y: -1 * angleToRadian(90),
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 15, duration: 1, delay: animationDelay };
  } else if (pathname === "/my-portfolio/projects") {
    scenePos = { x: 0, y: -4, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: angleToRadian(90),
      y: -1 * angleToRadian(90),
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 20, duration: 1, delay: animationDelay };
  } else if (pathname === "/my-portfolio/contacts") {
    scenePos = { x: -25, y: -4, z: 0, duration: 1, delay: animationDelay };
    sceneRot = {
      x: angleToRadian(90),
      y: -1 * angleToRadian(90),
      z: 0,
      duration: 1,
      delay: animationDelay,
    };
    camPos = { x: 0, y: 0, z: 8, duration: 1, delay: animationDelay };
  }
  return { scenePos, sceneRot, camPos };
};

const innerWidth = window.innerWidth;

const Model = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/assets/gltfs/voxel_web_development/scene.gltf"
  );
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const directionalLightRef = useRef(null);
  const gltfRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!gltfRef.current) return;
    gltf.scene.scale.set(5, 5, 5);

    gltf.scene.rotation.set(angleToRadian(3), -1 * angleToRadian(90), 0);
  }, [gltfRef.current]);

  useEffect(() => {
    if (!location?.pathname) return;

    const { state, pathname } = location;
    const animationDelay = state?.animationDelay ? state?.animationDelay : 0.25;

    const { scenePos, camPos, sceneRot } = getTransformations(
      pathname,
      animationDelay
    );
    if (!scenePos || !camPos || !scenePos) return;
    gsap.to(gltf.scene.position, scenePos);
    gsap.to(gltf.scene.rotation, sceneRot);
    gsap.to(cameraRef.current.position, camPos);
  }, [location?.pathname, cameraRef.current]);

  return (
    <>
      <PerspectiveCamera
        args={[45, window.innerWidth / window.innerHeight, 1, 2000]}
        makeDefault
        position={[0, 5, 50]}
        ref={cameraRef}
      />
      {innerWidth < 600 ? null : (
        <OrbitControls
          ref={controlsRef}
          maxAzimuthAngle={angleToRadian(45)}
          minPolarAngle={angleToRadian(0)}
          maxPolarAngle={angleToRadian(180)}
        />
      )}
      <ambientLight intensity={1} color={0xffffff} />
      <pointLight
        color="#ee82ee"
        ref={directionalLightRef}
        position={[0, 0, 5]}
      />
      <pointLight
        color="#18ffff"
        ref={directionalLightRef}
        position={[-2, 4, 5]}
      />
      <primitive object={gltf.scene} ref={gltfRef} />
    </>
  );
};

export default Model;
