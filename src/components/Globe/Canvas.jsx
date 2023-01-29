import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./GLTF";

const canvas = () => {
  return (
    <Canvas>
      <Suspense fallback={"Loading..."}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default canvas;
