import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Human = ({ x, y, headDirection }) => {
  const gltf = useLoader(GLTFLoader, "./Human.glb"); // Path to shop model

  useEffect(() => {
    console.log(headDirection);
    gltf.scene.rotation.y = headDirection * (Math.PI / 2);
  }, [headDirection]);

  return (
    <primitive
      object={gltf.scene.clone()}
      scale={[0.5, 0.6, 0.5]}
      position={[x, 2.4, y]}
    />
  );
};

export default Human;
