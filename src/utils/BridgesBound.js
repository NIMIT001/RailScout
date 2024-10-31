import { data2 } from "./data2";

const getBounds = (coordinates) => {
  return {
    minX: Math.min(...coordinates.map(([x]) => x)),
    maxX: Math.max(...coordinates.map(([x]) => x)),
    minY: Math.min(...coordinates.map(([, y]) => y)),
    maxY: Math.max(...coordinates.map(([, y]) => y)),
  };
};

// Calculate bounds for both bridges
const bridge1Bounds = getBounds(data2.bridge1);
const bridge2Bounds = getBounds(data2.bridge2);

// Function to check if a coordinate is within given bounds
const isWithinBounds = (bounds, [x, y]) =>
  x >= bounds.minX && x <= bounds.maxX && y >= bounds.minY && y <= bounds.maxY;

// Function to check if a coordinate is within any of the bridges
export const isWithinBridge = (coord) =>
  isWithinBounds(bridge1Bounds, coord) || isWithinBounds(bridge2Bounds, coord);
