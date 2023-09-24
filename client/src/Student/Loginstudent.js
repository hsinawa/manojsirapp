import React, {useState} from 'react';
import '../Styles/studentStyle.css';
import Button from '@mui/material/Button';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CircularProgress, TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from 'react-redux';
import { StudentLoginAction } from '../Actions/studentAction';
import logo from "../Images/logo.jpg";
import {StudentLoginReducer} from '../Reducers/studentReducer'

const InputStyle = {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "12px",

    buttonStyle:{
      width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "12px",
    }
  };



const StudentLogin = () => {
  const student = localStorage.getItem("student");
  if (student) {
    window.location.href = "/student";
  }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const {loading,error} = useSelector(state=>state.StudentLoginReducer)

    if(error)
    {
      document.getElementById('error').innerHTML = `Invalid Credentials`
    }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

const dispatch = useDispatch()
    const LoginStudent = (e) =>{
        e.preventDefault()
        const user = {
            email:email,
            password:password
        }
        dispatch(StudentLoginAction(user))
    }
    return(
        <div id='studentform' >
<br/><br/>
            <section className="formbox" >
              <img  src={logo} alt='logo' style={{
                width:'33%'
              }} />
                <form onSubmit={LoginStudent} >
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


                <Button variant="outlined" sx={InputStyle.buttonStyle} type='submit' value='submit' > {
             loading?(<CircularProgress/>):('LOGIN')
          } </Button>
          <br/>
          
          <p id='error' style={{color:'red'}} ></p>
          <br/>
                </form>
             </section>   
            
        </div>
    )
}

export default StudentLogin