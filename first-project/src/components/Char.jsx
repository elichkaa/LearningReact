import React, { useState } from "react";
import "../styling/Char.css";
import styled from "styled-components";

const CharStyled = styled.p`
  display: inline-block;
  padding: 16px;
  text-align: center;
  margin: 16px;
  text-decoration: ${(props) => (props.visible ? "None" : "line-through")};
`;

function Char({ letter }) {
  const [char, showChar] = useState(true);

  const handleClick = (event) => {
    showChar(!char);
  };

  return (
    <>
      <p>Click on letter to remove it:</p>
      <CharStyled visible={char} onClick={handleClick}>
        {letter}
      </CharStyled>
    </>
  );
}

export default Char;
