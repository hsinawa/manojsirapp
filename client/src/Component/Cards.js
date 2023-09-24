import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const GridCard = ({ image, heading, text }) => {
    
  return (
    <Card
      raised
      sx={{
        width: 330,
        margin: "0 auto",
        padding: "0.1em",
        borderRadius: "15px",
        marginTop:'15px'
      }}
      id="card"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="235"
          alt={"Grid Image"}
          title={"Image src: google"}
          image={image}
         
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GridCard;
