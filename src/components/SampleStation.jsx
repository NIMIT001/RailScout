import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Line, Plane, Box, OrbitControls } from "@react-three/drei";
import { aStar, createGrid } from "../utils/pathFindingAlgo";
// import { data2 } from "../utils/data2";
import LocationSelection from "./LocationSelection";
import Obj from "./Obj";
import CameraControls from "../utils/CameraControls";
import MovingHuman from "./MovingHuman";
import Bench from "./objects/Bench";
import Shop from "./objects/Shop";
import Human from "./objects/Human";
import RestRoom from "./objects/RestRoom";
import Room from "./objects/Room";
import Water from "./objects/Water";
import Entrance from "./objects/Entrance";
import Ticket from "./objects/Ticket";
import WashRoom from "./objects/Washroom";
import { isWithinBridge } from "../utils/BridgesBound";
import { naviData } from "../utils/navigationData";

const SampleStation = ({ data2 }) => {
  const [paths, setPaths] = useState([]); // To store multiple paths to amenities
  const [finalObstacles, setFinalObstacles] = useState([]); // To store multiple paths to amenities
  const [start, setStart] = useState(null);
  const [grid, setGrid] = useState(null);
  const [end, setEnd] = useState(null);
  const [headDirection, setHeadDirection] = useState(1);
  const [humanPos, setHumanPos] = useState([
    data2.grid[0] / 2,
    3,
    data2.grid[1] / 2,
  ]); // Initial human position

  // Initialize grid on component mount
  useEffect(() => {
    const obstacles = [
      ...data2.benches.map(([x, y]) => [x, y]),

      ...data2.trainSpace.map(([x, y]) => [x, y]),

      ...data2.shops.map(([x, y]) => [x, y]),

      ...data2.washrooms.map(([x, y]) => [x, y]),

      ...data2.waitingAreas.map(([x, y]) => [x, y]),
      ...data2.ticketCounter.map(([x, y]) => [x, y]),
      ...data2.water.map(([x, y]) => [x, y]),
    ];
    // console.log(obstacles);
    const filteredObstacles = obstacles.filter(
      (coord) => !isWithinBridge(coord)
    );
    setFinalObstacles(filteredObstacles);
    // const grid = createGrid(data2.grid[0], data2.grid[1], []);
    const grid = createGrid(data2.grid[0], data2.grid[1], filteredObstacles);
    setGrid(grid);
  }, []);

  // Calculate paths when start is selected
  useEffect(() => {
    if (end && start && grid) {
      const amenityCoords = [...naviData[end]].filter(
        ([x, y]) => !(x === start[0] && y === start[1])
      ); // Exclude start from amenities

      setHumanPos([start[0], 3, start[1]]);
      // Calculate paths to all other amenities
      // console.log("1");
      const allPaths = amenityCoords.map((endPoint) => {
        return {
          path: aStar(
            grid,
            grid[Math.floor(start[0])][Math.floor(start[1])],
            grid[endPoint[0]][endPoint[1]]
          ),
          length: 0, // Initialize path length
        };
      });
      // console.log("2");
      // Calculate lengths of paths
      allPaths.forEach((pathObj) => {
        pathObj.length = pathObj.path.length; // Calculate path length
      });
      console.log(allPaths);

      // console.log("3");
      // Find the shortest path
      const shortestPath = allPaths.reduce((minPath, current) => {
        if (current.length)
          return current.length < minPath.length ? current : minPath;
      });
      // console.log(shortestPath.path);
      // console.log("4");
      // console.log(shortestPath);

      setPaths({
        shortestPath: shortestPath.path,
        otherPaths: allPaths
          .filter((pathObj) => pathObj !== shortestPath)
          .map((pathObj) => pathObj.path),
      });
      console.log("5");
    }
  }, [end, start, grid]);

  return (
    <>
      <LocationSelection setEnd={setEnd} setStart={setStart} />
      <div className="h-screen w-full">
        <Canvas camera={{ position: [100, 20, 100], fov: 50, zoom: 3 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          {/* <OrbitControls /> */}
          <CameraControls humanPosition={humanPos} />
          <MovingHuman
            position={humanPos}
            setPosition={setHumanPos}
            setHeadDirection={setHeadDirection}
            // speed={0.5}
          />
          {/* Ground Plane */}
          <Plane
            rotation={[-Math.PI / 2, 0, 0]}
            args={data2.grid}
            position={[data2.grid[0] / 2, 0, data2.grid[1] / 2]}
          >
            <meshStandardMaterial attach="material" color="white" />
          </Plane>
          <Human
            x={humanPos[0]}
            y={humanPos[2]}
            headDirection={headDirection}
          />

          {Object.keys(data2).map((key) => {
            if (
              key === "walls" ||
              key === "platforms" ||
              key === "freespace" ||
              key === "bridges"
            ) {
              return data2[key].coordinates.map(([x, y], index) =>
                key === "walls" ? (
                  <Obj
                    key={key + index}
                    x={x}
                    y={y}
                    z={0}
                    color={data2[key].color}
                    thickness={0.1}
                  />
                ) : (
                  <Obj key={key + index} x={x} y={y} color={data2[key].color} />
                )
              );
            }
            return null; // Skip the "grid" key
          })}
          {/* {finalObstacles.map(([x, y]) => {
          return <Obj x={x} y={y} z={1} color={"blue"} />;
        })} */}
          {data2.benches.map(([x, y]) => {
            // console.log(`Rendering Bench at x: ${x}, y: ${y}`);
            return <Bench key={`${x}-${y}`} x={x} y={y} />;
          })}
          {data2.entrance.map(([x, y]) => {
            // console.log(`Rendering Bench at x: ${x}, y: ${y}`);
            return <Entrance key={`${x}-${y}`} x={x} y={y} />;
          })}
          {data2.waitingAreas.map(([x, y]) => {
            // console.log(`Rendering Bench at x: ${x}, y: ${y}`);
            return <Room key={`${x}-${y}`} x={x} y={y} />;
          })}
          {data2.ticketCounter.map(([x, y]) => {
            // console.log(`Rendering Bench at x: ${x}, y: ${y}`);
            return <Ticket key={`${x}-${y}`} x={x} y={y} />;
          })}
          {data2.shops.map(([x, y]) => {
            // console.log(`Rendering Bench at x: ${x}, y: ${y}`);
            return <Shop key={`${x}-${y}`} x={x} y={y} />;
          })}
          {data2.washrooms.map(([x, y]) => {
            // console.log(`Rendering Bench at x: ${x}, y: ${y}`);
            return <WashRoom key={`${x}-${y}`} x={x} y={y} />;
          })}
          {data2.water.map(([x, y]) => {
            // console.log(`Rendering Bench at x: ${x}, y: ${y}`);
            return <Water key={`${x}-${y}`} x={x} y={y} />;
          })}

          {paths &&
            paths.otherPaths &&
            paths.otherPaths.map((path, index) => (
              <Line
                key={index}
                points={path.map((node) => [node.x, 1.1, node.y])}
                color={"blue"}
                lineWidth={2}
              />
            ))}
          {paths && paths.shortestPath && (
            <Line
              points={paths.shortestPath.map((node) => [node.x, 1.2, node.y])}
              color="purple" // Color for the shortest path
              lineWidth={2}
            />
          )}
        </Canvas>
      </div>
    </>
  );
};

export default SampleStation;
