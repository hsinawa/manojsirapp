//Firebase
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../firebase";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { resultAddAction, resultGetAction } from "../Actions/resultAction";
import { GetAllresultReducer } from "../Reducers/resultReducer";
import { CircularProgress } from "@mui/material";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const StyleMid = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
};

function ResultGrid({ o }) {
  const styleComponent = {
    marginTop: "70px",
    borderRadius: "12px",
    padding: "15px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    centerAlign: {
      width: "85%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };
  return (
    <div style={styleComponent}>
      <a
        href={`${o.resultURL}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Box sx={{ flexGrow: 1 }} style={styleComponent.centerAlign}>
          <Grid container spacing={2} style={styleComponent.centerAlign}  >
            <Grid item xs={3} style={styleComponent.centerAlign} style={{float:'left'}} >
              <FormatListNumberedIcon
                style={{
                  fontSize: "40px",
                  float: "left",
                  verticalAlign: "4px",
                }}
              /> 
            </Grid>
            <Grid item xs={9} style={styleComponent.centerAlign}>
              <div style={{ textAlign:'center' }}>
                <h4 style={{ fontSize: "23px" }}> {o.name} </h4>
                <p style={{ fontSize: "18px", color: "#888888" }}>
                Class   {o.standard}
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </a>
    </div>
  );
}

const ResultScreenPage = () => {
  const [pdfUpload, setpdfUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [resultURL, setresultURL] = useState("");
  const [name, setname] = useState("");
  const [standard, setstandard] = useState("");
  const admin = localStorage.getItem("admin");
  const imagesListRef = ref(storage, "result/");
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

  useEffect(() => {
    dispatch(resultGetAction());
  }, [dispatch]);

  const { loading, results, error } = useSelector(
    (state) => state.GetAllresultReducer
  );

  return (
    <React.Fragment>
      {admin && (
        <div
          style={{
            padding: "10px",
            borderRadius: "12px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
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
            <InputLabel id="demo-simple-select-label">
              Select Standard
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={standard}
              label="Standard"
              style={StyleMid}
              onChange={(e) => {
                setstandard(e.target.value);
              }}
            >
              <MenuItem value={'IX'}>9</MenuItem>
              <MenuItem value={'X'}>10</MenuItem>
              <MenuItem value={'XI'}>11</MenuItem>
              <MenuItem value={'XII'}>12</MenuItem>
            </Select>
            <br /> <br />
            <input
              type="file"
              onChange={(event) => {
                setpdfUpload(event.target.files[0]);
              }}
            />
            <br />
            <br />
            <Button type="submit" value="submit" variant="contained">
              Upload
            </Button>
          </form>
        </div>
      )}

      {loading && <CircularProgress />}
      {results &&
        results.map((i,key) => {
          return <ResultGrid o={i} key={key} />;
        })}
    </React.Fragment>
  );
};

export default ResultScreenPage;
