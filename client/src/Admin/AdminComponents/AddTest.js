import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StudentGetValidByClassAction } from '../../Actions/studentAction';
import {GetAllStudentsReducer} from '../../Reducers/studentReducer'


//MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddTest = () => {
    
    const dispatch = useDispatch();


    const {loading,students} = useSelector(state=>state.GetAllStudentsReducer)

    const [standard,setStandard] = useState()
    useEffect( ()=>{
        dispatch( StudentGetValidByClassAction({standard}) )
    },[dispatch, standard] )

    return(
        <div style={{width:'90%', marginLeft:'auto', marginRight:'auto'}} >

<FormControl fullWidth >
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
          
        </div>
    )
}

export default AddTest