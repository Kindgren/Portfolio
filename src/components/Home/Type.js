import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Systemvetare",
          "Systemutvecklare",
          "Backend-utvecklare",
          "Problemlösare",
          "Lagspelare",
          "Kommunikatör",
          "IT-konsult",
          "Fullstack-utvecklare",


        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
