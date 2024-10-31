import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const RestRoom = ({ x, y }) => {
  const gltf = useLoader(GLTFLoader, "/RestRoom.glb"); // Path to shop model

  return (
    <primitive
      object={gltf.scene.clone()}
      scale={[5, 5, 5]}
      position={[x, 2, y]}
    />
  );
};

export default RestRoom;
