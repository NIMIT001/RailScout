class Node {
  constructor(x, y, isObstacle = false) {
    this.x = x;
    this.y = y;
    this.isObstacle = isObstacle;
    this.g = 0; // cost from start to this node
    this.h = 0; // heuristic cost to the end node
    this.f = 0; // g + h
    this.parent = null; // to trace the path
  }
}

export function aStar(grid, start, end) {
  const openList = [];
  const closedList = [];

  openList.push(start);

  while (openList.length > 0) {
    let currentNode = openList.reduce((a, b) => (a.f < b.f ? a : b)); // node with the lowest f

    // If the destination node is reached
    if (currentNode.x === end.x && currentNode.y === end.y) {
      const path = [];
      let temp = currentNode;
      while (temp) {
        path.push(temp);
        temp = temp.parent;
      }
      return path.reverse(); // return the found path
    }

    // Move current node to the closed list
    openList.splice(openList.indexOf(currentNode), 1);
    closedList.push(currentNode);

    // Get neighbors
    const neighbors = getNeighbors(grid, currentNode);

    for (const neighbor of neighbors) {
      if (closedList.includes(neighbor) || neighbor.isObstacle) {
        continue;
      }

      const tentativeG = currentNode.g + 1; // assuming a uniform cost

      let newPath = false;
      if (!openList.includes(neighbor)) {
        newPath = true;
        neighbor.h = heuristic(neighbor, end);
        openList.push(neighbor);
      } else if (tentativeG < neighbor.g) {
        newPath = true;
      }

      if (newPath) {
        neighbor.g = tentativeG;
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = currentNode;
      }
    }
  }

  return []; // no path found
}

function getNeighbors(grid, node) {
  const neighbors = [];
  const { x, y } = node;

  // Assuming 4-directional movement
  if (grid[x - 1] && grid[x - 1][y]) neighbors.push(grid[x - 1][y]);
  if (grid[x + 1] && grid[x + 1][y]) neighbors.push(grid[x + 1][y]);
  if (grid[x] && grid[x][y - 1]) neighbors.push(grid[x][y - 1]);
  if (grid[x] && grid[x][y + 1]) neighbors.push(grid[x][y + 1]);

  return neighbors;
}

function heuristic(node, end) {
  // Using Manhattan distance as the heuristic
  return Math.abs(node.x - end.x) + Math.abs(node.y - end.y);
}

// Creating a simple grid
export function createGrid(rows, cols, obstacles) {
  const grid = [];
  for (let x = 0; x < rows; x++) {
    const row = [];
    for (let y = 0; y < cols; y++) {
      row.push(new Node(x, y));
    }
    grid.push(row);
  }

  // Marking obstacles
  for (const obstacle of obstacles) {
    const [x, y] = obstacle;
    grid[x][y].isObstacle = true;
  }

  return grid;
}
