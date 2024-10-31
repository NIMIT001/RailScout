import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const WashRoom = ({ x, y }) => {
  const gltf = useLoader(GLTFLoader, "/washRoom.glb"); // Path to shop model

  return (
    <primitive
      object={gltf.scene.clone()}
      scale={[0.1, 0.1, 0.1]}
      position={[x, 1, y]}
    />
  );
};

export default WashRoom;
