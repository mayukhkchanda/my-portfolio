import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { angleToRadian } from "utils/commonUtils";
import { useLocation } from "react-router";
import Icon from "./Icons";
import Home from "components/Home";

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
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/assets/gltfs/voxel_web_development/scene.gltf"
  );

  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const directionalLightRef = useRef(null);
  const gltfRef = useRef(null);
  const location = useLocation();
  console.log(gltf);

  useEffect(() => {
    if (!gltfRef.current) return;
    gltf.scene.scale.set(5, 5, 5);
    gltf.scene.rotation.set(angleToRadian(0), -1 * angleToRadian(90), 0);
  }, [gltfRef.current]);

  useEffect(() => {
    if (!location?.pathname) return;

    const { state, pathname } = location;
    const animationDelay = state?.animationDelay ? state?.animationDelay : 0.25;

    const { scenePos, camPos, sceneRot } = getTransformations(
      pathname,
      animationDelay
    );
    if (!scenePos || !camPos || !sceneRot) return;
    gsap.to(gltfRef.current.position, scenePos);
    gsap.to(gltfRef.current.rotation, sceneRot);
    gsap.to(cameraRef.current.position, camPos);
  }, [location?.pathname]);
  const isIconVisible =
    location?.pathname === "/my-portfolio" ||
    location?.pathname === "/my-portfolio/";

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
          maxPolarAngle={angleToRadian(120)}
          enablePan={false}
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
      <group ref={gltfRef}>
        <mesh geometry={gltf.nodes["laptop001_1"].geometry}>
          <Html
            className="content"
            position={[-2, 11, -8.5]}
            scale={[1.5, 1.5, 1.5]}
            transform
            occlude
          >
            <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
              {isIconVisible ? <Home /> : null}
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
        <primitive object={gltf.scene} />
      </group>
    </>
  );
};

export default Model;
