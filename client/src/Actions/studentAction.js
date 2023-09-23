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
      window.location.href = "/student";
    })
    .catch((err) => {
      dispatch({ type: `${StudentRegisterFail}`, payload: err });
    });
};