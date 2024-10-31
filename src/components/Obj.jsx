import { Box } from "@react-three/drei";
import React from "react";

const Obj = ({ color, x, y, z = 0.5, thickness = 1 }) => {
  return (
    //if type == "walls" decrease the thickness
    <Box position={[x, z, y]} args={[1, thickness, 1]}>
      <meshStandardMaterial attach="material" color={color} />
    </Box>
  );
};

export default Obj;
