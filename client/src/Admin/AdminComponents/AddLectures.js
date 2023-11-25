import React, { useState } from "react";
import { LecturesAddAction } from "../../Actions/lectureAction";
import { useDispatch } from "react-redux";

//Static
import textData from "../../Static/staticText.json";

//MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const StyleDesign = {
  widthDesign: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

const AddVideoLecture = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [standard, setStandard] = useState("");
  const [comment, setComment] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const dispatch = useDispatch();

  const AddData = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      link: link,
      standard: standard,
      comment: comment,
      subject: subject,
      chapter: chapter,
    };
    dispatch(LecturesAddAction(data));
  };

  return (
    <div
      style={{
        boxShadow: "5px 5px 10px #888888, -5px -5px 10px #888888",
      }}
    >
      <form onSubmit={AddData}>
        <br />

        <FormControl style={StyleDesign.widthDesign}>
          <InputLabel id="demo-simple-select-label">Standard</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={standard}
            label="Class"
            onChange={(e) => {
              setStandard(e.target.value);
            }}
          >
            <MenuItem value={"9"}>IX</MenuItem>
            <MenuItem value={"10"}>X</MenuItem>
            <MenuItem value={"11"}>XI</MenuItem>
            <MenuItem value={"12"}>XII</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />

        <FormControl style={StyleDesign.widthDesign}>
          <InputLabel id="demo-simple-select-label">Subject</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={subject}
            label="Subject"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          >
            <MenuItem value={"Physics"}>Physics</MenuItem>
            <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
            <MenuItem value={"Biology"}>Biology</MenuItem>
          </Select>
        </FormControl>

        <br />
        <br />
        {standard === "10" &&
          (subject === "Physics" ? (
            <FormControl style={StyleDesign.widthDesign}>
              <InputLabel id="demo-simple-select-label">Add Chapter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={chapter}
                label="Chapter"
                onChange={(e) => {
                  setChapter(e.target.value);
                }}
              >
                {textData.ClassXChapters.Physics.map((i) => {
                  return <MenuItem value={i}> {i} </MenuItem>;
                })}
              </Select>
            </FormControl>
          ) : subject === "Chemistry" ? (
            <FormControl style={StyleDesign.widthDesign}>
            <InputLabel id="demo-simple-select-label">Add Chapter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={chapter}
              label="Chapter"
              onChange={(e) => {
                setChapter(e.target.value);
              }}
            >
              {textData.ClassXChapters.Chemistry.map((i) => {
                return <MenuItem value={i}> {i} </MenuItem>;
              })}
            </Select>
          </FormControl>
          ) : (
            <FormControl style={StyleDesign.widthDesign}>
            <InputLabel id="demo-simple-select-label">Add Chapter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={chapter}
              label="Chapter"
              onChange={(e) => {
                setChapter(e.target.value);
              }}
            >
              {textData.ClassXChapters.Biology.map((i) => {
                return <MenuItem value={i}> {i} </MenuItem>;
              })}
            </Select>
          </FormControl>
          ))}
     {standard === "9" &&
          (subject === "Physics" ? (
            <FormControl style={StyleDesign.widthDesign}>
              <InputLabel id="demo-simple-select-label">Add Chapter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={chapter}
                label="Chapter"
                onChange={(e) => {
                  setChapter(e.target.value);
                }}
              >
                {textData.ClassIXChapters.Physics.map((i) => {
                  return <MenuItem value={i}> {i} </MenuItem>;
                })}
              </Select>
            </FormControl>
          ) : subject === "Chemistry" ? (
            <FormControl style={StyleDesign.widthDesign}>
            <InputLabel id="demo-simple-select-label">Add Chapter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={chapter}
              label="Chapter"
              onChange={(e) => {
                setChapter(e.target.value);
              }}
            >
              {textData.ClassIXChapters.Chemistry.map((i) => {
                return <MenuItem value={i}> {i} </MenuItem>;
              })}
            </Select>
          </FormControl>
          ) : (
            <FormControl style={StyleDesign.widthDesign}>
            <InputLabel id="demo-simple-select-label">Add Chapter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={chapter}
              label="Chapter"
              onChange={(e) => {
                setChapter(e.target.value);
              }}
            >
              {textData.ClassIXChapters.Biology.map((i) => {
                return <MenuItem value={i}> {i} </MenuItem>;
              })}
            </Select>
          </FormControl>
          ))}

        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Enter Name"
          fullWidth
          variant="outlined"
          autoComplete="off"
          type="text"
          required
          style={{
            width: "90%",
          }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Enter link"
          fullWidth
          variant="outlined"
          autoComplete="off"
          type="text"
          required
          style={{
            width: "90%",
          }}
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Enter Comment"
          fullWidth
          variant="outlined"
          autoComplete="off"
          type="text"
          required
          style={{
            width: "90%",
          }}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <br />
        <br />
        <Button
          variant="contained"
          value="submit"
          type="submit"
          style={{
            float: "left",
            backgroundColor: "#0C2340",
            width: "100%",
            marginLeft: "2%",
            fontSize: "20px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

const AddLectures = () => {
  const [add, setadd] = useState(false);
  return (
    <div>
      <section style={StyleDesign.widthDesign}>
        <AddVideoLecture />
        <br />
        <br />
      </section>
    </div>
  );
};

export default AddLectures;
