import axios from "axios";

const Rev_Req = "Rev_Req";
const Rev_Suc = "Rev_Suc";
const Rev_Fail = "Rev_Fail";
const Rev_API = "/api/reviews";

export const ReviewAddAction = (data) => (dispatch) => {
  dispatch({ type: Rev_Req });
  axios
    .post(`${Rev_API}/addReview`, data)
    .then((res) => {
      dispatch({ type: Rev_Suc });
      window.location.href = "/success";
    })
    .catch((err) => {
      dispatch({ type: Rev_Fail, payload: err });

      window.location.href = "/error";
    });
};