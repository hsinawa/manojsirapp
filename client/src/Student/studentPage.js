import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StudentGETDescriptionAction,
  StudentLogoutAction,
} from "../Actions/studentAction";
import { GetDescriptionStudentsReducer } from "../Reducers/studentReducer";
import GridCard from "../Component/Cards";
import { LogoutStudentReducer } from "../Reducers/studentReducer";

//MUI & Design
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import "../Styles/studentStyle.css";
//Static
import profile from "../Images/profile.png";

//MUI Icons
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SchoolIcon from "@mui/icons-material/School";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from '@mui/icons-material/Edit';
import EventNoteIcon from '@mui/icons-material/EventNote';

//Images
import physics from "../Images/physics.png";
import chemsitry from "../Images/chemistry.png";
import biology from "../Images/biology.png";

const SubjectBoard = [
  {
    heading: "Physics",
    image: physics,
    text: "Check all lectures of Physics Here",
    link: `/student/Physics`,
  },

  {
    heading: "Chemistry",
    image: chemsitry,
    text: "Check all lectures of Chemistry Here",
    link: `/student/Chemistry`,
  },
  {
    heading: "Biology",
    image: biology,
    text: "Check all lectures of Biology Here",
    link: `/student/Biology`,
  },
];

const Styles = {
  MUIButtons: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
  },
};

const StudentPage = () => {
  const dispatch = useDispatch();

  const student = JSON.parse(localStorage.getItem("student"));

  const studentid = student._id;

  useEffect(() => {
    dispatch(StudentGETDescriptionAction({ studentid }));
  }, [dispatch]);

  const { loading, students, error } = useSelector(
    (state) => state.GetDescriptionStudentsReducer
  );
  const { loadingLogOut } = useSelector((state) => state.LogoutStudentReducer);
  return (
    <div id="studentform">
      {loading && <CircularProgress />}
      {error && <Alert severity="error">OOPS! Something Went Wrong</Alert>}
      {students && (
        <>
          {students[0]?.isAccountValid ? (
            <>
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
                  <br />
                  <br />
                  <section className="threeGrid">
                    <Button
                      variant="outlined"
                      href="/student/editprofile"
                      style={Styles.MUIButtons}
                    >
                    <EditIcon
                        style={{ verticalAlign: "-6px" }}
                      />  Edit Profile
                    </Button>
                    <Button
                      variant="outlined"
                      href="/student/testschedule"
                      style={Styles.MUIButtons}
                    >
                     <EventNoteIcon
                        style={{ verticalAlign: "-6px" }}
                      />  Test Schedule
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      style={Styles.MUIButtons}
                      onClick={(e) => {
                        dispatch(StudentLogoutAction({ studentid }));
                      }}
                    >
                      {" "}
                      <LogoutIcon
                        style={{ verticalAlign: "-6px", color: "red" }}
                      />{" "}
                      {loadingLogOut? (<CircularProgress style={{color:'red'}} />):('LOGOUT')}
                    
                    </Button>
                  </section>
                </div>
              </div>
              <section className="threeGrid">
                {SubjectBoard?.map((i, key) => {
                  return (
                    <p key={key}>
                      {" "}
                      <a href={`${i.link}`} style={{ textDecoration: "none" }}>
                        {" "}
                        <GridCard i={i} />{" "}
                      </a>{" "}
                    </p>
                  );
                })}
              </section>
            </>
          ) : (
            <>
              <br />
              <br />
              <br />
              <br />
              <Alert severity="info">Your Account is not Validated </Alert>
              <br/><br/>
              <Button
                      variant="outlined"
                      color="error"
                      style={Styles.MUIButtons}
                      onClick={(e) => {
                        dispatch(StudentLogoutAction({ studentid }));
                      }}
                    >
                      {" "}
                      <LogoutIcon
                        style={{ verticalAlign: "-6px", color: "red" }}
                      />{" "}
                      {loadingLogOut? (<CircularProgress style={{color:'red'}} />):('LOGOUT')}
                    
                    </Button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default StudentPage;
