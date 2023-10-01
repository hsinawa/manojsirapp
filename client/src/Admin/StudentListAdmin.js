import { CircularProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentGETAction } from "../Actions/studentAction";
import { GetAllStudentsReducer } from "../Reducers/studentReducer";
import textData from "../Static/staticText.json";

//MUI Icons
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const StudentList = () => {
  const dispatch = useDispatch();
  const [SearchTerm, setSearchTerm] = useState(3);
  const [searchName, setsearchName] = useState('')

  useEffect(() => {
    dispatch(StudentGETAction());
  }, [dispatch]);

  const { loading, students, error } = useSelector(
    (state) => state.GetAllStudentsReducer
  );

  var cnt = 0;
  return (
    <div style={{ marginBottom: "20%" }}>
      {loading && <CircularProgress />}
      {error && <h2 style={{ color: "red" }}>OOPS! Something went wrong</h2>}
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField sx={{ width: "95%" }} label="Enter Name" 
          value={searchName}
          onChange={ (e)=>{ setsearchName(e.target.value) } }
          autoComplete="off"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{ width: "95%" }}>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={SearchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              label="Class"
            >
              <MenuItem value={9}>IX</MenuItem>
              <MenuItem value={10}>X</MenuItem>
              <MenuItem value={11}>XI</MenuItem>
              <MenuItem value={12}>XII</MenuItem>
              <MenuItem value={2}>All Pending</MenuItem>
              <MenuItem value={4}>All Approved</MenuItem>
              <MenuItem value={3}>All Students</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br />
      <table class="table">
        <thead>
          {textData.Students.Table.tableEntries?.map((j) => {
            return <th> {j} </th>;
          })}
        </thead>
        <tbody>
          {students &&
            students
              .filter((val) => {
                if (SearchTerm == 3) {
                  return val;
                } else if (SearchTerm == 4) {
                  return val.isAccountValid === true;
                } else if (SearchTerm == 2) {
                  return val.isAccountValid === false;
                } else if (val.standard.includes(SearchTerm)) {
                  return val;
                }
              }).filter((val) => {
                if (searchName == '') {
                  return val;
                } 
                 else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
                  return val;
                }
              })
              .map((i) => {
                return (
                  <tr>
                    <td
                      data-label={`${textData.Students.Table.tableEntries[0]}`}
                    >
                      {" "}
                      {++cnt}{" "}
                    </td>
                    <td
                      data-label={`${textData.Students.Table.tableEntries[1]}`}
                    >
                      {" "}
                      {i.name}{" "}
                    </td>
                    <td
                      data-label={`${textData.Students.Table.tableEntries[2]}`}
                    >
                      {" "}
                      {i.standard}{" "}
                    </td>
                    <td
                      data-label={`${textData.Students.Table.tableEntries[3]}`}
                    >
                      {" "}
                      {i.isAccountValid ? (
                        <CheckIcon style={{ color: "green" }} />
                      ) : (
                        <ClearIcon style={{ color: "red" }} />
                      )}{" "}
                    </td>
                    <td
                      data-label={`${textData.Students.Table.tableEntries[4]}`}
                    >
                      {" "}
                      {i.totalLogins}{" "}
                    </td>
                    <td
                      data-label={`${textData.Students.Table.tableEntries[5]}`}
                    >
                      {" "}
                      {i.ActiveLogins}{" "}
                    </td>
                    <td
                      data-label={`${textData.Students.Table.tableEntries[6]}`}
                    > <a href={`/studentdescription/${i._id}`}>
                      <p>
                        <RemoveRedEyeIcon />{" "}
                     </p>
                      </a> </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
