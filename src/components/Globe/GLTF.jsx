import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadian } from "utils/commonUtils";
import { useLocation } from "react-router";

const Model = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/assets/gltfs/voxel_web_development/scene.gltf"
  );
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!controlsRef.current) return;
    gltf.scene.scale.set(5, 5, 5);

    gltf.scene.rotation.set(angleToRadian(5), -1 * angleToRadian(90), 0);
  }, [controlsRef.current]);

  useEffect(() => {
    if (!location?.pathname) return;

    const { state, pathname } = location;
    const animationDelay = state?.animationDelay ? state?.animationDelay : 0.25;

    if (
      (pathname === "/my-portfolio" || pathname === "/my-portfolio/") &&
      cameraRef.current
    ) {
      gsap.to(gltf.scene.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        delay: animationDelay,
      });
      gsap.to(gltf.scene.rotation, {
        x: angleToRadian(5),
        y: -1 * angleToRadian(90),
        z: 0,
        duration: 1,
        delay: animationDelay,
      });
      gsap.to(cameraRef.current.position, {
        x: 0,
        y: 0,
        z: 50,
        duration: 1,
        delay: animationDelay,
      });
    } else if (pathname === "/my-portfolio/about" && cameraRef.current) {
      gsap.to(gltf.scene.position, {
        x: 0,
        y: -12,
        z: 0,
        duration: 1,
        delay: animationDelay,
      });
      gsap.to(gltf.scene.rotation, {
        x: 0,
        y: -1 * angleToRadian(90),
        z: 0,
        duration: 1,
        delay: animationDelay,
      });
      gsap.to(cameraRef.current.position, {
        x: 0,
        y: 0,
        z: 10,
        duration: 1,
        delay: animationDelay,
      });
    } else if (pathname === "/my-portfolio/experience" && cameraRef.current) {
      gsap.to(gltf.scene.position, {
        x: -18,
        y: -15,
        z: -10,
        duration: 1,
        delay: animationDelay,
      });
      gsap.to(gltf.scene.rotation, {
        x: 0,
        y: -1 * angleToRadian(90),
        z: 0,
        duration: 1,
        delay: animationDelay,
      });
      gsap.to(cameraRef.current.position, {
        x: 0,
        y: 0,
        z: 15,
        duration: 1,
        delay: animationDelay,
      });
    } else if (pathname === "/my-portfolio/projects" && cameraRef.current) {
      gsap.to(gltf.scene.position, {
        x: 0,
        y: -4,
        z: 0,
        duration: 1,
        delay: animationDelay,
      });
      gsap.to(gltf.scene.rotation, {
        x: angleToRadian(90),
        y: -1 * angleToRadian(90),
        z: 0,
        duration: 1,
        delay: animationDelay,
      });
      gsap.to(cameraRef.current.position, {
        x: 0,
        y: 0,
        z: 20,
        duration: 1,
        delay: animationDelay,
      });
    } else if (pathname === "/my-portfolio/contacts" && cameraRef.current) {
      gsap.to(gltf.scene.position, {
        x: -25,
        y: -4,
        z: 0,
        duration: 1,
        delay: animationDelay,
      });
      gsap.to(gltf.scene.rotation, {
        x: angleToRadian(90),
        y: -1 * angleToRadian(90),
        z: 0,
        duration: 1,
        delay: animationDelay,
      });
      gsap.to(cameraRef.current.position, {
        x: 0,
        y: 0,
        z: 8,
        duration: 1,
        delay: animationDelay,
      });
    }
  }, [location?.pathname, cameraRef.current]);

  return (
    <>
      <PerspectiveCamera
        args={[45, window.innerWidth / window.innerHeight, 1, 2000]}
        makeDefault
        position={[0, 5, 50]}
        ref={cameraRef}
      />
      <OrbitControls
        ref={controlsRef}
        maxAzimuthAngle={angleToRadian(45)}
        minPolarAngle={angleToRadian(0)}
        maxPolarAngle={angleToRadian(180)}
      />
      <ambientLight intensity={1} color={0xffffff} />
      <primitive object={gltf.scene} />
    </>
  );
};

export default Model;
