import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTestAction } from '../Actions/testAction';
import TestCard from "../Component/TestCard";
import {GetAllTestReducer} from '../Reducers/testReducer'

const CheckTestScreen = () => {
    const dispatch = useDispatch();
    const student = JSON.parse(localStorage.getItem("student"));
    const stand = student?.standard?.toString()

    useEffect( ()=>{
        dispatch(GetAllTestAction({stand}))
    } , [dispatch] )

    const {loading,tests,error} = useSelector(state=>state.GetAllTestReducer)

    return(
        <div>
           {loading&&(<CircularProgress/>)}
           {tests&&tests.map(i=>{
         return <TestCard i={i} /> 
     })}
        </div>
    )
}

export default CheckTestScreen