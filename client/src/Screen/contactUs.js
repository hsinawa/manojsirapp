import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";

//Static files
import textData from "../Static/staticText.json";
import { messageContactAction } from "../Actions/messageAction";
import { PostEnqReducer } from "../Reducers/messageReducer";
import Loader2 from "../Component/Loader";

const ContactUs = () => {
  const [number, setnumber] = useState("");
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");

  const dispatch = useDispatch();
  const trialReducer = useSelector((state) => state.PostEnqReducer);
  const { loading } = trialReducer;

  const SubmitContact = (e) => {
    e.preventDefault();

    const data = {
      number: number,
      name: name,
      message: message,
    };
    dispatch(messageContactAction(data));
  };

  return (
    <div id="parent">
      <h1 id="offerh1" style={{ color: "#082567" }}>
        {textData.ContactUs.name}
      </h1>
      <p style={{ textAlign: "justify", color: "#011F5B" }}>
        {textData.ContactUs.slogan}
      </p>

      <section
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
          borderRadius: "12px",
          paddingTop: "1%",
          paddingBottom: "3%",
          marginTop: "5%",
        }}
      >
        <Box
          sx={{
            flexGrow: 0,
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
            cursor: "pointer",
            marginTop: "3%",
          }}
        >
          <form onSubmit={SubmitContact}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={6}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter Name"
                  variant="outlined"
                  autoComplete="off"
                  type="text"
                  required
                  value={name}
                  style={{
                    width: "90%",
                  }}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter Email"
                  variant="outlined"
                  autoComplete="off"
                  type="email" 
                  required 
                  style={{
                    width: "90%",
                  }}
                  value={number}
                  inputProps={{
                    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}", 
                  }}
                  onChange={(e) => {
                    setnumber(e.target.value);
                  }}
                />
              </Grid>

              <Grid
                item
                xs={11.3}
                md={12}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter Message"
                  variant="outlined"
                  autoComplete="off"
                  type="text"
                  required
                  value={message}
                  style={{
                    width: "96%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  className="messageBox"
                  multiline
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  rows={4}
                />
              </Grid>
              <Grid
                item
                xs={11}
                md={12}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <Button
                  variant="contained"
                  value="submit"
                  type="submit"
                  style={{
                    float: "left",
                    backgroundColor: "#0C2340",
                    width: "97%",
                    marginLeft: "2%",
                    fontSize: "20px",
                    marginRight: "auto",
                  }}
                >
                  {loading ? (
                    <Loader2 />
                  ) : (
                    <p>
                      SEND <SendIcon style={{ verticalAlign: "-5px" }} />{" "}
                    </p>
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </section>
    </div>
  );
};

export default ContactUs;
