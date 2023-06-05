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
          "Ständigt lärande",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
