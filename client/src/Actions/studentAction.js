import axios from "axios";

const StudentRegisterReq = "StudentRegister/Req";
const StudentRegisterSuc = "StudentRegister/Suc";
const StudentRegisterFail = "StudentRegister/Fail";
const Student_API = "/api/students";

export const RegisterStudentAction = (user) => (dispatch) => {
  dispatch({ type: `${StudentRegisterReq}` });

  axios
    .post(`${Student_API}/register`, user)
    .then((res) => {
      dispatch({ type: `${StudentRegisterSuc}` });

      window.location.href = "/login";
    })
    .catch((err) => {
      console.log("The rror is", err);
      dispatch({ type: `${StudentRegisterFail}`, payload: err.message });
    });
};

const StudentLoginReq = "StudentLogin/Req";
const StudentLoginSuc = "StudentLogin/Suc";
const StudentLoginFail = "StudentLogin/Fail";

export const StudentLoginAction = (user) => (dispatch) => {
  dispatch({ type: StudentLoginReq });

  axios
    .post(`${Student_API}/login`, user)
    .then((res) => {
      dispatch({ type: StudentLoginSuc });

      localStorage.setItem("student", JSON.stringify(res.data));
      window.location.href = "/student";
    })
    .catch((err) => {
      dispatch({ type: StudentLoginFail, payload: err });
    });
};

const StudentGETReq = "StudentGET/Req";
const StudentGETSuc = "StudentGET/Suc";
const StudentGETFail = "StudentGET/Fail";

export const StudentGETAction = () => (dispatch) => {
  dispatch({ type: StudentGETReq });

  axios
    .get(`${Student_API}/getall`)
    .then((res) => {
      dispatch({ type: StudentGETSuc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: StudentGETFail, payload: err });
    });
};

export const StudentGETDescriptionAction =
  ({ studentid }) =>
  (dispatch) => {
    dispatch({ type: StudentGETReq });

    axios
      .post(`${Student_API}/GetDescription`, { studentid })
      .then((res) => {
        dispatch({ type: StudentGETSuc, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: StudentGETFail, payload: err });
      });
  };

export const StudentGetValidByClassAction =
  ({ standard }) =>
  (dispatch) => {
    dispatch({ type: StudentGETReq });

    axios
      .post(`${Student_API}/getValidByClass`, { standard })
      .then((res) => {
        dispatch({ type: StudentGETSuc, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: StudentGETFail, payload: err });
      });
  };

const UpdateStudent_Req = "UpdateStudent_Req";
const UpdateStudent_Suc = "UpdateStudent_Suc";
const UpdateStudent_Fail = "UpdateStudent_Fail";

export const StudentUpdateAction =
  ({ AccountStatus, studentid }) =>
  (dispatch) => {
    dispatch({ type: UpdateStudent_Req });
    axios
      .post(`${Student_API}/updateStatus`, { AccountStatus, studentid })
      .then((res) => {
        dispatch({ type: UpdateStudent_Suc, payload: res.data });
        alert("Updated");
        window.location.reload();
      })
      .catch((err) => {
        dispatch({ type: UpdateStudent_Fail, payload: err });
      });
  };



const StudentLogout_Req = 'StudentLogout_Req';
const StudentLogout_Suc = 'StudentLogout_Req';
const StudentLogout_Fail = 'StudentLogout_Fail';

export const StudentLogoutAction = ({studentid}) => (dispatch) => {
  dispatch({ type: StudentLogout_Req });

  axios
    .post(`${Student_API}/logout`, {studentid})
    .then((res) => {
      dispatch({ type: StudentLogout_Suc });

      localStorage.removeItem("student");
      window.location.href = "/";
    })
    .catch((err) => {
      dispatch({ type: StudentLogout_Fail, payload: err });
    });
};