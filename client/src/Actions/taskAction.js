import axios from "axios";

const Task_Req = "Task_Req";
const Task_Suc = "Task_Suc";
const Task_Fail = "Task_Fail";
const Task_API = "/api/task";

export const TaskAddAction = (data) => (dispatch) => {
  dispatch({ type: Task_Req });
  axios
    .post(`${Task_API}/addtask`, data)
    .then((res) => {
      dispatch({ type: Task_Suc });
      alert("Added Successfully");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: Task_Fail, payload: err });

      window.location.href = "/error";
    });
};

export const GetAllTaskById = (data) => (dispatch) => {
  dispatch({ type: Task_Req });
  axios
    .post(`${Task_API}/getall2`, data)
    .then((res) => {
      dispatch({ type: Task_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: Task_Fail, payload: err });
    });
};

export const GetAllTaskById2 = (data) => (dispatch) => {
  dispatch({ type: Task_Req });
  axios
    .post(`${Task_API}/getall2`, data)
    .then((res) => {
      dispatch({ type: Task_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: Task_Fail, payload: err });
    });
};

const TaskUpdate_Req = "TaskUpdate_Req";
const TaskUpdate_Suc = "TaskUpdate_Suc";
const TaskUpdate_Fail = "TaskUpdate_Fail";
export const UpdateTaskByIdAction = ({id,status}) => (dispatch) => {
  dispatch({ type: TaskUpdate_Req });
  axios
    .post(`${Task_API}/update`, {id,status})
    .then((res) => {
      dispatch({ type: TaskUpdate_Suc, payload: res.data });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: TaskUpdate_Fail, payload: err });
      window.location.href = "/error";
    });
};
