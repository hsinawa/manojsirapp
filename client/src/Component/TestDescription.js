import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GetTestDescriptionAction } from "../Actions/testAction";
import { GetDescriptionTestsReducer } from "../Reducers/testReducer";

//Style
import "../Styles/Test.css";
import { CircularProgress } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AddResultsTest from './AddMarks'



const TestDescriptionScreen = () => {
  const { testid } = useParams();

  const dispatch = useDispatch();

  const admin = localStorage.getItem("admin");

  useEffect(() => {
    dispatch(GetTestDescriptionAction({ testid }));
  }, [dispatch]);

  const { loading, error, tests } = useSelector(
    (state) => state.GetDescriptionTestsReducer
  );

  const [addResult, setaddResult] = React.useState(false);

  return (
    <div>
      <br />

      {loading && <CircularProgress />}
      {error && <ErrorMessage i={"OOPS! Something Went Wrong"} />}
      {tests && (
        <div className="test-description">
          <h2 className="title">Test Description </h2>
          <div className="gridtest">
            <div className="label">Name of Test:</div>
            <div className="value"> {tests[0].name} </div>

            <div className="label">Date:</div>
            <div className="value">
              {" "}
              {new Date(`${tests[0].dateOfExam}`)?.toString().substr(0, 15)}
            </div>

            <div className="label">Status:</div>
            <div className="value">
              {" "}
              {tests[0]?.isValid ? (
                <span style={{ color: "red" }}>Pending</span>
              ) : (
                <span style={{ color: "green" }}>Completed</span>
              )}{" "}
            </div>

            <div className="label">Subject:</div>
            <div className="value">{tests[0].subject}</div>

            <div className="label">Total Marks:</div>
            <div className="value">{tests[0].MaxMarks}</div>

            <div className="label">Additional Comments:</div>
            <div className="value">{tests[0].comment}</div>

            {tests[0]?.testPaperLink?.length > 0 && (
              <div className="label"> Test Paper : </div>
            )}
            {tests[0]?.testPaperLink?.length > 0 && (
              <div className="label">
                {" "}
                <a
                  href={`${tests[0].testPaperLink}`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <StickyNote2Icon style={{ verticalAlign: "-6px" }} /> See Here{" "}
                </a>{" "}
              </div>
            )}

            {tests[0]?.answerLink?.length > 0 && (
              <div className="label"> Solution : </div>
            )}
            {tests[0]?.answerLink?.length > 0 && (
              <div className="label">
                {" "}
                <a
                  href={`${tests[0].answerLink}`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <PlagiarismIcon style={{ verticalAlign: "-6px" }} /> See Here{" "}
                </a>{" "}
              </div>


            )}
          </div>
        </div>
 )}
<br/><br/><br/>


{
  admin && tests && (
    <>
      <hr />
      <h4>Only for Admin</h4>
      <InputLabel id="demo-simple-select-label">Add Results</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={addResult}
          label="Status"
          onChange={(e) => {
            setaddResult(e.target.value);
          }}
        >
          <br />
          <br />
         
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>NO</MenuItem>
        </Select>
      {addResult && <AddResultsTest i = {tests} tid= {testid} />}
    </>
  )
}

    </div>
  );
};

export default TestDescriptionScreen;
