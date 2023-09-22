import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportIcon from "@mui/icons-material/Support";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//Static files
import textData from "../Static/staticText.json";
import "../Styles/lastSection.css";

import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const StyleParent = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
};

const DesignTexts = {
  centerCircle: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    color:'white',
    marginTop:'10px'
  },
};

const LastScreenSection = () => {
  return (
    <div id="parents">
      <div id="containall">
        <h2 style={{ color: "#002D62", textAlign: "left", marginLeft: "5%" }}>
          {" "}
          {textData.Questions.name}{" "}
        </h2>
        <br />
        <p
          style={{
            textAlign: "justify",
            color: "#72A0C1",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
            marginLeft: "5%",
            marginTop: "10px",
          }}
        >
          {" "}
          {textData.Questions.subpara} Contact Us{" "}
          <a href="/contact" style={{ textDecoration: "none" }}>
            {" "}
            Here{" "}
          </a>
        </p>

        <br />
        <br />
        <br />
        <section className="accordians" style={StyleParent}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                <AutoStoriesIcon
                  style={{ verticalAlign: "-4px", color: "#707070" }}
                />{" "}
                {textData.Questions.quests[0][0]}{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{textData.Questions.quests[0][1]}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                <GroupsIcon
                  style={{ verticalAlign: "-4px", color: "#707070" }}
                />{" "}
                {textData.Questions.quests[1][0]}{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{textData.Questions.quests[1][1]}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                <SupportIcon
                  style={{ verticalAlign: "-4px", color: "#707070" }}
                />{" "}
                {textData.Questions.quests[2][0]}{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{textData.Questions.quests[2][1]}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                <AddIcCallIcon
                  style={{ verticalAlign: "-4px", color: "#707070" }}
                />{" "}
                {textData.Questions.quests[3][0]}{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can call us on <a href="tel:+919311624883">9311624883</a>
                &nbsp;&nbsp; Or &nbsp;&nbsp;
                <a href="tel:+917834897602">7834897602</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
      </div>
      <footer className="footer">
       

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={10} md={6} style={DesignTexts.centerCircle}>
             <section className='threeSection' >

             </section>
            </Grid>
            <Grid item xs={10} md={6} style={DesignTexts.centerCircle}>
            <h4 style={{ color: "white", fontSize: "25px" }}> Connect On </h4>
            <br/>
            <section className='threeSection' >
                <p>
                    <a href='https://t.me/deekshalayabymanojgupta' style={{textDecoration:'none', color:'white'}} >
                        <TelegramIcon style={{fontSize:'35px'}} />
                    </a>
                </p>

                <p>
                    <a href='https://youtube.com/@mkgupta197?si=GisWy61QtEE0R33P' style={{textDecoration:'none', color:'white'}} >
                        <YouTubeIcon style={{fontSize:'35px'}} />
                    </a>
                </p>

                <p>
                    <a href='tel:+917834897602' style={{textDecoration:'none', color:'white'}} >
                        <WhatsAppIcon style={{fontSize:'35px'}} />
                    </a>
                </p>
</section>
            </Grid>
          </Grid>
        </Box>
        <br />
        <br />

        <a href="/developer" style={{ textDecoration: "none", color: "white" }}>
          Developer Details
        </a>
      </footer>
    </div>
  );
};

export default LastScreenSection;
