import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentGetValidByClassAction } from "../../Actions/studentAction";
import { GetAllStudentsReducer } from "../../Reducers/studentReducer";
import Calendar from "react-calendar";
import { TestAddAction } from "../../Actions/testAction";
import {AddTestReducer} from '../../Reducers/testReducer'

//Static
import "react-calendar/dist/Calendar.css";
import "../../Styles/Calendar.css";

//MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Loader2 from "../../Component/Loader";
import { CircularProgress } from "@mui/material";


const AddTest = () => {
  const dispatch = useDispatch();

  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [MaxMarks, setMaxMarks] = useState();
  const [standard, setStandard] = useState();

  useEffect(() => {
    dispatch(StudentGetValidByClassAction({ standard }));
  }, [standard]);

  const { loading, students } = useSelector(
    (state) => state.GetAllStudentsReducer
  );

  const {loadingtest} = useSelector(state=>state.AddTestReducer)

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const AddTestFunction = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      subject: subject,
      selectedDate: selectedDate,
      standard: standard,
      comment: comment,
      MaxMarks: MaxMarks,
      students: students,
    };

    dispatch(TestAddAction(data))
  };

  return (
    <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
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
          <form onSubmit={AddTestFunction}>
            <div className="calendar-container">
              <div>
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  className="react-calendar"
                />
              </div>
            </div>
            <br /> <br />
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
                  fullWidth
                  autoComplete="off"
                  type="text"
                  required
                  style={{
                    width: "100%",
                  }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
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
                  label="Enter Comment"
                  fullWidth
                  variant="outlined"
                  autoComplete="off"
                  type="text"
                  required
                  style={{
                    width: "100%",
                  }}
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subject}
                    label="Subject"
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  >
                    <MenuItem value={"Full"}>Full Syllabus</MenuItem>
                    <MenuItem value={"Physics"}>Physics</MenuItem>
                    <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
                    <MenuItem value={"Biology"}>Biology</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Standard
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={standard}
                    label="Standard"
                    onChange={(e) => {
                      setStandard(e.target.value);
                    }}
                  >
                    <MenuItem value={9}>IX</MenuItem>
                    <MenuItem value={10}>X</MenuItem>
                    <MenuItem value={11}>XI</MenuItem>
                    <MenuItem value={12}>XII</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
            <TextField
                  id="outlined-basic"
                  label="Total Marks"
                  fullWidth
                  variant="outlined"
                  autoComplete="off"
                  type="number"
                  required
                  style={{
                    width: "100%",
                  }}
                  value={MaxMarks}
                  onChange={(e) => {
                    setMaxMarks(e.target.value);
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
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
                    width: "100%",
                    marginLeft: "2%",
                    fontSize: "20px",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  
                  {loading ? (<Loader2 />) : (
                    loadingtest? (<CircularProgress/>):(<p> ADD NOW </p>) )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </section>
    </div>
  );
};

export default AddTest;
