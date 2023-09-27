import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  StudentGETDescriptionAction,
  StudentUpdateAction,
} from "../Actions/studentAction";
import { GetDescriptionStudentsReducer } from "../Reducers/studentReducer";

//MUI Components
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

//Static
import profile from "../Images/profile.png";

//MUI Icons
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SchoolIcon from "@mui/icons-material/School";
import LoginIcon from "@mui/icons-material/Login";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const DescriptionStudent = () => {
  const { studentid } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StudentGETDescriptionAction({ studentid }));
  }, [dispatch]);

  const { loading, error, students } = useSelector(
    (state) => state.GetDescriptionStudentsReducer
  );

  const [AccountStatus, setAccountStatus] = React.useState();

  const UpdateStatus = (e) => {
    e.preventDefault();

    dispatch(StudentUpdateAction({ AccountStatus, studentid }));
  };

  return (
    <div>
      {loading && <CircularProgress />}
      {error && <h2 style={{ color: "red" }}>Something Went Wrong</h2>}
      {students && (
        <div className="profile-container">
          <div className="profile-header">
            <img
              src={profile}
              alt={"User Profile"}
              className="profile-picture"
            />
            <h1 className="profile-name">
              {students[0]?.name} | Class {students[0]?.standard}{" "}
            </h1>
            <h4>
              {" "}
              Account Status:{" "}
              {students[0].isAccountValid ? (
                <span style={{ color: "green" }}> Active </span>
              ) : (
                <span style={{ color: "red" }}> Deactivated </span>
              )}{" "}
            </h4>
            <br />
            <SchoolIcon style={{ verticalAlign: "-6px" }} />{" "}
            {students[0]?.schoolName}
            <br />
            <a
              href={`tel:+91${students[0]?.contactnumber}`}
              style={{ textDecoration: "none", color: "#333" }}
            >
              <CallIcon style={{ verticalAlign: "-6px" }} />{" "}
              {students[0]?.contactnumber}
            </a>{" "}
            |{" "}
            <a
              href={`mailto:${students[0]?.email}`}
              style={{ textDecoration: "none", color: "#333" }}
            >
              <EmailIcon style={{ verticalAlign: "-6px" }} />{" "}
              {students[0]?.email}
            </a>
          </div>

          <hr />
          <div>
            <h1 className="profile-name">Login Information </h1>
            Active Logins :{" "}
            <NotificationsActiveIcon style={{ verticalAlign: "-6px" }} />{" "}
            {students[0]?.ActiveLogins} | Total Logins:{" "}
            <LoginIcon style={{ verticalAlign: "-6px" }} />{" "}
            {students[0]?.totalLogins}
          </div>

          <h4>Login Activities</h4>
          {students[0]?.ipAddress?.map((val, key) => {
            return (
              <p key={key}>
                {" "}
                {++key}) IP Address: {val.name}  on{" "}
                {new Date(`${val.createdAt}`)?.toString().substr(0, 25)}{" "}
              </p>
            );
          })}

          <br />
          <hr />
          <div>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionStudent;
