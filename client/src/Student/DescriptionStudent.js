import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { StudentGETDescriptionAction } from '../Actions/studentAction'

const DescriptionStudent = () => {
    const {studentid} = useParams()
    const dispatch = useDispatch()
    useEffect( ()=>{
        dispatch(StudentGETDescriptionAction({studentid}))
    } , [dispatch] )
    return(
        <div>
           This is student descr
        </div>
    )
}

export default DescriptionStudent;