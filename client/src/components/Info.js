import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
// import NavBar from "./ NavBar";


export default function MultiActionAreaCard({ sighting }) {
  const { Name, Picture, Location } = sighting;
  console.log("sightings" + sighting);

  return (
    // <><NavBar />
<div>
    <Card style={{marginTop:"50px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {Picture}
          // image="https://www.phipps.conservatory.org/assets/images/as_blog_image/original_Vespa_mandarinia2009.JPG"
          padding= "20px"
          top="20px" />
        <CardContent>
          <div>
            <p> {Name}</p>
            <p>{Location.town}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
 
  );
}

