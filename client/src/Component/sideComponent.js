import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ExploreIcon from "@mui/icons-material/Explore";
import Button from "@mui/material/Button";

import '../Styles/commonStyle.css'

const SideCardsCircle = ({ ...props }) => {
  const { title, image, text, link, buttonText } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={8}
          md={6}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <img
            src={image}
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",

              borderRadius: "50%",
            }}
            alt="Src:Google"
          />
        </Grid>
        <Grid
          item
          xs={8}
          md={6}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <div style={{ marginLeft: "auto", marginRight: "auto" , width:'95%'}} >
          <h3 style={{color:'#041d4c'}} id='title'  >{title}</h3>
          <br />
          <p className="paragraph-circle" style={{color:'#546875'}}> {text} </p>
          <br />
          <a href={`${link}`} style={{ textDecoration: "none" }} >
            <Button variant="contained" id="button" style={{ color: "white", width:'95%', backgroundColor:'#011F5B', border:'none', marginTop:'10%' }}>
              {buttonText} &nbsp;{" "}
              {buttonText?.startsWith("R") ? (
                <LocalLibraryIcon style={{ color: "white" }} />
              ) : (
                <ExploreIcon style={{ color: "white" }} />
              )}
            </Button>
          </a>
              </div>
        
        </Grid>
      </Grid>
    </Box>
  );
};

export default SideCardsCircle;