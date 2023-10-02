import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import "../Styles/LectureStyle.css";
import { useDispatch } from "react-redux";
import {
  AddNotesAction,
  UpdateLectureStatusAction,
  UploadAssignmentAction,
} from "../Actions/lectureAction";

//MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import EditNoteIcon from "@mui/icons-material/EditNote";

const LectureCard = ({ i }) => {
  const admin = localStorage.getItem("admin");
  var testid = i?._id;
  const dispatch = useDispatch();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [pdfUpload, setpdfUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [resultURL, setresultURL] = useState("");

  const [AccountStatus, setAccountStatus] = React.useState();

  const UpdateStatus = (e) => {
    e.preventDefault();

    dispatch(UpdateLectureStatusAction({ AccountStatus, testid }));
  };

  const AddNotes = async (e) => {
    e.preventDefault();
    try {
      if (pdfUpload == null) return;
      const imageRef = ref(
        storage,
        `Notes/${i.nme}-${i._id}-${i?.standard}-${new Date()}`
      );
      const snapshot = await uploadBytes(imageRef, pdfUpload);
      const url = await getDownloadURL(snapshot.ref);

      setImageUrls((prev) => [...prev, url]);
      setresultURL(url);

      const reportdata = {
        resultURL: url,
        id: i._id,
      };

      await dispatch(AddNotesAction({ reportdata }));
    } catch (error) {
      alert(error);
    }
  };

  const [pdfUpload2, setpdfUpload2] = useState(null);
  const [imageUrls2, setImageUrls2] = useState([]);
  const [resultURL2, setresultURL2] = useState("");
  const AddAnswerPaper = async (e) => {
    e.preventDefault();
    try {
      if (pdfUpload2 == null) return;
      const imageRef2 = ref(
        storage,
        `assignMents/${i.nme}-${i._id}-${i?.standard}-${new Date()}`
      );
      const snapshot = await uploadBytes(imageRef2, pdfUpload2);
      const url = await getDownloadURL(snapshot.ref);

      setImageUrls2((prev) => [...prev, url]);
      setresultURL2(url);

      const reportdata = {
        resultURL2: url,
        id: i._id,
      };

      await dispatch(UploadAssignmentAction({ reportdata }));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div className="lecturecard">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <a href={`${i.link}`}>
                {" "}
                <OndemandVideoIcon
                  style={{
                    fontSize: "50px",
                    color: "#002D62",
                    marginTop: "10px",
                  }}
                />{" "}
              </a>
            </Grid>
            <Grid item xs={8}>
              <section className="lectureside">
                <a href={`${i.link}`} style={{ textDecoration: "none" }}>
                  {" "}
                  <h3 style={{ fontSize: "25px", color: "#002244" }}>
                    {" "}
                    {i.name}{" "}
                  </h3>
                  <h5 style={{ color: "#4B9CD3" }}> Class : {i.standard} </h5>
                  <p style={{ color: "#073980" }}> {i.comment} </p>
                  {i?.notesURL?.length > 0 && (
                    <p>
                      {" "}
                      <a
                        href={`${i.notesURL}`}
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <TextSnippetIcon
                          style={{ verticalAlign: "-6px" }}
                        />{" "}
                        Notes{" "}
                      </a>{" "}
                    </p>
                  )}
                  {i?.assignmentURL?.length > 0 && (
                    <p>
                      {" "}
                      <a
                        href={`${i.assignmentURL}`}
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <EditNoteIcon style={{ verticalAlign: "-6px" }} />{" "}
                        Assignment{" "}
                      </a>{" "}
                    </p>
                  )}
                </a>{" "}
              </section>
            </Grid>
          </Grid>
          <br />
          <br />
          {admin && (
            <form onSubmit={UpdateStatus}>
              <hr />
              <h4>This is Admin Only Area</h4>
              <InputLabel id="demo-simple-select-label">
  
                Change Status ( Current Status:{" "}
                {i?.isValid ? (
                  <span style={{ color: "green" }}> Available </span>
                ) : (
                  <span style={{ color: "red" }}> Not Available </span>
                )}{" "}
                ){" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={AccountStatus}
                label="Status"
                onChange={(e) => {
                  setAccountStatus(e.target.value);
                }}
              >
                <br />
                <br />
                <h4> Is Available? </h4>
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>NO</MenuItem>
              </Select>
              <br />
              <br />
              <Button variant="outlined" type="submit" value="submit">
                {" "}
                Update{" "}
              </Button>
            </form>
          )}

          {admin && (
            <p>
              <section className="twoGrid">
                <p
                  style={{ fontWeight: "bold", color: "#005A9C" }}
                  onClick={() => setOpen1(true)}
                >
                  {" "}
                  <TextSnippetIcon style={{ verticalAlign: "-6px" }} /> Upload
                  Notes
                </p>
                <Modal
                  aria-labelledby="modal-title"
                  aria-describedby="modal-desc"
                  open={open1}
                  onClose={() => setOpen1(false)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      width: "80%",
                      borderRadius: "md",
                      p: 3,
                      boxShadow: "lg",
                    }}
                  >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h4"
                      textColor="inherit"
                      fontWeight="lg"
                      mb={1}
                    >
                      Upload Question Paper
                    </Typography>
                    <br />
                    <br />
                    <form onSubmit={AddNotes}>
                      <input
                        type="file"
                        onChange={(event) => {
                          setpdfUpload(event.target.files[0]);
                        }}
                      />
                      <Button type="submit" value="submit" variant="outlined">
                        Upload
                      </Button>
                    </form>
                  </Sheet>
                </Modal>
                <p
                  style={{ fontWeight: "bold", color: "#005A9C" }}
                  onClick={() => setOpen2(true)}
                >
                  {" "}
                  <EditNoteIcon style={{ verticalAlign: "-6px" }} /> Upload
                  Assignment{" "}
                </p>
                <Modal
                  aria-labelledby="modal-title"
                  aria-describedby="modal-desc"
                  open={open2}
                  onClose={() => setOpen2(false)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      maxWidth: 500,
                      borderRadius: "md",
                      p: 3,
                      boxShadow: "lg",
                    }}
                  >
                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h4"
                      textColor="inherit"
                      fontWeight="lg"
                      mb={1}
                    >
                      Upload Assignments
                    </Typography>

                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <form onSubmit={AddAnswerPaper}>
                      <input
                        type="file"
                        onChange={(event) => {
                          setpdfUpload2(event.target.files[0]);
                        }}
                      />
                      <Button type="submit" value="submit" variant="outlined">
                        Upload
                      </Button>
                    </form>
                  </Sheet>
                </Modal>
              </section>
              <hr />
              <br />
              <br />
            </p>
          )}
        </Box>
      </div>
      <br />
    </div>
  );
};

export default LectureCard;
