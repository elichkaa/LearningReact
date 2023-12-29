import React from "react";

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

export default UserInput;
