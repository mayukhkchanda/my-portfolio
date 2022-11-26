import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import globeVertex from "glsl/globeVertex.glsl";
import globeFragment from "glsl/globeFragment.glsl";
import atmosphereVertex from "glsl/atmosphereVertex.glsl";
import atmosphereFragment from "glsl/atmosphereFragment.glsl";

const starVertices = (function () {
  const vertices = [];
  for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = -1 * Math.random() * 2000;
    vertices.push(x, y, z);
  }
  return vertices;
})();

const positions = new Float32Array(starVertices);

const Scene = () => {
  const globeRef = useRef(null);
  const groupRef = useRef(null);
  const earthMap = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + "assets/textures/earth.jpg"
  );
  const uniforms = useMemo(
    () => ({
      u_globe: {
        value: earthMap, // new THREE.TextureLoader().load( process.env.PUBLIC_URL + 'assets/textures/earth.jpg' )
      },
    }),
    []
  );
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  useEffect(() => {
    const mousemove = (e) => {
      if (groupRef.current) {
        const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const mouseY = (e.clientY / window.innerHeight) * 2 - 1;
        // groupRef.current.rotation.y += x * 0.01;
        gsap.to(groupRef.current.rotation, {
          x: mouseY * 0.2,
          y: mouseX * 0.1,
          duration: 1,
        });
      }
    };

    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <>
      <PerspectiveCamera
        args={[45, window.innerWidth / window.innerHeight, 1, 1000]}
        makeDefault
        position={[0, 0, 20]}
      />
      <OrbitControls />
      <ambientLight intensity={1} color={0xffffff} />
      <group ref={groupRef}>
        <mesh position={[0, 0, 0]} ref={globeRef}>
          <sphereGeometry args={[4, 45, 45]} />
          {/* <meshStandardMaterial map={earthMap} /> */}
          <shaderMaterial
            vertexShader={globeVertex}
            fragmentShader={globeFragment}
            uniforms={uniforms}
          />
        </mesh>
      </group>
      <mesh position={[0, 0, 0]} scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[4, 45, 45]} />
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFragment}
        />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={starVertices.length / 3}
            array={positions}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <pointsMaterial color={0xffffff} />
      </points>
    </>
  );
};

export default Scene;
