// export const data = {
//   grid: [10, 10],
//   walls: [
//     [0, 0],
//     [0, 1],
//     [0, 2],
//     [0, 3],
//     [0, 4],
//     [0, 5],
//     [0, 6],
//     [0, 7],
//     [0, 8],
//     [0, 9],
//     [1, 0],
//     [1, 6],
//     [1, 9],
//     [2, 0],
//     [2, 2],
//     [2, 3],
//     [2, 4],
//     [2, 6],
//     [2, 7],
//     [2, 8],
//     [2, 9],
//     [3, 0],
//     [3, 2],
//     [3, 6],
//     [3, 8],
//     [3, 9],
//     [4, 0],
//     [4, 3],
//     [4, 4],
//     [4, 5],
//     [4, 6],
//     [4, 8],
//     [4, 9],
//     [5, 0],
//     [5, 1],
//     [5, 9],
//     [6, 0],
//     [6, 1],
//     [6, 2],
//     [6, 4],
//     [6, 5],
//     [6, 6],
//     [6, 8],
//     [6, 9],
//     [7, 0],
//     [7, 9],
//     [8, 0],
//     [8, 1],
//     [8, 4],
//     [8, 5],
//     [8, 6],
//     [8, 7],
//     [8, 8],
//     [8, 9],
//     [9, 0],
//     [9, 1],
//     [9, 2],
//     [9, 3],
//     [9, 4],
//     [9, 5],
//     [9, 6],
//     [9, 7],
//     [9, 8],
//     [9, 9],
//   ],
//   shops: [
//     [5, 8],
//     [8, 3],
//   ],
//   washrooms: [1, 3],
// };

// export const data = {
//   grid: [50, 50],
//   walls: {
//     coordinates: [
//       // Outer boundary walls
//       ...Array(50)
//         .fill(0)
//         .map((_, i) => [0, i]), // Top wall
//       ...Array(50)
//         .fill(0)
//         .map((_, i) => [49, i]), // Bottom wall
//       ...Array(50)
//         .fill(0)
//         .map((_, i) => [i, 0]), // Left wall
//       ...Array(50)
//         .fill(0)
//         .map((_, i) => [i, 49]), // Right wall
//     ],
//     color: "black", // Walls in black
//   },
//   platforms: {
//     coordinates: [
//       // Platform 1 and 2 spanning across the grid horizontally
//       ...Array(10)
//         .fill(0)
//         .map((_, i) => [15, i + 5]), // Platform 1 top boundary
//       ...Array(10)
//         .fill(0)
//         .map((_, i) => [20, i + 5]), // Platform 1 bottom boundary

//       ...Array(10)
//         .fill(0)
//         .map((_, i) => [30, i + 25]), // Platform 2 top boundary
//       ...Array(10)
//         .fill(0)
//         .map((_, i) => [35, i + 25]), // Platform 2 bottom boundary
//     ],
//     color: "gray", // Platforms in gray
//   },
//   trainSpaces: {
//     coordinates: [
//       // Train tracks for both platforms
//       ...Array(10)
//         .fill(0)
//         .map((_, i) => [17, i + 5]), // Train on Platform 1
//       ...Array(10)
//         .fill(0)
//         .map((_, i) => [32, i + 25]), // Train on Platform 2
//     ],
//     color: "blue", // Train spaces in blue
//   },
//   bridges: {
//     coordinates: [
//       // Bridges connecting the two platforms
//       [18, 12],
//       [19, 12],
//       [18, 38],
//       [19, 38], // Bridge connecting platforms across the tracks
//     ],
//     color: "brown", // Bridges in brown
//   },
//   shops: {
//     coordinates: [
//       // Shops scattered around the grid
//       [5, 5], // Entrance shop
//       [45, 5], // Exit shop
//       [10, 10], // Shop near Platform 1
//       [40, 40], // Shop near Platform 2
//     ],
//     color: "green", // Shops in green
//   },
//   washrooms: {
//     coordinates: [
//       // Washrooms near platforms and other locations
//       [10, 40], // Washroom near Platform 1
//       [40, 10], // Washroom near Platform 2
//     ],
//     color: "purple", // Washrooms in purple
//   },
//   ticketCounter: {
//     coordinates: [
//       // Ticket counter near entrance
//       [2, 2],
//     ],
//     color: "orange", // Ticket counter in orange
//   },
//   benches: {
//     coordinates: [
//       // Benches scattered across platforms and waiting areas
//       [16, 6],
//       [16, 8],
//       [16, 10], // Benches on Platform 1
//       [31, 26],
//       [31, 28],
//       [31, 30], // Benches on Platform 2
//     ],
//     color: "yellow", // Benches in yellow
//   },
//   waitingAreas: {
//     coordinates: [
//       // Waiting areas for passengers
//       [25, 15],
//       [25, 35],
//     ],
//     color: "red", // Waiting areas in red
//   },
// };

export const data = {
  grid: [60, 60],
  walls: {
    coordinates: [
      // Outer boundary walls

      ...Array(60)
        .fill(0)
        .map((_, i) => [i, 27]),
      ...Array(60)
        .fill(0)
        .map((_, i) => [i, 29]),
      ...Array(60)
        .fill(0)
        .map((_, i) => [i, 31]),
      ...Array(60)
        .fill(0)
        .map((_, i) => [i, 33]),
      ...Array(12)
        .fill(0)
        .map((_, i) => [i * 5, 32]),
      ...Array(12)
        .fill(0)
        .map((_, i) => [i * 5, 28]),
    ],
    color: "black", // Walls in black
  },
  platforms: {
    coordinates: [
      ...Array(13) // For 5 rows: y = 10 to y = 14
        .fill(0)
        .flatMap(
          (_, yIndex) =>
            Array(60)
              .fill(0)
              .map((_, x) => [x, 12 + yIndex]) // x = 0 to 59, y = 10 to 14
        ),
      ...Array(13) // For 5 rows: y = 10 to y = 14
        .fill(0)
        .flatMap(
          (_, yIndex) =>
            Array(60)
              .fill(0)
              .map((_, x) => [x, 48 - yIndex]) // x = 0 to 59, y = 10 to 14
        ),
    ],
    color: "lightgray", // Platforms in gray
  },
  trainSpaces: {
    coordinates: [
      // Train tracks for both platforms
      ...Array(10)
        .fill(0)
        .map((_, i) => [17, i + 5]), // Train on Platform 1
      ...Array(10)
        .fill(0)
        .map((_, i) => [32, i + 25]), // Train on Platform 2
    ],
    color: "blue", // Train spaces in blue
  },
  bridges: {
    coordinates: [
      // Bridges connecting the two platforms
      ...Array(11) // For 5 rows: y = 10 to y = 14
        .fill(0)
        .flatMap(
          (_, yIndex) =>
            Array(6)
              .fill(0)
              .map((_, x) => [45 + x, 25 + yIndex]) // x = 0 to 59, y = 10 to 14
        ),
      ...Array(11) // For 5 rows: y = 10 to y = 14
        .fill(0)
        .flatMap(
          (_, yIndex) =>
            Array(6)
              .fill(0)
              .map((_, x) => [15 - x, 25 + yIndex]) // x = 0 to 59, y = 10 to 14
        ),
    ],
    color: "lightblue", // Bridges in brown
  },
  shops: {
    coordinates: [
      // Shops scattered around the grid
      [5, 5], // Entrance shop
      [45, 5], // Exit shop
      [10, 10], // Shop near Platform 1
      [40, 40], // Shop near Platform 2
    ],
    color: "green", // Shops in green
  },
  washrooms: {
    coordinates: [
      // Washrooms near platforms and other locations
      [10, 40], // Washroom near Platform 1
      [40, 10], // Washroom near Platform 2
    ],
    color: "purple", // Washrooms in purple
  },
  ticketCounter: {
    coordinates: [
      // Ticket counter near entrance
      [2, 2],
    ],
    color: "orange", // Ticket counter in orange
  },
  benches: {
    coordinates: [
      // Benches scattered across platforms and waiting areas
      [16, 6],
      [16, 8],
      [16, 10], // Benches on Platform 1
      [31, 26],
      [31, 28],
      [31, 30], // Benches on Platform 2
    ],
    color: "yellow", // Benches in yellow
  },
  waitingAreas: {
    coordinates: [
      // Waiting areas for passengers
      [25, 15],
      [25, 35],
    ],
    color: "red", // Waiting areas in red
  },
  freespace: {
    coordinates: [
      ...Array(12) // For 5 rows: y = 10 to y = 14
        .fill(0)
        .flatMap(
          (_, yIndex) =>
            Array(60)
              .fill(0)
              .map((_, x) => [x, 0 + yIndex]) // x = 0 to 59, y = 10 to 14
        ),
      ...Array(12) // For 5 rows: y = 10 to y = 14
        .fill(0)
        .flatMap(
          (_, yIndex) =>
            Array(60)
              .fill(0)
              .map((_, x) => [x, 60 - yIndex]) // x = 0 to 59, y = 10 to 14
        ),
    ],
    color: "lightyellow", // Waiting areas in light
  },
  entrance: {
    coordinates: [
      ...Array(4)
        .fill(0)
        .map((_, i) => [28 + i, 0]), // Train on Platform 1
    ],
    color: "red", // Entrance in red
  },
};
