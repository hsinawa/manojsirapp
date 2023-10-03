import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StudentGETDescriptionAction,
  StudentUpdateProfileAction
} from "../Actions/studentAction";
import { GetDescriptionStudentsReducer } from "../Reducers/studentReducer";

import textData from '../Static/staticText.json'


//MUI & Design
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "../Styles/studentStyle.css";


const Styles = {
    Box: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10px",
    },
    TextF: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10px",
      }
  };

const EditStudents = () => {
    const dispatch = useDispatch();

  const student = JSON.parse(localStorage.getItem("student"));

  const studentid = student._id;

  useEffect(() => {
    dispatch(StudentGETDescriptionAction({ studentid }));
  }, [dispatch]);

  const { loading, students, error } = useSelector(
    (state) => state.GetDescriptionStudentsReducer
  );


  const [name,setName] = useState('')
  const [stand, setStandard] = useState('')
  const [email, setEmail] = useState('')
  const [schoolName, setSchoolName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  useEffect(()=>{
      if(students){
          setName(students[0]?.name)
          setStandard(students[0]?.standard)
          setEmail(students[0]?.email)
          setSchoolName(students[0]?.schoolName)
          setContactNumber(students[0]?.contactnumber)
      }
      else{
        dispatch(StudentGETDescriptionAction({ studentid }));
      }
  },[dispatch, students])


  const UpdateProfile = (e)=>{
      e.preventDefault()

      const AccountStatus = {
          email:email,
          schoolName:schoolName,
          contactNumber:contactNumber,
          stand:stand
      }

      dispatch(StudentUpdateProfileAction({AccountStatus, studentid}))

  }

    return(
        <div>
           {loading && <CircularProgress />}
      {error && <Alert severity="error">OOPS! Something Went Wrong</Alert>}

      <section className='formbox' style={Styles.Box}  >
          <form onSubmit={UpdateProfile} >
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md ={6}  style={Styles.TextF} >
        <TextField id="outlined-basic" label="Name" variant="outlined"
         disabled
         
        
      value={name}
      onChange={ (e)=>{ setName(e.target.value) } }
      style={Styles.TextF}
      />
        </Grid>

        <Grid item xs={12} md ={6}  style={Styles.TextF} >
        <TextField id="outlined-basic" label="School Name" variant="outlined"
        style={Styles.TextF}
      value={schoolName}
      onChange={ (e)=>{ setSchoolName(e.target.value) } }
      />
        </Grid>


        <Grid item xs={12} md ={6}  style={Styles.TextF} >
        <TextField id="outlined-basic" label="Email" variant="outlined"
        style={Styles.TextF}
      value={email}
      onChange={ (e)=>{ setEmail(e.target.value) } }
      />
        </Grid>

        <Grid item xs={12} md ={6}  style={Styles.TextF} >
        <TextField id="outlined-basic" label="Contact Number" variant="outlined"
         style={Styles.TextF}
      value={contactNumber}
      onChange={ (e)=>{ setContactNumber(e.target.value) } }
      />
        </Grid>
     
      
      </Grid>
    </Box>
   
<br/><br/>
      <FormControl sx={{ width: "95%" }}>
            <InputLabel id="demo-simple-select-label">Class</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={stand}
              onChange={(e) => {
                setStandard(e.target.value);
              }}
              label="Class"
            >
              <MenuItem value={9}>IX</MenuItem>
              <MenuItem value={10}>X</MenuItem>
              <MenuItem value={11}>XI</MenuItem>
              <MenuItem value={12}>XII</MenuItem>
              
            </Select>
          </FormControl>


          <br/><br/>
          <Button
                      variant="container"
                      style={{
                          backgroundColor:'#1b5583',
                          color:'white',
                          width:'95%',
                          marginLeft: "auto",
                          marginRight: "auto",
                      }}
                    type='submit'
                    value='submit'
                    >
                     Update
                    
                    </Button>
          </form>
    
          </section>
<br/><br/>
<Alert severity="info" style={Styles.Box} >
    {textData.Messages.passreset}
</Alert>

  
        </div>
    )
}

export default EditStudents