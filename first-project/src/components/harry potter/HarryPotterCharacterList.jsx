import useHarryPotterCharacters from "../../hooks/useHarryPotterCharacters";
import HarryPotterCharacter from "./HarryPotterCharacter";
import { Grid } from "@mui/material";

function HarryPotterCharacterList() {
  const characters = useHarryPotterCharacters();

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
          characters.map((character) =>
            character.image ? (
              <Grid item xs={2} key={character.id}>
                <HarryPotterCharacter character={character} />
              </Grid>
            ) : null
          )}
      </Grid>
    </>
  );
}

export default HarryPotterCharacterList;
