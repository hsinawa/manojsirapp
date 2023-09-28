import axios from "axios";

const Test_Req = "Test_Req";
const Test_Suc = "Test_Suc";
const Test_Fail = "Test_Fail";
const Test_API = "/api/test";

export const TestAddAction = (data) => (dispatch) => {
  dispatch({ type: Test_Req });
  axios
    .post(`${Test_API}/addTest`, data)
    .then((res) => {
      dispatch({ type: Test_Suc });
     window.location.href='/admin/checktest'
    })
    .catch((err) => {
      dispatch({ type: Test_Fail, payload: err });

      window.location.href = "/error";
    });
};

const GetTest_Req = "GetTest_Req";
const GetTest_Suc = "GetTest_Suc";
const GetTest_Fail = "GetTest_Fail";

export const GetAllTestAction = () => (dispatch) => {
  dispatch({ type: GetTest_Req });
  axios
    .get(`${Test_API}/getall`)
    .then((res) => {
      dispatch({ type: GetTest_Suc, payload:res.data });
     
    })
    .catch((err) => {
      dispatch({ type: GetTest_Fail, payload: err });

      window.location.href = "/error";
    });
};