import React from "react";

function UserOutput({ name, age, styleName }) {
  return (
    <>
      <div className={styleName}>
        <p>User: {name}</p>
        <p>Age: {age}</p>
      </div>
    </>
  );
}

export default UserOutput;
