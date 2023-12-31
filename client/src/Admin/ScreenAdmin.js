import React from 'react';
import './AdminStyle/AdminStyle.css';
import GridCard from '../Component/Cards';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import schedule from './AdminImages/schedule.avif';
import students from './AdminImages/students.avif';
import result from '../Images/results.png';
import test from './AdminImages/test.avif';
import youtube from './AdminImages/youtube.png';
import messages from './AdminImages/reviews.png';
import reviews from './AdminImages/rev2.png';
import trial from './AdminImages/trial.png';
import { LogOutAdmin } from '../Actions/adminAction';
import LogoutIcon from '@mui/icons-material/Logout';

const DashBoardGrid = [
    {
        heading:'Students List',
        image:students,
        text:'Check List of all students' ,
        link:'/admin/studentlist'
    } ,

    {
        heading:'Schedule',
        image:schedule,
        text:'Check and Add Future Schedule' ,
        link:'/admin/schedule'
    } ,
    {
        heading:'Result',
        image:result,
        text:'Check and Add Result' ,
        link:'results'
    } ,

    {
        heading:'Test',
        image:test,
        text:'See and Add Test' ,
        link:'/admin/checktest'
    } ,

    {
        heading:'Check Lectures',
        image:youtube,
        text:'See and Add Video Lectures' ,
        link:'/admin/lectures'
    } ,
    

    {
        heading:'Check Messages',
        image:messages,
        text:'Read Messages sent by Others' ,
        link:'/admin/messages'
    } ,
    {
        heading:'Check Reviews',
        image:reviews,
        text:'Read and verify Reviews' ,
        link:'/admin/reviews'
    } ,

    {
        heading:'Check Trail Classes',
        image:trial,
        text:'Check Future Trial Classes Booked ' ,
        link:'/admin/trialclass'
    } ,

   

]


const AdminScreen = () => {
    const admin = JSON.parse( localStorage.getItem('admin') )
    const dispatch = useDispatch()
    return(
        <div>
         <div id='studentform' style={{marginTop:'5%'}} >
            <h3 style={{textAlign:'left'}} > Professional Dashboard for {admin.name} </h3>

            
            <section className='threeGrid' >
                {
                    DashBoardGrid?.map((i,key)=>{
                        return <p key={key} > <a href={`${i.link}`} style={{textDecoration:'none'}} > <GridCard i ={ i} /> </a> </p>
                    })
                }
                </section>
         </div>

         <br/><br/> <br/><br/>
         <Button variant="outlined" variant="outlined" color="error"
         style={{width:'85%'}}
         
         onClick = { (e)=>{ dispatch(LogOutAdmin()) } } 

         > <LogoutIcon style={{ verticalAlign:'-6px', color:'red' }} /> LOGOUT ADMIN </Button>
        </div>
    )
}

export default AdminScreen