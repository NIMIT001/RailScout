import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Water = ({ x, y }) => {
  const gltf = useLoader(GLTFLoader, "/dispenser.glb"); // Path to shop model

  return (
    <primitive
      object={gltf.scene.clone()}
      scale={[5, 3, 5]}
      position={[x, 1, y]}
    />
  );
};

export default Water;
