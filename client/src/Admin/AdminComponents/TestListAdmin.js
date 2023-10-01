import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTestAction } from "../../Actions/testAction";
import {GetAllTestReducer} from '../../Reducers/testReducer'
import TestCard from "../../Component/TestCard";

//MUI
import AddIcon from "@mui/icons-material/Add";
import { CircularProgress } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

//Static
import "../../Styles/Calendar.css";



const TestAdminList = () => {
    const dispatch = useDispatch();
    const [stand, setStandard] = useState('9')
    useEffect( ()=>{
        dispatch(GetAllTestAction({stand}))
    } , [dispatch,stand] )

    const {loading,tests,error} = useSelector(state=>state.GetAllTestReducer)

  return (
    <div>
      <br />
      <br />
      <a
        href="/admin/addtest"
        style={{ textDecoration: "none", color: "#7CB9E8" }}
      >
        <AddIcon style={{ verticalAlign: "-6px" }} /> Add Test
      </a>
      <br /> <br />
      {loading&&(<CircularProgress/>)}

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
     
      {tests&&tests.filter((val) => {
                if (stand == '') {
                  return val;
                } 
           
                 else if (val.standard==stand) {
                  return val;
                }
              }).map(i=>{
         return <TestCard i={i} /> 
     })}
         
   


    </div>
  );
};

export default TestAdminList;
