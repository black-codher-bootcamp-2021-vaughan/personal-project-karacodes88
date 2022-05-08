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
    
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.phipps.conservatory.org/assets/images/as_blog_image/original_Vespa_mandarinia2009.JPG"
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
 
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >

//   </Box>
// );

// export default function BasicCard({sighting}) {
//     const {Name,Picture,Location} = sighting
//     console.log( "sightings"+ sighting );

//   return (
//     <Card sx={{ minWidth: 100 }}>
//       <CardContent>
//          {Name}
//         <img className="hornets" src={`https://www.nhm.ac.uk/content/dam/nhmwww/discover/murder-hornets/asian-giant-hornet-queen-full-width.jpg.thumb.1160.1160.jpg`}/>

//      </CardContent>

//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
