import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Bench = ({ x, y }) => {
  const gltf = useLoader(GLTFLoader, "/bench.glb"); // Path to shop model

  return (
    <primitive
      object={gltf.scene.clone()}
      scale={[0.7, 0.7, 0.7]}
      position={[x, 1, y]}
    />
  );
};

export default Bench;
