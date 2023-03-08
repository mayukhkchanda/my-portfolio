import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./GLTF";
import { Loader } from "@react-three/drei";

const canvas = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas frameloop="demand">
        <Model />
      </Canvas>
    </Suspense>
  );
};

export default canvas;
