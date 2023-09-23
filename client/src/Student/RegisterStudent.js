import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import "../Styles/studentStyle.css";
import {RegisterStudentAction} from '../Actions/studentAction';
import {RegisterStudentReducer} from '../Reducers/studentReducer'

//MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import Loader2 from "../Component/Loader";

const InputStyle = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "12px",
};

const RegisterStudent = () => {
  const student = localStorage.getItem("student");
  if (student) {
    window.location.href = "/student";
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [standard, setStandard] = useState(9);
  const [schoolName, setSchoolName] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showPassword1, setShowPassword1] = React.useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  const {loading,error} = useSelector(state=>state.RegisterStudentReducer)
  

  if(error)
  {
    document.getElementById('error').innerHTML = `Email Already Registered`
  }

  const RegisterStudent = (event) => {
    event.preventDefault();
    
    const user = {
        name: name,
        email: email,
        password: password,
        contactnumber: contactnumber,
        standard: standard,
        schoolName: schoolName,
      };


    //   alert(user)
    if(cpassword===password)
    {
        dispatch( RegisterStudentAction(user) )

          
    }
    else{
        document.getElementById('passwords').innerHTML = `Passwords Didn't Match`
    }

   

    
  };

  return (
    <div id="studentform">
      <section className="formbox">
        <form onSubmit={RegisterStudent}>
          <TextField
            id="outlined-basic-name"
            label="Enter Name"
            variant="outlined"
            sx={InputStyle}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic-email"
            label="Enter Email"
            variant="outlined"
            sx={InputStyle}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{
                pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}", 
              }}
          />

          <TextField
            id="outlined-basic-contactnumber"
            label="Enter Contact Number"
            variant="outlined"
            sx={InputStyle}
            required
            inputProps={{ maxLength: 12, minLength: 10 }}
            value={contactnumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />

          <TextField
            id="outlined-basic-schoolname"
            label="Enter School Name"
            variant="outlined"
            sx={InputStyle}
            required
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />

          <FormControl sx={InputStyle}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl sx={InputStyle}>
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword1 ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword1}
                    onMouseDown={handleMouseDownPassword1}
                    edge="end"
                  >
                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
              value={cpassword}
              onChange={(e) => setcPassword(e.target.value)}
            />
          </FormControl>

          <FormControl sx={InputStyle}>
            <InputLabel id="demo-simple-select-label">Standard</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={standard}
              label="Standard"
              onChange={(e) => {
                setStandard(e.target.value);
              }}
            >
              <MenuItem value={9}>IX</MenuItem>
              <MenuItem value={10}>X</MenuItem>
              <MenuItem value={11}>XI</MenuItem>
              <MenuItem value={12}>XII</MenuItem>
            </Select>
          </FormControl>
          <br/><br/>
          <Button variant="outlined" sx={InputStyle} type='submit' value='submit' > {
              loading?(<Loader2/>):'Register'
          } </Button>
          <br/><br/>
          <p id='passwords' style={{color:'red'}} ></p>
          <p id='error' style={{color:'red'}} ></p>
        
        </form>
      </section>
    </div>
  );
};

export default RegisterStudent;
