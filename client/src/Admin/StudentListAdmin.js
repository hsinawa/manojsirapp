import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StudentGETAction } from '../Actions/studentAction';
import {GetAllStudentsReducer} from '../Reducers/studentReducer';
import textData from '../Static/staticText.json';


//MUI Icons
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const StudentList = () => {
    const dispatch = useDispatch();

    useEffect(  ()=>{
        dispatch(StudentGETAction())
    } , [dispatch] )

    const {loading,students,error} = useSelector(state=>state.GetAllStudentsReducer)

var cnt = 0 ;
    return(
        <div style={{marginBottom:'20%'}} >

{loading && <CircularProgress />}
      {error && <h2 style={{ color: "red" }}>OOPS! Something went wrong</h2>}

      <table class="table">
        <thead>
           {
               textData.Students.Table.tableEntries?.map(j=>{
                  return <th> {j} </th>
               })
           }
         
        </thead>
        <tbody>
          {students &&
            students.map((i) => {
              return (
                <tr>
          <td data-label={`${textData.Students.Table.tableEntries[0]}`} > {++cnt} </td>
          <td data-label={`${textData.Students.Table.tableEntries[1]}`} > {i.name} </td>
          <td data-label={`${textData.Students.Table.tableEntries[2]}`} > {i.standard} </td>
          <td data-label={`${textData.Students.Table.tableEntries[3]}`} > {i.isAccountValid ? (<CheckIcon style={{color:'green'}} />):(<ClearIcon style={{color:'red'}} />) } </td>
          <td data-label={`${textData.Students.Table.tableEntries[4]}`} > {i.totalLogins} </td>
          <td data-label={`${textData.Students.Table.tableEntries[5]}`} > {i.ActiveLogins} </td>
          <td data-label={`${textData.Students.Table.tableEntries[6]}`} > <RemoveRedEyeIcon/> </td>

                </tr>
              );
            })}
        </tbody>
      </table>
            
        </div>
    )
}

export default StudentList