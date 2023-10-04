import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentPasswordUpdateAction } from "../Actions/studentAction";
import {UpdatePasswordStudentReducer} from '../Reducers/studentReducer'

//MUI
import Alert from "@mui/material/Alert";
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
import Button from '@mui/material/Button';

import logo from "../Images/logo.jpg";

const InputStyle = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "12px",

  buttonStyle: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "12px",
  },
};

const ResetPasswordDetails = () => {
  const dispatch = useDispatch();
  const [newPassword, setnewPassword] = useState("");
  const [conf, setconf] = useState("");

  const [passerr, setpasserr] = useState(false);

  const details = JSON.parse(sessionStorage.getItem("Details"));
  const studentphoneNumber = details?.toString();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const UpdatePass = (e) => {
    e.preventDefault();
    if (newPassword === conf) {
      dispatch(
        StudentPasswordUpdateAction({ studentphoneNumber, newPassword })
      );
    } else {
      setpasserr(true);
    }
  };


  const {loading,success} = useSelector(state=>state.UpdatePasswordStudentReducer)

  return (
    <div>
      <section
        style={{ marginLeft: "auto", marginRight: "auto", width: "80%" }}
        className="formbox"
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "33%",
          }}
        />

        <form onSubmit={UpdatePass}>
        <FormControl sx={InputStyle}>
            <InputLabel htmlFor="outlined-adornment-password">
             Enter Password
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
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
            />
          </FormControl>

          <br />
         

          <FormControl sx={InputStyle}>
            <InputLabel htmlFor="outlined-adornment-password">
            Enter Confirm Password
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
              label="Confirm Password"
              value={conf}
              onChange={(e) => setconf(e.target.value)}
            />
          </FormControl>

          <Button
            variant="outlined"
            sx={InputStyle.buttonStyle}
            type="submit"
            value="submit"
          >
           
            {
             loading?(<CircularProgress/>):('Update')
          } 
          
          </Button>
        </form>

        <br />
        <br />
        {passerr && <Alert severity="error">Passwords Didn't Match</Alert>}
        {success&&(<Alert severity="success">Password Updated! Please login</Alert>)}
      </section>
    </div>
  );
};

export default ResetPasswordDetails;
