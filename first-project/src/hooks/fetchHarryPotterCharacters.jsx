import { useEffect, useState } from "react";

function fetchHarryPotterCharacters() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hp-api.onrender.com/api/characters"
        );
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching Harry Potter characters: ", error);
      }
    };

    fetchData();
  }, []);

  return characters;
}

export default fetchHarryPotterCharacters;
