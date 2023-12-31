import React from "react";

function Validation({ textLength }) {
  let outputMesage = "";

  if (textLength < 5) {
    outputMesage = "Text too short";
  } else {
    outputMesage = "Text long enough";
  }

  return (
    <>
      <p>Length of text you entered: {textLength}</p>
      <p>{outputMesage}</p>
    </>
  );
}

export default Validation;
