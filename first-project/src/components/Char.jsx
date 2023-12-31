import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CharStyled = styled.p`
  display: inline-block;
  text-align: center;
  margin: 16px;
  border: 1px solid black;
  color: ${(props) => (props.visible ? "white" : "transparent")};
`;

function Char({ letter, visible }) {
  const [char, showChar] = useState(true);

  const handleClick = () => {
    showChar(!char);
    visible = !char;
  };

  if (!char) {
    visible = true;
  }

  return (
    <>
      <p>Click on letter to hide it:</p>
      <CharStyled visible={visible} onClick={handleClick}>
        {letter}
      </CharStyled>
    </>
  );
}

Char.propTypes = {
  letter: PropTypes.string,
  visible: PropTypes.bool,
};

export default Char;
