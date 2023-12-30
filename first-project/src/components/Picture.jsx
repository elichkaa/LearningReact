import React, { useState } from "react";

function Picture() {
  const [pic, showPic] = useState(false);

  const handleClick = (event) => {
    showPic(!pic);
  };

  let picture = null;

  if (pic) {
    picture = (
      <img
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
        alt="dogs"
      />
    );
  }

  return (
    <>
      <button onClick={handleClick}>Show Picture</button>
      {picture}
    </>
  );
}

export default Picture;
