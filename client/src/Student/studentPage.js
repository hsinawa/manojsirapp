import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StudentGETDescriptionAction } from '../Actions/studentAction'
import {GetDescriptionStudentsReducer} from '../Reducers/studentReducer'
import GridCard from '../Component/Cards'



//MUI & Design
import Alert from '@mui/material/Alert';
import '../Styles/studentStyle.css'

//Images
import physics from '../Images/physics.png'
import chemsitry from '../Images/chemistry.png'
import biology from '../Images/biology.png'


const SubjectBoard = [
    {
        heading:'Physics',
        image:physics,
        text:'Check all lectures of Physics Here' ,
        link:`/student/Physics`
    } ,

    {
        heading:'Chemistry',
        image:chemsitry,
        text:'Check all lectures of Chemistry Here' ,
        link:`/student/Chemistry`
    } ,
    {
        heading:'Biology',
        image:biology,
        text:'Check all lectures of Biology Here' ,
        link:`/student/Biology`
    } ,
]


const StudentPage = () => {
    const dispatch = useDispatch()

    const student = JSON.parse(localStorage.getItem('student'))
    
    const studentid = student._id
    
    useEffect( ()=>{
        dispatch(StudentGETDescriptionAction({studentid}))
    } , [dispatch] )

    const {loading, students, error} = useSelector(state=>state.GetDescriptionStudentsReducer)

    return(
        <div id="studentform" >
           
{loading&&(<CircularProgress/>)}
{error&&(<Alert severity="error">OOPS! Something Went Wrong</Alert>)}
{
    students&&(
<>
{students[0]?.isAccountValid?(
    <>
     <section className='threeGrid' >
                {
                    SubjectBoard?.map((i,key)=>{
                        return <p key={key} > <a href={`${i.link}`} style={{textDecoration:'none'}} > <GridCard i ={ i} /> </a> </p>
                    })
                }
                </section>
    </>
):(<>
<br/><br/><br/><br/>
    <Alert severity="info">Your Account is not Validated </Alert>
</>
)}
</>
    )
}
        </div>
    )
}

export default StudentPage