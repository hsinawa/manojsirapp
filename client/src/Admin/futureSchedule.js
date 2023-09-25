import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "@mui/joy/Button";
import { GetAllTaskById2,UpdateTaskByIdAction } from "../Actions/taskAction";
import { GetTaskReducer } from "../Reducers/taskReducer";
import { CircularProgress } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

function TaskComponent({ i }) {

    const dispatch = useDispatch();
    const id = i._id
    const status = i.status

  return (
    <div>
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "15px",
          borderRadius: "12px",
          textAlign: "left",
          paddingLeft: "5%",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      >
       {i.status? ( <div style={{color:'green', fontSize:'30px', fontWeight:'bold'}} >
               <DoneIcon style={{verticalAlign:'-3px', fontSize:'30px'}} /> Completed
               </div>
               ):(
           <div style={{color:'red', fontSize:'30px', fontWeight:'bold'}} >
               <PendingActionsIcon style={{verticalAlign:'-3px', fontSize:'30px'}} /> Pending
               </div>
       ) }  

       <hr/> 
        <h4 style={{ fontSize: "27px" }}>
          {" "}
          {i.name} : <span style={{ color: "#888888", fontSize:'22px', fontWeight:'normal',  marginTop: "25px" }}> {i.comment} </span>{" "}
        </h4>
        <hr/>
        <br/>
      <Button variant='outlined'
      style={{width:'100%', marginBottom:'10px'}} 
      onClick={(e)=>{
          dispatch(UpdateTaskByIdAction({id,status}))
      }}
      >  {i.status? (<p>Move to Pending</p>):(<p>Complete</p>) }  </Button>
      </div>
     
    </div>
  );
}

const CheckFutureSchedule = () => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    var todaysdate = new Date();
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    
      const dispatch = useDispatch();
      const [selectedDate, setSelectedDate] = React.useState(new Date());
      
      React.useEffect(() => {
        const data = {
          _id: admin._id,
          date: selectedDate,
        };
    
        dispatch(GetAllTaskById2(data));
      }, [dispatch,selectedDate]);
      const { loadingtask, tasks } = useSelector((state) => state.GetTaskReducer);
      
    return(
        <div>
              <div className="calendar-container">
                <div   >
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    className="react-calendar"
                   
                  />
                </div>
              </div>

              {loadingtask&&(<CircularProgress/>)}
              {tasks&&tasks.map(i=>{
return <TaskComponent i={i} />
              })}
        </div>
    )
}

export default CheckFutureSchedule