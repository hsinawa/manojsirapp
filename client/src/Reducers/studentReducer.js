const StudentRegisterReq = "StudentRegister/Req";
const StudentRegisterSuc = "StudentRegister/Suc";
const StudentRegisterFail = "StudentRegister/Fail";

export const RegisterStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case StudentRegisterReq:
      return {
        ...state,
        loading: true,
      };

    case StudentRegisterSuc:
      return {
        ...state,
        loading: false,
        success: true,
      };

    case StudentRegisterFail:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const StudentLoginReq = "StudentLogin/Req";
const StudentLoginSuc = "StudentLogin/Suc";
const StudentLoginFail = "StudentLogin/Fail";

export const StudentLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case StudentLoginReq:
      return {
        ...state,
        loading: true,
      };

    case StudentLoginSuc:
      return {
        ...state,
        loading: false,
        success: true,
      };

    case StudentLoginFail:
      return {
        ...state,
        loading: false,
        error: "Invalid Credentials",
      };

    case "Student_LogOut":
      return {
        ...state,
      };

    default:
      return state;
  }
};


const StudentGETReq = 'StudentGET/Req';
const StudentGETSuc = 'StudentGET/Suc';
const StudentGETFail = 'StudentGET/Fail';

export const GetAllStudentsReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case StudentGETReq:
      return {
        ...state,
        loading: true,
      };

    case StudentGETSuc:
      return {
        ...state,
        loading: false,
        students: action.payload,
      };

    case StudentGETFail:
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};


export const GetDescriptionStudentsReducer = (state = {  }, action) => {
  switch (action.type) {
    case StudentGETReq:
      return {
        ...state,
        loading: true,
      };

    case StudentGETSuc:
      return {
        ...state,
        loading: false,
        students: action.payload,
      };

    case StudentGETFail:
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return state;
  }
};



const StudentLogout_Req = 'StudentLogout_Req';
const StudentLogout_Suc = 'StudentLogout_Req';
const StudentLogout_Fail = 'StudentLogout_Fail';

export const LogoutStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case StudentLogout_Req:
      return {
        ...state,
        loadingLogOut: true,
      };

    case StudentLogout_Suc:
      return {
        ...state,
        loadingLogOut: false,
        success: true,
      };

    case StudentLogout_Fail:
      return {
        ...state,
        loadingLogOut: false,
        error: action.payload,
      };

    default:
      return state;
  }
};