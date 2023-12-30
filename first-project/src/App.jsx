import React, { useState } from "react";
import "./styling/App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import Picture from "./components/Picture";
import HarryPotterCharacterList from "./components/harry potter/HarryPotterCharacterList";
import Validation from "./components/Validation";
import Char from "./components/Char";

function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
    setIndex(randomInteger(0, text.length));
  };

  return (
    <>
      <Picture />
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
      <UserInput
        description="Enter text:"
        value={text}
        onChange={handleTextChange}
        type="text"
      />
      <p>Length of text you entered: {text.length}</p>
      <Validation textLength={text.length} />
      <Char letter={text[index]} />
      <HarryPotterCharacterList />
    </>
  );
}

export default App;
