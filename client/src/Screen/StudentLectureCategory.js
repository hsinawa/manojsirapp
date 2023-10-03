import React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { GetLecturesByClassAction } from '../Actions/lectureAction';
import {GetAllLectureReducer} from '../Reducers/lectureReducer'
import { Alert, CircularProgress } from '@mui/material';
import LectureCard from '../Component/LectureCard';

const StudentLectureCategory = () => {
    const {subject} = useParams();
    const stand = JSON.parse(localStorage.getItem('student')).standard
    const dispatch = useDispatch()

    React.useEffect( ()=>{
        dispatch(GetLecturesByClassAction({stand, subject}))
    } , [dispatch] )

    const {loading,lectures, error} = useSelector(state=>state.GetAllLectureReducer)
console.log('Lectures are', lectures)
    return(
        <div> 
           {loading&&(<CircularProgress/>)}
           {error&&(<Alert severity="error"> OOPS! Something Went Wrong </Alert>)}
           {lectures&&lectures.map((i,key)=>{
               return <LectureCard i={i} key={key} />
           })}
        </div>
    )
}

export default StudentLectureCategory