import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTestAction } from "../../Actions/testAction";
import {GetAllTestReducer} from '../../Reducers/testReducer'


//MUI
import AddIcon from "@mui/icons-material/Add";
import { CircularProgress } from "@mui/material";

//Static
import "../../Styles/Calendar.css";
import TestCard from "../../Component/TestCard";


const TestAdminList = () => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(GetAllTestAction())
    } , [dispatch] )

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
     
      {tests&&tests.map(i=>{
         return <TestCard i={i} /> 
     })}
         
   


    </div>
  );
};

export default TestAdminList;
