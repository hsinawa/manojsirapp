const Test_Req = "Test_Req";
const Test_Suc = "Test_Suc";
const Test_Fail = "Test_Fail";
const Test_API = "/api/test";

export const AddTestReducer = (state = {}, action) => {
  switch (action.type) {
    case `${Test_Req}`:
      return {
        ...state,
        loadingtest: true,
      };

    case `${Test_Suc}`:
      return {
        ...state,
        loadingtest: false,
        test: action.payload,
      };

    case `${Test_Fail}`:
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

const GetTest_Req = "GetTest_Req";
const GetTest_Suc = "GetTest_Suc";
const GetTest_Fail = "GetTest_Fail";

export const GetAllTestReducer = (state = { tests: [] }, action) => {
  switch (action.type) {
    case GetTest_Req:
      return {
        ...state,
        loading: true,
      };

    case GetTest_Suc:
      return {
        ...state,
        loading: false,
        tests: action.payload,
      };

    case GetTest_Fail:
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};



export const GetDescriptionTestsReducer = (state = {  }, action) => {
  switch (action.type) {
    case GetTest_Req:
      return {
        ...state,
        loading: true,
      };

    case GetTest_Suc:
      return {
        ...state,
        loading: false,
        tests: action.payload,
      };

    case GetTest_Fail:
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};