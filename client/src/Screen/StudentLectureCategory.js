import React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { GetLecturesByClassAction } from '../Actions/lectureAction';
import {GetAllLectureReducer} from '../Reducers/lectureReducer'
import { Alert, CircularProgress } from '@mui/material';
import LectureCard from '../Component/LectureCard';


//MUI
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StudentLectureCategory = () => {
    const {subject} = useParams();
    const stand = JSON.parse(localStorage.getItem('student')).standard
    const dispatch = useDispatch()

    React.useEffect( ()=>{
        dispatch(GetLecturesByClassAction({stand, subject}))
    } , [dispatch] )

    const {loading,lectures, error} = useSelector(state=>state.GetAllLectureReducer)

    const groupedData = lectures?.reduce((result, current) => {
        const { chapterName, ...rest } = current;
        (result[chapterName] = result[chapterName] || []).push(rest);
        return result;
      }, {});
      
    var IterativeData = Object.entries(groupedData)



    return(
        <div> 
           {loading&&(<CircularProgress/>)}
           {error&&(<Alert severity="error"> OOPS! Something Went Wrong </Alert>)}
           {
               IterativeData&&IterativeData?.map(i=>{
                   return       <Accordion style={{
                       width:'90%',
                       marginLeft:'auto', marginRight:'auto'
                   }} >
                   <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                   >
                     <Typography> {i[0]} </Typography>
                   </AccordionSummary>
                   {
                       i[1]?.map((j,key)=>{
                           return <LectureCard i={j} key={key} />
                       })
                   }
                   <AccordionDetails>
                    
                   </AccordionDetails>
                 </Accordion>
               })
           }
          
        </div>
    )
}

export default StudentLectureCategory