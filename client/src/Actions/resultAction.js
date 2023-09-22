import axios from "axios";

const Result_Req = "Result_Req";
const Result_Suc = "Result_Suc";
const Result_Fail = "Result_Fail";
const Result_API = "/api/results";

export const resultAddAction = (data) => (dispatch) => {
   
  dispatch({ type: Result_Req });
  axios
    .post(`${Result_API}/addresult`, data)
    .then((res) => {
      dispatch({ type: Result_Suc });
      alert("Added Successfully");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: Result_Fail, payload: err });

      window.location.href = "/error";
    });
};



export const resultGetAction = () => (dispatch) => {
  dispatch({ type: Result_Req });
  axios
    .get(`${Result_API}/getall`)
    .then((res) => {
      dispatch({ type: Result_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: Result_Fail, payload: err });
    });
};
