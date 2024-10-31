import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Entrance = ({ x, y }) => {
  const gltf = useLoader(GLTFLoader, "/Entrance.glb"); // Path to shop model

  gltf.scene.rotation.x = Math.PI;
  return (
    <primitive
      object={gltf.scene.clone()}
      scale={[3, 3, 3]}
      position={[x, 4, y]}
    />
  );
};

export default Entrance;
