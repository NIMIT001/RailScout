import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Plane, Box, OrbitControls } from "@react-three/drei";
import { aStar, createGrid } from "../utils/pathFindingAlgo";
import { data } from "../utils/data";

const Human = ({ position }) => {
  return (
    <Box position={position} args={[0.5, 1, 0.5]}>
      <meshStandardMaterial attach="material" color="blue" />
    </Box>
  );
};

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

  return <OrbitControls ref={controlsRef} />;
};

const MovingHuman = ({ position, setPosition }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const step = 0.1; // Movement step size
      const [x, y, z] = position;
      switch (event.key) {
        case "ArrowUp":
          setPosition([x, y, z - step]);
          break;
        case "ArrowDown":
          setPosition([x, y, z + step]);
          break;
        case "ArrowLeft":
          setPosition([x - step, y, z]);
          break;
        case "ArrowRight":
          setPosition([x + step, y, z]);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position, setPosition]);

  return null;
};

const Map = () => {
  const [humanPos, setHumanPos] = useState([
    data.washrooms[0],
    0.5,
    data.washrooms[1],
  ]); // Initial human position
  const [path, setPath] = useState([]);
  const [end, setEnd] = useState();

  const grid = createGrid(data.grid[0], data.grid[1], data.walls);
  useEffect(() => {
    if (humanPos && end && grid) {
      // console.log(grid, humanPos, end);

      const gotPath = aStar(
        grid,
        grid[Math.floor(humanPos[0])][Math.floor(humanPos[2])],
        grid[end[0]][end[1]]
      );
      setPath(gotPath);
    }
  }, [end, setEnd]);

  //   const grid = createGrid(data.grid[0], data.grid[1], data.walls);
  return (
    <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      {/* Camera follows the human */}
      {/* Orbit Controls */}
      <CameraControls humanPosition={humanPos} />
      {/* Ground Plane */}
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        args={data.grid}
        position={[4.5, 0, 4.5]}
      >
        <meshStandardMaterial attach="material" color="lightgray" />
      </Plane>
      <Human position={humanPos} />;{/* walls */}
      {data.walls.map(([x, y]) => {
        return (
          <Box position={[x, 0.5, y]} args={[1, 1, 1]}>
            <meshStandardMaterial attach="material" color="gray" />
          </Box>
        );
      })}
      {data.shops.map(([x, y], index) => {
        return (
          <Box
            key={index}
            position={[x, 0.5, y]}
            args={[1, 1, 1]}
            onClick={() => setEnd([x, y])}
          >
            <meshStandardMaterial attach="material" color="yellow" />
          </Box>
        );
      })}
      {/* "Human" object */}
      <MovingHuman position={humanPos} setPosition={setHumanPos} />
      {/* Path visualization */}
      {path.length > 0 && (
        <Line
          points={path.map((node) => [node.x, 0.5, node.y])}
          color="blue"
          lineWidth={2}
        />
      )}
    </Canvas>
  );
};

export default Map;
