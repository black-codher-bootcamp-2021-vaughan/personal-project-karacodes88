import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  
  </Box>
);

export default function BasicCard({sighting}) {
    const {_id,Name,Picture,Location} = sighting
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
         {Name}
        <img className="hornets" src={`https://www.nhm.ac.uk/content/dam/nhmwww/discover/murder-hornets/asian-giant-hornet-queen-full-width.jpg.thumb.1160.1160.jpg`}/>
      
     </CardContent>
      
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
   









 