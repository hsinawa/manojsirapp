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
