
const StudentRegisterReq = 'StudentRegister/Req';
const StudentRegisterSuc = 'StudentRegister/Suc';
const StudentRegisterFail = 'StudentRegister/Fail';

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

  const StudentLoginReq = 'StudentLogin/Req';
const StudentLoginSuc = 'StudentLogin/Suc';
const StudentLoginFail = 'StudentLogin/Fail';

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