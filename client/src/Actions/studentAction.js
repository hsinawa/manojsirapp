import axios from "axios";


const StudentRegisterReq = 'StudentRegister/Req';
const StudentRegisterSuc = 'StudentRegister/Suc';
const StudentRegisterFail = 'StudentRegister/Fail';
const Student_API = '/api/students'

export const RegisterStudentAction = (user) => (dispatch) => {
  dispatch({ type: `${StudentRegisterReq}` });

  axios
    .post(`${Student_API}/register`, user)
    .then((res) => {
      dispatch({ type: `${StudentRegisterSuc}` });
      localStorage.setItem("student", JSON.stringify(res.data));
      window.location.href = "/login";
    })
    .catch((err) => {
      console.log( 'The rror is', err)
      dispatch({ type: `${StudentRegisterFail}`, payload: err.message });
    });
};



const StudentLoginReq = 'StudentLogin/Req';
const StudentLoginSuc = 'StudentLogin/Suc';
const StudentLoginFail = 'StudentLogin/Fail';

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
     
      dispatch({ type: StudentRegisterFail, payload: err });
    });
};
