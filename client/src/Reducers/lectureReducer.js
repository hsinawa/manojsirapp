const Lecture_Req = "Lecture_Req";
const Lecture_Suc = "Lecture_Suc";
const Lecture_Fail = "Lecture_Fail";

export const AddLectureReducer = (state = {}, action) => {
  switch (action.type) {
    case `${Lecture_Req}`:
      return {
        ...state,
        loadingtest: true,
      };

    case `${Lecture_Suc}`:
      return {
        ...state,
        loadingtest: false,
        test: action.payload,
      };

    case `${Lecture_Fail}`:
      return {
        ...state,
        loadingtest: false,
        error: true,
        test: action.payload,
      };

    default:
      return state;
  }
};

const GetLecture_Req = "GetLecture_Req";
const GetLecture_Suc = "GetLecture_Suc";
const GetLecture_Fail = "GetLecture_Fail";

export const GetAllLectureReducer = (state = { lectures: [] }, action) => {
  switch (action.type) {
    case GetLecture_Req:
      return {
        ...state,
        loading: true,
      };

    case GetLecture_Suc:
      return {
        ...state,
        loading: false,
        lectures: action.payload,
      };

    case GetLecture_Fail:
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};
