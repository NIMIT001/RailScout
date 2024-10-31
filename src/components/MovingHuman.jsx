import React, { useEffect } from "react";

const MovingHuman = ({ position, setPosition, speed, setHeadDirection }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // const step = { speed }; // Movement step size
      const step = 3; // Movement step size
      const [x, y, z] = position;
      switch (event.key) {
        case "ArrowUp":
          setPosition([x, y, z - step]);
          setHeadDirection(1);
          break;
        case "ArrowDown":
          setPosition([x, y, z + step]);
          setHeadDirection(3);
          break;
        case "ArrowLeft":
          setPosition([x - step, y, z]);
          setHeadDirection(2);
          break;
        case "ArrowRight":
          setPosition([x + step, y, z]);
          setHeadDirection(0);
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

export default MovingHuman;
