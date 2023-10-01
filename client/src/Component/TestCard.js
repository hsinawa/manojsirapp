import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import {
  AddQuestionPaperAction,
  AddAnswerPaperAction,
  UpdateTestStatusAction,
} from "../Actions/testAction";
import { useDispatch } from "react-redux";

//MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const TestCard = ({ i }) => {
  const admin = localStorage.getItem("admin");
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [pdfUpload, setpdfUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [resultURL, setresultURL] = useState("");
  const dispatch = useDispatch();

  var testid = i?._id;

  const AddQuestionPaper = async (e) => {
    e.preventDefault();
    try {
      if (pdfUpload == null) return;
      const imageRef = ref(
        storage,
        `testPapers/${i._id}-${i?.standard}-${new Date()}`
      );
      const snapshot = await uploadBytes(imageRef, pdfUpload);
      const url = await getDownloadURL(snapshot.ref);

      setImageUrls((prev) => [...prev, url]);
      setresultURL(url);

      const reportdata = {
        resultURL: url,
        id: i._id,
      };

      await dispatch(AddQuestionPaperAction({ reportdata }));
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
        `answerPapers/${i._id}-${i?.standard}-${new Date()}`
      );
      const snapshot = await uploadBytes(imageRef2, pdfUpload2);
      const url = await getDownloadURL(snapshot.ref);

      setImageUrls2((prev) => [...prev, url]);
      setresultURL2(url);

      const reportdata = {
        resultURL2: url,
        id: i._id,
      };

      await dispatch(AddAnswerPaperAction({ reportdata }));
    } catch (error) {
      alert(error);
    }
  };

  const [AccountStatus, setAccountStatus] = React.useState();

  const UpdateStatus = (e) => {
    e.preventDefault();

    dispatch(UpdateTestStatusAction({ AccountStatus, testid }));
  };

  return (
    <div style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={i?.isValid ? { color: "#660000" } : { color: "green" }}
            >
              {i.name} on{" "}
              {new Date(`${i?.dateOfExam}`)?.toString()?.substr(0, 15)}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <a
                href={`/testdecription/${i._id}`}
                style={{ textDecoration: "none" }}
              >
                <section className="twoGrid">
                  <p style={{ color: "#6495ED" }}>
                    <span style={{ fontWeight: "bold", color: "#002244" }}>
                      Subject :{" "}
                    </span>{" "}
                    {i?.subject}
                  </p>
                  <p style={{ color: "#6495ED" }}>
                    <span style={{ fontWeight: "bold", color: "#002244" }}>
                      Class :{" "}
                    </span>{" "}
                    {i?.standard}th
                  </p>
                  <p style={{ color: "#6495ED" }}>
                    <span style={{ fontWeight: "bold", color: "#002244" }}>
                      Total Marks :{" "}
                    </span>{" "}
                    {i?.MaxMarks}
                  </p>
                  <p style={{ color: "#6495ED" }}>
                    <span style={{ fontWeight: "bold", color: "#002244" }}>
                      Additional Details :{" "}
                    </span>{" "}
                    {i?.comment}
                  </p>
                </section>
              </a>
            </Typography>

            {admin && (
              <p>
                <hr />
                <h4>This is Admin Only Area</h4>
                <section className="twoGrid">
                  <p
                    style={{ fontWeight: "bold", color: "#005A9C" }}
                    onClick={() => setOpen1(true)}
                  >
                    {" "}
                    <StickyNote2Icon style={{ verticalAlign: "-6px" }} /> Upload
                    Question Paper{" "}
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
                      <form onSubmit={AddQuestionPaper}>
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
                    <PlagiarismIcon style={{ verticalAlign: "-6px" }} /> Upload
                    Answer Sheet{" "}
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
                        Upload Answer Sheet
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
              </p>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
      <br />
      {admin&&(
 <form onSubmit={UpdateStatus}>
 <InputLabel id="demo-simple-select-label">Change Status</InputLabel>
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
   <h4> Complete Test? </h4>
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
     
      <br /> <hr />
      <br />
    </div>
  );
};

export default TestCard;
