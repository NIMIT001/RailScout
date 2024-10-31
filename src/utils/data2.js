export const data2 = {
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
  // trainSpaces: {
  //   coordinates: [
  //     // Train tracks for both platforms
  //     ...Array(10)
  //       .fill(0)
  //       .map((_, i) => [17, i + 5]), // Train on Platform 1
  //     ...Array(10)
  //       .fill(0)
  //       .map((_, i) => [32, i + 25]), // Train on Platform 2
  //   ],
  //   color: "blue", // Train spaces in blue
  // },
  bridge1: [
    ...Array(11) // For 5 rows: y = 10 to y = 14
      .fill(0)
      .flatMap(
        (_, yIndex) =>
          Array(6)
            .fill(0)
            .map((_, x) => [45 + x, 25 + yIndex]) // x = 0 to 59, y = 10 to 14
      ),
  ],
  bridge2: [
    ...Array(11) // For 5 rows: y = 10 to y = 14
      .fill(0)
      .flatMap(
        (_, yIndex) =>
          Array(6)
            .fill(0)
            .map((_, x) => [15 - x, 25 + yIndex]) // x = 0 to 59, y = 10 to 14
      ),
  ],
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
  shops: [
    // Shops scattered around the grid
    [45, 17],
    [25, 42],
  ],
  water: [
    [30, 42],
    [12, 7],
  ],
  washrooms: [
    // Washrooms near platforms and other locations
    [5, 17], // Washroom near Platform 1
    [55, 42], // Washroom near Platform 2
  ],
  ticketCounter: [
    // Ticket counter near entrance
    [40, 3],
  ],
  benches: [
    // Benches scattered across platforms and waiting areas
    [10, 16],
    [10, 19],
    [12, 16],
    [12, 19],
    [30, 16], // Benches on Platform 1
    [30, 19],
    [32, 16], // Benches on Platform 1
    [32, 19],
    [50, 16],
    [50, 19], // Benches on Platform 2
    [52, 16],
    [52, 19], // Benches on Platform 2
    [40, 41],
    [40, 44],
    [42, 41],
    [42, 44],
    [20, 44],
    [20, 41],
    [18, 44],
    [18, 41],
  ],
  waitingAreas: [
    // Waiting areas for passengers
    [55, 5],
    [10, 55],
  ],

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
  entrance: [
    [30, 0],
    [30, 60],
  ],
  trainSpace: [
    ...Array(11) // For 5 rows: y = 10 to y = 14
      .fill(0)
      .flatMap(
        (_, yIndex) =>
          Array(60)
            .fill(0)
            .map((_, x) => [x, 25 + yIndex]) // x = 0 to 59, y = 10 to 14
      ),
  ],
};
