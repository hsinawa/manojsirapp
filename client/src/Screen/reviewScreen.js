import React, { useEffect, useState } from "react";
import textData from "../Static/staticText.json";
import { useDispatch, useSelector } from "react-redux";
import { ReviewReducer } from "../Reducers/reviewReducer";
import {
  GetValidReviewAction,
  ReviewAddAction,
} from "../Actions/reviewAction";
import Loader2 from "../Component/Loader";
import ReviewCard from "../Component/ResultCard";

//Style
import "../Styles/ReviewStyle.css";

//MUI
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { CircularProgress } from "@mui/material";

const StyleComponents = {
  CenterBody: {
    width: "90%",
    marginTop: "1%",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

const ReviewScreen = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [schoolName, setSchoolName] = useState("");

  const dispatch = useDispatch();

  const AddReview = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      comment: comment,
      schoolName: schoolName,
      value: value,
    };

    dispatch(ReviewAddAction(data));
  };

  const { loading, error } = useSelector((state) => state.ReviewReducer);

  useEffect(() => {
    dispatch(GetValidReviewAction());
  }, [dispatch]);

  const { loadingReviews, reviews, errorReviews } = useSelector(
    (state) => state.GetValidReviewReducer
  );

  return (
    <div style={StyleComponents.CenterBody}>
      <br />
      <h3 style={{ textAlign: "start", color: "#012169" }}>
        {" "}
        {textData.Reviews.name}{" "}
      </h3>{" "}
      <h5
        style={{ textAlign: "start", color: "#007791", cursor: "pointer" }}
        onClick={() => setOpen(true)}
      >
        {textData.Reviews.add}
      </h5>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
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
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.surface",
            }}
          />
          <form onSubmit={AddReview}>
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              Add Review
            </Typography>
            <Typography id="modal-desc" textColor="text.tertiary">
              <Rating
                name="simple-controlled"
                value={value}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontSize: "25px",
                }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                autoComplete="off"
                type="text"
                required
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
                value={name}
                onChange={(e) => {
                  const inputValue = e.target.value;

                  if (inputValue.length <= 300) {
                    setname(inputValue);
                  }
                  else if(inputValue.length>300){
                    document.getElementById('errorwords').innerHTML = `Limit to 300 Words`
                  }
                }}
              />

              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                autoComplete="off"
                type="email"
                required
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                inputProps={{
                  pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
                }}
              />

              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="School Name"
                variant="outlined"
                autoComplete="off"
                type="text"
                required
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
                value={schoolName}
                onChange={(e) => {
                  setSchoolName(e.target.value);
                }}
              />

              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Your Feedback"
                variant="outlined"
                autoComplete="off"
                type="text"
                required
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
                value={comment}
                onChange={(e) => {
                  const inputValue = e.target.value;

                  if (inputValue.length <= 150) {
                    setComment(inputValue);
                  }
                  else if(inputValue.length>150){
                    document.getElementById('errorwords').innerHTML = `Limit to 150 Words`
                  }
                }}
              />
<p id='errorwords' style={{color:'red'}} >  </p>
              <br />
              <br />
              <Button
                variant="contained"
                value="submit"
                type="submit"
                style={{
                  float: "left",
                  backgroundColor: "#0C2340",
                  width: "100%",
                  color: "white",
                  fontSize: "20px",
                  marginRight: "auto",
                }}
              >
                {loading ? <Loader2 /> : "Send"}
                {error && (window.location.href = "/error")}
              </Button>
            </Typography>
          </form>
        </Sheet>
      </Modal>
      {loadingReviews && <CircularProgress />}
      {errorReviews && (
        <h3 style={{ color: "red" }}> OOPS! Couldn't load Reviews </h3>
      )}
      <br />
      <br />
      <div className="threeGrid">
        {" "}
        {reviews &&
          reviews.map((i) => {
            return <ReviewCard i={i} />;
          })}{" "}
      </div>
    </div>
  );
};

export default ReviewScreen;
