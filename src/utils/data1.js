export const data1 = {
  grid: [60, 35],
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
    ],
    color: "lightgray", // Platform in gray
  },
  bridge: [
    // Single bridge for the platform
    ...Array(11) // For 5 rows: y = 10 to y = 14
      .fill(0)
      .flatMap(
        (_, yIndex) =>
          Array(6)
            .fill(0)
            .map((_, x) => [45 + x, 25 + yIndex]) // x = 45 to 51, y = 25 to 29
      ),
  ],
  shops: [
    // One shop near the platform
    [25, 17],
  ],
  water: [[40, 20]],
  washrooms: [
    // Washroom near platform
    [5, 17],
  ],
  ticketCounter: [
    // Ticket counter near entrance
    [40, 3],
  ],
  benches: [
    // Benches scattered across the platform
    [10, 16],
    [10, 19],
    [12, 16],
    [12, 19],
    [30, 16],
    [30, 19],
    [32, 16],
    [32, 19],
  ],
  waitingAreas: [
    // Single waiting area for passengers
    [55, 5],
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
    ],
    color: "lightyellow", // Waiting areas in light yellow
  },
  entrance: [[30, 0]],
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
