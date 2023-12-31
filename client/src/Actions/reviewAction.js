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


export const GetAllReviewAction = () => (dispatch) => {
  dispatch({ type: Rev_Req });
  axios
    .get(`${Rev_API}/getall`)
    .then((res) => {
      dispatch({ type: Rev_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: Rev_Fail, payload: err });
    });
};


const ValidRev_Req = "ValidRev_Req";
const ValidRev_Suc = "ValidRev_Suc";
const ValidRev_Fail = "ValidRev_Fail";

export const GetValidReviewAction = () => (dispatch) => {
  dispatch({ type: ValidRev_Req });
  axios
    .get(`${Rev_API}/getvalid`)
    .then((res) => {
      dispatch({ type: ValidRev_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ValidRev_Fail, payload: err });
    });
};



export const ReviewGetDescriptionAction =
  ({ reviewid }) =>
  (dispatch) => {
    dispatch({ type: Rev_Req });

    axios
      .post(`${Rev_API}/GetDescription`, { reviewid })
      .then((res) => {
        dispatch({ type: Rev_Suc, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: Rev_Fail, payload: err });
      });
  };

const UpdateRev_Req = "UpdateRev_Req";
const UpdateRev_Suc = "UpdateRev_Suc";
const UpdateRev_Fail = "UpdateRev_Fail";

export const ReviewStatusUPdateAction = ({AccountStatus,reviewid}) => (dispatch) => {
  dispatch({ type: UpdateRev_Req });
  axios
    .post(`${Rev_API}/updateStatus`, {AccountStatus,reviewid})
    .then((res) => {
      dispatch({ type: UpdateRev_Suc, payload: res.data });
      alert('Updated')
      window.location.href='/admin/reviews'
    })
    .catch((err) => {
      dispatch({ type: UpdateRev_Fail, payload: err });
    });
};