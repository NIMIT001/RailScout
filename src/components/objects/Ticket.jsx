import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Ticket = ({ x, y }) => {
  const gltf = useLoader(GLTFLoader, "/ticket.glb"); // Path to shop model

  return (
    <primitive
      object={gltf.scene.clone()}
      scale={[0.5, 0.5, 0.5]}
      position={[x, 1, y]}
    />
  );
};

export default Ticket;
