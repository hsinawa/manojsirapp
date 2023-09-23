import React, {useState} from 'react';
import '../Styles/studentStyle.css';
import Button from '@mui/material/Button';
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
import { useDispatch } from 'react-redux';
import { StudentLoginAction } from '../Actions/studentAction';

const InputStyle = {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "12px",
  };

const StudentLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);

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

            <section className="formbox" >
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


                <Button variant="outlined" sx={InputStyle} type='submit' value='submit' > {
             'Login'
          } </Button>
                </form>
             </section>   
            
        </div>
    )
}

export default StudentLogin