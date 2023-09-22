import axios from "axios";

const TC_Req = "TC_Req";
const TC_Suc = "TC_Suc";
const TC_Fail = "TC_Fail";
const TC_API = "/api/trialclass";

export const TrailClassContactAction = (data) => (dispatch) => {
  dispatch({ type: TC_Req });
  axios
    .post(`${TC_API}/bookclass`, data)
    .then((res) => {
      dispatch({ type: TC_Suc });
      window.location.href = "/success";
    })
    .catch((err) => {
      dispatch({ type: TC_Fail, payload: err });

      window.location.href = "/error";
    });
};

export const GetAllTrailClass = () => (dispatch) => {
  dispatch({ type: TC_Req });
  axios
    .get(`${TC_API}/getall`)
    .then((res) => {
      dispatch({ type: TC_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: TC_Fail, payload: err });
    });
};
