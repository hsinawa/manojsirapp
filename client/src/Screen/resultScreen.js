//Firebase
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import { storage } from "../firebase";
  
  import React, { useState, useEffect } from "react";
  import Button from "@mui/material/Button";
  import Grid from "@mui/material/Grid";
  import { Box } from "@mui/system";
  import TextField from "@mui/material/TextField";
  import { useDispatch, useSelector } from "react-redux";
  import { resultAddAction, resultGetAction } from "../Actions/resultAction";
  import {GetAllresultReducer} from '../Reducers/resultReducer'
  import { CircularProgress } from "@mui/material";
  import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
  
  function ResultGrid({o})
  {
      const styleComponent = {
          marginTop:'70px',
          borderRadius:'12px',
          padding:'15px',
          boxShadow:'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
          width:'60%',
          marginLeft:'auto',
          marginRight:'auto',
          centerAlign:{
              width:'85%',
              marginLeft:'auto',
              marginRight:'auto'
          }
  
          
  
      }
      return(
          <div style={styleComponent} >
              <a href={`${o.resultURL}`} style={{textDecoration:'none', color:'black'}} >
  <Box sx={{ flexGrow: 1 }} style={styleComponent.centerAlign} >
        <Grid container spacing={2} style={styleComponent.centerAlign}>
          <Grid item xs={3}  style={styleComponent.centerAlign}>
            <LibraryBooksIcon style={{fontSize:'45px', float:'right', verticalAlign:'6px'}} />
          </Grid>
          <Grid item xs={9} style={styleComponent.centerAlign}  >
              <div style={{float:'left'}}>
              <h4 style={{fontSize:'23px'}} > {o.name} </h4>
              <p style={{fontSize:'18px', color:'#888888'}}>{o.standard}</p>
                  </div>
              
  
            
          </Grid>
          
        </Grid>
      </Box>
      </a>
          </div>
      )
  }
  
  const ResultScreenPage = () => {
    const [pdfUpload, setpdfUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [resultURL, setresultURL] = useState("");
    const [name, setname] = useState("");
    const [standard, setstandard] = useState("");
    const admin = localStorage.getItem("admin");
    const imagesListRef = ref(storage, "pdf/");
    const dispatch = useDispatch();
    const AddResult = async (e) => {
      e.preventDefault();
  
      try {
        if (pdfUpload == null) return;
        const imageRef = ref(storage, `results/${pdfUpload.name}-${standard}`);
        const snapshot = await uploadBytes(imageRef, pdfUpload);
        const url = await getDownloadURL(snapshot.ref);
  
        setImageUrls((prev) => [...prev, url]);
        setresultURL(url);
  
        const data = {
          name: name,
          resultURL: url,
          standard: standard,
        };
  
        await dispatch(resultAddAction(data));
      } catch (error) {
        alert(error);
      }
    };
  
    useEffect( ()=>{
        dispatch(resultGetAction())
    },[dispatch] )
    
    const {loading,results,error} = useSelector(state=>state.GetAllresultReducer)
  
   
  
    return (
      <React.Fragment>
        {admin && (
          <div style={{
              padding:'10px', borderRadius:'12px', boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              width:'90%',
              marginLeft:'auto',
              marginRight:'auto'
          }} >
            <h3> Upload Results here </h3>
            <br />
            <form onSubmit={AddResult}>
              <TextField
                id="outlined-basic"
                label="Enter Name"
                variant="outlined"
                autoComplete="off"
                type="text"
                required
                value={name}
                style={{
                  width: "90%",
                }}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
  
              <br />
              <br />
  
              <TextField
                id="outlined-basic"
                label="Enter Standard"
                variant="outlined"
                autoComplete="off"
                type="text"
                required
                value={standard}
                style={{
                  width: "90%",
                }}
                onChange={(e) => {
                  setstandard(e.target.value);
                }}
              />
               <br/>  <br/> 
              <input
                type="file"
                onChange={(event) => {
                  setpdfUpload(event.target.files[0]);
                }}
              />
              <br/><br/>
  
              <Button
                type="submit"
                value="submit"
                variant="contained"
            
              >
                Upload
              </Button>
            </form>
          </div>
        )}
  
  {loading&&(<CircularProgress/>)}
  {results&& results.map(i=>{
      return <ResultGrid o = {i} />
  }) }
  
      </React.Fragment>
    );
  };
  
  export default ResultScreenPage;
  