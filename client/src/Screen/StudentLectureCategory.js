import React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { GetLecturesByClassAction } from '../Actions/lectureAction';

const StudentLectureCategory = () => {
    const {subject} = useParams();
    const stand = JSON.parse(localStorage.getItem('student')).standard
    const dispatch = useDispatch()

    React.useEffect( ()=>{
        dispatch(GetLecturesByClassAction({stand, subject}))
    } , [dispatch] )

    return(
        <div> 
            This is all bout category {stand} { subject}
        </div>
    )
}

export default StudentLectureCategory