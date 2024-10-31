import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const CameraControls = ({ humanPosition }) => {
  const controlsRef = useRef();

  useFrame(({ camera }) => {
    const [x, y, z] = humanPosition;
    // Ensure OrbitControls is updated to follow the human
    if (controlsRef.current) {
      controlsRef.current.target.set(x, y, z);
      controlsRef.current.update();
    }
  });

  return <OrbitControls ref={controlsRef} maxPolarAngle={Math.PI / 2} />;
};

export default CameraControls;
