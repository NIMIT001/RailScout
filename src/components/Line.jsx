import React from "react";

const Line = ({ color, points, lineWidth }) => {
  return (
    <Line
      points={paths.shortestPath.map((node) => [node.x, 0.6, node.y])}
      color="purple" // Color for the shortest path
      lineWidth={2}
    />
  );
};

export default Line;
