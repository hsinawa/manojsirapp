const TC_Req = "TC_Req";
const TC_Suc = "TC_Suc";
const TC_Fail = "TC_Fail";
const TC_API = "/api/trialclass";

export const PostTrailClassReducer = (state = {}, action) => {
  switch (action.type) {
    case `${TC_Req}`:
      return {
        ...state,
        loading: true,
      };

    case `${TC_Suc}`:
      return {
        ...state,
        loading: false,
        trials: action.payload,
      };

    case `${TC_Fail}`:
      return {
        ...state,
        loading: false,
        error: true,
        trails: action.payload,
      };

    default:
      return state;
  }
};

export const GetAllTrialClassReducer = (state = { trials: [] }, action) => {
  switch (action.type) {
    case TC_Req:
      return {
        ...state,
        loading: true,
      };

    case TC_Suc:
      return {
        ...state,
        loading: false,
        trials: action.payload,
      };

    case TC_Fail:
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};
