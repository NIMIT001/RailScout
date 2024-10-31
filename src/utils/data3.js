export const data3 = {
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
      // Platform 1: y = 10 to 12
      ...Array(13)
        .fill(0)
        .flatMap((_, yIndex) =>
          Array(60)
            .fill(0)
            .map((_, x) => [x, 10 + yIndex])
        ),
      // Platform 2: y = 30 to 32
      ...Array(13)
        .fill(0)
        .flatMap((_, yIndex) =>
          Array(60)
            .fill(0)
            .map((_, x) => [x, 30 + yIndex])
        ),
      // Platform 3: y = 50 to 52
      ...Array(13)
        .fill(0)
        .flatMap((_, yIndex) =>
          Array(60)
            .fill(0)
            .map((_, x) => [x, 50 + yIndex])
        ),
    ],
    color: "lightgray", // Platforms in gray
  },
  bridges: {
    coordinates: [
      // Bridge for Platform 1
      ...Array(11)
        .fill(0)
        .flatMap((_, yIndex) =>
          Array(6)
            .fill(0)
            .map((_, x) => [45 + x, 15 + yIndex])
        ),
      // Bridge for Platform 2
      ...Array(11)
        .fill(0)
        .flatMap((_, yIndex) =>
          Array(6)
            .fill(0)
            .map((_, x) => [45 + x, 35 + yIndex])
        ),
      // Bridge for Platform 3
      ...Array(11)
        .fill(0)
        .flatMap((_, yIndex) =>
          Array(6)
            .fill(0)
            .map((_, x) => [45 + x, 55 + yIndex])
        ),
    ],
    color: "lightblue", // Bridges in light blue
  },
  shops: [
    // Shops near platforms
    [25, 17], // Near Platform 1
    [25, 37], // Near Platform 2
    [25, 57], // Near Platform 3
  ],
  water: [
    [30, 17], // Near Platform 1
    [30, 37], // Near Platform 2
    [30, 57], // Near Platform 3
  ],
  washrooms: [
    [5, 17], // Washroom near Platform 1
    [5, 37], // Washroom near Platform 2
    [5, 57], // Washroom near Platform 3
  ],
  ticketCounter: [
    [40, 3], // Ticket counter near entrance
  ],
  benches: [
    // Benches for Platform 1
    [10, 16],
    [10, 19],
    [12, 16],
    [12, 19],
    [30, 16],
    [30, 19],
    // Benches for Platform 2
    [10, 36],
    [10, 39],
    [12, 36],
    [12, 39],
    [30, 36],
    [30, 39],
    // Benches for Platform 3
    [10, 56],
    [10, 59],
    [12, 56],
    [12, 59],
    [30, 56],
    [30, 59],
  ],
  waitingAreas: [
    // Waiting areas for passengers near platforms
    [55, 5], // Near Platform 1
    [55, 35], // Near Platform 2
    [55, 55], // Near Platform 3
  ],
  freespace: {
    coordinates: [
      ...Array(12)
        .fill(0)
        .flatMap((_, yIndex) =>
          Array(60)
            .fill(0)
            .map((_, x) => [x, 0 + yIndex])
        ),
      ...Array(12)
        .fill(0)
        .flatMap((_, yIndex) =>
          Array(60)
            .fill(0)
            .map((_, x) => [x, 60 - yIndex])
        ),
    ],
    color: "lightyellow", // Waiting areas in light yellow
  },
  entrance: [
    [30, 0], // Main entrance
  ],
  trainSpace: [
    // Train space for each platform
    ...Array(11)
      .fill(0)
      .flatMap((_, yIndex) =>
        Array(60)
          .fill(0)
          .map((_, x) => [x, 10 + yIndex])
      ),
    ...Array(11)
      .fill(0)
      .flatMap((_, yIndex) =>
        Array(60)
          .fill(0)
          .map((_, x) => [x, 30 + yIndex])
      ),
    ...Array(11)
      .fill(0)
      .flatMap((_, yIndex) =>
        Array(60)
          .fill(0)
          .map((_, x) => [x, 50 + yIndex])
      ),
  ],
};
