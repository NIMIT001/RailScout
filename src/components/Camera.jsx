import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Plane, MapControls, OrbitControls } from "@react-three/drei";
import { aStar, createGrid } from "../utils/pathFindingAlgo";
import { data } from "../utils/data";

import Obj from "./Obj";
import Button from "./Button";
import MovingHuman from "./MovingHuman";

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

const Camera = () => {
  const [humanPos, setHumanPos] = useState([50, 0.5, 50]); // Initial human position
  const [path, setPath] = useState([]);
  const [grid, setGrid] = useState(null);

  // Initialize grid on component mount
  useEffect(() => {
    if (data) {
      const grid = createGrid(data.grid[0], data.grid[1], []);
      setGrid(grid);
    }
  }, [data]);

  // Calculate paths when start is selected
  const findRoute = () => {
    if (grid) {
      const path = aStar(grid, grid[90][10], grid[10][80]);
      setHumanPos([90, 0.05, 10]);
      setPath(path);
    }
  };

  return (
    <div className="h-screen w-screen">
      <Button text={"Find Route"} onClick={findRoute} />
      <Canvas camera={{ position: [100, 20, 100], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <CameraControls humanPosition={humanPos} />
        {/* <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2} // Prevents camera from going below the horizontal axis
        /> */}
        {/* Ground Plane */}
        <Plane
          rotation={[-Math.PI / 2, 0, 0]}
          args={data.grid}
          position={[50, 0, 50]}
        >
          <meshStandardMaterial attach="material" color="lightgray" />
        </Plane>

        <MovingHuman position={humanPos} setPosition={setHumanPos} />

        <Obj x={humanPos[0]} y={humanPos[2]} color={"purple"} />
        <Obj x={90} y={10} color={"green"} />
        <Obj x={10} y={80} color={"red"} />
        {path.length > 0 && (
          <Line
            points={path.map((node) => [node.x, 0.5, node.y])}
            color="blue"
            lineWidth={2}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Camera;
