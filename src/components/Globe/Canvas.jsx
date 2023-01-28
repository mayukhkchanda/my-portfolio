import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Model from "./GLTF";

const canvas = () => {
  return (
    <Canvas>
      <Suspense fallback={"Loading..."}>
        {/* <Scene /> */}
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default canvas;
