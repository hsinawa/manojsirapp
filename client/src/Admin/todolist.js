import React, { useState } from "react";
import "./todo.css";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useDispatch, useSelector } from "react-redux";
import Loader2 from "../Component/Loader";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TextField from "@mui/material/TextField";
import {
  GetAllTaskById,
  TaskAddAction,
  UpdateTaskByIdAction,
} from "../Actions/taskAction";
import { AddTaskReducer, GetTaskReducer } from "../Reducers/taskReducer";
import { CircularProgress } from "@mui/material";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DoneIcon from "@mui/icons-material/Done";

function TaskComponent({ i }) {
  const dispatch = useDispatch();
  const id = i._id;
  const status = i.status;

  return (
    <div>
      <div
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "15px",
          borderRadius: "12px",
          textAlign: "left",
          paddingLeft: "5%",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      >
        {i.status ? (
          <div style={{ color: "green", fontSize: "30px", fontWeight: "bold" }}>
            <DoneIcon style={{ verticalAlign: "-3px", fontSize: "30px" }} />{" "}
            Completed
          </div>
        ) : (
          <div style={{ color: "red", fontSize: "30px", fontWeight: "bold" }}>
            <PendingActionsIcon
              style={{ verticalAlign: "-3px", fontSize: "30px" }}
            />{" "}
            Pending
          </div>
        )}

        <hr />
        <h4 style={{ fontSize: "27px" }}>
          {" "}
          {i.name} :{" "}
          <span
            style={{
              color: "#888888",
              fontSize: "22px",
              fontWeight: "normal",
              marginTop: "25px",
            }}
          >
            {" "}
            {i.comment}{" "}
          </span>{" "}
        </h4>
        <hr />
        <br />
        <Button
          variant="outlined"
          style={{ width: "100%", marginBottom: "10px" }}
          onClick={(e) => {
            dispatch(UpdateTaskByIdAction({ id, status }));
          }}
        >
          {" "}
          {i.status ? <p>Move to Pending</p> : <p>Complete</p>}{" "}
        </Button>
      </div>
    </div>
  );
}

const ToDoList = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));

  var totaltasks = 0;
  var completed = 0;

  var todaysdate = new Date();
  const [open, setOpen] = React.useState(false);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 33,
    borderRadius: 12,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? "100" : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundImage:
        theme.palette.mode === "light"
          ? "linear-gradient(90deg, rgba(59, 221, 221, 1) 37%, rgba(2, 54, 168, 1) 100%)"
          : "#308fe8",
    },
  }));

  const [name, setname] = useState("");
  const [comment, setcomment] = useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const dispatch = useDispatch();
  const AddTask = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      comment: comment,
      _id: admin._id,
      cdate: selectedDate,
    };

    dispatch(TaskAddAction(data));
  };
  const { loading } = useSelector((state) => state.AddTaskReducer);

  React.useEffect(() => {
    const data = {
      _id: admin._id,
      date: selectedDate,
    };

    dispatch(GetAllTaskById(data));
  }, [dispatch]);
  const { loadingtask, tasks } = useSelector((state) => state.GetTaskReducer);

  if (tasks) {
    tasks?.map((i) => {
      if (i.status) {
        completed++;
      }

      totaltasks++;
    });
  }

  var ratio = (completed / totaltasks) * 100;

  return (
    <div id="parent">
      <div>
        <h3> Hello, </h3>
      </div>
      <div>
        <h3 style={{ color: "#B8B8B8" }}>
          {" "}
          &nbsp; {admin.name} {admin.lname}{" "}
        </h3>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
        style={{ float: "left" }}
      >
        <CalendarMonthIcon style={{ verticalAlign: "-3px" }} /> Add Task
      </Button>
      &nbsp; &nbsp;{" "}
      <Button
        variant="outlined"
        color="neutral"
        style={{ float: "left", paddingLeft: "7px" }}
      >
        <a href="/admin/futureschedule" style={{ textDecoration: "none" }}>
          {" "}
          Check Future Schedule{" "}
        </a>
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: "80%",
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.surface",
            }}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Add New Task
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <form onSubmit={AddTask}>
              <div className="calendar-container">
                <div>
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    className="react-calendar"
                  />
                </div>
              </div>
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                autoComplete="off"
                type="text"
                required
                style={{
                  width: "100%",
                  marginTop: "10x",
                }}
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />

              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Comment"
                variant="outlined"
                autoComplete="off"
                type="text"
                required
                style={{
                  width: "100%",
                  marginTop: "10x",
                }}
                value={comment}
                onChange={(e) => {
                  setcomment(e.target.value);
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
                  color: "white",
                  fontSize: "20px",
                  marginRight: "auto",
                }}
              >
                {loading ? <Loader2 /> : <p>Add Task</p>}
              </Button>
            </form>
          </Typography>
        </Sheet>
      </Modal>
      <br />
      <br />
      <br />
      <section className="backgroundblack">
        <h5> {todaysdate?.toString().substring(0, 15)} </h5>
        <h4 style={{ fontSize: "20px", color: "#B8B8B8" }}>
          {" "}
          Today's Progress{" "}
        </h4>

        <br />
        <br />
        <br />
        <h4 style={{ fontSize: "20px", color: "#A0A0A0" }}>
          {" "}
          {completed} / {totaltasks} Tasks{" "}
        </h4>
        <h2>
          {" "}
          {tasks?.length > 0 ? (
            <span> {Math.floor(ratio)} % Completed </span>
          ) : (
            <span>NO TASK</span>
          )}
        </h2>
        <BorderLinearProgress
          variant="determinate"
          value={ratio}
          className="progress-bar"
        />
      </section>
      <br />
      <br />
      <br />
      <br />
      {loadingtask && <CircularProgress />}
      {tasks &&
        tasks.map((i) => {
          return <TaskComponent i={i} />;
        })}
      <br />
      <br />
    </div>
  );
};

export default ToDoList;
