
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