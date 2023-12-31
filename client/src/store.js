import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { PostEnqReducer, GetAllEnqReducer } from "./Reducers/messageReducer";
import { LoginAdminReducer } from "./Reducers/adminReducer";
import {
  PostTrailClassReducer,
  GetAllTrialClassReducer,
} from "./Reducers/trialClassReducer";
import { AddTaskReducer, GetTaskReducer } from "./Reducers/taskReducer";
import { GetAllresultReducer } from "./Reducers/resultReducer";
import {
  RegisterStudentReducer,
  StudentLoginReducer,
  GetAllStudentsReducer,
  GetDescriptionStudentsReducer,
  LogoutStudentReducer,
  UpdatePasswordStudentReducer
} from "./Reducers/studentReducer";
import {
  ReviewReducer,
  GetValidReviewReducer,
  GetAllReviewReducer,
  ReviewDescriptionReducer,
} from "./Reducers/reviewReducer";

import {
  AddTestReducer,
  GetAllTestReducer,
  GetDescriptionTestsReducer,
} from "./Reducers/testReducer";

import {AddLectureReducer, GetAllLectureReducer} from './Reducers/lectureReducer'

const FinalReducer = combineReducers({
  GetAllEnqReducer: GetAllEnqReducer,
  PostEnqReducer: PostEnqReducer,
  PostTrailClassReducer: PostTrailClassReducer,
  GetAllTrialClassReducer: GetAllTrialClassReducer,
  LoginAdminReducer: LoginAdminReducer,
  AddTaskReducer: AddTaskReducer,
  GetTaskReducer: GetTaskReducer,
  GetAllresultReducer: GetAllresultReducer,
  RegisterStudentReducer: RegisterStudentReducer,
  StudentLoginReducer: StudentLoginReducer,
  GetAllStudentsReducer: GetAllStudentsReducer,
  GetDescriptionStudentsReducer: GetDescriptionStudentsReducer,
  ReviewReducer: ReviewReducer,
  GetValidReviewReducer: GetValidReviewReducer,
  GetAllReviewReducer: GetAllReviewReducer,
  ReviewDescriptionReducer: ReviewDescriptionReducer,
  AddTestReducer: AddTestReducer,
  GetAllTestReducer: GetAllTestReducer,
  GetDescriptionTestsReducer: GetDescriptionTestsReducer,
  AddLectureReducer:AddLectureReducer,
  GetAllLectureReducer:GetAllLectureReducer,
  LogoutStudentReducer:LogoutStudentReducer,
  UpdatePasswordStudentReducer:UpdatePasswordStudentReducer
});

const InitialState = {};

let store;

if (process.env.NODE_ENV === "production") {
  store = createStore(FinalReducer, InitialState, applyMiddleware(thunk));
} else {
  store = createStore(
    FinalReducer,
    InitialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export default store;
