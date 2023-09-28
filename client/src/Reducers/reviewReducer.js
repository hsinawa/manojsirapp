const Rev_Req = "Rev_Req";
const Rev_Suc = "Rev_Suc";
const Rev_Fail = "Rev_Fail";

export const ReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case `${Rev_Req}`:
      return {
        ...state,
        loading: true,
      };

    case `${Rev_Suc}`:
      return {
        ...state,
        loading: false,
      };

    case `${Rev_Fail}`:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export const GetAllReviewReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case Rev_Req:
      return {
        ...state,
        loadingReviews: true,
      };

    case Rev_Suc:
      return {
        ...state,
        loadingReviews: false,
        reviews: action.payload,
      };

    case Rev_Fail:
      return {
        ...state,
        loadingReviews: true,
        errorReviews: false,
      };

    default:
      return state;
  }
};

const ValidRev_Req = "ValidRev_Req";
const ValidRev_Suc = "ValidRev_Suc";
const ValidRev_Fail = "ValidRev_Fail";

export const GetValidReviewReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case ValidRev_Req:
      return {
        ...state,
        loadingReviews: true,
      };

    case ValidRev_Suc:
      return {
        ...state,
        loadingReviews: false,
        reviews: action.payload,
      };

    case ValidRev_Fail:
      return {
        ...state,
        loadingReviews: true,
        errorReviews: false,
      };

    default:
      return state;
  }
};



export const ReviewDescriptionReducer = (state = {  }, action) => {
  switch (action.type) {
    case Rev_Req:
      return {
        ...state,
        loading: true,
      };

    case Rev_Suc:
      return {
        ...state,
        loading: false,
        reviews: action.payload,
      };

    case Rev_Fail:
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};