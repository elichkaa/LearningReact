import React from "react";
import fetchHarryPotterCharacters from "../../hooks/fetchHarryPotterCharacters";
import HarryPotterCharacter from "./HarryPotterCharacter";
import { Grid } from "@mui/material";

function HarryPotterCharacterList() {
  const characters = fetchHarryPotterCharacters();

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {characters &&
          characters.map((character) => {
            return (
              <>
                {character.image ? (
                  <Grid item xs={2}>
                    <HarryPotterCharacter
                      key={character.id}
                      character={character}
                    />
                  </Grid>
                ) : null}
              </>
            );
          })}
      </Grid>
    </>
  );
}

export default HarryPotterCharacterList;
