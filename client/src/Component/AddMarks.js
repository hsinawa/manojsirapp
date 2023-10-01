import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { UpdateMarksAction } from "../Actions/testAction";
import Button from "@mui/material/Button";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  centerButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
}));



const AddResultsTest = ({ i, tid }) => {
  const classes = useStyles();
  const [data, setData] = useState(i[0]?.students);
  const handleMarksChange = (event, index) => {
    const { name, value } = event.target;
    const updatedData = [...data];

    updatedData[index] = { ...updatedData[index], [name]: value };
    updatedData[index] = { ...updatedData[index], ["TotalMarks"]: i[0]?.MaxMarks };
    updatedData[index] = {
      ...updatedData[index],
      ["PercentageObtained"]: Math.floor(
        (parseInt(updatedData[index].MarksScored) /
          updatedData[index].TotalMarks) *
          100
      ),
    };

    setData(updatedData);
  };

  
  const dispatch = useDispatch();

  const ONSubmitMarks = (e) => {
    e.preventDefault();
    dispatch(UpdateMarksAction({ data, tid }));
  };
var cnt = 0;
  return (
    <div>
      <form onSubmit={ONSubmitMarks}>
        <div className="marks-container">
          <h2 className="marks-title">Marks Input</h2>
          <table className="marks-table">
            <thead>
              <tr>
              <th>S.NO</th>
                <th>Name</th>
                <th>School </th>
                <th>Marks Scored</th>
                <th>Percentage </th>
              </tr>
            </thead>
            <tbody>
              {data.map((person, index) => (
                <tr key={index} className="marks-row">
                   <td>{++cnt}</td>
                  <td>{person.NameOfStudent}</td>
                  <td>{person.SchoolName}</td>
                  <td>
                    <TextField
                      id="outlined-basic"
                      label="Marks"
                      variant="outlined"
                      type="number"
                      name="MarksScored"
                      value={person.MarksScored}
                      onChange={(e) => handleMarksChange(e, index)}
                      className="marks-input"
                      InputProps={{
                        inputProps: {
                          maxLength: i[0]?.MaxMarks,
                        },
                      }}
                    />
                  </td>
                  <td>
                    {Math.floor(
                      (parseInt(person.MarksScored) / i[0]?.MaxMarks) * 100
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br/> <br/>
        <div className={classes.centerButton}>
          <br/>
      <Button
        variant="contained"
        value="submit"
        type="submit"
        style={{
          backgroundColor: '#7CB9E8',
          width: '35%',
          fontSize: '20px',
        }}
      >
        Add Now
      </Button>
    </div>
      </form>
    </div>
  );
};

export default AddResultsTest;
