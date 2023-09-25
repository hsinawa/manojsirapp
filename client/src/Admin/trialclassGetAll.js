import { CircularProgress } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTrailClass } from "../Actions/trialClassAction";
import { GetAllTrialClassReducer } from "../Reducers/trialClassReducer";
import "./table.css";

const TrailClassGetAll = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetAllTrailClass());
  }, [dispatch]);

  var count = 0;
  const { loading, error, trials } = useSelector(
    (state) => state.GetAllTrialClassReducer
  );

  return (
    <div style={{marginBottom:'20%'}}>
      {loading && <CircularProgress />}
      {error && <h2 style={{ color: "red" }}>OOPS! Something went wrong</h2>}

      <table class="table">
        <thead>
          <th>S.No</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Class</th>
          <th>Subject</th>
          <th>Booked For</th>
          <th>Booked On</th>
        </thead>
        <tbody>
          {trials &&
            trials.reverse().map((i) => {
              return (
                <tr>
                  <td> {++count} </td>
                  <td> {i.name} </td>
                  <td>
                   
                    <a
                      herf={`tel:+91${i.contact}`}
                      style={{ textDecoration: "none" }}
                    >
                     
                      {i.contact}
                    </a>{" "}
                  </td>
                  <td> {i.standard} </td>
                  <td> {i.subject} </td>
                  <td> {i.date?.substr(0, 10)} </td>
                  <td> {i.createdAt?.substr(0, 10)} </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TrailClassGetAll;
