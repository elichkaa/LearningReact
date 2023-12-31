import PropTypes from "prop-types";

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

Validation.propTypes = {
  textLength: PropTypes.number.isRequired,
};

export default Validation;
