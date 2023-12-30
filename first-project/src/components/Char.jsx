import React, { useState } from "react";
import "../styling/Char.css";

function Char({ letter }) {
  const [char, showChar] = useState(true);

  const handleClick = (event) => {
    showChar(!char);
  };

  let charEl = null;

  if (char) {
    charEl = (
      <p id="custom" onClick={handleClick}>
        {letter}
      </p>
    );
  }

  return <>{charEl}</>;
}

export default Char;
