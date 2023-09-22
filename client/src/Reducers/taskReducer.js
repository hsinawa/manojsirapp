const Task_Req = "Task_Req";
const Task_Suc = "Task_Suc";
const Task_Fail = "Task_Fail";

export const AddTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case `${Task_Req}`:
      return {
        ...state,
        loading: true,
      };

    case `${Task_Suc}`:
      return {
        ...state,
        loading: false,
        Blogdata: action.payload,
      };

    case `${Task_Fail}`:
      return {
        ...state,
        loading: false,
        error: true,
        Blogdata: action.payload,
      };

    default:
      return state;
  }
};

export const GetTaskReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case Task_Req:
      return {
        ...state,
        loadingtask: true,
      };

    case Task_Suc:
      return {
        ...state,
        loadingtask: false,
        tasks: action.payload,
      };

    case Task_Fail:
      return {
        ...state,
        loadingtask: true,
        error: false,
      };

    default:
      return state;
  }
};
