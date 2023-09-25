import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button";
import { AdminLoginAction } from '../Actions/adminAction';
import {LoginAdminReducer} from '../Reducers/adminReducer'
import Loader2 from '../Component/Loader';

const AdminLogin = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const dispatch = useDispatch()
    const adminLogin = (e) =>{
        e.preventDefault()
        const admin = {
            email:email,
            password:password
        }

        dispatch(AdminLoginAction(admin))
    }

    const loginreducer = useSelector((state) => state.LoginAdminReducer);

    const { loading, error } = loginreducer;
    React.useEffect(() => {
        if (localStorage.getItem("admin") ) {
          window.location.href = "/admin";
        }
      }, []);
    
    return(
        <div>
          

<form onSubmit={adminLogin} className='companybox' style={{width:'90%', marginLeft:'auto', marginRight:'auto', marginTop:'5%'}} >
<br/>
<TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    autoComplete="off"
                    type="text"
                    required
                    value={email}
                    style={{
                      width: "85%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />

<br/><br/>

<OutlinedInput   required
                    value={password}
                    style={{
                      width: "85%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
          />
<br/>

<Button
              variant="contained"
              value="submit"
              type="submit"
              sx={{
                marginTop: "3%",
                borderRadius: "12px",
                marginLeft: "auto",
                width: "85%",
                marginRight: "auto",
                backgroundColor: "#002D62",
              }}
            >
             {loading? (<Loader2/>):(<p>LOGIN</p>) }
            </Button>


            <br/>
<br/>
</form>

        </div>
    )
}

export default AdminLogin