import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetALLLecturesClassAction } from "../../Actions/lectureAction";
import {GetAllLectureReducer} from '../../Reducers/lectureReducer';
import LectureCard from "../../Component/LectureCard";

//MUI
import AddIcon from "@mui/icons-material/Add";
import { CircularProgress } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";



const LectureList = () => {
  const dispatch = useDispatch();
  const [stand, setStandard] = useState("9");

  useEffect( ()=>{
    dispatch(GetALLLecturesClassAction({stand}))
} , [dispatch,stand] )

const {loading,lectures,error} = useSelector(state=>state.GetAllLectureReducer)
  return (
    <div>
      <a
        href="/admin/addLecture"
        style={{ textDecoration: "none", color: "#7CB9E8" }}
      >
        <AddIcon style={{ verticalAlign: "-6px" }} /> Add Lecture
      </a>
      <br />
      <br />
      <FormControl sx={{ width: "95%" }}>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={stand}
              onChange={(e) => {
                setStandard(e.target.value);
              }}
              label="Class"
            >
              <MenuItem value={9}>IX</MenuItem>
              <MenuItem value={10}>X</MenuItem>
              <MenuItem value={11}>XI</MenuItem>
              <MenuItem value={12}>XII</MenuItem>
              
            </Select>
          </FormControl>
          <br/><br/>
          {loading&&(<CircularProgress/>)}

          {lectures&&lectures.filter((val) => {
                if (stand == '') {
                  return val;
                } 
           
                 else if (val.standard==stand) {
                  return val;
                }
              }).map(i=>{
         return <LectureCard i={i} /> 
     })}
    </div>
  );
};

export default LectureList;
