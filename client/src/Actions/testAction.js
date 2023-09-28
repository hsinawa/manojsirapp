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
     
    })
    .catch((err) => {
      dispatch({ type: Test_Fail, payload: err });

      window.location.href = "/error";
    });
};
