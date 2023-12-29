import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <UserInput
        description="Enter name:"
        value={username}
        onChange={handleUsernameChange}
        type="text"
      />
      <UserInput
        description="Enter age:"
        value={age}
        onChange={handleAgeChange}
        type="number"
      />
      <UserOutput styleName="card" name={username} age={age} />
    </>
  );
}

export default App;
