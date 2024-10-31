import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Room = ({ x, y }) => {
  const gltf = useLoader(GLTFLoader, "/building.glb"); // Path to shop model

  return (
    <primitive
      object={gltf.scene.clone()}
      scale={[3, 0.5, 3]}
      position={[x, 1, y]}
    />
  );
};

export default Room;
