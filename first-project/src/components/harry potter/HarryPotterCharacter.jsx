import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function HarryPotterCharacter({ character }) {
  return (
    <>
      {character.image ? (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="auto"
              image={character.image}
              alt={character.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.house}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : null}
    </>
  );
}

export default HarryPotterCharacter;
