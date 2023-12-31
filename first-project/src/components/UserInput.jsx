import PropTypes from "prop-types";

function UserInput({ description, value, onChange, type }) {
  const inputStyle = {
    margin: "1em",
  };
  return (
    <div style={inputStyle}>
      <label>{description}</label>
      <br></br>
      <input type={type} value={value} onChange={onChange} />
      <br />
    </div>
  );
}

UserInput.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default UserInput;
