import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Shop = ({ x, y }) => {
  const gltf = useLoader(GLTFLoader, "/shop.glb"); // Path to shop model

  return (
    <primitive
      object={gltf.scene.clone()}
      scale={[0.5, 0.5, 0.5]}
      position={[x, 1, y]}
    />
  );
};

export default Shop;
