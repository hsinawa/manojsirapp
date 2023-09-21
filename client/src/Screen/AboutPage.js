import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

//Static Files
import textData from "../Static/staticText.json";
import logo from "../Images/logo.jpg";
import sideimg from "../Images/sideimage.gif";
import "../Styles/commonStyle.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ScienceIcon from "@mui/icons-material/Science";
import BiotechIcon from "@mui/icons-material/Biotech";

const DesignTexts = {
  Headers: {
    float: "left",
    marginTop: "5%",
    marginLeft: "3%",
    color: "#003a6b",
  },

  center: {
    marginLeft: "auto",
    marginRight: "auto",
  },
};

const AboutUs = () => {
  return (
    <React.Fragment>
      <h2 style={DesignTexts.Headers}> {textData.about.name} </h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={10} md={6} style={DesignTexts.center}>
            <img
              src={logo}
              style={{
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "0%",
                padding: "15px",
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
              }}
              alt="Logo of Concept Classes"
              title="Logo of Concept Classes"
            />
          </Grid>
          <Grid item xs={10} md={6} style={DesignTexts.center}>
            <p
              style={{
                width: "90%",
                marginTop: "10%",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#3776a1",
                textAlign: "justify",
              }}
            >
              {" "}
              {textData.about.text}
            </p>

            <p
              style={{
                width: "90%",
                marginTop: "5%",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#3776a1",
                textAlign: "justify",
              }}
            >
              {" "}
              {textData.about.para2}
            </p>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <h2
        style={{
          float: "left",
          marginTop: "5%",
          marginLeft: "3%",
          color: "#000181",
        }}
      >
        {" "}
        {textData.offer}{" "}
      </h2>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={10} md={6} style={DesignTexts.center}>
            <img
              src={sideimg}
              style={{
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "0%",
                padding: "15px",
              }}
              alt="src:google"
              title="src:google"
            />
          </Grid>
          <Grid item xs={10} md={6} style={DesignTexts.center}>
            <section className="offersection">
              <div>
                <h3 style={{ color: "#032f64" }}>
                  {" "}
                  {textData.classes.name} {textData.classes.IX}{" "}
                </h3>

                <h3 style={{ color: "#032f64" }}>
                 
                 & {textData.classes.X}{" "}
                </h3>

                <br />
                <br />
              
                <a href="/" style={{ textDecoration: "none" }}>
                  <Button variant="contained" >Book now</Button>
                </a>
              </div>

              <div className="subtext">
                <p style={{ color: "#909090" }}>
                  {" "}
                  <RocketLaunchIcon style={{ verticalAlign: "-4px" }} />{" "}
                  {textData.subjects.physics}
                </p>{" "}
                <br />
                <p style={{ color: "#909090" }}>
                  {" "}
                  <ScienceIcon style={{ verticalAlign: "-4px" }} />{" "}
                  {textData.subjects.chemistry}
                </p>
                <br />
                <p style={{ color: "#909090" }}>
                  {" "}
                  <BiotechIcon style={{ verticalAlign: "-4px" }} />{" "}
                  {textData.subjects.Biology}
                </p>{" "}
                <br />
              </div>


      


              <div style={{marginTop:'10%'}} >
                <h3 style={{ color: "#032f64" }}>
                  {" "}
                  {textData.classes.name} {textData.classes.XI} {" "}
                </h3>
                <h3 style={{ color: "#032f64" }} > & {textData.classes.XII}  </h3>

                <br />
               
                <a href="/" style={{ textDecoration: "none" }}>
                  <Button variant="contained">Book now</Button>
                </a>
              </div>

              <div className="subtext" style={{marginTop:'10%'}}>
              
                <p style={{ color: "#909090" }}>
                  {" "}
                  <br/>
                  <BiotechIcon style={{ verticalAlign: "-4px" }} />{" "}
                  {textData.subjects.Biology}
                </p>{" "}
                <br />
              </div>
            </section>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default AboutUs;
