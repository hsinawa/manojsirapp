const Result_Req = "Result_Req";
const Result_Suc = "Result_Suc";
const Result_Fail = "Result_Fail";
const Result_API = "/api/results";

export const GetAllresultReducer = (state = { results: [] }, action) => {
    switch (action.type) {
      case Result_Req:
        return {
          ...state,
          loading: true,
        };
  
      case Result_Suc:
        return {
          ...state,
          loading: false,
          results: action.payload,
        };
  
      case Result_Fail:
        return {
          ...state,
          loading: true,
          error: false,
        };
  
      default:
        return state;
    }
  };