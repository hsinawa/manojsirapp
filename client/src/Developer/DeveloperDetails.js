import React from "react";
import awanish from "../Images/am.png";
import "./developer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmailIcon from '@mui/icons-material/Email';


const AboutDeveloper = () => {
  return (
    <div>
      <h1 id="abtd">About Developer</h1>
      <div className="grid" style={{ marginTop: "7%" }}>
        <img className="image-developer" src={awanish} alt="AwanishDeveloper" />

        <p>
          <h1 id="am">Awanish Mishra</h1>

          <h4 id="abouttext">Ex-SDE@Thales | Qualified Amazon EMEA </h4>
          <p
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              color: "#808080",
              marginTop:'1%',
              textAlign: "center",
            }}
          >
            {" "}
            This Entire Application is developed by me. Here's how you can
            get in touch with me.{" "}
          </p>
          <br />
          <i class="fas fa-envelope" aria-hidden="true" id="lowertext"></i>
          <a
            href='href="awanishmishra003@gmail.com"'
            style={{ textDecoration: "none", color: "black" }}
          >
            <span id="lowertext" style={{ fontSize: "20px" }}>
           <EmailIcon style={{verticalAlign:'-6px'}} />   awanishmishra003@gmail.com
            </span>
          </a>
        </p>
      </div>
      <Grid container spacing={2} sx={{ width: "80%", mx: "auto", marginTop:'2%' }}>
        <Grid item xs={2} md={2}>
          <p></p>
        </Grid>

        <Grid item xs={2} md={2}>
          <p title="Phone">
            <a
              href={`tel:+919599150262`}
              target="_blank"
              style={{ color: "black", cursor: "pointer" }}
            >
              <LocalPhoneIcon
                style={{ verticalAlign: "-6px", fontSize: "35px" }}
              />
            </a>
          </p>
        </Grid>

        <Grid item xs={2} md={2}>
          <p title="Github">
            <a
              href={`https://github.com/hsinawa`}
              target="_blank"
              style={{ color: "black", cursor: "pointer" }}
            >
              <GitHubIcon style={{ verticalAlign: "-6px", fontSize: "35px" }} />
            </a>
          </p>
        </Grid>

        <Grid item xs={2} md={2}>
          <p title="Instagram">
            <a
              href={`https://www.instagram.com/awanish.mishra/`}
              target="_blank"
              style={{ color: "black", cursor: "pointer" }}
            >
              <InstagramIcon
                style={{ verticalAlign: "-6px", fontSize: "35px" }}
              />
            </a>
          </p>
        </Grid>
     
        <Grid item xs={2} md={2}>
          <p title="LinkedIn">
            <a
              href={`https://www.linkedin.com/in/awanish-mishra-941a93195/`}
              target="_blank"
              style={{ color: "black", cursor: "pointer" }}
            >
              <LinkedInIcon
                style={{ verticalAlign: "-6px", fontSize: "35px" }}
              />
            </a>
          </p>
        </Grid>

        <Grid item xs={2} md={2}>
          <p></p>
        </Grid>
      </Grid>
      <br />
      <br /> <br />
      <br /> <br />
    </div>
  );
};

export default AboutDeveloper;