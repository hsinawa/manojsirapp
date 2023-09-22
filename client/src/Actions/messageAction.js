import axios from "axios";

const Enq_Req = "Enq_Req";
const Enq_Suc = "Enq_Suc";
const Enq_Fail = "Enq_Fail";
const Enq_API = "/api/message";

export const messageContactAction = (data) => (dispatch) => {
  dispatch({ type: Enq_Req });
  axios
    .post(`${Enq_API}/postEnq`, data)
    .then((res) => {
      dispatch({ type: Enq_Suc });
      window.location.href = "/success";
    })
    .catch((err) => {
      dispatch({ type: Enq_Fail, payload: err });

      window.location.href = "/error";
    });
};

export const GetAllEnquiries = () => (dispatch) => {
  dispatch({ type: Enq_Req });
  axios
    .get(`${Enq_API}/getall`)
    .then((res) => {
      dispatch({ type: Enq_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: Enq_Fail, payload: err });
    });
};
