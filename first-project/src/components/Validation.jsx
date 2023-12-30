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
      <p>{outputMesage}</p>
    </>
  );
}

export default Validation;
