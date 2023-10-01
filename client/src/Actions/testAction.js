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
      window.location.href = "/admin/checktest";
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
      dispatch({ type: GetTest_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GetTest_Fail, payload: err });

      window.location.href = "/error";
    });
};

const UploadTest_Req = "UploadTest_Req";
const UploadTest_Suc = "UploadTest_Suc";
const UploadTest_Fail = "UploadTest_Fail";

export const AddQuestionPaperAction = ({reportdata}) => (dispatch)=>{
  dispatch({ type: UploadTest_Req });
 
  axios
    .post(`${Test_API}/addQuestionPaper`, {reportdata})
    .then((res) => {
      dispatch({ type: UploadTest_Suc });
      alert("Uploaded !");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: UploadTest_Fail, payload: err });
      window.location.href = "/error";
    });
};



export const AddAnswerPaperAction = ({reportdata}) => (dispatch)=>{
  dispatch({ type: UploadTest_Req });
 
  axios
    .post(`${Test_API}/addAnswerPaper`, {reportdata})
    .then((res) => {
      dispatch({ type: UploadTest_Suc });
      alert("Uploaded !");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: UploadTest_Fail, payload: err });
      window.location.href = "/error";
    });
};

export const GetTestDescriptionAction =
  ({ testid }) =>
  (dispatch) => {
    dispatch({ type: GetTest_Req });

    axios
      .post(`${Test_API}/GetDescription`, { testid })
      .then((res) => {
        dispatch({ type: GetTest_Suc, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GetTest_Fail, payload: err });
      });
  };

const UpdateTest_Req = 'UpdateTest_Req'
const UpdateTest_Suc = 'UpdateTest_Suc'
const UpdateTest_Fail = 'UpdateTest_Fail'

export const UpdateTestStatusAction =
  ({ AccountStatus, testid }) =>
  (dispatch) => {
    dispatch({ type: UpdateTest_Req });
    axios
      .post(`${Test_API}/updateStatus`, { AccountStatus, testid })
      .then((res) => {
        dispatch({ type: UpdateTest_Suc, payload: res.data });
        alert("Updated");
        window.location.reload();
      })
      .catch((err) => {
        dispatch({ type: UpdateTest_Fail, payload: err });
      });
  };


const UpdateMarks_Req = 'UpdateMarks_Req'
const UpdateMarks_Suc = 'UpdateMarks_Suc'
const UpdateMarks_Fail = 'UpdateMarks_Fail'  
export const UpdateMarksAction = ({data, tid})=>(dispatch) =>{
  dispatch({ type: UpdateMarks_Req });
  axios
  .post(`${Test_API}/addResult`, {data, tid})
  .then((res) => {
    dispatch({ type: UpdateMarks_Suc, payload: res.data });
    alert("Updated");
   // window.location.reload();
  })
  .catch((err) => {
    dispatch({ type: UpdateMarks_Fail, payload: err });
  });

}  