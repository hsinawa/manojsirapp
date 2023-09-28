import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ReviewGetDescriptionAction, ReviewStatusUPdateAction } from "../../Actions/reviewAction";
import { ReviewDescriptionReducer } from "../../Reducers/reviewReducer";


//MUI Components
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const ReviewDescription = () => {
  const { reviewid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ReviewGetDescriptionAction({ reviewid }));
  }, [dispatch]);

  const { loading, error, reviews } = useSelector(
    (state) => state.ReviewDescriptionReducer
  );

  const [AccountStatus, setAccountStatus] = React.useState();

  const UpdateStatus = (e) => {
    e.preventDefault();

    dispatch(ReviewStatusUPdateAction({ AccountStatus, reviewid }));
  };

  return (
    <div>
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {loading && <CircularProgress />}
        {error && (
          <h3 style={{ color: "red" }}> OOPS! Couldn't load Reviews </h3>
        )}
        {reviews && (
          <>
            <h3>Review By: {reviews[0].name}</h3>
            <p>From: {reviews[0].schoolName}</p>
            <h4>
              {" "}
              Contact Details :{" "}
              <a
                href={`mailto:${reviews[0].email}`}
                style={{ textDecoration: "none", color: "grey" }}
              ></a>{" "}
              {reviews[0].email}{" "}
            </h4>
            <Rating name="read-only" value={reviews[0].rating} readOnly />
            <br />
            <hr />
            <p> " {reviews[0].comment} " </p>
            <br/>
            <hr/>
            <br/>
            <form onSubmit={UpdateStatus}>
              <InputLabel id="demo-simple-select-label">
                Change Status
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

          </>
        )}
      </div>
    </div>
  );
};

export default ReviewDescription;
