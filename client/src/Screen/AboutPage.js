import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

//Static Files
import textData from "../Static/staticText.json";
import logo from "../Images/logo.jpg";
import whyus from '../Images/whyus.png';
import sideimg from "../Images/sideimage.gif";
import prof from '../Images/prof.png'
import results from '../Images/results.png'
import elearn from '../Images/elearn.png'
import "../Styles/commonStyle.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ScienceIcon from "@mui/icons-material/Science";
import BiotechIcon from "@mui/icons-material/Biotech";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SideCardsCircle from "../Component/sideComponent";

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

  centerCircle: {
      width:'90%',
    marginLeft: "auto",
    marginRight: "auto",
  },
};

const WhyUs = () => {
  return (
    <>
      <h2
        style={{
          float: "left",
          marginTop: "5%",
          marginLeft: "3%",
          color: "#13274F",
        }}
      >
        {textData.whyus.name}{" "}
      </h2>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={10} md={6} style={DesignTexts.centerCircle}>
          <p
              style={{
                width: "90%",
                marginTop: "5%",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#002D72",
                textAlign: "justify",
              }}
            >
              {" "}
              {textData.whyus.slogan}
            </p>
            <img
              src={whyus}
              style={{
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "0%",
                padding: "10px",
              }}
              alt="src:google"
              title="src:google"
            />
          </Grid>
          <Grid item xs={10} md={6} style={DesignTexts.centerCircle}>
          <SideCardsCircle  title={textData.whyus.facilities[0][0]} image={prof} text={textData.whyus.facilities[0][1]} buttonText='Read Reviews' link='/reviews' />
          <SideCardsCircle  title={textData.whyus.facilities[1][0]} image={results} text={textData.whyus.facilities[1][1]} buttonText='Result Page' link='/results' />
          <SideCardsCircle  title={textData.whyus.facilities[2][0]} image={elearn} text={textData.whyus.facilities[2][1]} buttonText='Student Login' link='/login' />
        
          </Grid>
        </Grid>
      </Box>

    </>
  );
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

            <a href="/contact">
              <Button
                variant="contained"
                style={{
                  width: "90%",
                  marginTop: "5%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  color: "white",
                  backgroundColor: "#003a6b",
                  textAlign: "justify",
                }}
              >
                {" "}
                Connect <ConnectWithoutContactIcon />{" "}
              </Button>
            </a>
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

                <h3 style={{ color: "#032f64" }}>& {textData.classes.X} </h3>

                <br />
                <br />

                <a href="/" style={{ textDecoration: "none" }}>
                  <Button variant="contained">{textData.Book}</Button>
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
            </section>

            <section className="offersection">
              <div style={{ marginTop: "10%" }}>
                <h3 style={{ color: "#032f64" }}>
                  {" "}
                  {textData.classes.name} {textData.classes.XI}{" "}
                </h3>
                <h3 style={{ color: "#032f64" }}> & {textData.classes.XII} </h3>

                <br />

                <a href="/" style={{ textDecoration: "none" }}>
                  <Button variant="contained"> {textData.Book} </Button>
                </a>
              </div>

              <div className="subtext" style={{ marginTop: "10%" }}>
                <p style={{ color: "#909090" }}>
                  {" "}
                  <br />
                  <BiotechIcon style={{ verticalAlign: "-4px" }} />{" "}
                  {textData.subjects.Biology}
                </p>{" "}
                <br />
              </div>
            </section>
          </Grid>
        </Grid>
      </Box>

      <br />
      <br />
      <WhyUs />
    </React.Fragment>
  );
};

export default AboutUs;
