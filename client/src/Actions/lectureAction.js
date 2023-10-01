import axios from "axios";

const Lecture_Req = "Lecture_Req";
const Lecture_Suc = "Lecture_Suc";
const Lecture_Fail = "Lecture_Fail";
const Lecture_API = "/api/lecture";

export const LecturesAddAction = (data) => (dispatch) => {
  dispatch({ type: Lecture_Req });
  axios
    .post(`${Lecture_API}/addTest`, data)
    .then((res) => {
      dispatch({ type: Lecture_Suc });
      window.location.href = "/admin/lectures";
    })
    .catch((err) => {
      dispatch({ type: Lecture_Fail, payload: err });

      window.location.href = "/error";
    });
};

const GetLecture_Req = "GetLecture_Req";
const GetLecture_Suc = "GetLecture_Suc";
const GetLecture_Fail = "GetLecture_Fail";

export const GetALLLecturesClassAction = ({stand}) => (dispatch) => {
  dispatch({ type: GetLecture_Req });
  axios
    .post(`${Lecture_API}/getall`,{stand})
    .then((res) => {
      dispatch({ type: GetLecture_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GetLecture_Fail, payload: err });

      window.location.href = "/error";
    });
};

const UploadLecture_Req = "UploadLecture_Req";
const UploadLecture_Suc = "UploadLecture_Suc";
const UploadLecture_Fail = "UploadLecture_Fail";

export const AddNotesAction = ({reportdata}) => (dispatch)=>{
  dispatch({ type: UploadLecture_Req });
 
  axios
    .post(`${Lecture_API}/addNotes`, {reportdata})
    .then((res) => {
      dispatch({ type: UploadLecture_Suc });
      alert("Uploaded !");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: UploadLecture_Fail, payload: err });
      window.location.href = "/error";
    });
};



export const UploadAssignmentAction = ({reportdata}) => (dispatch)=>{
  dispatch({ type: UploadLecture_Req });
 
  axios
    .post(`${Lecture_API}/addAssignment`, {reportdata})
    .then((res) => {
      dispatch({ type: UploadLecture_Suc });
      alert("Uploaded !");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: UploadLecture_Fail, payload: err });
      window.location.href = "/error";
    });
};

const UpdateLecture_Req = 'UpdateLecture_Req'
const UpdateLecture_Suc = 'UpdateLecture_Suc'
const UpdateLecture_Fail = 'UpdateLecture_Fail'

export const UpdateLectureStatusAction =
  ({ AccountStatus, testid }) =>
  (dispatch) => {
    dispatch({ type: UpdateLecture_Req });
    axios
      .post(`${Lecture_API}/updateStatus`, { AccountStatus, testid })
      .then((res) => {
        dispatch({ type: UpdateLecture_Suc, payload: res.data });
        alert("Updated");
        window.location.reload();
      })
      .catch((err) => {
        dispatch({ type: UpdateLecture_Fail, payload: err });
      });
  };
  